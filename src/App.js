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

function App() {
  const RoutesList = [
    { id: 1, Component: Home, path: "/", title: "Home" },
    { id: 2, Component: About, path: "/about", title: "About" },
    { id: 3, Component: Patient, path: "/patient", title: "Patient" },
    { id: 4, Component: Services, path: "/services", title: "Services" },
    { id: 5, Component: Blog, path: "/blog", title: "Blog" },
    { id: 6, Component: Contact, path: "/contact", title: "Contact" },
    { id: 7, Component: Login, path: "/login", title: "Login" },
    { id: 8, Component: SignUp, path: "/signup", title: "SignUp" },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
