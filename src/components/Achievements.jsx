import React from "react";
import Codechef from "../assets/portfolio/Codechef.jpg";
import Leetcode from "../assets/portfolio/Leetcode.png";
import GFG from "../assets/portfolio/GFG.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Codechef,
      title:"3* on codechef",
      link:"https://www.codechef.com/users/bhushanc2003",
    },
    {
      id: 2,
      src: Leetcode,
      title:"1730 (max) on Leetcode",
      link:"https://leetcode.com/u/bhushanc2003/",
    },
    {
      id: 3,
      src: GFG,
      title:"TCW Intern on GFG",
      link:"https://www.geeksforgeeks.org/user/bhushanc2003/contributions/?type=articles",
    },
  
  ];

  return (
    <div
      name="Achievements"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Achievements
          </p>
          <p className="py-6">Check out some of my Achievements</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title , link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-2xl font-bold text-center">{title}</p>
              <div className="flex items-center justify-center">
                <a href ={link} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Visit Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
