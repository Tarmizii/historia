
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hiistoria-black/70 via-hiistoria-black/50 to-hiistoria-black z-10"></div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974')] bg-cover bg-center parallax-bg"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 uppercase tracking-widest mb-4 font-medium dark:text-gray-300">Studio Fotografi Profesional</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight dark:text-white">
            <span className="inline-block relative">
              <span className="relative z-10">HISTORIA</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-hiistoria-gold"></span>
            </span>
            <span className="text-gray-400">.ID</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 dark:text-gray-200">
            Capture Your Best Moments with Us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center">
          <p className="text-gray-400/70 text-sm mb-2 dark:text-gray-400">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse-soft mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
