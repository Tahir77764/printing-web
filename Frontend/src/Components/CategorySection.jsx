// src/components/CategorySection.jsx
import ServiceCard from "./ServiceCard";

const CategorySection = ({ category, services }) => {
  const sectionId = category.replace(/\s+/g, "-").toLowerCase();

  return (
    <section id={sectionId} className="mb-16 scroll-mt-28">
      <h2 className="text-2xl font-bold text-[#9A1E85] mb-8 border-l-4 border-[#DB2A7B] pl-4">
        {category}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
