import React, { useState } from "react";
import arrow from "../assets/banner/btnarrow.webp";
import banner from "../assets/banner/banner.webp";

const Banner = () => {
  const [moveRight, setMoveRight] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleClick = () => {
    setMoveRight(!moveRight);
    setTimeout(() => {
      setShowRightArrow((prev) => !prev);
    }, 400);
  };
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-no-repeat  w-full h-dvh relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[#00000059] after:to-[#00000069] px-5 "
    >
      <div className="max-w-[1040px] mx-auto  h-screen flex flex-col justify-around z-10 relative">
        <div className="h-screen flex flex-col justify-around pt-48">
          <div className="min-[1500px]:max-w-[652px] max-w-[462px] w-full">
            <h6
              className="max-[376px]:leading-[22px] max-[426px]:text-[17px] max-[768px]:text-[22px] max-md:leading-[30px] font-[Poppins] font-bold text-[30px] min-[1500px]:text-[40px] leading-[40px]  min-[1500px]:leading-[50px]"
              data-aos="zoom-in"
            >
              <span className="bg-[linear-gradient(to_right,#F9F9F9,#05915B_61%,#08F7C3_38%)] bg-clip-text text-transparent">
                Comprehensive CCTV and{" "}
              </span>
              <span className="bg-[linear-gradient(to_right,#08F7C3,#08F7D7)] bg-clip-text text text-transparent">
                Network Solutions Tailored for{" "}
              </span>
              <span className="bg-[linear-gradient(120deg,#F9F9F9,#08F7D7)] bg-clip-text text text-transparent">
                Every Organization
              </span>
            </h6>
            <p
              data-aos="zoom-in"
              className="max-[376px]:mt-1.5 max-[426px]:text-[12px] font-[Poppins] font-normal text-[13px] min-[1500px]:text-[18px] text-[#F9F9F9] mt-5 min-[1500px]:mt-8"
            >
              The top CCTV and networking solutions in Dubai are essential for
              any business owner to consider for their security.
            </p>
            <hr className="border-0 h-[1px] bg-gradient-to-r from-[#2DFF53] via-[#00FFD4] to-[#006233]   mt-[7px]" />
          </div>
          <div className=" w-full flex items-center justify-center ">
            <div className="min-[1500px]:w-[639px] max-[547px]:w-[260px] max-[768px]:w-[400px] max-md:p-2.5 w-[500px] h-fit rounded-[100px] border  border-[#3461FF] bg-[#083F31] p-5 min-[1500px]:p-6">
              <div className="w-full h-fit bg-[#BEF1C9] rounded-[52px] p-2 relative">
                <div
                  className={`w-fit transition-all duration-700 ease-in relative" 
          ${moveRight ? "translate-x-[120%]" : "translate-x-0"}`}
                  onClick={handleClick}
                >
                  <button className=" max-[547px]:h-[30px]  max-[547px]:text-[12px] max-[547px]:w-[101px] max-[768px]:w-[164px] max-[768px]:text-[16px] transition-all duration-700 w-[200px] min-[1500px]:w-[259px] h-[50px] min-[1500px]:h-[77px] rounded-[42px] bg-[linear-gradient(to_right,#08F7B7,#004F1A)] hover:bg-[linear-gradient(to_right,#004F1A,#08F7B7)] cursor-pointer  font-semibold min-[1500px]:text-2xl text-[20px] font-[Radio Canada] text-[#F9F9F9] shadow-[0px_2px_5px_2px] shadow-[#525FF740]">
                    Swipe to Switch
                  </button>
                  {showRightArrow ? (
                    <img
                      src={arrow}
                      alt="img"
                      className="absolute top-1/2 -translate-y-1/2 -right-[60px] rotate-180"
                    />
                  ) : (
                    <img
                      src={arrow}
                      alt="img"
                      className="absolute top-1/2 -translate-y-1/2 -left-[60px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
