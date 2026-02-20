import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 ${className}`}
    >
      {children}
    </article>
  )};