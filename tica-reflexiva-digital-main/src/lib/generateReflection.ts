// Reflexões reais das aulas de Ética Profissional — Ano letivo 2025/2026

const reflections: Record<number, string> = {
  1: "Percebi a importância da Ética na disciplina e no dia a dia. Aprendi que saber dizer \"não\" é importante para não prejudicar o nosso futuro e mantermos autonomia nas nossas decisões.",
  2: "Compreendi a diferença entre ética e moral e como a ética ajuda a refletir sobre as ações humanas. Os casos de experiências médicas mostraram a importância do consentimento e do respeito pela dignidade humana.",
  3: "Refleti sobre como diferentes culturas têm costumes distintos e percebi que nem tudo o que é normal numa sociedade é automaticamente ético. É importante analisar antes de julgar.",
  4: "A visualização do documentário ajudou-me a perceber a complexidade dos dilemas éticos e a responsabilidade das decisões em situações reais.",
  5: "Percebi que a ética também está presente na forma como interagimos e colaboramos com os outros, exigindo respeito e responsabilidade.",
  6: "Refleti sobre a importância da comunicação e da organização, percebendo que agir de forma ética também inclui contribuir de forma equilibrada.",
  7: "Compreendi que situações de vulnerabilidade aumentam a responsabilidade moral das decisões e que pequenas escolhas podem ter grandes consequências.",
  8: "Percebi que nem sempre os resultados saem como esperado e que é importante aprender a lidar com imprevistos de forma responsável.",
  9: "Observei a importância do debate de ideias e como diferentes perspetivas ajudam a desenvolver o pensamento crítico.",
  10: "Refleti sobre a igualdade e a justiça, percebendo que nem sempre tratar todos da mesma forma é o mais justo.",
  11: "Compreendi melhor como diferentes opiniões podem ser debatidas de forma construtiva e respeitosa.",
  12: "A autoavaliação ajudou-me a refletir sobre o meu percurso e a importância de reconhecer o meu próprio desenvolvimento.",
  13: "Percebi como é importante analisar dilemas éticos e pensar nas consequências das nossas decisões.",
  14: "Refleti sobre o valor do voto e da participação democrática, percebendo a importância da responsabilidade individual.",
  15: "Compreendi que o mundo do trabalho exige regras e responsabilidade na forma como lidamos com informação e pessoas.",
  16: "Percebi que existem diferentes formas de orientar o comportamento profissional, através de códigos e normas.",
  17: "Refleti sobre a importância da ética nas empresas e na igualdade de tratamento entre pessoas.",
  18: "Percebi que esclarecer dúvidas e ouvir diferentes opiniões ajuda a melhorar a compreensão dos conteúdos.",
  19: "Compreendi que a ética profissional varia consoante o contexto e as regras de cada instituição.",
  20: "Refleti sobre a importância de melhorar continuamente o trabalho e de procurar sempre evoluir.",
  21: "Percebi que existem diferentes formas de apresentar ideias e que isso influencia a forma como o trabalho é recebido.",
  22: "Compreendi a importância de desenvolver competências equilibradas: saber, saber fazer e saber ser.",
  23: "Refleti sobre a importância da autoavaliação para identificar pontos fortes e aspetos a melhorar.",
  24: "Percebi que a preparação para o mundo do trabalho exige responsabilidade, comunicação e confiança.",
  25: "Compreendi que a organização e a estrutura são essenciais para criar um bom currículo.",
  26: "Refleti novamente sobre a importância de estar preparado para o mercado de trabalho e desenvolver competências pessoais.",
  27: "Percebi que a ética é fundamental nas relações profissionais e influencia diretamente o comportamento e as decisões.",
  28: "As entrevistas realizadas ao longo das aulas permitiram-me compreender melhor a importância da ética no contexto profissional e pessoal, mostrando que as decisões que tomamos no dia a dia não dependem apenas de regras, mas também de valores e responsabilidade individual.\n\nUma ideia que se destacou foi a noção de que a ética funciona como uma orientação para as nossas ações, ajudando-nos a distinguir o que é correto do que não é. Isto fez-me perceber que, em muitas situações, não existem respostas totalmente certas ou erradas, mas sim escolhas que devem ser pensadas com cuidado, tendo em conta as consequências.\n\nTambém achei interessante perceber que diferentes profissionais valorizam aspetos distintos, mas todos acabam por concordar na importância do respeito, da honestidade e da responsabilidade. Isto mostra que, independentemente da área de trabalho, existem princípios éticos comuns que ajudam a manter relações saudáveis e justas.\n\nOutro ponto importante foi a ideia de que o conhecimento técnico, por si só, não é suficiente. Para além de \"saber\" e \"saber fazer\", é essencial \"saber ser\", ou seja, ter atitudes corretas perante os outros, saber comunicar e agir com empatia. Esta reflexão ajudou-me a perceber que o comportamento tem um peso tão importante quanto as competências técnicas.\n\nNo geral, as entrevistas fizeram-me refletir sobre a forma como lido com as minhas próprias decisões e atitudes. Percebi que a ética não é algo distante ou apenas teórico, mas sim algo presente em todas as ações do quotidiano, especialmente nas relações com os outros e nas escolhas que fazemos para o futuro.",
};

export function generateReflection(lessonNumber: number, _summary: string): string {
  return reflections[lessonNumber] ?? "Reflexão não disponível para esta aula.";
}
