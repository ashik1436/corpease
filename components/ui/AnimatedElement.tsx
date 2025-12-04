
import React, { useRef, ReactNode, useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'zoomOut';

interface AnimatedElementProps {
  children: ReactNode;
  animationType: AnimationType;
  className?: string;
  delay?: string; // e.g., 'delay-100'
  duration?: string; // e.g., 'duration-700'
  threshold?: number;
  once?: boolean; // default true, animate only once
  style?: React.CSSProperties; // Added style prop
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animationType,
  className = '',
  delay = 'delay-0', // Tailwind class e.g. delay-100
  duration = 'duration-700', // Tailwind class e.g. duration-700
  threshold = 0.1,
  once = true,
  style, // Destructure style prop
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  const getInitialStyles = (type: AnimationType): string => {
    switch (type) {
      case 'fadeIn': return 'opacity-0';
      case 'fadeInUp': return 'opacity-0 translate-y-8';
      case 'fadeInDown': return 'opacity-0 -translate-y-8';
      case 'fadeInLeft': return 'opacity-0 -translate-x-8';
      case 'fadeInRight': return 'opacity-0 translate-x-8';
      case 'zoomIn': return 'opacity-0 scale-90';
      case 'zoomOut': return 'opacity-0 scale-110';
      default: return 'opacity-0';
    }
  };

  const getTargetStyles = (type: AnimationType): string => {
    // All animations aim for opacity-100 and identity transforms
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };
  
  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      if (once) {
        setHasAnimated(true);
      }
    }
  }, [isIntersecting, hasAnimated, once]);

  const shouldApplyTargetStyles = isIntersecting || (once && hasAnimated);

  const transitionClasses = `transition-all ease-out ${duration} ${delay}`;
  const currentAnimationStyles = shouldApplyTargetStyles ? getTargetStyles(animationType) : getInitialStyles(animationType);

  return (
    <div ref={ref} className={`${transitionClasses} ${currentAnimationStyles} ${className}`} style={style}> {/* Apply style prop */}
      {children}
    </div>
  );
};

export default AnimatedElement;
