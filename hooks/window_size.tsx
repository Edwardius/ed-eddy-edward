import { useState, useEffect } from 'react'

function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  
  return {
    width,
    height
  };
}

export default function getWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(useWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(useWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
