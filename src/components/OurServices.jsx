import React from "react";
import Accordion from "./Accordion";
import { serviceDetails } from "../futuresDetails";

const OurServices = () => {
  return (
    <div className="max-[376px]:pt-10  pt-[72px] px-5">
      <div className="max-w-[1040px] w-full mx-auto pb-12">
        <div className="flex flex-col items-center mb-16">
          <h6
            data-aos="zoom-in"
            className="font-[Radio Canada] font-normal text-[18px] text-[#9C9C9C] text-center"
          >
            Our Services
          </h6>
          <p
            data-aos="zoom-in"
            className="max-[426px]:text-[25px] font-[Radio Canada] font-normal text-[28px] text-[#FFFFFF] max-w-[737px] w-full text-center"
          >
            Your Aspiration, Our Expertise: Tailored Services for Unmatched
            Excellence.
          </p>
        </div>
        {serviceDetails.map((service) => (
          <Accordion service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
