import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Bhushan Chavan
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a passionate competitive programmer and full stack web developer. I have good ratings across various coding platforms like
            Codechef and Leetcode. Also, I am a full stack web developer and work on the MERN stack.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1ZvQqx8S6-NzG4SaMG09iw159ctauCeAW/view?usp=drivesdk"  
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Get Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full duration-200 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
