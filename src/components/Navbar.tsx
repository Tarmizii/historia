
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-hiistoria-black-light backdrop-blur-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-hiistoria-white">
            <span className="text-hiistoria-gold">HIISTORIA</span>.ID
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors"
          >
            Tentang Kami
          </a>
          <a
            href="#services"
            className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors"
          >
            Paket Layanan
          </a>
          <a
            href="#portfolio"
            className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors"
          >
            Portofolio
          </a>
          <a
            href="#faq"
            className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="btn-outline"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-hiistoria-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-hiistoria-black-light backdrop-blur-lg border-b border-hiistoria-gold/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Tentang Kami
            </a>
            <a
              href="#services"
              className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Paket Layanan
            </a>
            <a
              href="#portfolio"
              className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Portofolio
            </a>
            <a
              href="#faq"
              className="text-hiistoria-white/90 hover:text-hiistoria-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="btn-outline inline-block text-center"
              onClick={toggleMenu}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
