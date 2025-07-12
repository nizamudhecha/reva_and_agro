import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        <div>
          <img src={assets.logo} alt="Company Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            GOOD FOR YOU, GOOD FOR US, <br />
            GOOD NATURE FOR YOU FROM REVA
          </p>
          <p className="py-3 text-sm ">
            Copyright 2025@ ravaagroandfisheries.com - All Right Reserved.
          </p>
        </div>
        <div className="mr-65">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="mr-10">
          <p className="text-x1 font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-7572876157</li>
            <li>+91-9998837711</li>
            <li>inquire@revaagroandfisheries.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="mt-2 border-gray-300" />
      </div>
    </div>
  );
};

export default Footer;
