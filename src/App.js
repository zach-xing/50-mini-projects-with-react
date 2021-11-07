import React, {useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const context = require.context("./views", true, /\.js$/);
const paths = context.keys();

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname === "/" ? "介绍" : location.pathname.slice(1);
  }, [location.pathname]);

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
