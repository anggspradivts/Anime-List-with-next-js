"use client"
import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return width;
};