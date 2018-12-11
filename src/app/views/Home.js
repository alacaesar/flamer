import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Main = props => {
  let { projects } = props;
  let _projects = [];

  if (projects.length > 0)
    projects.forEach((element, index) => {
      _projects.push(
        <li key={"p-" + index}>
          <h4>{element.name}</h4>
          <span>{element.services}</span>
          <Link to={element.slug}>Open</Link>
        </li>
      );
    });

  return (
    <div className="page-inside projects">
      <h1>Design how to get your data.</h1>
      <p>
        You can start right away and follow the steps or check a quick tutorial{" "}
        <a href="https://minus99.com">here</a>.
      </p>
      <div className="projects-list">
        <span>Your Projects</span>
        <ul>
          <li className="projects add-button">
            <button>Add Project</button>
          </li>
          {_projects}
        </ul>
      </div>
    </div>
  );
};

// filter state
function mapStateToProps(state) {
  return state.general;
}

export default connect(mapStateToProps)(Main);
