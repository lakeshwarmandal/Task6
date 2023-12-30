import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import studentPortfolioData from "../StudentPortfolio.json";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { student, projects, contact } = studentPortfolioData;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {" "}
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>{" "}
        <p className="mb-2">
          Email: <span className="text-blue-500">{contact.email}</span>
        </p>{" "}
        <p className="mb-2">
          LinkedIn:{" "}
          <Link to={contact.linkedin} className="text-blue-500 hover:underline">
            {contact.linkedin}
          </Link>
        </p>{" "}
        <p className="mb-2">
          GitHub:{" "}
          <Link to={contact.github} className="text-blue-500 hover:underline">
            {contact.github}
          </Link>
        </p>{" "}
      </div>
    </div>
  );
};
export default Contacts;
