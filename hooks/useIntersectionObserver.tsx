import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = <T extends HTMLElement | null,>(
  elementRef: RefObject<T>,
  options: ObserverOptions = { threshold: 0.1 }
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
