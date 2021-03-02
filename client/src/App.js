import React from "react";
import Navbar from "./componenets/layouts/Navbar";
import Home from "./componenets/Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/authContext/AuthState";
import Register from "./componenets/Pages/Register";
import Login from "./componenets/Pages/Login ";
import PrivateRoute from "../src/componenets/Pages/routes/PrivateRoute";
import setToken from "../src/utils/setToken";

if (localStorage.token) {
  setToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> 
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
