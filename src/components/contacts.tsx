import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="">
      <Navbar />

      <div className="con">
        <div>Jyoti Baskota</div>
        <div>Email</div>
        <div className="a">
          <a href="https://www.github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a href="https://www.Facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
