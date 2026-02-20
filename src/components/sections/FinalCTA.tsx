import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <Section id="contato" className="bg-bg-dark text-text-inverse">
      <Container>
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-r from-primary/35 to-accent/25 p-8 sm:p-12">
          {/* Altere aqui CTA final */}
          <h2 className="text-3xl font-extrabold sm:text-4xl">{siteContent.finalCta.title}</h2>
          <p className="mt-4 max-w-2xl text-text-inverse/85">{siteContent.finalCta.description}</p>
          <div className="mt-8">
            <Button href={siteContent.links.ctaPrimary} variant="secondary">
              {siteContent.finalCta.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
