import React from "react";

const categories = [
  {
    label: "T Shirts",
    video: "/videos/tshirts.mp4",
  },
  {
    label: "Badges",
    video: "/videos/badges.mp4",
  },
  {
    label: "Mobile Stand",
    video: "/videos/mobile-stand.mp4",
  },
  {
    label: "Metal Pens",
    video: "/videos/pens.mp4",
  },
  {
    label: "Keychains",
    video: "/videos/keychains.mp4",
  },
  {
    label: "Colors",
    video: "/videos/colors.mp4",
  },
  {
    label: "Fabric",
    video: "/videos/fabric.mp4",
  },
  {
    label: "Quality",
    video: "/videos/quality.mp4",
  },
];

function VideoCategoryStrip() {
  return (
    <div className="w-full bg-white py-6 mt-[80px]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              {/* CIRCLE */}
              <div className="relative w-32 h-32 rounded-full border-4 border-[#DB2A7B] overflow-hidden shadow-md">

                <video
                  src={item.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />

                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* LABEL */}
              <p className="mt-3 text-sm font-medium text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoCategoryStrip;
