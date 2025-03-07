import { useState } from "react";
import { Camera, Users, Calendar, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Portfolio = () => {
  const {
    toast
  } = useToast();
  const [visibleItems, setVisibleItems] = useState(6);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  const portfolioItems = [{
    id: 1,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974",
    client: "Anita & Budi",
    event: "Wedding Day",
    category: "wedding",
    location: "Jogja",
    date: "12 Juni 2023",
    galleryImages: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974", "https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070", "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974", "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134"]
  }, {
    id: 2,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    client: "Clara & Dimas",
    event: "Prewedding",
    category: "prewedding",
    location: "Bali",
    date: "5 Mei 2023",
    galleryImages: ["https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", "https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925", "https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070", "https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070"]
  }, {
    id: 3,
    image: "https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070",
    client: "Rina & Farhan",
    event: "Engagement",
    category: "engagement",
    location: "Jakarta",
    date: "20 April 2023",
    galleryImages: ["https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070", "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972", "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", "https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925"]
  }, {
    id: 4,
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974",
    client: "Sinta & Toni",
    event: "Wedding Day",
    category: "wedding",
    location: "Surabaya",
    date: "7 Juli 2023",
    galleryImages: ["https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070", "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974", "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134"]
  }, {
    id: 5,
    image: "https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070",
    client: "Maya & Indra",
    event: "Prewedding",
    category: "prewedding",
    location: "Bandung",
    date: "15 Agustus 2023",
    galleryImages: ["https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070", "https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925", "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070"]
  }, {
    id: 6,
    image: "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134",
    client: "Dewi & Ryan",
    event: "Engagement",
    category: "engagement",
    location: "Semarang",
    date: "3 September 2023",
    galleryImages: ["https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134", "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974", "https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070", "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"]
  }, {
    id: 7,
    image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972",
    client: "Laras & Bayu",
    event: "Wedding Day",
    category: "wedding",
    location: "Yogyakarta",
    date: "11 Oktober 2023",
    galleryImages: ["https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972", "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134", "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070"]
  }, {
    id: 8,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925",
    client: "Putri & Joko",
    event: "Prewedding",
    category: "prewedding",
    location: "Solo",
    date: "25 November 2023",
    galleryImages: ["https://images.unsplash.com/photo-1591604129939-f1efa4d2cf9b?q=80&w=1925", "https://images.unsplash.com/photo-1606216794074-735e91efe6c2?q=80&w=2070", "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?q=80&w=1972", "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"]
  }, {
    id: 9,
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070",
    client: "Ratna & Doni",
    event: "Engagement",
    category: "engagement",
    location: "Malang",
    date: "8 Desember 2023",
    galleryImages: ["https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070", "https://images.unsplash.com/photo-1594106345865-e7d16b880857?q=80&w=2070", "https://images.unsplash.com/photo-1549417229-7686ac5595fd?q=80&w=2134", "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974"]
  }];
  const loadMore = () => {
    setVisibleItems(prevCount => Math.min(prevCount + 3, portfolioItems.length));
  };
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleItems(6); // Reset visible items when changing categories
  };
  const filteredItems = activeCategory === "all" ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);
  const viewOnWhatsApp = (clientName: string, eventType: string) => {
    toast({
      title: "Opening Portfolio",
      description: `Viewing ${eventType} portfolio for ${clientName}`
    });
  };
  const openPortfolioDetail = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
  };
  const closePortfolioDetail = () => {
    setSelectedItem(null);
  };
  return <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Portofolio</h2>
          <p className="section-subheading">
            Beberapa karya terbaik kami dalam mengabadikan momen spesial klien
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-section">
          <button onClick={() => filterByCategory('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'all' ? 'bg-hiistoria-gold text-hiistoria-black' : 'bg-hiistoria-black-light border border-hiistoria-gold/30 text-hiistoria-white hover:bg-hiistoria-gold/10'}`}>
            Semua
          </button>
          <button onClick={() => filterByCategory('engagement')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'engagement' ? 'bg-hiistoria-gold text-hiistoria-black' : 'bg-hiistoria-black-light border border-hiistoria-gold/30 text-hiistoria-white hover:bg-hiistoria-gold/10'}`}>
            Engagement
          </button>
          <button onClick={() => filterByCategory('prewedding')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'prewedding' ? 'bg-hiistoria-gold text-hiistoria-black' : 'bg-hiistoria-black-light border border-hiistoria-gold/30 text-hiistoria-white hover:bg-hiistoria-gold/10'}`}>
            Prewedding
          </button>
          <button onClick={() => filterByCategory('wedding')} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'wedding' ? 'bg-hiistoria-gold text-hiistoria-black' : 'bg-hiistoria-black-light border border-hiistoria-gold/30 text-hiistoria-white hover:bg-hiistoria-gold/10'}`}>
            Wedding
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          {filteredItems.slice(0, visibleItems).map(item => <div key={item.id} className="group relative overflow-hidden rounded-lg glass-card border border-gray-500/20 cursor-pointer" onClick={() => openPortfolioDetail(item)}>
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img src={item.image} alt={`${item.client} ${item.event}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-hiistoria-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4">
                  <span className="bg-hiistoria-gold/80 text-xs uppercase font-bold py-1 px-3 rounded-full text-zinc-200">
                    {item.category}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">
                    {item.client}
                  </h3>
                  <p className="text-white mb-4">{item.event}</p>
                  
                  <div className="space-y-2 mb-4 opacity-80 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white">{item.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-white" />
                      <span className="text-white">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {visibleItems < filteredItems.length && <div className="text-center mt-12 fade-in-section">
            <button onClick={loadMore} className="btn-outline">
              Lihat Lebih Banyak
            </button>
          </div>}
      </div>

      {selectedItem && <div className="fixed inset-0 z-50 overflow-auto bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="relative bg-[#1E1E1E] border border-gray-500/30 rounded-lg w-full max-w-5xl overflow-hidden max-h-[90vh] flex flex-col">
            <button onClick={closePortfolioDetail} className="absolute top-4 right-4 z-10 bg-hiistoria-black/60 text-hiistoria-white rounded-full p-2 hover:bg-hiistoria-gold/40 transition-all">
              <X className="w-6 h-6" />
            </button>
            
            <div className="overflow-y-auto p-6 pt-8">
              <div className="mb-8 text-center">
                <span className="inline-block bg-hiistoria-gold/80 text-hiistoria-black text-sm uppercase font-bold py-1 px-4 rounded-full mb-4">
                  {selectedItem.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                  {selectedItem.client}
                </h2>
                <p className="text-xl text-gray-500">{selectedItem.event}</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-white-off">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <span>{selectedItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-white" />
                    <span>{selectedItem.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedItem.galleryImages.map((img, index) => <div key={index} className="overflow-hidden rounded-lg">
                    <img src={img} alt={`${selectedItem.client} gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>)}
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default Portfolio;