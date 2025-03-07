
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [{
    question: "Apakah saya bisa memilih lokasi sendiri untuk pemotretan?",
    answer: "Ya, Anda bisa memilih lokasi yang diinginkan. Jika membutuhkan rekomendasi, tim kami siap membantu memberikan saran lokasi yang sesuai dengan konsep pemotretan Anda."
  }, {
    question: "Apakah ada batasan jumlah foto yang bisa diambil?",
    answer: "Tidak ada batasan, karena semua paket yang kami tawarkan memiliki fitur unlimited shoot. Kami akan mengambil sebanyak mungkin foto untuk memastikan Anda mendapatkan hasil terbaik."
  }, {
    question: "Bagaimana cara mendapatkan file hasil foto?",
    answer: "Semua file hasil foto akan diberikan dalam bentuk digital melalui flashdisk atau Google Drive sesuai dengan preferensi Anda. Kami juga menyediakan opsi cetak foto dalam berbagai format."
  }, {
    question: "Apakah bisa mencetak foto dalam ukuran besar?",
    answer: "Ya, tersedia opsi cetak dengan berbagai ukuran mulai dari ukuran A4 hingga 24 inch dengan frame eksklusif. Kami menggunakan kertas foto premium untuk memastikan kualitas cetak terbaik."
  }, {
    question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil foto?",
    answer: "Untuk foto engagement dan prewedding, hasil editing akan selesai dalam 1-2 minggu. Untuk foto wedding, hasil akan selesai dalam 2-3 minggu tergantung jumlah foto yang diambil."
  }, {
    question: "Apakah fotografer bisa datang ke luar kota?",
    answer: "Ya, tim kami dapat melakukan pemotretan di luar kota dengan biaya tambahan untuk transportasi dan akomodasi yang akan disesuaikan dengan lokasi pemotretan."
  }];
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return <section id="faq" className="py-20 md:py-28 bg-hiistoria-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-heading">Pertanyaan Umum</h2>
          <p className="section-subheading">
            Jawaban untuk pertanyaan yang sering diajukan oleh klien kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto fade-in-section">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-10 overflow-hidden rounded-lg ${
                openIndex === index ? 'bg-hiistoria-black/50' : ''
              } transition-colors duration-300 ${
                index === faqItems.length - 1 ? '' : 'border-b border-hiistoria-gold/20 pb-2'
              }`}
            >
              <button 
                onClick={() => toggleItem(index)} 
                className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none rounded-t-lg hover:bg-hiistoria-gold/5 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-serif font-medium text-hiistoria-white pr-4">
                  {item.question}
                </h3>
                <span className={`flex-shrink-0 text-white ml-4 p-2 rounded-full ${
                  openIndex === index ? 'bg-hiistoria-gold/10' : ''
                }`}>
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-hiistoria-gold/10">
                  <p className="text-hiistoria-white/80 leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Faq;
