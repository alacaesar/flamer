import React, { Component } from "react";

class Main extends Component {
  _onChange = event => {
    this.props.callback(event.target.value);
  };
  render() {
    let { options, selected } = this.props;
    return (
      <select onChange={this._onChange} defaultValue={selected}>
        {options.map((item, index) => (
          <option key={`item-${index}`} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    );
  }
}

export default Main;
