import React, { Component } from "react";
import { connect } from "react-redux";
import { SortableContainer, arrayMove } from "react-sortable-hoc";

import { Accordion, DesignItem } from "../components";

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <DesignItem
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

    this._array.push({ title: "Product", root: true });
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
    return (
      <Accordion head={<h4>Product</h4>}>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </Accordion>
    );
  }
}

// filter state
function mapStateToProps(state) {
  return state.project;
}

export default connect(mapStateToProps)(Main);
