import { Calendar, FileImage, MapPin, Save, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
const Services = () => {
  const {
    toast
  } = useToast();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    packageType: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const packages = [{
    name: "Engagement",
    price: "Rp 1.800.000",
    description: "Abadikan momen spesial lamaran Anda dengan paket yang lengkap",
    features: [{
      icon: <Calendar className="w-5 h-5 text-hiistoria-gold bg-[z] bg-transparent" />,
      text: "Unlimited shoot"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "Mini Album (40 lembar foto jumbo)"
    }, {
      icon: <Save className="w-5 h-5 text-hiistoria-gold" />,
      text: "Semua file dalam flashdisk"
    }]
  }, {
    name: "Prewedding",
    price: "Rp 2.200.000 - Rp 4.000.000",
    description: "Foto prewedding dengan konsep yang sesuai dengan karakter Anda",
    features: [{
      icon: <Calendar className="w-5 h-5 text-hiistoria-gold" />,
      text: "Unlimited shoot"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "Album eksklusif & cetak jumbo"
    }, {
      icon: <MapPin className="w-5 h-5 text-hiistoria-gold" />,
      text: "1-2 lokasi foto"
    }],
    popular: true
  }, {
    name: "Wedding",
    price: "Rp 2.300.000 - Rp 5.000.000",
    description: "Dokumentasikan pernikahan Anda dengan sentuhan profesional",
    features: [{
      icon: <Calendar className="w-5 h-5 text-hiistoria-gold" />,
      text: "Unlimited shoot"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "80 - 120 lembar foto jumbo"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "Album eksklusif + frame premium"
    }]
  }, {
    name: "Spesial Package",
    price: "Rp 8.500.000",
    description: "Paket lengkap untuk dokumentasi wedding dan ngunduh mantu",
    features: [{
      icon: <Calendar className="w-5 h-5 text-hiistoria-gold" />,
      text: "Foto wedding + ngunduh"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "16-24 inch 2 pcs + frame"
    }, {
      icon: <FileImage className="w-5 h-5 text-hiistoria-gold" />,
      text: "Unlimited shoot & fullpress album"
    }]
  }];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({
        ...prev,
        date
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const message = `Halo Hiistoria.id, saya ingin memesan paket fotografi:
- Nama: ${formData.name}
- Email: ${formData.email}
- Telepon: ${formData.phone}
- Tanggal Acara: ${format(formData.date, 'dd MMMM yyyy')}
- Paket: ${formData.packageType || selectedPackage?.name}
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
        variant: "default"
      });

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Reset form and close modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        packageType: "",
        location: "",
        message: ""
      });
      setSelectedPackage(null);
    }, 1000);
  };
  const selectPackage = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg);
    setFormData(prev => ({
      ...prev,
      packageType: pkg.name
    }));
  };
  const closeModal = () => {
    setSelectedPackage(null);
  };
  return <section id="services" className="py-20 md:py-28 bg-hiistoria-black-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Paket Layanan</h2>
          <p className="section-subheading">
            Kami menawarkan berbagai paket untuk memenuhi kebutuhan dokumentasi momen spesial Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
          {packages.map((pkg, index) => <div key={index} className={`relative overflow-hidden rounded-lg transition-all duration-500 ${hoveredCard === index ? "shadow-gold-intense transform -translate-y-2" : "shadow-lg"}`} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
              {/* Gradient border effect */}
              <div className="absolute inset-0 p-0.5 rounded-lg bg-gold-gradient bg-300% animate-gold-shimmer"></div>
              
              {/* Card content */}
              <div className="relative bg-hiistoria-black-light p-8 rounded-lg h-full flex flex-col bg-[hiistoria-gold-light] bg-hiistoria-gold">
                {pkg.popular && <div className="absolute top-0 right-0">
                    <div className="text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg rounded-tr-lg bg-[hiistoria-black-light] bg-hiistoria-black">
                      Popular
                    </div>
                  </div>}
                
                <h3 className="text-2xl font-serif font-bold text-hiistoria-white mb-2 dark:text-white">
                  {pkg.name}
                </h3>
                <div className="text-hiistoria-white text-2xl font-bold mb-4 dark:text-white">
                  {pkg.price}
                </div>
                <p className="text-hiistoria-white/70 mb-6 flex-grow dark:text-gray-300">
                  {pkg.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => <div key={fIndex} className="flex items-start bg-[hiistoria-gold-dark] bg-hiistoria-gold">
                      <div className="shrink-0 mr-3">
                        {feature.icon}
                      </div>
                      <span className="text-hiistoria-white/80 dark:text-gray-300">{feature.text}</span>
                    </div>)}
                </div>
                
                <button onClick={() => selectPackage(pkg)} className={`mt-auto w-full text-center py-3 px-6 rounded transition-all duration-300 ${hoveredCard === index ? "bg-hiistoria-gold text-white" : "border border-hiistoria-gold text-white hover:bg-hiistoria-gold/10"}`}>
                  Pilih Paket
                </button>
              </div>
            </div>)}
        </div>
      </div>

      {/* Order Form Modal */}
      {selectedPackage && <div className="fixed inset-0 z-50 overflow-auto bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="relative bg-[#1E1E1E] dark:bg-gray-800 border border-gray-500/30 rounded-lg w-full max-w-3xl overflow-hidden">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-hiistoria-black/60 text-hiistoria-white rounded-full p-2 hover:bg-hiistoria-gold/40 transition-all">
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6 pt-8">
              <div className="mb-8 text-center">
                <span className="inline-block bg-hiistoria-gold/80 text-white text-sm uppercase font-bold py-1 px-4 rounded-full mb-4">
                  {selectedPackage.name}
                </span>
                <h2 className="text-3xl font-serif font-bold text-hiistoria-white mb-2 dark:text-white">
                  Form Pemesanan
                </h2>
                <p className="text-hiistoria-white/70 dark:text-gray-300">
                  Silahkan isi formulir di bawah untuk memesan paket {selectedPackage.name}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-hiistoria-white mb-2 dark:text-gray-200">
                      Nama Lengkap
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-hiistoria-white mb-2 dark:text-gray-200">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-hiistoria-white mb-2 dark:text-gray-200">
                      Nomor Telepon
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white" required />
                  </div>
                  
                  <div>
                    <label className="block text-hiistoria-white mb-2 dark:text-gray-200">
                      Tanggal Acara
                    </label>
                    <div className="relative">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button type="button" className="w-full flex justify-between items-center bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white">
                            {format(formData.date, "dd MMMM yyyy")}
                            <Calendar className="h-4 w-4 opacity-50" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="calendar-popover p-0" align="start">
                          <div className="calendar-wrapper">
                            <CalendarComponent mode="single" selected={formData.date} onSelect={handleDateChange} initialFocus className={cn("p-3")} />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-hiistoria-white mb-2 dark:text-gray-200">
                    Lokasi Acara
                  </label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white" placeholder="Kota atau venue" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-hiistoria-white mb-2 dark:text-gray-200">
                    Pesan
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-hiistoria-black border border-hiistoria-gold/30 rounded-md px-4 py-2 text-hiistoria-white focus:border-hiistoria-gold focus:outline-none focus:ring-1 focus:ring-hiistoria-gold dark:bg-gray-700 dark:text-white" placeholder="Detil tambahan atau pertanyaan..." />
                </div>
                
                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Mengirim...</span>
                    </div> : "Pesan via WhatsApp"}
                </button>
              </form>
            </div>
          </div>
        </div>}
    </section>;
};
export default Services;