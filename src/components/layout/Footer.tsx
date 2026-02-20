import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-primary">{siteContent.brand.name}</h3>
            <p className="mt-2 text-sm text-muted">{siteContent.brand.tagline}</p>
          </div>

          {/* Altere aqui dados de contato/redes */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{siteContent.footer.email}</li>
              <li>{siteContent.footer.phone}</li>
              <li>{siteContent.footer.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text">Links rápidos</h4>
            <ul className="mt-3 space-y-2">
              {siteContent.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} LeaderIT. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            {siteContent.footer.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
