import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VTLogo from "../../public/VT_LogoTSC.png";
import ArrowDown from "../Assets/next_W.png";
import Search from "../Assets/search.png";
import Cart from "../Assets/cart1.png";
import Menu from "../Assets/menu.png";
import Delivery from "../Assets/delivery.png";
import Seven from "../Assets/Seven.png";
import Photo from "../Assets/picture.png";
import Tote from "../Assets/tote.png";
import Ticket from "../Assets/tickets.png";
import Billboard from "../Assets/billboard.png";
import Stamps from "../Assets/stamp.png";
import Wedding from "../Assets/wedding.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const [searchText, setSearchText] = useState("");


  const navigate = useNavigate();

  const NavLink = ({ label, onClick }) => (
    <button
      onClick={() => {
        setActiveLink(label);
        onClick && onClick();
      }}
      className={`relative py-2 text-lg transition
        after:absolute after:left-0 after:bottom-1 after:h-[2px]
        after:bg-[#DB2A7B] after:w-0 hover:after:w-full
        ${activeLink === label ? "after:w-full text-[#DB2A7B]" : "text-[#02192F]"}
      `}
    >
      {label}
    </button>
  );

  const ProductItem = ({ img, label, path }) => (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => {
        setProductsOpen(false);
        setMenuOpen(false);
        navigate(path);
      }}
    >
      <div className="w-14 h-14 bg-[#F5F6FF] rounded-xl flex items-center justify-center border-2 border-[#DB2A7B]">
        <img src={img} className="w-8" />
      </div>
      <span className="text-lg">{label}</span>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white shadow-lg">
      <div className="h-[84px] flex items-center px-4">

        {/* LOGO */}
        <Link to="/" className="flex-shrink-0">
          <img src={VTLogo} className="h-16 md:h-20" />
        </Link>

        {/* SEARCH */}
        <div className="ml-4 hidden sm:flex flex-1 max-w-[418px]  rounded-full border border-[#DB2A7B] overflow-hidden">
          <div className="search-box">
            <input
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 px-10 py-2 outline-none text-sm"
            />
          </div>

          <button
            className="bg-[#DB2A7B] px-4 rounded-r-full ml-28"
            onClick={() => {
              navigate(`/product-list?search=${searchText}`);
              setSearchText("");
            }}
          >
            <img src={Search} className="h-5" />
          </button>

        </div>

        {/* DESKTOP MENU */}
        <div className="ml-auto hidden llg:flex items-center gap-8">

          <Link to="/product-page">
            <NavLink label="Products" />
          </Link>
          <Link to="/add-product">
            <NavLink label="AddProducts" />
          </Link>

          <Link to="/about-us"><NavLink label="About Us" /></Link>
          <Link to="/feedback"><NavLink label="Feedback" /></Link>

          <button onClick={() => setCartCount(cartCount + 1)} className="relative">
            <img src={Cart} className="h-5" />
            <span className="absolute -top-2 -right-2 bg-[#DB2A7B] text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </button>
        </div>

        {/* HAMBURGER */}
        <button className="ml-auto llg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={Menu} className="h-6" />
        </button>
      </div>

      {/* Desktop */}
      {productsOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none">

          <div className="relative top-24 mx-auto w-[90%] h-[80%] bg-gray-100 border-[10px] border-[#DB2A7B] rounded-3xl pt-12 px-10 flex justify-between shadow-2xl pointer-events-auto">

            <div className="space-y-6">
              <h1 className="text-2xl text-gray-500">Type of Product</h1>

              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services/Printing-Services`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Billboard} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Printing Services</h1>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Delivery} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Marketing Materials</h1>
              </div>

              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services?category=Office Items`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Stamps} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Office Items</h1>
              </div>

              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services?category=Photo Frames`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Photo} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Photo Frames</h1>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-2xl text-gray-500">Type of Product</h1>

              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services?category=Invitations & Cards`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Wedding} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Invitations & Cards</h1>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services?category=Packaging Solutions`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Tote} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Packaging Solutions</h1>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setProductsOpen(false);
                  navigate(`/services?category=Tickets & Event Cards`);
                }}
              >
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Ticket} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">Tickets & Event Cards</h1>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={Seven} alt="" className="w-10 sm:w-12" />
                </div>
                <h1 className="HeroHeading text-2xl pl-4">ID Cards & Accessories</h1>
              </div>



            </div>

            <div className="space-y-6">
              <h1 className="text-2xl text-gray-500">Type of Product</h1>


            </div>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="llg:hidden bg-[#02192F] text-white px-6 py-4 space-y-4">

          {/* MOBILE SEARCH */}
          <div className="flex bg-white rounded-lg overflow-hidden">
            <div className="search-box">
              <input
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 px-5 py-2 outline-none text-sm"
              />
            </div>

            <button
              className="bg-[#DB2A7B] px-4"
              onClick={() => {
                navigate(`/products?search=${searchText}`);
                setSearchText("");
              }}
            >
              <img src={Search} className="h-5" />
            </button>

          </div>

          <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex justify-between w-full">
            Products <img src={ArrowDown} className="h-3" />
          </button>

          {mobileProductsOpen && (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              <ProductItem img={Billboard} label="Printing Services" path="/services/Printing-Services" />
              <ProductItem img={Stamps} label="Office Items" path="/services?category=Office Items" />
              <ProductItem img={Photo} label="Photo Frames" path="/services?category=Photo Frames" />
              <ProductItem img={Wedding} label="Invitations & Cards" path="/services?category=Invitations & Cards" />
              <ProductItem img={Tote} label="Packaging Solutions" path="/services?category=Packaging Solutions" />
              <ProductItem img={Ticket} label="Tickets & Event Cards" path="/services?category=Tickets & Event Cards" />
              <ProductItem img={Seven} label="ID Cards & Accessories" path="/services?category=ID Cards & Accessories" />
            </div>
          )}

          <Link to="/about-us">About Us</Link>
          <Link to="/feedback">Feedback</Link>
          <div>Cart ({cartCount})</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


