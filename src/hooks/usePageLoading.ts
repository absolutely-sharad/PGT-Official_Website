import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoading = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
      return;
    }
    
    // Wait for all resources to load
    const handleLoad = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => setLoading(false), 300);
    };
    
    // Listen for window load event
    window.addEventListener('load', handleLoad);
    
    // Fallback timeout to prevent infinite loading
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, [location.pathname]);

  return loading;
};