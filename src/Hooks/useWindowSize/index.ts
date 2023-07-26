import { useEffect, useState } from 'react';
import { UseWindowSizeInterface } from './useWindowSizeInterface';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<UseWindowSizeInterface>({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { ...windowSize };
}
