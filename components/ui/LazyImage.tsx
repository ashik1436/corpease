import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string;
  fallbackSrc?: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc = "/images/placeholder.jpg",
  fallbackSrc = "/images/fallback.jpg",
  className = "",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} style={{ position: "relative", display: "inline-block" }}>
      {!loaded && !error && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt="placeholder"
          className={className + " lazy-image-placeholder"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(10px)",
            transition: "opacity 0.3s",
            zIndex: 1,
          }}
        />
      )}
      {isVisible && src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={className + " lazy-image"}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 2,
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          {...props}
        />
      )}
      {error && fallbackSrc && (
        <img
          src={fallbackSrc}
          alt="fallback"
          className={className + " lazy-image-fallback"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 3,
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
