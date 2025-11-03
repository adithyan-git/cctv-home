import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.webp";
import cross from "../assets/images/cross.webp";

const Header = () => {
  const [show, setShow] = useState(false);

  const showNav = () => {
    setShow(true);
  };

  const closeNav = () => {
    setShow(false);
  };
  return (
    <div className="max-[992px]:top-6 max-xl:px-5 max-w-[1040px] w-full h-[72px] mx-auto flex justify-between fixed left-1/2 -translate-x-1/2 items-center top-[72px] z-30">
      <div>
        <span className="max-[426px]:text-2xl font-normal font-[Poppins] text-[#F9F9F9] text-[40px] cursor-pointer">
          Sacrosys
        </span>
      </div>
      <div className="max-[992px]:hidden">
        <nav className=" bg-[#B4FFD73D] h-[72px] w-[483px]  flex items-center rounded-xl">
          <ul className="flex justify-around w-full items-center ">
            <li>
              <a
                as={Link}
                to="/"
                className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white transform transition-all duration-300 cursor-pointer"
              >
                Products
              </a>
            </li>
            <li>
              <a
                as={Link}
                to="/"
                className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                as={Link}
                to="/"
                className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                as={Link}
                to="/"
                className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
              >
                Help
              </a>
            </li>
            <a
              as={Link}
              to="/"
              className="max-[992px]:w-full cursor-pointer font-normal font-[Poppins] text-white text-[18px] w-[98px] h-[51px] bg-[#00B597] hover:bg-[#03967e] transform transition-all duration-300 rounded-xl flex justify-center items-center"
            >
              Contact
            </a>
          </ul>
        </nav>
      </div>
      {show ? (
        <div className="min-[992px]:hidden max-[992px]:absolute max-[992px]:right-5 max-[992px]:top-[60px]">
          <nav className="max-[992px]:h-fit max-[992px]:w-40 bg-[#B4FFD73D] h-[72px] w-[483px]  flex items-center rounded-xl">
            <ul className="max-[992px]:gap-4 max-[992px]:py-2.5 max-[992px]:px-2.5 max-[992px]:flex-col flex justify-around w-full items-center ">
              <li>
                <a
                  as={Link}
                  to="/"
                  className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white transform transition-all duration-300 cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  as={Link}
                  to="/"
                  className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  as={Link}
                  to="/"
                  className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  as={Link}
                  to="/"
                  className="font-normal font-[Poppins] text-[#B5B5B5] text-[18px] hover:text-white cursor-pointer transform transition-all duration-300"
                >
                  Help
                </a>
              </li>
              <a
                as={Link}
                to="/"
                className="max-[992px]:w-full cursor-pointer font-normal font-[Poppins] text-white text-[18px] w-[98px] h-[51px] bg-[#00B597] hover:bg-[#03967e] transform transition-all duration-300 rounded-xl flex justify-center items-center"
              >
                Contact
              </a>
            </ul>
          </nav>
        </div>
      ) : null}
      <div className="min-[992px]:hidden">
        {show ? (
          <img
            src={cross}
            alt="img"
            className="w-[30px] h-[30px] min-[992px]:hidden"
            onClick={() => closeNav()}
          />
        ) : (
          <img
            src={menu}
            alt="img"
            className="w-[30px] h-[30px] min-[992px]:hidden"
            onClick={() => showNav()}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
