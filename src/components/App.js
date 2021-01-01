import React from "react";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path='/signup' component={Signup}/>
                {/* <Route path='/login' component={Login}/> */}
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
    </>
  );
}
