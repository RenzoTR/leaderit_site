import { siteContent } from '@/content/content';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function Partners() {
  return (
    <Section id="parceiros" className="bg-gradient-to-r from-accent/70 to-primary/80">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-text">Parceiros oficiais</p>
            <h2 className="mt-2 text-4xl font-extrabold text-text">Empresas que confiam na LeaderIT</h2>
            <p className="mt-4 max-w-md text-lg text-text/80">Potencializamos operações com automação, segurança e governança orientada por IA.</p>
          </div>

          {/* Altere aqui/adicione logos */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {siteContent.partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-lg border border-white/30 bg-white/85 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <img src={partner.logo} alt={`Logo ${partner.name}`} className="h-10 w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
