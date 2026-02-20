import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Benefits() {
  return (
    <Section id="solucoes" className="bg-bg">
      <Container>
        {/* Altere aqui títulos, ícones e descrições */}
        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center justify-center items-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 text-2xl text-primary">
                ✦
              </div>
              <h2 className="text-3xl font-bold leading-tight">{benefit.title}</h2>
              <p className="mt-4 text-muted">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
