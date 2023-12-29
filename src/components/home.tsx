import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import studentPortfolioData from "../StudentPortfolio.json";

const Home = () => {
  const { student, projects, contact } = studentPortfolioData;

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-0">
        <div className="container mx-auto p-0">
          <div className="grid grid-cols-2 gap-0 h-full">
            {/* Left Column */}
            <div className="bg-white p-4 h-full">
              <h1 className="text-5xl font-semibold mb-4 text-orange-600">
                Welcome to {student.name}'s Portfolio
              </h1>
               {" "}
              <h2 className="text-4xl font-bold mb-2 text-blue-500">
                Introduction
              </h2>
              <ul className="list-disc list-inside">
                <p className="text-4xl font-cursive">{student.introduction}</p> 
                <br />
                <h2 className="text-4xl font-bold mb-2 text-blue-500">
                  Skills
                </h2>
                <h1 className="text-4xl">
                  {student.skills.map((skill, index) => (
                    <li className="text-4xl" key={index}>
                      {skill}
                    </li>
                  ))}
                             {" "}
                </h1>
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-white p-4 h-full">
              <h2 className="text-4xl font-semibold mb-4">
                <img src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img src="https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
