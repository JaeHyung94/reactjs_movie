import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
};

export default App;
