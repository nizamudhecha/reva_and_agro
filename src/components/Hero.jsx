import React from "react";
import { assets } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2">
        <ul className="flex gap-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-[#414141] opacity-30 transition-all duration-300" />
    ),
  };

  const slides = [
    {
      image: assets.compnyHero,
      title: "Reva Agro and Fisheries",
      subtitle: "Seafood & Sustainable Agro Products",
    },
    {
      image: assets.hero_img,
      title: "Fresh Catch",
      subtitle: "Fresh & Quality Seafood",
    },
    {
      image: assets.agrooImg,
      title: "Harvest Gold",
      subtitle: "Wholesome & Naturally Grown",
    },
    {
      image: assets.furniture,
      title: "Crafted Comfort",
      subtitle: "Elegant Designs. Lasting Quality. Fully knockdown",
    },
    {
      image: assets.cratf,
      title: "Artisan Touch",
      subtitle: "Handmade with Heart & Heritage",
    },
  ];

  return (
    <div className="border border-gray-400 max-w-[1200px] mx-auto overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Mobile layout */}
            <div className="sm:hidden flex flex-col min-h-[500px]">
              {/* Text Content (Top) */}
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-[#414141] max-w-[500px] text-center">
                  <div className="flex items-center gap-2 mb-4 justify-center">
                    <span className="w-8 h-[2px] bg-[#414141]"></span>
                    <p className="font-medium text-sm">{slide.subtitle}</p>
                  </div>
                  <h1 className="prata-regular text-3xl mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="flex items-center gap-2 cursor-pointer group justify-center">
                    <span className="font-semibold text-sm transition-colors group-hover:text-[#2c2c2c]"></span>
                    <span className="w-8 h-[2px] bg-[#414141] transition-all group-hover:w-12"></span>
                  </div>
                </div>
              </div>

              {/* Image Section (Bottom) */}
              <div className="w-full h-[250px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:flex flex-col sm:flex-row min-h-[500px]">
              {/* Text Content */}
              <div className="w-full sm:w-1/2 flex items-center justify-center p-8 sm:p-12">
                <div className="text-[#414141] max-w-[500px]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 md:w-11 h-[2px] bg-[#414141]"></span>
                    <p className="font-medium text-sm md:text-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                  <h1 className="prata-regular text-3xl md:text-5xl mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="flex items-center gap-2 cursor-pointer group">
                    <span className="font-semibold text-sm md:text-lg transition-colors group-hover:text-[#2c2c2c]"></span>
                    <span className="w-8 md:w-11 h-[2px] bg-[#414141] transition-all group-hover:w-12"></span>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full sm:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
