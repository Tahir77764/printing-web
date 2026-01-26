import { useParams, Link } from "react-router-dom";
import { servicesData } from "../Assets/ServiceData";

const ServiceCategoryPage = () => {
  const { categorySlug, serviceSlug, subSlug } = useParams();

  console.log("Params:", { categorySlug, serviceSlug, subSlug });

  // 1️⃣ Find category
  const selectedCategory = servicesData.find(
    (category) => category.categorySlug === categorySlug
  );

  if (!selectedCategory) {
    return <div className="pt-24 text-center">Category not found</div>;
  }

  // 2️⃣ CATEGORY PAGE (no serviceSlug)
  if (!serviceSlug) {
    return (
      <div className="bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#9A1E85] mb-8">
            {selectedCategory.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedCategory.services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${categorySlug}/${service.slug}`}
                className="group block rounded-xl border bg-white p-6 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3️⃣ Find service
  const selectedService = selectedCategory.services.find(
    (service) => service.slug === serviceSlug
  );

  if (!selectedService) {
    return <div className="pt-24 text-center">Service not found</div>;
  }

  // 4️⃣ SUBCATEGORY PAGE
  if (subSlug) {
    const selectedSubcategory = selectedService.subcategories.find(
      (sub) => sub.slug === subSlug
    );

    if (!selectedSubcategory) {
      return <div className="pt-24 text-center">Subcategory not found</div>;
    }

    return (
      <div className="bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#9A1E85]">
            {selectedSubcategory.title}
          </h2>
          <img
            src={selectedSubcategory.image}
            alt={selectedSubcategory.title}
            className="mt-6 rounded-lg"
          />
          <p className="mt-4">{selectedSubcategory.description}</p>
        </div>
      </div>
    );
  }

  // 5️⃣ SERVICE PAGE
  return (
    

<div>

<div className="bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#9A1E85] mb-8">
          {selectedService.title}
        </h2>

        {selectedService.subcategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedService.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                to={`/services/${categorySlug}/${serviceSlug}/${sub.slug}`}
                className="block border rounded-xl p-6 bg-white hover:shadow-lg"
              >
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="h-40 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold">{sub.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No subcategories available.</p>
        )}
      </div>
    </div>

<div className="bg-gray-100 pt-24">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-[#9A1E85] mb-12">
      {selectedService.title}
    </h2>

    {selectedService.subcategories.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedService.subcategories.map((sub) => (
          <Link
            key={sub.slug}
            to={`/services/${categorySlug}/${serviceSlug}/${sub.slug}`}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={sub.image}
              alt={sub.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-semibold text-white">
                {sub.title}
              </h3>
              <span className="inline-block mt-2 text-sm text-white/80">
                View service →
              </span>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No subcategories available.</p>
    )}
  </div>
</div>


     <div className="bg-gradient-to-b from-gray-50 to-white pt-24">
   <div className="max-w-7xl mx-auto px-6 py-16">
     <h2 className="text-4xl font-bold text-[#9A1E85] mb-12 text-center">
       {selectedService.title}
     </h2>

     {selectedService.subcategories.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
         {selectedService.subcategories.map((sub) => (
           <Link
             key={sub.slug}
             to={`/services/${categorySlug}/${serviceSlug}/${sub.slug}`}
             className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-gray-200 hover:border-[#9A1E85] transition-all duration-300 hover:shadow-2xl"
           >
             <div className="overflow-hidden">
               <img
                 src={sub.image}
                 alt={sub.title}
                 className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
             </div>

             <div className="p-6">
               <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#9A1E85] transition">
                 {sub.title}
               </h3>
               <p className="mt-2 text-sm text-gray-500">
                 Explore more details →
               </p>
             </div>
           </Link>
         ))}
       </div>
     ) : (
       <p className="text-center text-gray-500">
         No subcategories available.
       </p>
     )}
   </div>
 </div>

</div>


  );
};

export default ServiceCategoryPage;
