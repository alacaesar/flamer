import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => {
  let options = [
    { title: "Select", value: "0" },
    { title: "String", value: "string" },
    { title: "Array", value: "array" },
    { title: "Integer", value: "integer" },
    { title: "Boolean", value: "boolean" }
  ];
  let margin = (value.n - 1) * 30;

  return (
    <li style={{ marginLeft: margin + "px" }} className="draggable">
      {value.title}
      {SelectBox(options, value.attribute.data_type)}
      <i
        style={{ color: "#4069FE", fontSize: 12 }}
        className="iconoo-plusCircle"
      />
      <i
        style={{ color: "#d8d8d8", fontSize: 14, transform: "rotate(90deg)" }}
        className="iconoo-ellipsis"
      />
    </li>
  );
});

const SelectBox = (options, selected) => {
  return (
    <select defaultValue={selected}>
      {options.map((item, index) => (
        <option key={`item-${index}`} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem
          disabled={true}
          key={`item-${index}`}
          index={index}
          value={value}
        />
      ))}
    </ul>
  );
});

class Main extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    var result = require("../../data/design.json");

    this._loop(result);

    this.setState({
      items: this._array
    });
  }

  _array = [];

  _loop = (obj, level = 0) => {
    var n = 1;
    n += level;
    for (var key in obj) {
      var value = obj[key];
      if (typeof value === "object") {
        if (key !== "attribute") this._loop(value, n);
      } else {
        obj.n = n / 2;
        this._array.push(obj);
      }
    }
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

// filter state
function mapStateToProps(state) {
  return state.project;
}

export default connect(mapStateToProps)(Main);
