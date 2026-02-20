import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  ariaLabel?: string;
};

export function Button({ href, children, variant = 'primary', ariaLabel }: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-text-inverse hover:opacity-90',
    secondary: 'bg-accent text-text-inverse hover:opacity-90',
    ghost: 'border border-border text-text hover:border-primary hover:text-primary'
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
