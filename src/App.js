import React, { Component } from "react";
import { Layout } from "./app/components";
import { Home, Projects, Billing } from "./app/views";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/reducers/store";
import "./css/styles.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/billing" component={Billing} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
