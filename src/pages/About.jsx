import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 pt-8">
      {/* Title */}
      <div className="text-2xl text-center border-t pb-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* Full-Size Image on Top */}
      <div className="w-full mb-10 flex gap-10">
        <img
          src={assets.aboutImg1}
          alt="Company"
          className="w-full max-h-[400px] h-auto rounded-lg shadow-md object-contain"
        />
        <img
          src={assets.compnyHero}
          alt="Company"
          className="hidden md:block w-full max-h-[400px] h-auto rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Two-column Layout */}
      <div className="flex flex-col md:flex-row gap-10 text-gray-700">
        {/* Left Column: About Us + Extra Image */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About Us</h2>
          <p>
            <b>Reva Agro & Fisheries</b> is a multi-category export company
            based in India, specializing in fresh, frozen, and canned seafood,
            agro products, handicrafts, and knockdown furniture. With deep
            expertise in the industry, we've built a global sourcing and
            distribution network.
          </p>
          <p>
            Our company also promotes Indian craftsmanship by exporting
            eco-friendly furniture and handicrafts. We work closely with skilled
            rural artisans to bring sustainable, high-quality products to
            international markets—empowering communities while preserving
            cultural heritage.
          </p>

          {/* Extra Image Below About Us */}
          <img
            src={assets.aboutImg2}
            alt="About Extra"
            className="w-full max-h-[500px] max-w-[500px] h-auto rounded-lg shadow-md mt-4"
          />
        </div>

        {/* Right Column: Our Mission (Expanded) */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p>
            At <b>Reva Agro & Fisheries</b>, our mission is to build a global
            reputation by delivering ethically sourced, premium-quality products
            in:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fresh & frozen seafood</li>
            <li>Agro-based goods</li>
            <li>Eco-friendly handicrafts</li>
            <li>Natural wood furniture</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">Our Focus Areas:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>Transparency & Traceability:</b> Every product is traceable
              from its origin to delivery, ensuring full compliance and trust.
            </li>
            <li>
              <b>Ethical Trade:</b> We support fair wages, ethical sourcing, and
              responsible supply chains.
            </li>
            <li>
              <b>Environmental Impact:</b> Focused on minimizing waste,
              promoting biodegradable packaging, and sustainable production.
            </li>
            <li>
              <b>Innovation in Export:</b> Continuously upgrading our logistics,
              storage, and packaging technologies to ensure global standards.
            </li>
            <li>
              <b>Customer Partnership:</b> We work as partners, not vendors—
              listening, adapting, and growing with every client we serve.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Industry Expertise</b>
          <p className="text-lg">
            With years of hands-on experience and in-depth knowledge of seafood
            sourcing and agro-export logistics, we ensure our clients receive
            top-tier products and reliable service every time.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Uncompromising Quality & Compliance</b>
          <p className="text-lg">
            We adhere to international food safety standards and packaging
            protocols, ensuring freshness, hygiene, and full traceability from
            source to shipment.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Customer-Centric Approach</b>
          <p className="text-lg">
            We go beyond transactions. Our team works closely with clients to
            understand their unique needs, offer custom packaging solutions, and
            provide responsive, timely support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
