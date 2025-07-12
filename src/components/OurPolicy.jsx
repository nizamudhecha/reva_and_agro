import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700:">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Export Documentation</p>
        <p className="text-gray-400">We handle export documents smoothly. </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Quality Control</p>
        <p className="text-gray-400">We ensure secure packaging & freshness.</p>
      </div>
      <a
        href="https://wa.me/917572876157" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        <div className="cursor-pointer text-center hover:shadow-lg p-4 rounded transition-all duration-200">
          <img
            src={assets.support_img}
            className="w-12 m-auto mb-3"
            alt="Support Icon"
          />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400 text-sm">
            We provide 24/7 customer support
          </p>
        </div>
      </a>
    </div>
  );
};

export default OurPolicy;
