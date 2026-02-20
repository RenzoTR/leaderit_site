import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function Editorial() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight sm:text-6xl">{siteContent.editorial.title}</h2>
            {/* Altere aqui a imagem do bloco editorial */}
            <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/30 p-6">
              <img src="./assets/illustrations/xxx.png" alt="Ilustração de inovação" className="w-full" />
            </div>
          </div>

          {/* Altere aqui os tópicos e textos */}
          <div className="space-y-7">
            {siteContent.editorial.topics.map((topic, index) => (
              <div key={topic.title} className={index < siteContent.editorial.topics.length - 1 ? 'border-b border-border pb-6' : ''}>
                <h3 className="text-4xl font-semibold leading-tight">{topic.title}</h3>
                <p className="mt-3 text-lg text-muted">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
