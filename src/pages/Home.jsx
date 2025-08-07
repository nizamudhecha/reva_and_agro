import React from "react";
import hero from "../components/Hero";

import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const home = () => {
  return (
    <div>
      <hero />

      <NewsLetterBox />
      <OurPolicy />
    </div>
  );
};

export default home;
