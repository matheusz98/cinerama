import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import NavbarItems from "./components/Navbar/NavbarItems";
import Movies from "./pages/Movies/Movies";
import Tv from "./pages/Tv/Tv";
import Home from "./pages/Home/Home";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";
import PersonDetails from "./pages/PersonDetails/PersonDetails";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <NavbarItems isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:media_type/:id" component={Info} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" component={Search} />
        <Route path="/:id" component={PersonDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
