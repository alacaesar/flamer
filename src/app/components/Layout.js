import React from "react";
import { Header, Footer, Sidebar } from "../components";

const Layout = props => (
  <div className="app">
    <Header />
    <Sidebar />
    <div className="app-body">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
