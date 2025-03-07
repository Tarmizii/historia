
import { Instagram, MessageSquare, Camera } from "lucide-react";

const Contact = () => {
  const contactDirectly = () => {
    window.open("https://wa.me/6282341491347", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-hiistoria-black-light dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Hubungi Kami</h2>
          <p className="section-subheading">
            Konsultasikan kebutuhan fotografi Anda dan pesan jasa kami
          </p>
        </div>

        <div className="max-w-2xl mx-auto fade-in-section">
          <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-6 text-center dark:text-gray-100">
            Informasi Kontak
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <div className="shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-hiistoria-gold/10 border border-hiistoria-gold/30">
                  <Camera className="w-6 h-6 text-hiistoria-gold" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-hiistoria-white mb-1 dark:text-gray-100">Instagram</h4>
                <a 
                  href="https://instagram.com/Hiistoria.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hiistoria-gold hover:underline"
                >
                  @Hiistoria.id
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-hiistoria-gold/10 border border-hiistoria-gold/30">
                  <MessageSquare className="w-6 h-6 text-hiistoria-gold" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-serif text-hiistoria-white mb-1 dark:text-gray-100">WhatsApp</h4>
                <a 
                  href="https://wa.me/6282341491347" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hiistoria-gold hover:underline"
                >
                  +62 823-4149-1347
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={contactDirectly}
              className="flex items-center justify-center gap-2 btn-primary mx-auto px-8"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Hubungi Langsung via WhatsApp</span>
            </button>
            <p className="text-hiistoria-white/60 mt-4 dark:text-gray-400">
              Atau pilih salah satu paket layanan kami di atas untuk melakukan pemesanan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
