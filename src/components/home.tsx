import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import studentPortfolioData from "../StudentPortfolio.json";

const Home = () => {
  const { student, projects, contact } = studentPortfolioData;

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">
            Welcome to Raunak's Portfolio
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Skills</h2>
            <ul className="list-disc list-inside">
              <h1>Welcome to {student.name}'s Portfolio</h1>
              <p>{student.introduction}</p>

              <h2>Skills</h2>
              {student.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-blue-500">Interests</h2>
            <p className="text-gray-700">
              <ul>
                {student.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Home;
