import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-gradient-to-br from-accent/80 to-primary/80">
      <Container>
        <h2 className="text-3xl font-extrabold  text-cyan-700 text-text-inverse sm:text-4xl">Depoimentos reais</h2>

        {/* Altere aqui os depoimentos */}
        <div className="mt-8 grid gap-5 md:grid-cols-3 ">
          {siteContent.testimonials.map((item) => (
            <Card key={item.company} className="bg-white/95">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-text">“{item.text}”</p>
              <p className="mt-4 text-sm font-semibold text-muted">{item.author}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
