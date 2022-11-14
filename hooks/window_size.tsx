import { useState, useEffect } from 'react'

function useWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
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