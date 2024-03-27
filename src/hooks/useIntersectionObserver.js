import { useEffect, useRef } from 'react';

export function useIntersectionObserver({
  callback,
  options,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!bottomRef.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options);

    observer.observe(bottomRef.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return bottomRef;
}