import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

const WHATS = "https://wa.link/kbrduc";
const INSTA = "https://www.instagram.com/psicoconcursos";
const AVATAR =
  "https://ugc.production.linktr.ee/460e392e-ea64-4cc9-b09b-a3214d090b2c_foto.jpeg";

const cursos = [
  {
    tag: "PM SP",
    titulo: "Polícia Militar de São Paulo",
    link: "https://pay.kiwify.com.br/i1EBtRR",
  },
  {
    tag: "Polícia Penal RS",
    titulo: "Polícia Penal do Rio Grande do Sul",
    link: "https://pay.kiwify.com.br/ylnsRRU",
  },
  {
    tag: "GCM SP",
    titulo: "Guarda Civil Metropolitana de São Paulo",
    link: "https://pay.kiwify.com.br/3O6qO7h",
  },
];

const beneficios = [
  ["Conheça os testes", "Entenda como funcionam os testes de atenção, memória, raciocínio e personalidade."],
  ["Treine com método", "Exercícios práticos no formato cobrado pelas bancas dos concursos policiais."],
  ["Controle a ansiedade", "Estratégias para chegar no dia da prova calmo, focado e confiante."],
  ["Orientação de psicólogo", "Conteúdo feito por quem entende de avaliação psicológica de verdade."],
];

const faq = [
  ["Dá para se preparar para a avaliação psicológica?", "Sim. Conhecer os tipos de teste e treinar o formato reduz o nervosismo e evita erros comuns de quem chega despreparado."],
  ["Como recebo o acesso?", "Após a compra pela Kiwify, o acesso é liberado no seu e-mail."],
  ["Meu concurso não está na lista. E agora?", "Fale com o Josué pelo WhatsApp para saber qual preparação é ideal para você."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicoconcursos | Preparatório para Avaliação Psicológica Policial" },
      { name: "description", content: "Preparação para a avaliação psicológica em concursos policiais: PM SP, Polícia Penal RS e GCM SP. Com o psicólogo Josué Peruci." },
      { property: "og:title", content: "Psicoconcursos | Avaliação Psicológica Policial" },
      { property: "og:description", content: "Não deixe a avaliação psicológica tirar sua vaga. Preparatórios para PM SP, Polícia Penal RS e GCM SP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 font-display text-xl tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="font-sans">
      {/* Topo */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">@psicoconcursos</p>
            <h1 className="font-display text-6xl leading-[0.95] md:text-7xl">
              Não deixe a <span className="text-gold-gradient">avaliação psicológica</span> tirar a sua vaga
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Preparatório para a avaliação psicológica em concursos policiais, com o psicólogo Josué Peruci.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="#cursos">Escolher meu preparatório</Cta>
              <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border border-border px-6 py-4 font-semibold hover:border-primary">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <img src={hero} alt="Candidato a concurso policial" width={1280} height={1280} className="w-full rounded-sm" />
        </div>
      </section>

      {/* Dor */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-display text-5xl">Você estudou meses. Passou na objetiva. No TAF.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            E então chega a avaliação psicológica — a etapa que mais elimina candidatos por puro desconhecimento dos testes.
            Não conte com a sorte na fase final.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-5xl">O que você vai <span className="text-gold-gradient">dominar</span></h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(([t, d], i) => (
            <div key={t} className="rounded-sm border border-border bg-card p-6">
              <span className="font-display text-4xl text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-5xl">Escolha o seu concurso</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cursos.map((c) => (
              <div key={c.tag} className="flex flex-col rounded-sm border border-border bg-background p-8 transition hover:border-primary">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Preparatório</span>
                <h3 className="mt-3 font-display text-4xl">{c.tag}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{c.titulo} — Avaliação Psicológica</p>
                <div className="mt-8">
                  <Cta href={c.link}>Quero me preparar</Cta>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-[240px_1fr]">
        <img src={AVATAR} alt="Josué Peruci" loading="lazy" className="aspect-square w-60 rounded-full border-4 border-primary object-cover" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Quem vai te preparar</p>
          <h2 className="mt-2 font-display text-5xl">Josué Peruci, psicólogo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Especialista em preparação para a avaliação psicológica de concursos policiais. Ajuda candidatos a entender
            cada teste e chegar na etapa final com segurança.
          </p>
          <a href={INSTA} target="_blank" rel="noreferrer" className="mt-4 inline-block font-semibold text-primary underline-offset-4 hover:underline">
            Siga @psicoconcursos no Instagram →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-5xl">Perguntas frequentes</h2>
          <div className="mt-10 space-y-4">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-sm border border-border bg-background p-5">
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-6xl">A farda está a <span className="text-gold-gradient">uma etapa</span> de você</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Cta href="#cursos">Começar agora</Cta>
          <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border border-border px-6 py-4 font-semibold hover:border-primary">
            Tirar dúvidas no WhatsApp
          </a>
        </div>
        <p className="mt-16 text-sm text-muted-foreground">© {new Date().getFullYear()} Psicoconcursos · Josué Peruci</p>
      </section>
    </main>
  );
}
