import React from "react";
import star from "../assets/images/star.webp";
import arrowright from "../assets/images/arrowright.webp";

const LeftImageRightDetails = ({ future }) => {
  return (
    <div className="pb-11 px-5 " key={future.id}>
      <div className="max-w-[1040px] mx-auto w-full grid grid-cols-2 gap-[34px] max-[375px]:gap-3.5 max-md:grid-cols-1">
        <div className="overflow-hidden">
          <img
            src={future.image}
            alt="img"
            className="max-[769px]:h-[400px] max-[426px]:h-60 w-full h-[512px] object-cover rounded-3xl  max-[768px]:h-[350px]"
          />
        </div>
        <div className="flex flex-col items-center ">
          <div className="mb-6 max-[376px]:mb-2.5">
            <h5
              data-aos="zoom-in"
              className="max-[376px]:mb-0.5 max-[376px]:text-[25px] font-[Radio Canada] font-normal text-[32px] bg-[linear-gradient(to_right,#FF2DF7,#5200FF_52%,#00F0FF_104%)] bg-clip-text text-transparent mb-3"
            >
              {future.title}
            </h5>
            <h6
              data-aos="zoom-in"
              className="max-[376px]:text-center font-[Radio Canada] font-normal max-[376px]:text-[20px] text-2xl text-[#FFFFFF]"
            >
              {future.subtitle}
            </h6>
          </div>
          <div className="max-w-[462px] w-full ">
            <p
              data-aos="zoom-in"
              className="max-[376px]:text-center max-[426px]:text-[12px] font-[Poppins] font-normal text-[16px] text-[#FFFFFF]"
            >
              {future.description}
            </p>
          </div>
          <hr className="border-0 h-[1px] max-[376px]:mt-3.5 w-full bg-[linear-gradient(to_right,#FF2DF7,#5200FF,#00F0FF)] mt-[34px] mb-3.5" />
          <div className="flex w-fit gap-2.5">
            <img
              src={star}
              alt="img"
              className="w-5 h-5 max-[376px]:h-3.5 max-[376px]:w-3.5"
            />
            <img
              src={star}
              alt="img"
              className="w-5 h-5 max-[376px]:h-3.5 max-[376px]:w-3.5"
            />
            <img
              src={star}
              alt="img"
              className="w-5 h-5 max-[376px]:h-3.5 max-[376px]:w-3.5"
            />
            <img
              src={star}
              alt="img"
              className="w-5 h-5 max-[376px]:h-3.5 max-[376px]:w-3.5"
            />
            <img
              src={star}
              alt="img"
              className="w-5 h-5 max-[376px]:h-3.5 max-[376px]:w-3.5"
            />
          </div>
          <div className="max-[376px]:mt-4 w-fit p-[1px] h-fit  bg-[linear-gradient(to_right,#FF2DF7,#5200FF,#00F0FF)] rounded-3xl mt-6">
            <button className="max-[376px]:w-[140px] max-[376px]:h-[33px] max-[376px]:text-[13px] bg-[#044031] cursor-pointer hover:bg-[linear-gradient(120deg,#FF2DF7,#5200FF,#00F0FF)] flex justify-center gap-5  w-[218.6595458984375px] h-11 items-center font-[Radio Canada] font-normal text-[19.41px] text-[#FFFFFF] rounded-3xl ">
              Learn more <img src={arrowright} alt="img" className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageRightDetails;
