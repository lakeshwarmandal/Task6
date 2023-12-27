import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
        <li>
          <Link to="/ProjectsDetails">ProjectDetails</Link>
        </li>
        <li>
          <Link to="/ProjectsShowcase">ProjectShowcase</Link>
        </li>
      </div>
      <h1>This is my home page</h1>
      <div> home page contents</div>
    </div>
  );
};

export default Home;
