import { createFileRoute } from "@tanstack/react-router";

// Imagem oficial do hero hospedada (elimina travamento de pré-commit da extensão)
const hero = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1280&q=80";

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

const mentoriaBeneficios = [
  {
    titulo: "Diagnóstico de Perfil Individual",
    desc: "Mapeamento minucioso dos seus pontos fortes e identificação prévia de traços que a banca examinadora costuma reprovar.",
  },
  {
    titulo: "Simulação Real de Entrevista",
    desc: "Treino frente a frente simulando a pressão psicológica, postura corporal e as pegadinhas clássicas dos examinadores.",
  },
  {
    titulo: "Correção Ponto a Ponto de Testes",
    desc: "Feedback detalhado sobre seus testes de atenção, raciocínio e questionários de personalidade antes da prova oficial.",
  },
  {
    titulo: "Plano Focado no seu Edital",
    desc: "Direcionamento 100% personalizado para os critérios específicos da PM, Polícia Penal ou Guarda Municipal.",
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
  ["Como funciona a mentoria individual?", "É um acompanhamento exclusivo 1 a 1 com o psicólogo Josué Peruci, focado em destravar suas inseguranças e simular cada etapa da sua avaliação."],
  ["Como recebo o acesso aos cursos gravados?", "Após a compra pela Kiwify, o acesso imediato é liberado no seu e-mail."],
  ["Meu concurso não está na lista. E agora?", "Fale com o Josué pelo WhatsApp para saber qual preparação é ideal para você."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicoconcursos | Preparatório para Avaliação Psicológica Policial" },
      { name: "description", content: "Preparação para a avaliação psicológica em concursos policiais: PM SP, Polícia Penal RS e GCM SP. Com o psicólogo Josué Peruci." },
      { property: "og:title", content: "Psicoconcursos | Avaliação Psicológica Policial" },
      { property: "og:description", content: "Não deixe a avaliação psicológica tirar sua vaga. Preparatórios e mentoria individual com o psicólogo Josué Peruci." },
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
