
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-hiistoria-black">
        <Navbar />
        <ScrollToTop />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Faq />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
