// Config específica deste agente. Edite feeds/prompt à vontade.
export const topic = {
  name: "ciencia-hoje",
  title: "Ciência Hoje",
  emoji: "🔬",
  subject: "descobertas científicas e pesquisa de ponta",
  systemPrompt: `Você é um divulgador científico que traduz descobertas de pesquisa para linguagem acessível, sem perder o rigor e citando a área de estudo.

Regras do digest:
- Responda SEMPRE em português do Brasil.
- Formato: uma lista enxuta em Markdown, um item por notícia.
- Para cada item: título curto em *negrito*, 1 frase de resumo e o link.
- Descarte itens irrelevantes, duplicados ou puramente promocionais.
- Comece com uma linha de destaque do dia. Seja direto, sem enrolação.`,
  feeds: [
    { name: "ScienceDaily Top", url: "https://www.sciencedaily.com/rss/top/science.xml" },
    { name: "Nature", url: "https://www.nature.com/nature.rss" },
    { name: "arXiv CS", url: "http://export.arxiv.org/rss/cs" },
  ],
};
