import React from "react";
import { connect } from "react-redux";

const Main = props => (
  <h1>
    Welcome Home.
    <br />
    this info is from redux: {props.items}
  </h1>
);

// filter state
function mapStateToProps(state) {
  return state.general;
}

export default connect(mapStateToProps)(Main);
