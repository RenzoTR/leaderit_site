import type { Metadata } from 'next';
import './globals.css';

/* Altere aqui metadata SEO global */
export const metadata: Metadata = {
  title: 'LeaderIT | Automação com IA, LGPD e ISO 27001',
  description:
    'Site institucional da LeaderIT com foco em automação com IA, segurança, conformidade LGPD/ISO 27001 e operações sem burocracia.',
  openGraph: {
    title: 'LeaderIT | Inovação e Segurança',
    description: 'Automação inteligente, GRC contínuo e evolução digital com IA.',
    type: 'website',
    locale: 'pt_BR'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
