import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__item">
        Home
      </Link>
      <Link to="/about" className="nav__item">
        About
      </Link>
    </div>
  );
};

export default Navigation;
