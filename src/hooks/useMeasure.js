import { useState, useRef, useEffect } from 'react';

export const useMeasure = () => {
  const ref = useRef();

  const [ bounds, setBounds ] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [ resizeOb ] = useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  useEffect(() => {
    if (ref.current) {
      resizeOb.observe(ref.current);
    }
    return () => {
      return resizeOb.disconnect();
    }
  }, [resizeOb]);

  return [{ ref }, bounds];
};
