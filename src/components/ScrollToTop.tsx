
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-hiistoria-black-light border border-hiistoria-gold/30 hover:bg-hiistoria-gold/10 shadow-gold transition-all duration-300 hover:transform hover:scale-110 dark:bg-gray-800"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-hiistoria-gold dark:text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
