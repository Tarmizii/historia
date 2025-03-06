
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Anita & Budi",
      role: "Wedding Client",
      image: "https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?q=80&w=1974",
      quote: "Hasil foto pernikahan kami sangat luar biasa! Tim HIISTORIA.ID sangat profesional dan membantu kami merasa nyaman selama sesi pemotretan. Mereka berhasil menangkap momen-momen spesial dengan sangat indah.",
      rating: 5
    },
    {
      id: 2,
      name: "Maya & Indra",
      role: "Prewedding Client",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1974",
      quote: "Kami sangat puas dengan hasil foto prewedding dari HIISTORIA.ID. Fotografer sangat kreatif dalam mengarahkan pose dan menciptakan konsep yang sesuai dengan kepribadian kami. Hasilnya benar-benar melebihi ekspektasi!",
      rating: 5
    },
    {
      id: 3,
      name: "Rina & Farhan",
      role: "Engagement Client",
      image: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=2070",
      quote: "Berkat HIISTORIA.ID, momen engagement kami terabadikan dengan sangat indah. Tim fotografer sangat ramah dan profesional. Kami mendapatkan banyak pilihan foto yang bagus dan albumnya sangat berkualitas.",
      rating: 4
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-hiistoria-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hiistoria-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Testimoni Klien</h2>
          <p className="section-subheading">
            Apa kata klien tentang pengalaman mereka bersama HIISTORIA.ID
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative fade-in-section">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden min-h-[400px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-500 ${
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-hiistoria-gold">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hiistoria-white mb-1 text-center md:text-left">
                    {testimonial.name}
                  </h3>
                  <p className="text-hiistoria-gold mb-4 text-center md:text-left">
                    {testimonial.role}
                  </p>
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-hiistoria-gold fill-hiistoria-gold" : "text-hiistoria-gold/30"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 glass-card p-8 relative">
                  {/* Quote mark decoration */}
                  <div className="absolute -top-4 -left-4 text-6xl text-hiistoria-gold opacity-20 select-none">
                    "
                  </div>
                  <p className="text-hiistoria-white/80 text-lg italic relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-hiistoria-gold opacity-20 select-none">
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold/10 transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-hiistoria-gold w-6" : "bg-hiistoria-gold/30"
                  }`}
                  disabled={isAnimating}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold/10 transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
