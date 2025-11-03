import React from "react";
import grade from "../assets/images/grade.webp";
import cart from "../assets/images/cart.webp";
import arrowleft from "../assets/images/arrow-left.webp";

import { Link } from "react-router-dom";
import { cameraProducts } from "../futuresDetails";
const ExplorProducts = () => {
  return (
    <div className="px-5">
      <div className="max-w-[1040px] w-full mx-auto">
        <div className="flex justify-center mb-6 max-[376px]:mb-3">
          <h5
            data-aos="zoom-in"
            className="max-[376px]:text-[26px] max-[426px]:text-[30px] font-[Poppins] font-normal text-[40px] bg-[linear-gradient(to_right,#FF2DF7,#5200FF_0%,#00F0FF_195%)] bg-clip-text text-transparent  "
          >
            Explore Products
          </h5>
        </div>
        <div className="flex justify-end mb-[39px] max-[376px]:mb-5">
          <a
            as={Link}
            data-aos="zoom-in"
            className="max-[376px]:text-[13px] font-[Poppins] font-normal text-[16px]  text-[#E6CCFF] cursor-pointer hover:text-[#c5a8df] duration-500"
          >
            Latest Cameras
          </a>
        </div>
        <div className="grid grid-cols-4 gap-[34px] max-[1129px]:grid-cols-2  max-md:grid-cols-1">
          {cameraProducts.map((product) => (
            <div
              className="h-[356px] bg-[#0D0D0D] p-4 rounded-2xl flex flex-col justify-around"
              key={product.id}
            >
              <div className="mb-4 w-full h-fit relative">
                <img
                  src={product.image}
                  alt="img"
                  className=" w-full h-[143px] object-cover rounded-xl"
                />
                <div className="w-fit h-fit p-2.5 bg-[#0000009b] absolute right-0.5 top-0.5 rounded-xl ">
                  <img src={grade} alt="img" className="w-5 h-[19px]" />
                </div>
              </div>
              <div>
                <h6
                  data-aos="zoom-in"
                  className="font-[Radio Canada] font-bold text-[24px] text-[#A5AFC4] mb-3"
                >
                  {product.title}
                </h6>
                <p
                  data-aos="zoom-in"
                  className="font-[Poppins] font-normal text-[12px] text-[#667085] mb-3"
                >
                  {product.description}
                </p>
              </div>
              <div className="flex justify-end mb-3">
                <a
                  as={Link}
                  to="/"
                  data-aos="zoom-in"
                  className="font-[Radio Canada] font-bold text-[12px] text-[#667085] cursor-pointer hover:text-[#A5AFC4] transition-all duration-500"
                >
                  More Details
                </a>
              </div>
              <div className="flex justify-between items-center">
                <button className="font-[Radio Canada] font-semibold text-[16px] text-[#F9F9F9] w-[148px] h-8 bg-[#00AAB5] rounded-[100px] cursor-pointer hover:bg-[#03c1cf] transition-all duration-300 hover:shadow-[0px_-2px_0px_0px_#3461FF]">
                  Buy
                </button>
                <img src={cart} alt="img" className="w-[38px] h-[37px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center  justify-end mt-6">
          <div className="flex w-fit items-center gap-2.5 cursor-pointer">
            <a
              as={Link}
              data-aos="zoom-in"
              className="max-[376px]:text-[13px]  font-[Radio Canada] font-bold text-[16px] text-[#CCFFF3]  hover:text-[#c1e7de]"
            >
              View All
            </a>
            <img src={arrowleft} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorProducts;
