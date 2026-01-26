import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#02192F] text-white min-h-screen px-6 md:px-16 py-24">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-[#DB2A7B]">VT Printz</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Your one-stop solution for high-quality, customized printing services.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#0085E1]">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            <span className="text-[#DB2A7B] font-semibold">VT Printz</span> is a
            professional printing service provider committed to delivering
            premium-quality prints for individuals, businesses, and brands.
            From everyday printing needs to personalized merchandise, we bring
            your ideas to life with precision and creativity.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Whether you are promoting your business, creating custom gifts, or
            building your brand identity, VT Printz ensures vibrant colors,
            durable materials, and unmatched finishing.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#02192F] border-2 border-[#DB2A7B] rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-[#DB2A7B]">
            What We Print
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-300">
            <li>• T-Shirt Printing</li>
            <li>• Mug Printing</li>
            <li>• Visiting Cards</li>
            <li>• Pamphlets</li>
            <li>• ID Cards</li>
            <li>• Flex & Banners</li>
            <li>• Keychains</li>
            <li>• Bottles</li>
          </ul>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#0085E1]">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "Sharp prints, vibrant colors, and long-lasting materials."
            },
            {
              title: "Customization",
              desc: "Fully personalized printing as per your needs."
            },
            {
              title: "Affordable Pricing",
              desc: "Best quality printing at competitive prices."
            },
            {
              title: "Reliable Service",
              desc: "On-time delivery with consistent results."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#9A1E85] rounded-xl p-6 text-center hover:border-[#DB2A7B] transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#DB2A7B]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* FOOTER LINE */}
      <div className="text-center mt-20">
        <p className="text-gray-400">
          VT Printz — Turning Your Ideas Into Prints That Speak.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;
