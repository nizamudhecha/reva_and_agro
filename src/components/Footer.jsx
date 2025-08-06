import React from "react";
import { assets } from "../assets/assets";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Logo + Slogan */}
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

        {/* Company Links */}
        <div className="mr-65">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Get in Touch + Social Icons */}
        <div className="mr-10">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-4">
            <li>+91-7572876157</li>
            <li>+91-9998837711</li>
            <li>inquire@revaagroandfisheries.com</li>
          </ul>

          {/* Horizontal Social Icons */}
          <div className="flex gap-4 text-2xl text-gray-600">
            <a
              href="https://www.linkedin.com/in/reva-agro-and-fisheries/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/reva__44?igsh=MWFjdGt2OTh6cmF0MA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578837887429"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div>
        <hr className="mt-6 border-gray-300" />
      </div>
    </div>
  );
};

export default Footer;
