import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => (
  <li className="draggable">
    {value.title}:{value.n}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Main extends Component {
  state = {
    items: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
      "Item 9",
      "Item 10",
      "Item 11",
      "Item 12"
    ]
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
