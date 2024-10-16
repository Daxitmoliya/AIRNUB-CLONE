import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/SearchPage/SearchPage";
import Footer from "./components/Home/Footer";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Signup from "./components/Auth/signup"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/signup"> 
            <Signup />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
