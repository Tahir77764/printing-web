// src/Assets/ServiceData.js
export const servicessubData = [
  {
    category: "Printing Services",
    services: [
      {
        title: "Visiting Cards",
        slug: "visiting-cards",
        image: "https://picsum.photos/600/400?random=1",
        description: "High-quality professional printing with premium materials.",
        features: ["Premium quality", "Custom sizes", "Fast delivery"],
        subcategories: [
          {
            title: "Business Cards",
            slug: "business-cards",
            image: "https://picsum.photos/600/400?random=2",
            description: "Custom business cards with your branding.",
            features: ["Custom designs", "High-quality card stock", "Fast delivery"]
          },
          {
            title: "Personalized Cards",
            slug: "personalized-cards",
            image: "https://picsum.photos/600/400?random=3",
            description: "Personalized cards for personal use or gifting.",
            features: ["Full color printing", "Custom shapes", "Luxury finishes"]
          },
          {
            title: "Luxury Cards",
            slug: "luxury-cards",
            image: "https://picsum.photos/600/400?random=4",
            description: "High-end luxury business cards with unique finishes.",
            features: ["Gold foiling", "Embossing", "Premium cardstock"]
          }
        ]
      },
      {
        title: "Pamphlets & Posters",
        slug: "pamphlets-posters",
        image: "https://picsum.photos/600/400?random=5",
        description: "Custom printed pamphlets and posters for your business.",
        features: ["Glossy finish", "Custom sizes", "Affordable prices"],
        subcategories: [
          {
            title: "Flyers",
            slug: "flyers",
            image: "https://picsum.photos/600/400?random=6",
            description: "Custom flyers for promotional use.",
            features: ["Full color printing", "High gloss finish", "Fast turnaround"]
          },
          {
            title: "Posters",
            slug: "posters",
            image: "https://picsum.photos/600/400?random=7",
            description: "Custom printed posters for events and promotions.",
            features: ["Large format", "Custom designs", "Durable materials"]
          }
        ]
      },
      {
        title: "Letterheads",
        slug: "letterheads",
        image: "https://picsum.photos/600/400?random=8",
        description: "Custom letterheads for official use.",
        features: ["Premium paper", "Custom designs", "Fast delivery"],
        subcategories: [] // No subcategories here, just a single service
      }
    ]
  },

  {
    category: "Signage & Marketing Materials",
    services: [
      {
        title: "Banners",
        slug: "banners",
        image: "https://picsum.photos/600/400?random=9",
        description: "Large custom banners for events, exhibitions, and promotions.",
        features: ["Weather-resistant", "Custom sizes", "Bold colors"],
        subcategories: [] // No subcategories here
      },
      {
        title: "Brochures",
        slug: "brochures",
        image: "https://picsum.photos/600/400?random=10",
        description: "High-quality brochures for marketing and promotions.",
        features: ["Full-color printing", "Custom designs", "Fast turnaround"],
        subcategories: [] // No subcategories here
      }
    ]
  },

  // You can add more categories like this...
];
