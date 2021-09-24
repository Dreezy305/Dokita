import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Patient from "./components/patient";
import Contact from "./components/contact";
import Services from "./components/services";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import Layout from "./dashboard/layout";

function App() {
  const RoutesList = [
    { id: 1, Component: Home, path: "/", title: "Home" },
    { id: 2, Component: About, path: "/about", title: "About" },
    { id: 3, Component: Patient, path: "/patient", title: "Patient" },
    { id: 4, Component: Services, path: "/services", title: "Services" },
    { id: 5, Component: Blog, path: "/blog", title: "Blog" },
    { id: 6, Component: Contact, path: "/contact", title: "Contact" },
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Layout} />
          <div>
            <NavBar />
            {RoutesList.map((Routes) => (
              <Route
                exact
                key={Routes.id}
                path={Routes.path}
                render={(props) => {
                  return <Routes.Component {...props} />;
                }}
              />
            ))}
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
