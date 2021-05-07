import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameChanger from "./Components/NameChanger";
import User from "./Components/User";

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={NameChanger} />
          <Route exact path="/listuser" component={User} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
