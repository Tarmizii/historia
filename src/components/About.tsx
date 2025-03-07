
import { Camera, Save, FileImage, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-hiistoria-gold" />,
      title: "Unlimited Shoot",
      description: "Ambil foto sebanyak mungkin tanpa batasan."
    },
    {
      icon: <Save className="w-8 h-8 text-hiistoria-gold" />,
      title: "File Digital Lengkap",
      description: "Semua hasil foto diberikan dalam Flashdisk atau Google Drive."
    },
    {
      icon: <FileImage className="w-8 h-8 text-hiistoria-gold" />,
      title: "Album Eksklusif",
      description: "Pilihan cetak dengan mini album, fullpress album, dan frame premium."
    },
    {
      icon: <MapPin className="w-8 h-8 text-hiistoria-gold" />,
      title: "Lokasi Fleksibel",
      description: "Bisa memilih 1 atau lebih lokasi untuk pemotretan."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Tentang Kami</h2>
          <p className="section-subheading">
            HIISTORIA.ID adalah studio fotografi profesional yang berdedikasi untuk mengabadikan momen berharga dalam hidup Anda dengan sentuhan seni dan keindahan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-section">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568992124313-3893e25e0311?q=80&w=1974" 
                alt="Behind the scenes photoshoot"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-video rounded-lg overflow-hidden border-4 border-hiistoria-black shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070" 
                alt="Professional photography"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="fade-in-section">
            <h3 className="text-3xl font-serif font-bold text-hiistoria-white mb-6">
              Pengalaman & Keahlian
            </h3>
            <p className="text-hiistoria-white/80 mb-6">
              Dengan pengalaman lebih dari 5 tahun dalam industri fotografi pernikahan dan acara spesial, kami memahami betapa pentingnya mengabadikan momen berharga dalam hidup Anda. Tim fotografer profesional kami tidak hanya fokus pada teknik fotografi yang sempurna, tetapi juga menciptakan suasana yang nyaman sehingga momen alami dapat tertangkap dengan indah.
            </p>
            <p className="text-hiistoria-white/80 mb-8">
              Kami percaya bahwa setiap pasangan memiliki cerita unik, dan misi kami adalah mengabadikan cerita tersebut melalui lensa kami dengan pendekatan yang artistik namun tetap autentik.
            </p>
            
            <a href="#services" className="btn-primary">Lihat Layanan Kami</a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-section">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 hover:shadow-gold transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-hiistoria-gold/10 border border-hiistoria-gold/30">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-hiistoria-gold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-hiistoria-white/70 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
