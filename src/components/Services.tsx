
import { Camera, FileImage, MapPin, Save } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const packages = [
    {
      name: "Engagement",
      price: "Rp 1.800.000",
      description: "Abadikan momen spesial lamaran Anda dengan paket yang lengkap",
      features: [
        {
          icon: <Camera className="w-5 h-5 text-hiistoria-gold" />,
          text: "Unlimited shoot"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "Mini Album (40 lembar foto jumbo)"
        },
        {
          icon: <Save className="w-5 h-5 text-hiistoria-gold" />,
          text: "Semua file dalam flashdisk"
        }
      ]
    },
    {
      name: "Prewedding",
      price: "Rp 2.200.000 - Rp 4.000.000",
      description: "Foto prewedding dengan konsep yang sesuai dengan karakter Anda",
      features: [
        {
          icon: <Camera className="w-5 h-5 text-hiistoria-gold" />,
          text: "Unlimited shoot"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "Album eksklusif & cetak jumbo"
        },
        {
          icon: <MapPin className="w-5 h-5 text-hiistoria-gold" />,
          text: "1-2 lokasi foto"
        }
      ],
      popular: true
    },
    {
      name: "Wedding",
      price: "Rp 2.300.000 - Rp 5.000.000",
      description: "Dokumentasikan pernikahan Anda dengan sentuhan profesional",
      features: [
        {
          icon: <Camera className="w-5 h-5 text-hiistoria-gold" />,
          text: "Unlimited shoot"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "80 - 120 lembar foto jumbo"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "Album eksklusif + frame premium"
        }
      ]
    },
    {
      name: "Spesial Package",
      price: "Rp 8.500.000",
      description: "Paket lengkap untuk dokumentasi wedding dan ngunduh mantu",
      features: [
        {
          icon: <Camera className="w-5 h-5 text-hiistoria-gold" />,
          text: "Foto wedding + ngunduh"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "16-24 inch 2 pcs + frame"
        },
        {
          icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
          text: "Unlimited shoot & fullpress album"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-hiistoria-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Paket Layanan</h2>
          <p className="section-subheading">
            Kami menawarkan berbagai paket untuk memenuhi kebutuhan dokumentasi momen spesial Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                hoveredCard === index 
                  ? "shadow-gold-intense transform -translate-y-2" 
                  : "shadow-lg"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 p-0.5 rounded-lg bg-gold-gradient bg-300% animate-gold-shimmer"></div>
              
              {/* Card content */}
              <div className="relative bg-hiistoria-black-light p-8 rounded-lg h-full flex flex-col">
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-hiistoria-gold text-hiistoria-black text-xs font-bold uppercase py-1 px-3 rounded-bl-lg rounded-tr-lg">
                      Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-hiistoria-gold text-2xl font-bold mb-4">
                  {pkg.price}
                </div>
                <p className="text-hiistoria-white/70 mb-6 flex-grow">
                  {pkg.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <div className="shrink-0 mr-3">
                        {feature.icon}
                      </div>
                      <span className="text-hiistoria-white/80">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#contact" 
                  className={`mt-auto w-full text-center py-3 px-6 rounded transition-all duration-300 ${
                    hoveredCard === index 
                      ? "bg-hiistoria-gold text-hiistoria-black" 
                      : "border border-hiistoria-gold text-hiistoria-gold hover:bg-hiistoria-gold/10"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
