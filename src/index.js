import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Bikesharing from "./views/components/Bikesharing.js";
import Details from "./views/components/Details.js";
import Contacts from "./views/components/Contacts.js";

var hist = createBrowserHistory({basename:'2020/bikesharing/#/'});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/details" component={Details} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/" component={Bikesharing} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
