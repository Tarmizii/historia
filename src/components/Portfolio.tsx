
import { useState } from "react";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974",
      client: "Anita & Budi",
      event: "Wedding Day",
      category: "wedding"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      client: "Clara & Dimas",
      event: "Prewedding",
      category: "prewedding"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070",
      client: "Rina & Farhan",
      event: "Engagement",
      category: "engagement"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974",
      client: "Sinta & Toni",
      event: "Wedding Day",
      category: "wedding"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070",
      client: "Maya & Indra",
      event: "Prewedding",
      category: "prewedding"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134",
      client: "Dewi & Ryan",
      event: "Engagement",
      category: "engagement"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972",
      client: "Laras & Bayu",
      event: "Wedding Day",
      category: "wedding"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925",
      client: "Putri & Joko",
      event: "Prewedding",
      category: "prewedding"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070",
      client: "Ratna & Doni",
      event: "Engagement",
      category: "engagement"
    }
  ];

  const loadMore = () => {
    setVisibleItems(prevCount => Math.min(prevCount + 3, portfolioItems.length));
  };

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Portofolio</h2>
          <p className="section-subheading">
            Beberapa karya terbaik kami dalam mengabadikan momen spesial klien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          {portfolioItems.slice(0, visibleItems).map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              {/* Image container with overlay */}
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={`${item.client} ${item.event}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hiistoria-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-hiistoria-gold/80 text-hiistoria-black text-xs uppercase font-bold py-1 px-3 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-serif font-bold text-hiistoria-white mb-1">
                    {item.client}
                  </h3>
                  <p className="text-hiistoria-gold">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < portfolioItems.length && (
          <div className="text-center mt-12 fade-in-section">
            <button 
              onClick={loadMore}
              className="btn-outline"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
