import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import NavBar from "./components/NavBar";

import { Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
