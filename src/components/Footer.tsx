
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#121212] py-16 border-t border-gray-500/20 dark:bg-gray-900 dark:border-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 dark:text-white">
              <span className="text-gray-400">HISTORIA</span>.ID
            </h3>
            <p className="text-white/70 mb-6 dark:text-gray-300">
              Studio fotografi profesional yang berdedikasi untuk mengabadikan momen berharga dalam hidup Anda dengan sentuhan seni dan keindahan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/Hiistoria.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white transition-colors dark:border-gray-600/50 dark:text-gray-400"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white transition-colors dark:border-gray-600/50 dark:text-gray-400"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:info@hiistoria.id" 
                className="w-10 h-10 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white transition-colors dark:border-gray-600/50 dark:text-gray-400"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+6282341491347" 
                className="w-10 h-10 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-500 hover:bg-gray-500 hover:text-white transition-colors dark:border-gray-600/50 dark:text-gray-400"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6 dark:text-white">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Foto Engagement
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Foto Prewedding
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Foto Wedding
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Spesial Package
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Cetak Album
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6 dark:text-white">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gray-400 transition-colors dark:text-gray-300">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-500/10 text-center text-white/50 dark:border-gray-700/10 dark:text-gray-400/50">
          <p>&copy; {currentYear} HIISTORIA.ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
