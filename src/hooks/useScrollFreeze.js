import { useLayoutEffect } from 'react';

export const useScrollFreeze = () => {
  const original = window.getComputedStyle(document.body).overflow;
  document.body.style.overflow = "hidden";

  useLayoutEffect(() => {

    return () => {
      // cleanup
      document.body.style.overflow = original;
    };
  }, [original])
};