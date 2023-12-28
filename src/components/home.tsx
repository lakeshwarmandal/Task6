import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">
            Welcome to Raunak's Portfolio
          </h1>
          <p className="text-gray-700 mb-6">
            Hello! I'm Raunak Joshi, a passionate and motivated student with a
            keen interest in web development, specifically in the realm of
            React.js.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Skills</h2>
            <ul className="list-disc list-inside">
              <li>
                React.js: Building efficient and reusable user interfaces.
              </li>
              <li>JavaScript: Proficient in ES6+.</li>
              <li>
                HTML5 & CSS3: Crafting responsive and visually appealing
                designs.
              </li>
              <li>
                Backend App Development: Building enterprise applications using
                Java and Spring Boots
              </li>
              <li>Version Control: Experienced with Git and GitHub.</li>
              <li>Cloud Services: </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-blue-500">Interests</h2>
            <p className="text-gray-700">
              Apart from coding, I enjoy exploring new technologies, attending
              tech meetups, and staying up-to-date with the latest trends in the
              web development world.
            </p>
          </div>

          <div className="mt-8">
            <p>
              Connect with me on{" "}
              <a href="[Your LinkedIn Profile]" className="text-blue-500">
                LinkedIn
              </a>{" "}
              | Follow me on{" "}
              <a href="[Your GitHub Profile]" className="text-blue-500">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
