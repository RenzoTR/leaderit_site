import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" aria-label="Ir para o início" className="text-lg font-extrabold text-primary">
          {siteContent.brand.name}
        </a>

        {/* Altere aqui os links e CTA */}
        <nav aria-label="Navegação principal" className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-4 md:flex">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button href={siteContent.links.ctaPrimary} ariaLabel="Comece hoje com a LeaderIT">
            Comece hoje
          </Button>
        </nav>
      </Container>
    </header>
  );
}
