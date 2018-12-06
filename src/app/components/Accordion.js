import React, { Component } from "react";

class Main extends Component {
  state = {
    closed: false
  };
  _onClick = () => {
    this.setState({
      closed: !this.state.closed
    });
  };
  render() {
    let state = this.state.closed ? " collapse" : "";
    let label = this.state.closed ? "Show" : "Hide";
    return (
      <div className={"accordion" + state}>
        <div className="accordion-head">
          {this.props.head}
          <button className="inner-right" onClick={this._onClick}>
            {label}
          </button>
        </div>
        <div className="accordion-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Main;
