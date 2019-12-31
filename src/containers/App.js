import React from "react";
import { Router, Link } from "@reach/router";
import Landing from "./routes/landing/Landing";
import Login from "./routes/login/Login";

const App = () => (
  <div>
    <Link to="/">Landing page</Link>
    <Link to="/login">Login</Link>
    <Router>
      <Landing path="/" />
      <Login path="/login" />
    </Router>
  </div>
);

export default App;
