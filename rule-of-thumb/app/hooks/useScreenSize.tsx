import { useState, useEffect } from 'react';

function useScreenSize(): 'lg' | 'md' | 'sm' {
  const [screenSize, setScreenSize] = useState<'lg' | 'md' | 'sm'>('lg');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('sm');
      } else if (width < 992) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export default useScreenSize;