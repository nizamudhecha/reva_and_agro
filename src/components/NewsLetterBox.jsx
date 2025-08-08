import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";

const ContactFormWithImage = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jk1q1am", // Replace with your EmailJS Service ID
        "template_oo311l7", // Replace with your EmailJS Template ID
        e.target,
        "zY5IRi8RDtog2EYwk" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 text-center">
        Get In <span className="text-purple-600">Touch</span>
      </h2>

      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
        {/* Left Image Side */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-6 bg-white">
          <img
            src={assets.logo}
            alt="Support Team"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Form Side */}
        <div className="md:w-1/2 w-full bg-gray-100 p-8">
          <form onSubmit={onSubmitHandler} className="space-y-4">
            {/* Name */}
            <div className="flex items-center border border-gray-300 bg-white px-4 py-2 rounded-md">
              <FaUser className="mr-3 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 bg-white px-4 py-2 rounded-md">
              <FaEnvelope className="mr-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 bg-white px-4 py-2 rounded-md">
              <FaPhone className="mr-3 text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border border-gray-300 bg-white px-4 py-2 rounded-md">
              <FaCommentDots className="mt-1 mr-3 text-gray-500" />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full outline-none bg-transparent resize-none"
                rows="4"></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-green-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWithImage;
