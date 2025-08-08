import React, { useState, useEffect, useRef, useContext } from "react";
import { assets } from "../assets/assets";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"; // adjust path if different

const Footer = () => {
  const [visible, setVisible] = useState(false); // Mobile menu
  const { setShowSearch } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fishOpen, setFishOpen] = useState(false);
  const [agroOpen, setAgroOpen] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef(); // For outside click detection

  const closeMenus = () => {
    setMenuOpen(false);
    setFishOpen(false);
    setAgroOpen(false);
    setVisible(false);
  };

  const goToCollection = (subCategory) => {
    navigate("/products", { state: { subCategory } });
    closeMenus();
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setFishOpen(false);
        setAgroOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <p className="py-3 text-sm">
            Copyright 2025@ revaagroandfisheries.com - All Right Reserved.
          </p>
        </div>

        {/* Company Links */}
        <div className="mr-65">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    setFishOpen(false);
                    setAgroOpen(false);
                  }}>
                  Product
                </button>

                {menuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute top-6 left-4 sm:top-1 sm:left-21 bg-white shadow-lg rounded-md py-2 px-4 text-sm z-20 min-w-[200px] space-y-2">
                    {/* Fish submenu */}
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full hover:text-blue-600 gap-2"
                        onClick={() => {
                          setFishOpen(!fishOpen);
                          setAgroOpen(false);
                        }}>
                        <div className="flex items-center gap-2">
                          <img
                            src={assets.fishicon}
                            alt="Fish"
                            className="w-4 h-4"
                          />
                          <span>Fish Products</span>
                        </div>
                        <span>▸</span>
                      </button>

                      {fishOpen && (
                        <div className="absolute top-0 left-full ml-2 w-56 bg-white shadow-lg rounded-md py-2 px-4 space-y-2 z-30">
                          <button
                            onClick={() => goToCollection("fresh-frozen")}
                            className="hover:text-blue-600 w-full text-left">
                            Fresh and Frozen Fish
                          </button>
                          <button
                            onClick={() => goToCollection("dry")}
                            className="hover:text-blue-600 w-full text-left">
                            Dry Fish
                          </button>
                          <button
                            onClick={() => goToCollection("canned")}
                            className="hover:text-blue-600 w-full text-left">
                            Canned Fish
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Agro submenu */}
                    <div className="relative sm:top-1">
                      <button
                        className="flex justify-between items-center w-full hover:text-blue-600"
                        onClick={() => {
                          setAgroOpen(!agroOpen);
                          setFishOpen(false);
                        }}>
                        <div className="flex items-center gap-2">
                          <img
                            src={assets.agroicon}
                            alt="Agro"
                            className="w-4 h-4"
                          />
                          <span>Agro Products</span>
                        </div>
                        <span>▸</span>
                      </button>
                      {agroOpen && (
                        <div className="absolute top-0 left-full ml-2 w-56 bg-white shadow-lg rounded-md py-2 px-4 space-y-2 z-30">
                          <button
                            onClick={() => goToCollection("cereals/pulses")}
                            className="hover:text-blue-600 w-full text-left">
                            Cereals/Pulses
                          </button>
                          <button
                            onClick={() => goToCollection("fruits")}
                            className="hover:text-blue-600 w-full text-left">
                            Fruits
                          </button>
                          <button
                            onClick={() => goToCollection("Vegetables")}
                            className="hover:text-blue-600 w-full text-left">
                            Vegetables
                          </button>
                          <button
                            onClick={() =>
                              goToCollection("canned-vegetables-fruits")
                            }
                            className="hover:text-blue-600 w-full text-left">
                            Canned Fruits/Vegetables
                          </button>
                          <button
                            onClick={() => goToCollection("Spice")}
                            className="hover:text-blue-600 w-full text-left">
                            Spice
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => goToCollection("furniture")}
                      className="hover:text-blue-600 w-full text-left flex items-center gap-2">
                      <img
                        src={assets.furnitureicon}
                        alt="Furniture"
                        className="w-4 h-4"
                      />
                      <span>Furniture</span>
                    </button>
                    <button
                      onClick={() => goToCollection("handicraft")}
                      className="hover:text-blue-600 w-full text-left flex items-center gap-2">
                      <img
                        src={assets.handicrafticon}
                        alt="Handicraft"
                        className="w-4 h-4"
                      />
                      <span>Handicraft</span>
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:text-blue-600 transition-colors">
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </li>
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

          {/* Social Icons */}
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
