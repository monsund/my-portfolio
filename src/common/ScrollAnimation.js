import React, { useRef, useEffect, useState } from 'react';

const ScrollAnimation = ({ children }) => {
  const [animation, setAnimation] = useState('');
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimation('slideUp');
          } else if (entry.boundingClientRect.top < 0) {
            setAnimation('slideDown');
          } else {
            setAnimation('');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={animation}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
