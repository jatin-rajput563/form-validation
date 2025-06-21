import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import yellowImg from "../assets/images/png/billie-yellow-img.png";
import profilePic from "../assets/images/png/billie-profile-pic.png";
import { BELLITAGS_DATA } from "../utils/helper";

const Billie = () => {
  const { nameParam } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const buttons = ["All", "Pop", "Rock"];
  const handleButtonClick = (name) => {
    navigate(`/billie/${name}`);
  };

  return (
    <>
      <div className="py-[98px]">
        <div className="max-w-[1140px] mx-auto w-full px-3">
          <div className="flex items-center flex-wrap gap-[10px]">
            <div className="flex gap-[5px] items-center flex-wrap">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(btn)}
                  className="px-[12px] py-[3px] border rounded-[9px] ff-poppins font-medium text-xs leading-[24px] hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                >
                  {btn}
                </button>
              ))}

              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center py-[3px] pl-[12px] pr-[9px] ff-poppins font-medium text-xs leading-[24px] hover:bg-black hover:text-white transition-all duration-300 ease-linear border rounded-[9px] focus:outline-none"
                >
                  More
                  <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      {["Option 1", "Option 2", "Option 3"].map(
                        (option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleButtonClick(option)}
                            className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 ease-linear"
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
              {BELLITAGS_DATA.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(item)}
                  className="py-[5px] px-[10px] rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-linear text-xs"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-black w-full pt-[38px] pl-[48px] pr-[43px] pb-[43px] rounded-[22px] mt-[43px] relative">
            <div className="flex justify-between">
              <p className="font-bold text-5xl leading-[100%] uppercase text-white">
                hit me hard and {nameParam && ` ${nameParam}`}
              </p>
              <img src={yellowImg} alt="yellow-img" />
            </div>
            <div className="flex items-center gap-[26px] absolute bottom-[-16%]">
              <img src={profilePic} alt="profile-pic" />
              <div>
                <p className="font-semibold text-[32px] text-white ff-poppins leading-[42px] ">
                  Billie Eilish
                </p>
                <p className="leading-[100%] text-[#CECECE] ff-Montserrat pt-[5px]">
                  Released May 17, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billie;
