// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HelloReact extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

class TestReact extends React.Component {
  render() {
    return <h1>Test React!</h1>;
  }
}

class Index extends React.Component {
  render() {
    console.log("aaa");
    return (
      <Router>
        <div>
          <Route exact path="/" component={HelloReact} />
          <Route exact path="/test" component={TestReact} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
