// // src/pages/ServicesPage.jsx
// import { useState } from "react";
// import CategorySection from "../Components/CategorySection";
// import CategorySidebar from "../Components/CategorySidebar";
// import { servicesData } from "../Assets/ServiceData";

// const ServicesPage = () => {
//   const categories = servicesData.map((item) => item.category);

//   // ⭐ default selected category
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

//   const activeCategory = servicesData.find(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className="bg-white pt-24">
      
//       {/* Header */}
//       <div className="bg-[#9A1E85] text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Our Printing Services</h1>
//         <p className="mt-4 text-lg">
//           Custom printing solutions for personal & business needs
//         </p>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
//         {/* Left Sidebar */}
//         <div className="hidden lg:block">
//           <CategorySidebar
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onSelect={setSelectedCategory}
//           />
//         </div>

//         {/* Services */}
//         <div className="lg:col-span-3">
//           {activeCategory && (
//             <CategorySection
//               category={activeCategory.category}
//               services={activeCategory.services}
//             />
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ServicesPage;


import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySection from "../Components/CategorySection";
import CategorySidebar from "../Components/CategorySidebar";
import { servicesData } from "../Assets/ServiceData";

const ServicesPage = () => {
  const categories = servicesData.map((item) => item.category);

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromURL || categories[0]
  );

  useEffect(() => {
    if (categoryFromURL && categories.includes(categoryFromURL)) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const activeCategory = servicesData.find(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-white pt-24">
      
      {/* Header */}
      <div className="bg-[#9A1E85] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Printing Services</h1>
        <p className="mt-4 text-lg">
          Custom printing solutions for personal & business needs
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <div className="hidden lg:block">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          {activeCategory && (
            <CategorySection
              category={activeCategory.category}
              services={activeCategory.services}
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
