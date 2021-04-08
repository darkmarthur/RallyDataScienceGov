import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <SimpleReactLightbox>
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route
              basename={process.env.PUBLIC_URL}
              path="/"
              render={(props) => <AdminLayout {...props} />}
            />
            {/* <Route path="/rtl" render={(props) => <RTLLayout {...props} />} /> */}
            {/* <Redirect from="/" to="/inicio" /> */}
          </Switch>
        </HashRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  </SimpleReactLightbox>,
  document.getElementById("root")
);
