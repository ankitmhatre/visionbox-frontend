import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import GenericNotFound from "./partials/GenericNotFound";
import ResearchAndDevelopment from "./partials/ResearchAndDevelopment";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <ResearchAndDevelopment />
        </Route>
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
