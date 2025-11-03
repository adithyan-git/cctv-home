import React, { useState } from "react";
import accordionarrow from "../assets/images/accordionarrow.webp";
import accordiontoparrow from "../assets/images/accordiontoparrow.webp";

const Accordion = ({ service }) => {
  const [show, setShow] = useState(false);

  const closeDetails = () => {
    setShow(false);
  };

  const showDetails = () => {
    setShow(true);
  };

  return (
    <div className=" w-full  px-6 " key={service.id}>
      <div>
        <div className=" flex justify-between items-center py-[27px]">
          <div className="flex items-center gap-20 max-[769px]:gap-10 max-[426px]:gap-2.5">
            <h6
              data-aos="zoom-in"
              className="max-[426px]:text-[15px] font-[Raleway] font-normal text-[28px] text-white"
            >
              0{service.id}
            </h6>
            <p
              data-aos="zoom-in"
              className="max-[426px]:text-[15px] font-[Raleway] font-normal text-[28px] bg-[linear-gradient(to_right,#FFFFFF,gray_100%)] bg-clip-text text-transparent"
            >
              {service.title}
            </p>
          </div>
          <div>
            <div className="max-[376px]:w-[35px] max-[376px]:h-[35px] w-[50px] h-[50px] rounded-[25px] bg-linear-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] p-[1px] cursor-pointer hover:bg-linear-to-r hover:from-[#00F0FF] hover:via-[#5200FF] hover:to-[#FF2DF7] transition-all duration-500">
              <div className="w-full h-full rounded-[25px] bg-black flex justify-center items-center">
                {show ? (
                  <img
                    src={accordiontoparrow}
                    alt="img"
                    className="object-cover "
                    onClick={() => closeDetails()}
                  />
                ) : (
                  <img
                    src={accordionarrow}
                    alt="img"
                    className="object-cover "
                    onClick={() => showDetails()}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {show ? (
          <div className="mt-3 ml-6 mb-6">
            <div className="py-2.5 mb-3">
              <p
                data-aos="zoom-in"
                className="max-[426px]:text-[13px] max-w-[795px] w-[full]  font-[Raleway] font-normal text-[18px] text-[#9C9C9C] border-l border-[#9C9C9C] pl-4 "
              >
                {service.description}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-[426px]:grid-cols-1 ">
              {service.serviceItems.map((item) => (
                <div
                  className="cursor-pointer bg-cover bg-no-repeat h-[200px] relative after:content-[''] after:absolute after:w-full after:h-full after:bg-[#00000099] after:opacity-60 after:top-0 after:left-0 "
                  style={{ backgroundImage: `url(${item.image})` }}
                  key={item.id}
                >
                  <div className="w-full h-full flex flex-col justify-center items-center z-10 relative">
                    <p
                      data-aos="zoom-in"
                      className="max-[769px]:text-center  font-[Raleway] font-medium text-[18px] text-[#FFFFFF]"
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <hr className="h-[1px] border-0 bg-[linear-gradient(to_right,#FF2DF7,#5200FF,#00F0FF)]" />
      </div>
    </div>
  );
};

export default Accordion;
