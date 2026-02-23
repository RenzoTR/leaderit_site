'use client';

import { ReactNode, useEffect, useRef } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.dataset.visible = entry.isIntersecting ? 'true' : 'false';
      },
      {
        threshold: 0.25,
        rootMargin: '-8% 0px -8% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} data-visible="false" className={`py-14 sm:py-20 section-elegant ${className}`}>
      {children}
    </section>
  );
}
