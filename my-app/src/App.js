import React, { Component } from 'react';
import MainHeader from "./view/min-head";
import MainFooter from "./view/min-footer";
import RouterIndex from "./router/index";
import "./view/index.css"

class App extends Component {
  render() {
    return <div className="pageWrap">
      <MainHeader/>
      <MainFooter/>
    </div>;
  }
}

export default App;
