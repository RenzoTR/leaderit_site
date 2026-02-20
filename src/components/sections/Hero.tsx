import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <Section id="home" className="bg-bg-dark pt-28 text-text-inverse">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            {/* Altere aqui headline/subheadline, botões e imagem */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{siteContent.hero.title}</h1>
            <p className="mt-5 max-w-xl text-base text-text-inverse/80 sm:text-lg">{siteContent.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteContent.links.ctaPrimary} ariaLabel="Comece hoje" variant="secondary">
                Comece hoje
              </Button>
              <Button href={siteContent.links.ctaSecondary} ariaLabel="Falar no WhatsApp" variant="ghost">
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/30 to-primary/30 p-6">
            <div className="rounded-full border-4 border-accent p-6 text-center text-5xl">→</div>
            <ul className="mt-6 space-y-4 text-sm sm:text-base">
              {siteContent.hero.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
