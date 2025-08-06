import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 200);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Try multiple methods for maximum compatibility
    if (document.documentElement.scrollTop !== 0) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body.scrollTop !== 0) {
      document.body.scrollTop = 0;
    }
    
    // Also try smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 10000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#FC5810',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#E63D1F';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#FC5810';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;