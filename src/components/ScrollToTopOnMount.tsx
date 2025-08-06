import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when component mounts or route changes
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;