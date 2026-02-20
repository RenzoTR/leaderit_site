import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-surface backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Altere aqui a logo do Header */}
        <a href="#home" aria-label="Ir para o início" className="inline-flex items-center">
          <img src="./assets/illustrations/home1.png" alt="LeaderIT" className="h-10 w-auto" />
        </a>

        {/* Altere aqui os links e CTA */}
        <nav aria-label="Navegação principal" className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-4 md:flex">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
