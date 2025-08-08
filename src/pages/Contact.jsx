import React from "react";
import NewsLetterBox from "../components/NewsLetterBox";
import Documents from "../components/documents";

const Contact = () => {
  return (
    <div>
      {/* Add an id so hash link can scroll here */}
      <div id="documents">
        <Documents />
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
