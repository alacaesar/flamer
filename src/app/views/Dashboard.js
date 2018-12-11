import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return <div>Projects</div>;
  }
}

// filter state
function mapStateToProps(state) {
  return state.general;
}

export default connect(mapStateToProps)(Main);
