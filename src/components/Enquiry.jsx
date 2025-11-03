import React from "react";
import cctv from "../assets/images/cctv.webp";

const Enquiry = () => {
  return (
    <div className=" pt-[46px] px-5">
      <div className="max-w-7xl w-full mx-auto">
        <div
          className="w-full grid grid-cols-12 max-md:grid-cols-2 max-md:h-fit max-md:py-5 h-96 bg-[linear-gradient(to_right,#FF2DF7,#5200FF,#00F0FF)] rounded-3xl px-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="col-span-5 max-md:mb-5">
            <img
              src={cctv}
              alt="img"
              className="w-full h-96 object-cover max-md:h-[250px]"
            />
          </div>
          <div className="col-span-7 flex flex-col justify-center">
            <div className=" h-fit ">
              <p
                data-aos="zoom-in"
                className="max-[426px]:text-[15px] font-[Radio Canada] font-normal text-2xl text-[#FFFFFF] max-w-[429px] w-full mb-6 max-[376px]:mb-3.5  "
              >
                Enhance Your Organization's Security with Extra Eye
              </p>
              <div className="flex gap-6 flex-wrap max-[376px]:gap-2.5 ">
                <div className="w-fit h-fit rounded-[23.3px] bg-[linear-gradient(to_right,#ff2df70d,#5200ff1f,#00f0ff2b)] p-[1px]">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="max-[426px]:text-[13px]  max-[483px]:w-full font-[Montserrat] font-normal text-[19.41px] placeholder:text-[#FFFFFF] w-[377px] h-[50px] bg-[#FFFFFF33] rounded-[23.3px] pl-[34px] focus:outline-0"
                  />
                </div>
                <button className="max-[426px]:text-[13px]  font-[Kulim Park] font-semibold text-[24px]  text-[#FFFFFF] bg-[#000423] w-[126px] h-[50px] rounded-[100px] cursor-pointer hover:bg-white hover:text-black transition-all duration-500">
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
