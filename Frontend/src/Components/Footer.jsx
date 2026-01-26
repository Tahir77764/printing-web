// import React from "react";
// import VTLogo from '../../public/VT_LogoTSC.png'

// const Footer = () => {
//   return (
//     <div className="px-12 py-4">
//       <footer className="bg-[#02192F] text-gray-300 py-10 rounded-xl">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

//           {/* Brand Section */}
//           <div>
//             <img src={VTLogo} alt="" />
//             <p className="mt-3 text-sm">Your trusted printing partner for T-shirts, mugs & more.</p>
//           </div>

//           {/* Quick Links */}
//           <div className=" col-span-2 grid md:grid-cols-4">
//             <div />

//             <div>
//               <h3 className="text-lg font-semibold text-[#DB2A7B] mb-4">COMPANY</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition">Location</a></li>
//                 <li><a href="#" className="hover:text-white transition">Blog</a></li>
//               </ul>
//             </div>
          
//             <div>
//               <h3 className="text-lg font-semibold text-[#DB2A7B] mb-4">SUPPORTS</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition">FAQs</a></li>
//                 <li><a href="#" className="hover:text-white transition">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-[#DB2A7B] mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white transition">Home</a></li>
//                 <li><a href="#" className="hover:text-white transition">Products</a></li>
//                 <li><a href="#" className="hover:text-white transition">Feedback</a></li>
//               </ul>
//             </div>

//           </div>

//           {/* Social Media */}
//           <div>
//             <div className="flex space-x-4 text-xl">

//               {/* Facebook */}
//               <a href="#" className="hover:text-white transition">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
//                 </svg>
//               </a>

//               {/* Instagram */}
//               <a href="#" className="hover:text-white transition">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.6-8.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
//                 </svg>
//               </a>

//               {/* Twitter */}
//               <a href="#" className="hover:text-white transition">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1 4.3 4.3 0 0 0-7.3 3c0 .3 0 .6.1.9A12.3 12.3 0 0 1 3 4.8a4.3 4.3 0 0 0 1.3 5.8c-.7 0-1.4-.2-2-.5v.1a4.3 4.3 0 0 0 3.4 4.2 4.2 4.2 0 0 1-2 .1 4.3 4.3 0 0 0 4 3A8.7 8.7 0 0 1 2 19.6a12.2 12.2 0 0 0 6.7 2c8 0 12.3-6.7 12.3-12.5v-.6A8.6 8.6 0 0 0 22 5.8z" />
//                 </svg>
//               </a>

//             </div>
//           </div>
      
//         </div>
      

//         {/* Bottom Bar */}
//         <div className="text-left px-6 mt-10 pt-5 text-sm flex justify-between">
//           <div className="">© {new Date().getFullYear()} Vinto Printz. All rights reserved.</div>
//           <div className=" mr-4">
//             <a href="#" className="hover:text-white transition mr-4">Terms of Service</a>
//             <a href="#" className="hover:text-white transition mr-4">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition mr-4">Refund Policy</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Footer;



import React, { useState } from "react";
import VTLogo from '../../public/VT_LogoTSC.png'

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="px-6 sm:px-12 py-4">
      <footer className="bg-[#02192F] text-gray-300 py-10 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Section */}
          <div>
            <img src={VTLogo} alt="" />
            <p className="mt-3 text-sm">Your trusted printing partner for T-shirts, mugs & more.</p>
          </div>

          {/* Desktop Links */}
          <div className="col-span-2 hidden md:grid md:grid-cols-4">
            <div />

            <div>
              <h3 className="text-lg font-semibold text-[#9A1E85] mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Location</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#9A1E85] mb-4">SUPPORTS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#9A1E85] mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Products</a></li>
                <li><a href="#" className="hover:text-white transition">Feedback</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">

            {/* Accordion Item */}
            <div>
              <button 
                onClick={() => toggleSection("company")}
                className="w-full flex justify-between items-center text-left text-[#9A1E85] font-semibold text-lg"
              >
                COMPANY
                <span>{openSection === "company" ? "−" : "+"}</span>
              </button>
              {openSection === "company" && (
                <ul className="space-y-2 text-sm mt-2 pl-2">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Location</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                </ul>
              )}
            </div>

            {/* Accordion Item */}
            <div>
              <button 
                onClick={() => toggleSection("supports")}
                className="w-full flex justify-between items-center text-left text-[#9A1E85] font-semibold text-lg"
              >
                SUPPORTS
                <span>{openSection === "supports" ? "−" : "+"}</span>
              </button>
              {openSection === "supports" && (
                <ul className="space-y-2 text-sm mt-2 pl-2">
                  <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                </ul>
              )}
            </div>

            {/* Accordion Item */}
            <div>
              <button 
                onClick={() => toggleSection("quicklinks")}
                className="w-full flex justify-between items-center text-left text-[#9A1E85] font-semibold text-lg"
              >
                QUICK LINKS
                <span>{openSection === "quicklinks" ? "−" : "+"}</span>
              </button>
              {openSection === "quicklinks" && (
                <ul className="space-y-2 text-sm mt-2 pl-2">
                  <li><a href="#" className="hover:text-white transition">Home</a></li>
                  <li><a href="#" className="hover:text-white transition">Products</a></li>
                  <li><a href="#" className="hover:text-white transition">Feedback</a></li>
                </ul>
              )}
            </div>

          </div>

          {/* Social Media */}
          <div >
            <div className="flex space-x-4 text-xl">
              {/* Facebook */}
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.6-8.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1 4.3 4.3 0 0 0-7.3 3c0 .3 0 .6.1.9A12.3 12.3 0 0 1 3 4.8a4.3 4.3 0 0 0 1.3 5.8c-.7 0-1.4-.2-2-.5v.1a4.3 4.3 0 0 0 3.4 4.2 4.2 4.2 0 0 1-2 .1 4.3 4.3 0 0 0 4 3A8.7 8.7 0 0 1 2 19.6a12.2 12.2 0 0 0 6.7 2c8 0 12.3-6.7 12.3-12.5v-.6A8.6 8.6 0 0 0 22 5.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="md:flex hidden text-left px-6 mt-10 pt-5 text-sm f justify-between">
          <div>© {new Date().getFullYear()} Vinto Printz. All rights reserved.</div>
          <div className="mr-4">
            <a href="#" className="hover:text-white transition mr-4">Terms of Service</a>
            <a href="#" className="hover:text-white transition mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition mr-4">Refund Policy</a>
          </div>
        </div>

        <div className="px-6 mt-10 pt-5 text-sm flex md:hidden flex-col md:flex-row md:justify-between text-center md:text-left">

  {/* Policies (show first on mobile) */}
  <div className=" md:order-none flex justify-between md:flex-row items-center md:items-start  md:space-y-0 md:space-x-4 mb-4 md:mb-0">
    <a href="#" className="hover:text-white transition">Terms of Service</a>
    <a href="#" className="hover:text-white transition">Privacy Policy</a>
    <a href="#" className="hover:text-white transition">Refund Policy</a>
  </div>
 
  {/* Copyright (comes last on mobile, first on desktop) */}
  <div className="order-2 md:order-none">
    © {new Date().getFullYear()} Vinto Printz. All rights reserved.
  </div>

</div>


      </footer>
    </div>
  );
};

export default Footer;
