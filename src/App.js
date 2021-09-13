import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  const menuList = [
    { id: 1, title: "HOME", to: "/" },
    { id: 2, title: "ABOUT", to: "/about" },
    { id: 3, title: "PATIENT PORTAL", to: "/patientportal" },
    { id: 4, title: "SERVICES", to: "/services" },
    { id: 5, title: "BLOG", to: "/blog" },
    { id: 6, title: "CONTACT", to: "/contact" },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Route exact path="/about" render={(props) => <About {...props} />} />

          <Route exact path="/blog" render={(props) => <Blog {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
