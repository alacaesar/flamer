import React from "react";
import { Header, Footer } from "../components";

const Layout = props => (
  <div className="app">
    <Header />
    <div className="app-body">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
