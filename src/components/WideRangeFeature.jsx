import React from "react";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";

const WideRangeFeature = () => {
  const wideRangeFeatures = [
    {
      id: 1,
      title: "CCTV",
      image: img1,
      description: "Enterprise Business Solutions Internet Leased Line",
    },
    {
      id: 2,
      title: "BROADBAND",
      image: img2,
      description: "Truly Unlimited Internet With Speed Up-To 1000 Mbps !",
    },
    {
      id: 3,
      title: "VOICE",
      image: img3,
      description: "Unlimited Local and STD Calls with Eagle Eye Telephony",
    },
  ];
  return (
    <div className="max-[376px]:pt-10 max-[376px]:pb-10 pt-[72px] pb-[92px] px-5">
      <div className="max-w-[1040px] mx-auto w-full">
        <div className="mb-6">
          <h5
            data-aos="zoom-in"
            className=" max-[376px]:text-[26px] max-[426px]:text-[30px] font-[Radio Canada] font-medium text-[40px]  text-center bg-[linear-gradient(120deg,#FF2DF7,#5200FF,#00F0FF)] bg-clip-text text-transparent "
          >
            The Wide Range Futures
          </h5>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1129px]:grid-cols-2 max-[768px]:grid-cols-1">
          {wideRangeFeatures.map((item) => (
            <div
              className=" h-[244px] bg-[#222222]  flex flex-col justify-around items-center py-6"
              key={item.id}
            >
              <div className="">
                <img src={item.image} alt="img" className="w-14 h-14" />
              </div>

              <h6
                data-aos="zoom-in"
                className="font-[Poppins] font-medium text-[20px] text-[#FFFFFF] text-center "
              >
                {item.title}
              </h6>
              <p
                className="max-[376px]:text-[13px] font-[Poppins]  text-center font-medium text-[16px] text-[#9E9E9E] max-w-[241px] w-full"
                data-aos="zoom-in"
              >
                {item.description}
              </p>

              <div className="">
                <button className="bg-[#00AAB5] transition-all duration-300 w-[92px] h-8 rounded-xl font-[Poppins] font-medium text-[11.74px] text-[#F1F1F1] cursor-pointer hover:bg-[#03c1cf] ">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WideRangeFeature;
