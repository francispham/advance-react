// Utility Hook: Using this hook for converting Class-based components to 
// Functional components before considering re-write everything using useEffect()
import { useEffect } from 'react';

export const useMount = func => {
  useEffect(() => {
    func();
    // eslint-disable-next-line
  }, [])
};

export const useUnmount = func => {
  useEffect(() => {
    return () => {
      func();
    };
  });
};
