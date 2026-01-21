import React, { useState } from "react";
// import VTLogo from "../../public/Nav_VTLogo2.png";

import { useNavigate } from "react-router-dom";




import VTLogo from "../../public/VT_LogoTSC.png";
import ArrowDown from "../Assets/next_W.png";
import Search from "../Assets/search.png";
import Cart from "../Assets/cart1.png";
import Delivery from "../Assets/delivery.png";
import Seven from "../Assets/Seven.png";
import Photo from "../Assets/picture.png";
import Tote from "../Assets/tote.png";
import Ticket from "../Assets/tickets.png";
import Billboard from "../Assets/billboard.png";
import Stamps from "../Assets/stamp.png";
import Wedding from "../Assets/wedding.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  const navigate = useNavigate();


  const NavLink = ({ label, onClick }) => (
  <button
    onClick={() => {
      setActiveLink((prev) => (prev === label ? "" : label));
      onClick && onClick();
    }}
    className={`relative py-2 text-lg transition duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-1
      after:h-[2px] after:bg-[#DB2A7B]
      after:transition-all after:duration-300
      after:w-0 hover:after:w-full
      ${
        activeLink === label
          ? "after:w-full text-[#DB2A7B]"
          : "text-[#02192F]"
      }
    `}
  >
    {label}
  </button>
);



  return (
    <nav className="fixed top-0 z-[100] w-full">

      <div className="w-full bg-[#fff] h-[84px] flex items-center pl-4 pr-10 text-white relative shadow-shadow10px shadow-[#000]">

        {/* LEFT LOGO */}
        <Link to="/"><div className="flex-shrink-0 pb-2">
          <img src={VTLogo} alt="Logo" className="h-16 md:h-20" />
        </div></Link>

        {/* CENTER SEARCH BAR (DESKTOP) */}
        <div className="absolute left-[40%] -translate-x-1/2 hidden llg:flex items-center bg-gray-100 rounded-full w-[420px] focus-within:w-[480px] transition-all duration-300 shadow-shadow5px shadow-[#8c236c] overflow-hidden">
          <input type="text" placeholder="Search products..." className="flex-1 px-6 py-3 text-gray-800 placeholder-gray-400 rounded-s-full outline-none text-sm border-[1.5px] border-[#DB2A7B]"/>

          <button className="bg-[#DB2A7B] border-[#DB2A7B] border-[1.5px] hover:bg-[#c8236c] transition px-5 py-3">
            <img src={Search} alt="Search" className="h-5 w-5" />
          </button>
        </div>


        {/* RIGHT SIDE */}
        <div className="ml-auto hidden llg:flex items-center space-x-8 text-[#02192F]">

  
  <div className="relative">
    <NavLink
  label="Products"
  onClick={() => setProductsOpen((prev) => !prev)}
/>


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

            {/* <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                <img src={Delivery} alt="" className="w-10 sm:w-12" />
              </div>
              <h1 className="HeroHeading text-2xl pl-4">MENS Wear</h1>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                <img src={BStar} alt="" className="w-10 sm:w-12" />
              </div>
              <h1 className="HeroHeading text-2xl pl-4">WOMENS Wear</h1>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                <img src={Seven} alt="" className="w-10 sm:w-12" />
              </div>
              <h1 className="HeroHeading text-2xl pl-4">KIDS Wear</h1>
            </div>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                <img src={Delivery} alt="" className="w-10 sm:w-12" />
              </div>
              <h1 className="HeroHeading text-2xl pl-4">MENS Wear</h1>
            </div> */}


          </div>

        </div>
      </div>
    )}
  </div>


  <Link to="/about-us"><NavLink label="About Us" /></Link>
  <Link to="/feedback"><NavLink label="Feedback" /></Link>

  
  <button
    onClick={() => setCartCount(cartCount + 1)}
    className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition group"
  >
    <img
      src={Cart}
      alt="Cart"
      className="h-5 w-5 group-hover:scale-110 transition"
    />

    
    <span className="absolute -top-1 -right-1 bg-[#DB2A7B] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
      {cartCount}
    </span>
  </button>

</div>






      </div>

      
      {menuOpen && (
        <div className="llg:hidden bg-[#02192F] border border-[#DB2A7B]/40 rounded-xl mt-2 mx-4 px-6 py-4 space-y-4 text-white">

          
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 text-gray-800 outline-none"
            />
            <button className="bg-[#DB2A7B] px-4 py-2">
              <img src={Search} alt="Search" className="h-[18px]" />
            </button>
          </div>

          
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Products
            <img
              src={ArrowDown}
              alt=""
              className={`h-[12px] transition-transform duration-300 ${
                productsOpen ? "rotate-0" : "rotate-90"
              }`}
            />
          </button>

          {productsOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <a href="#" className="block">Product 1</a>
              <a href="#" className="block">Product 2</a>
              <a href="#" className="block">Product 3</a>
            </div>
          )}

          <a href="#" className="block">Contact</a>
          <a href="#" className="block">About Us</a>
          <div className="relative inline-block">
  <span>Cart</span>
  <span className="absolute -top-2 -right-4 bg-[#DB2A7B] text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
    {cartCount}
  </span>
</div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;


