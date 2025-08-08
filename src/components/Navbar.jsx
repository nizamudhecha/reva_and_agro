import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
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
    <div className="relative bg-white shadow-sm">
      <div className="flex items-center justify-between py-5 font-medium px-4 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            className="w-32 md:w-40 lg:w-48 max-w-full"
            alt="Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-sm text-gray-700 items-center">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>

          {/* Products */}
          <div className="relative">
            <button
              className="cursor-pointer"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setFishOpen(false);
                setAgroOpen(false);
              }}>
              PRODUCTS
            </button>

            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 px-4 text-sm z-20 min-w-[200px] space-y-2">
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
                <div className="relative">
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

          <NavLink to="/contact">CONTACT US</NavLink>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 lg:hidden">
          <img
            onClick={() => setVisible(!visible)}
            src={assets.menu_icon}
            className="w-6 cursor-pointer"
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMenus}></div>

          <div className="relative w-72 h-full bg-white shadow-xl p-6 flex flex-col items-start gap-3 text-sm text-left transform transition-transform duration-300">
            <button
              className="self-end text-xl font-bold text-gray-600 mb-4"
              onClick={closeMenus}>
              ✕
            </button>

            <NavLink to="/" onClick={closeMenus}>
              HOME
            </NavLink>
            <NavLink to="/about" onClick={closeMenus}>
              ABOUT US
            </NavLink>
            <NavLink to="/contact" onClick={closeMenus}>
              CONTACT US
            </NavLink>

            <hr className="my-2" />
            <span className="font-semibold text-gray-700">Fish Products</span>
            <button onClick={() => goToCollection("fresh-frozen")}>
              Fresh and Frozen Fish
            </button>
            <button onClick={() => goToCollection("dry")}>Dry Fish</button>
            <button onClick={() => goToCollection("canned")}>
              Canned Fish
            </button>

            <hr className="my-2" />
            <span className="font-semibold text-gray-700">Agro Products</span>
            <button onClick={() => goToCollection("cereals/pulses")}>
              Cereals/Pulses
            </button>
            <button onClick={() => goToCollection("fruits")}>Fruits</button>
            <button onClick={() => goToCollection("Vegetables")}>
              Vegetables
            </button>
            <button onClick={() => goToCollection("canned-vegetables-fruits")}>
              Canned Fruits/Vegetables
            </button>

            <hr className="my-2" />
            <button onClick={() => goToCollection("furniture")}>
              Furniture
            </button>
            <button onClick={() => goToCollection("handicraft")}>
              Handicraft
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
