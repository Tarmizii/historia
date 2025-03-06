
import { useState, FormEvent } from "react";
import { Send, Instagram, MessageSquare, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    packageType: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare WhatsApp message
    const message = `Halo Hiistoria.id, saya ingin memesan paket fotografi:
- Nama: ${formData.name}
- Email: ${formData.email}
- Telepon: ${formData.phone}
- Tanggal Acara: ${formData.date}
- Paket: ${formData.packageType}
- Lokasi: ${formData.location}
- Pesan Tambahan: ${formData.message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/6282341491347?text=${encodeURIComponent(message)}`;
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mengarahkan ke WhatsApp",
        description: "Silahkan lanjutkan pemesanan melalui WhatsApp",
        variant: "default",
      });
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        packageType: "",
        location: "",
        message: ""
      });
    }, 1000);
  };

  const contactDirectly = () => {
    window.open("https://wa.me/6282341491347", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-hiistoria-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Hubungi Kami</h2>
          <p className="section-subheading">
            Konsultasikan kebutuhan fotografi Anda dan pesan jasa kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in-section">
          <div>
            <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-hiistoria-gold/10 border border-hiistoria-gold/30">
                    <Camera className="w-6 h-6 text-hiistoria-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-hiistoria-white mb-1">Instagram</h4>
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
                  <h4 className="text-xl font-serif text-hiistoria-white mb-1">WhatsApp</h4>
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
            
            <div className="glass-card p-6 mt-8">
              <h4 className="text-xl font-serif font-bold text-hiistoria-white mb-4">
                Jam Operasional
              </h4>
              <div className="space-y-2 text-hiistoria-white/80">
                <p className="flex justify-between">
                  <span>Senin - Jumat:</span>
                  <span>09:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sabtu:</span>
                  <span>09:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Minggu:</span>
                  <span>Tutup (kecuali event)</span>
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={contactDirectly}
                className="flex items-center justify-center gap-2 btn-primary w-full"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hubungi Langsung via WhatsApp</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-6">
              Formulir Pemesanan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-hiistoria-white mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-hiistoria-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-hiistoria-white mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-hiistoria-white mb-2">
                    Tanggal Acara
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="packageType" className="block text-hiistoria-white mb-2">
                    Pilihan Paket
                  </label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    required
                  >
                    <option value="" disabled>Pilih paket</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Prewedding">Prewedding</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Spesial Package">Spesial Package</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-hiistoria-white mb-2">
                    Lokasi Acara
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                    placeholder="Kota atau venue"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-hiistoria-white mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold"
                  placeholder="Detil tambahan atau pertanyaan..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-hiistoria-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>{isSubmitting ? "Mengirim..." : "Pesan via WhatsApp"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
