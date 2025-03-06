
import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Check if section is in viewport
        if (sectionTop < windowHeight * 0.85 && sectionBottom > 0) {
          section.classList.add('is-visible');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Trigger once on initial load
    handleScrollAnimations();

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
