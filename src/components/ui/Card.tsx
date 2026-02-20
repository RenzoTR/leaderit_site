import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <article className={`rounded-xl border border-border bg-surface p-6 shadow-soft ${className}`}>{children}</article>;
}
