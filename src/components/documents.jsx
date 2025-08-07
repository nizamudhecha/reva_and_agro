import React from "react";
import doc1 from "../assets/doc/doc1.jpg";
import doc2 from "../assets/doc/doc2.jpg";
import doc3 from "../assets/doc/doc3.jpg";
import doc4 from "../assets/doc/doc4.jpg";
import doc5 from "../assets/doc/doc5.jpg";
import doc6 from "../assets/doc/doc6.jpg";
import doc7 from "../assets/doc/doc7.jpg";

// 📁 Documents array with imported images
const documents = [
  { name: "ISO 9001:2015", image: doc1, type: "vertical" },
  { name: "HACCP", image: doc2, type: "vertical" },
  { name: "HALAL", image: doc3, type: "vertical" },
  { name: "IMPORT EXPORT CODE", image: doc4, type: "vertical" },
  { name: "fssai", image: doc5, type: "vertical" },
  { name: "APEDA", image: doc6, type: "horizontal" },
  { name: "SPICE", image: doc7, type: "horizontal" },
];

const DocumentGallery = () => {
  const verticalDocs = documents.filter((doc) => doc.type === "vertical");
  const horizontalDocs = documents.filter((doc) => doc.type === "horizontal");

  return (
    <div className="min-h-screen mb-10 overflow-y-auto px-4 sm:px-6 py-6 mt-20 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        Uploaded Documents
      </h1>

      {/* Horizontal Scroll for Vertical Docs */}
      <div className="overflow-x-auto mb-12">
        <div className="flex gap-4 sm:gap-6 px-1 sm:px-2 w-max">
          {verticalDocs.map((doc, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] lg:w-[320px] h-[420px] sm:h-[480px] lg:h-[520px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl border border-gray-400 flex flex-col items-center p-3 sm:p-4">
              <img
                src={doc.image}
                alt={doc.name}
                className="object-cover w-full h-[85%] rounded-md"
              />
              <p className="text-center text-base sm:text-lg font-semibold mt-2">
                {doc.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid for Horizontal Docs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
        {horizontalDocs.map((doc, index) => (
          <div
            key={index}
            className="w-full max-w-[520px] h-[300px] sm:h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-xl border border-gray-400 flex flex-col items-center p-3 sm:p-4">
            <img
              src={doc.image}
              alt={doc.name}
              className="object-cover w-full h-[85%] rounded-md"
            />
            <p className="text-center text-base sm:text-lg font-semibold mt-2">
              {doc.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentGallery;
