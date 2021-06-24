import React from "react";
import Header from "./Header";

function Layout(props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
