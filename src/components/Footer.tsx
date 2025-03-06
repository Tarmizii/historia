
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hiistoria-black py-16 border-t border-hiistoria-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-6">
              <span className="text-hiistoria-gold">HIISTORIA</span>.ID
            </h3>
            <p className="text-hiistoria-white/70 mb-6">
              Studio fotografi profesional yang berdedikasi untuk mengabadikan momen berharga dalam hidup Anda dengan sentuhan seni dan keindahan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/Hiistoria.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold hover:text-hiistoria-black transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold hover:text-hiistoria-black transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:info@hiistoria.id" 
                className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold hover:text-hiistoria-black transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+6282341491347" 
                className="w-10 h-10 rounded-full border border-hiistoria-gold/50 flex items-center justify-center text-hiistoria-gold hover:bg-hiistoria-gold hover:text-hiistoria-black transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-hiistoria-white mb-6">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Foto Engagement
                </a>
              </li>
              <li>
                <a href="#services" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Foto Prewedding
                </a>
              </li>
              <li>
                <a href="#services" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Foto Wedding
                </a>
              </li>
              <li>
                <a href="#services" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Spesial Package
                </a>
              </li>
              <li>
                <a href="#services" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Cetak Album
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-hiistoria-white mb-6">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#faq" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-hiistoria-white/70 hover:text-hiistoria-gold transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-hiistoria-gold/10 text-center text-hiistoria-white/50">
          <p>&copy; {currentYear} HIISTORIA.ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
