import React from "react";
import Hero from "../components/Hero";

import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const home = () => {
  return (
    <div>
      <Hero />

      <NewsLetterBox />
      <OurPolicy />
    </div>
  );
};

export default home;
