import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
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
