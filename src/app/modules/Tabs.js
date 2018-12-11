import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    items: ["design", "map", "query"],
    selected: "design"
  };

  _onClick = event => {
    this.setState({ selected: event.target.id });
  };

  render() {
    let { items, selected } = this.state;
    let _items = [];

    items.forEach((element, index) =>
      _items.push(
        <li
          className={element === selected ? "selected" : ""}
          key={"p-" + index}
        >
          <Link onClick={this._onClick} id={element} to={"#" + element}>
            {element}
          </Link>
        </li>
      )
    );

    return (
      <div className="tabs">
        <ul>{_items}</ul>
      </div>
    );
  }
}

// filter state
function mapStateToProps(state) {
  return state.project;
}

export default connect(mapStateToProps)(Main);
