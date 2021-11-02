import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const context = require.context("./views", true, /\.js$/);
const paths = context.keys();

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {paths.length &&
        paths.map((item) => {
          let RouteComponent = context(item).default;
          let label = item.split("/")[1].slice(2);
          return (
            <Route
              exact
              key={label}
              path={`/${label}`}
              component={RouteComponent}
            />
          );
        })}
    </Switch>
  );
}

export default App;
