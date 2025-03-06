
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-hiistoria-black/70 via-hiistoria-black/50 to-hiistoria-black z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537907510278-a6d24870b528?q=80&w=2070')] bg-cover bg-center parallax-bg"></div>
      
      {/* Content wrapper */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-hiistoria-gold uppercase tracking-widest mb-4 font-medium">Studio Fotografi Profesional</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-hiistoria-white mb-6 leading-tight">
            <span className="inline-block relative">
              <span className="relative z-10">HIISTORIA</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-hiistoria-gold"></span>
            </span>
            <span className="text-hiistoria-gold">.ID</span>
          </h1>
          <p className="text-xl md:text-2xl text-hiistoria-white/90 max-w-2xl mx-auto mb-10">
            Capture Your Best Moments with Us
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary">
              Lihat Paket
            </a>
            <a href="#portfolio" className="btn-outline">
              Lihat Portofolio
            </a>
            <a href="#contact" className="btn-ghost">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center">
          <p className="text-hiistoria-white/70 text-sm mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-hiistoria-gold/50 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-hiistoria-gold rounded-full animate-pulse-soft mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
