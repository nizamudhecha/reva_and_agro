import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { HashLink } from "react-router-hash-link";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Export Documentation",
      description: "We handle export documents smoothly.",
      link: "/contact#documents",
      external: false,
      hash: true,
    },
    {
      icon: assets.quality_icon,
      title: "Quality Control",
      description: "We ensure secure packaging & freshness.",
      link: "/contact#doucments",
      external: false,
    },
    {
      icon: assets.support_img,
      title: "Best customer support",
      description: "We provide 24/7 customer support",
      link: "https://wa.me/917572876157",
      external: true,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-xs sm:text-sm md:text-base">
      {policies.map((policy, index) => {
        const content = (
          <div className="cursor-pointer text-center hover:shadow-lg p-6 rounded transition-all duration-200 bg-white">
            <img
              src={policy.icon}
              className="w-12 m-auto mb-3"
              alt={policy.title}
            />
            <p className="font-semibold">{policy.title}</p>
            <p className="text-gray-400 text-sm">{policy.description}</p>
          </div>
        );

        if (policy.external) {
          return (
            <a
              key={index}
              href={policy.link}
              target="_blank"
              rel="noopener noreferrer">
              {content}
            </a>
          );
        } else if (policy.hash) {
          return (
            <HashLink key={index} smooth to={policy.link}>
              {content}
            </HashLink>
          );
        } else {
          return (
            <Link key={index} to={policy.link}>
              {content}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default OurPolicy;
