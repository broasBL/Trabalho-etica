// Sumários reais das aulas de Ética Profissional — Ano letivo 2025/2026
// Colégio Internato dos Carvalhos · 12.º-IF · Prof. Diana Tavares

export interface ResearchSection {
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
  conclusion?: string;
  image?: { src: string; alt: string; caption?: string };
}

export interface Research {
  title: string;
  intro?: string;
  cover?: { src: string; alt: string; caption?: string };
  sections: ResearchSection[];
  finalConclusion?: string;
}

export interface Lesson {
  number: number;
  date?: string;
  summary: string;
  research?: Research[];
}

// ---------- Trabalho de pesquisa: Sati (Aula 3) ----------
const satiResearch: Research = {
  title: "Trabalho de Pesquisa — O Sati",
  intro:
    "O Sati (ou suttee) é uma prática histórica associada a algumas comunidades da Índia antiga e medieval, na qual a viúva de um homem falecido era pressionada ou, em certos casos, forçada a morrer junto ao corpo do marido, tradicionalmente numa pira funerária. Esta prática tornou-se um dos temas mais debatidos na história da ética, dos direitos humanos e das tradições culturais. O objetivo deste trabalho é compreender o que foi o Sati, as suas origens, o contexto social em que existia, e os motivos que levaram à sua abolição.",
  cover: {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    alt: "Templo indiano ao amanhecer",
    caption: "Índia · contexto cultural e religioso da prática do Sati",
  },
  sections: [
    {
      title: "1. Origem e significado do Sati",
      paragraphs: [
        "A palavra \"Sati\" tem origem no sânscrito e está associada à ideia de \"mulher virtuosa\" ou \"esposa devota\". Na mitologia hindu, Sati também é o nome de uma deusa que se sacrificou por amor e lealdade ao seu marido, Shiva. Esta narrativa foi usada, ao longo do tempo, como base simbólica para justificar a prática.",
      ],
      bullets: [
        "O Sati não era uma obrigação universal na cultura hindu.",
        "A prática variava muito entre regiões e períodos históricos.",
        "Muitas comunidades nunca a aceitaram.",
      ],
    },
    {
      title: "2. Contexto histórico e social",
      subtitle: "Fatores que contribuíram para a sua existência",
      paragraphs: [
        "O Sati surgiu e foi mais frequente em certos contextos sociais específicos, especialmente em períodos de instabilidade política e social na Índia. Em alguns casos, há registos de que a prática não era totalmente voluntária, havendo forte pressão social, o que levanta questões éticas graves.",
      ],
      bullets: [
        "Estrutura patriarcal forte, onde a mulher tinha pouco poder social ou económico.",
        "Dependência da mulher em relação ao marido para proteção e estatuto social.",
        "Pressão comunitária e honra familiar, onde a viúva podia ser vista como um \"peso\" social.",
        "Interpretações religiosas distorcidas, usadas para justificar a prática.",
      ],
    },
    {
      title: "3. Dimensão religiosa e cultural",
      image: {
        src: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1000&q=80",
        alt: "Mulher indiana em traje tradicional",
        caption: "A viúva ocupava uma posição extremamente vulnerável na sociedade tradicional.",
      },
      paragraphs: [
        "Embora algumas justificações tenham sido feitas com base em tradições religiosas, muitos estudiosos defendem que o Sati não é uma exigência religiosa do hinduismo.",
      ],
      bullets: [
        "Textos religiosos foram muitas vezes interpretados de forma seletiva.",
        "A prática foi mais cultural e social do que religiosa.",
        "Houve sempre oposição dentro da própria sociedade indiana.",
      ],
      conclusion:
        "Isto mostra que nem todas as práticas culturais têm uma base religiosa sólida, mesmo quando são apresentadas como tal.",
    },
    {
      title: "4. Abolição do Sati",
      paragraphs: [
        "Durante o período colonial britânico na Índia, começaram a surgir debates intensos sobre a prática. Em 1829, o governador britânico Lord William Bentinck proibiu oficialmente o Sati em grande parte da Índia sob controlo britânico.",
        "A lei foi reforçada na Índia independente. Atualmente, o Sati é ilegal e considerado crime na Índia. Apesar disso, houve alguns casos isolados registados no século XX, o que levou a medidas legais mais rigorosas.",
      ],
    },
    {
      title: "5. Análise ética do Sati",
      subtitle: "Liberdade, dignidade e tradição",
      bullets: [
        "Liberdade e consentimento: em muitos casos, a pressão social tornava a escolha da mulher inexistente.",
        "Dignidade humana: todas as pessoas têm direito à vida e à dignidade, independentemente do estatuto social.",
        "Tradição vs. direitos humanos: a ética moderna tende a priorizar a proteção da vida e da liberdade individual.",
      ],
      conclusion:
        "O Sati mostra um conflito entre manter tradições culturais e respeitar direitos humanos universais.",
    },
    {
      title: "6. Impacto e reflexão atual",
      image: {
        src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1000&q=80",
        alt: "Margens do rio Ganges",
        caption: "Cultura e direitos humanos: um equilíbrio difícil mas necessário.",
      },
      bullets: [
        "Como tradições podem ser questionadas ao longo do tempo.",
        "A evolução dos direitos das mulheres.",
        "A importância da ética na avaliação de práticas culturais.",
      ],
      conclusion:
        "Hoje, o Sati é visto globalmente como uma prática violadora dos direitos humanos e um exemplo de como a ética pode evoluir com a sociedade.",
    },
  ],
  finalConclusion:
    "O Sati foi uma prática complexa, ligada a fatores culturais, sociais e históricos, mas que atualmente é rejeitada por quase todas as sociedades modernas devido à sua incompatibilidade com os direitos humanos. O seu estudo permite refletir sobre a importância de analisar criticamente as tradições e compreender que nem tudo o que é culturalmente aceite é eticamente correto.",
};
// ---------- Trabalho complementar: Análise das entrevistas (Aula 28) ----------
const entrevistaResearch: Research = {
  title: "Análise detalhada — A entrevista de emprego",
  intro:
    "A partir das entrevistas realizadas no âmbito dos módulos 3 e 4, organizei uma análise sobre o que distingue uma boa entrevista de emprego de uma má, ligando-a aos objetivos do Capítulo V.",
  cover: {
    src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1200&q=80",
    alt: "Entrevista de emprego entre duas pessoas",
    caption: "A entrevista é, muitas vezes, o primeiro contacto real com o mundo profissional.",
  },
  sections: [
    {
      title: "1. Postura corporal",
      bullets: [
        "Costas direitas, ombros descontraídos, mãos visíveis em cima da mesa.",
        "Contacto visual estável, sem fixar de forma intimidante.",
        "Aperto de mão firme, mas curto, no início e no fim.",
        "Evitar braços cruzados, pernas trémulas ou olhar para o chão.",
      ],
      conclusion:
        "A postura comunica antes das palavras: transmite segurança, respeito e disponibilidade para escutar.",
    },
    {
      title: "2. Linguagem verbal e não verbal",
      paragraphs: [
        "A linguagem verbal deve ser clara, calma e adaptada ao contexto profissional, evitando calão e respostas demasiado curtas (“sim”, “não”) sem justificação.",
        "A linguagem não verbal — expressões faciais, tom de voz, gestos — tem de acompanhar o que se diz. Um candidato que afirma estar motivado mas mantém uma expressão apática transmite uma mensagem contraditória.",
      ],
    },
    {
      title: "3. Erros mais comuns",
      bullets: [
        "Chegar atrasado ou demasiado cedo (mais de 15 minutos antes).",
        "Não conhecer minimamente a empresa.",
        "Falar mal de antigos empregadores ou colegas.",
        "Mentir sobre experiências ou competências.",
        "Olhar constantemente para o telemóvel ou para o relógio.",
      ],
    },
    {
      title: "4. Importância da confiança",
      image: {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&q=80",
        alt: "Aperto de mão profissional",
        caption: "Confiança não é arrogância: é acreditar no que se sabe fazer.",
      },
      paragraphs: [
        "A confiança não se finge — constrói-se com preparação. Saber o que se vai dizer, conhecer o próprio CV de cor e ter respostas pensadas para perguntas difíceis reduz drasticamente o nervosismo.",
        "Um candidato confiante reconhece também aquilo que ainda não sabe e mostra abertura para aprender, em vez de tentar impressionar com respostas vagas.",
      ],
    },
    {
      title: "5. Preparação antes da entrevista",
      bullets: [
        "Investigar a empresa: história, missão, valores e área de atuação.",
        "Reler com atenção o anúncio e identificar as competências pedidas.",
        "Preparar exemplos concretos das próprias experiências (escola, estágio, voluntariado).",
        "Escolher uma roupa adequada ao contexto, nem demasiado formal nem informal.",
        "Levar cópias do CV e, se for o caso, do portefólio.",
      ],
    },
    {
      title: "6. Exemplos de perguntas frequentes",
      bullets: [
        "“Fale-me um pouco sobre si.”",
        "“Porquê esta empresa e não outra?”",
        "“Quais considera serem os seus pontos fortes e fracos?”",
        "“Onde se vê daqui a cinco anos?”",
        "“Conte-me uma situação em que teve de lidar com um conflito.”",
        "“Tem alguma pergunta para nós?”",
      ],
      conclusion:
        "A última pergunta é, talvez, a mais reveladora: mostrar curiosidade pela empresa demonstra interesse real pela vaga.",
    },
  ],
  finalConclusion:
    "Mais do que “responder bem”, uma entrevista é um exercício de coerência entre o que se diz, como se diz e quem se é. É aqui que a Ética Profissional ganha corpo: ser honesto, respeitar o entrevistador e apresentar-se com autenticidade vale mais do que qualquer resposta decorada.",
};

// ---------- Trabalho de pesquisa: PETA (Aula 28) ----------
const petaResearch: Research = {
  title: "Trabalho de Pesquisa — A organização PETA",
  intro:
    "A PETA (People for the Ethical Treatment of Animals) é uma organização internacional dedicada à defesa dos direitos dos animais. Fundada em 1980, tornou-se uma das maiores e mais conhecidas organizações de ativismo animal no mundo. O seu principal objetivo é acabar com o uso de animais em áreas como alimentação, vestuário, investigação científica e entretenimento. Este trabalho tem como objetivo analisar a história da PETA, os seus objetivos, as suas ações, conquistas e também as principais críticas que recebe.",
  cover: {
    src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200&q=80",
    alt: "Vários animais lado a lado",
    caption: "PETA · uma das maiores organizações pelos direitos dos animais do mundo.",
  },
  sections: [
    {
      title: "1. História da PETA",
      paragraphs: [
        "A PETA foi fundada em 1980 por Ingrid Newkirk e Alex Pacheco, nos Estados Unidos. A organização surgiu inspirada por ideias do filósofo Peter Singer, especialmente o conceito de que os animais devem ser tratados com consideração moral.",
        "Um dos primeiros casos que deu notoriedade à PETA foi a investigação de testes em animais em laboratórios, que ajudou a expor práticas consideradas cruéis e pouco regulamentadas na época. Desde então, a organização expandiu-se globalmente e tornou-se uma das principais vozes do movimento pelos direitos dos animais.",
      ],
    },
    {
      title: "2. Objetivos da PETA",
      paragraphs: [
        "A PETA baseia-se na ideia de que os animais não devem ser explorados pelos seres humanos e defende que os animais têm interesses próprios e devem ser protegidos contra sofrimento desnecessário.",
      ],
      bullets: [
        "Eliminar testes em animais na indústria e ciência.",
        "Acabar com a indústria de peles e couro.",
        "Reduzir ou abolir o consumo de produtos de origem animal.",
        "Combater o uso de animais em circos, zoológicos e entretenimento.",
        "Promover o veganismo como alternativa ética.",
      ],
    },
    {
      title: "3. Atividades e formas de atuação",
      image: {
        src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1000&q=80",
        alt: "Raposa em ambiente natural",
        caption: "Muitas campanhas da PETA centram-se em animais usados pela indústria da moda.",
      },
      paragraphs: [
        "A PETA é conhecida por usar métodos de ativismo muito visíveis e, por vezes, contróversos. Estas ações têm como objetivo chamar a atenção da sociedade e influenciar mudanças nas leis e nas práticas das empresas.",
      ],
      bullets: [
        "Campanhas publicitárias chocantes ou provocativas.",
        "Investigações secretas em fábricas e laboratórios.",
        "Protestos públicos.",
        "Ações legais contra empresas ou instituições.",
        "Campanhas de sensibilização sobre veganismo e direitos dos animais.",
      ],
    },
    {
      title: "4. Conquistas e impacto",
      paragraphs: [
        "Ao longo dos anos, a PETA conseguiu influenciar várias mudanças importantes. A organização afirma ter contribuído para mudanças significativas na forma como a sociedade vê os animais e os seus direitos.",
      ],
      bullets: [
        "Redução do uso de peles em grandes marcas de moda.",
        "Diminuição dos testes em animais em várias empresas de cosmética.",
        "Maior consciencialização pública sobre o sofrimento animal.",
        "Encerramento de práticas consideradas cruéis em circos e entretenimento animal.",
      ],
    },
    {
      title: "5. Críticas e contróversias",
      subtitle: "Quando os meios entram em conflito com os fins",
      bullets: [
        "Campanhas polémicas: algumas são consideradas chocantes ou ofensivas.",
        "Estratégias de choque: o uso de imagens fortes e comparações contróversas gera desacordo público.",
        "Eutanásia em abrigos: taxas elevadas de eutanásia geram debate sobre coerência ética.",
        "Debate ético: a PETA levanta questões importantes, mas nem sempre utiliza meios considerados moralmente aceitáveis.",
      ],
      conclusion:
        "Estas críticas mostram que mesmo organizações com boas causas precisam de manter uma postura ética coerente naquilo que fazem.",
    },
    {
      title: "6. Análise ética",
      image: {
        src: "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=1000&q=80",
        alt: "Cão a olhar para a câmara",
        caption: "Pensar nos animais é também pensar no tipo de sociedade que queremos ser.",
      },
      paragraphs: [
        "Do ponto de vista ético, a PETA levanta um dilema importante: Utilitarismo — os seus métodos podem ser justificados se trouxerem benefícios para milhões de animais; Deontologia — alguns dos seus métodos podem ser considerados errados, independentemente do objetivo final.",
        "Isto mostra o conflito entre \"fazer o bem\" e \"usar meios moralmente aceitáveis\".",
      ],
    },
  ],
  finalConclusion:
    "A PETA é uma organização influente e importante na defesa dos direitos dos animais, tendo conseguido mudanças significativas na sociedade. No entanto, os seus métodos são frequentemente debatidos e criticados. O seu estudo permite compreender como a ética não é simples, e como diferentes valores podem entrar em conflito quando se tenta defender uma causa.",
};

export const lessons: Lesson[] = [
  { number: 1, date: "17-09", summary: "Apresentação. Explanar os critérios de avaliação e o programa da disciplina." },
  { number: 2, date: "24-09", summary: "Desenvolver um espírito crítico e uma mundivisão assente em critérios éticos." },
  {
    number: 3,
    date: "01-10",
    summary:
      "Realização de uma pesquisa sobre tradições e costumes da moral atípicos e sujeitos a reflexão ética. Desenvolver um espírito crítico e uma mundivisão assente em critérios éticos. Aplicar critérios éticos na resolução de conflitos e dilemas.",
    research: [satiResearch],
  },
  { number: 10, date: "26-11", summary: "Apresentação dos trabalhos de grupo." },
  { number: 11, date: "03-12", summary: "Conclusão das apresentações dos trabalhos de grupo." },
  { number: 12, date: "10-12", summary: "Autoavaliação." },
  { number: 13, date: "07-01", summary: "Resolução de um Dilema Ético criado pela turma e sobre o curso." },
  { number: 14, date: "14-01", summary: "Atividade \"Empoderamento pelo Voto\"." },
  { number: 15, date: "21-01", summary: "O novo mundo do trabalho e as suas exigências (Unidade 2)." },
  { number: 16, date: "28-01", summary: "Distinguir códigos de Ética de códigos Deontológicos através de uma pesquisa orientada (trabalho de pares) — Módulos 2 e 3." },
  { number: 17, date: "04-02", summary: "Distinguir códigos de Ética de códigos Deontológicos através de uma pesquisa orientada (trabalho de pares) — Módulos 2 e 3." },
  { number: 18, date: "11-02", summary: "Revisões e esclarecimentos de dúvidas." },
  { number: 19, date: "25-02", summary: "A Ética profissional aplicada às diferentes áreas de Formação. Debate sobre o Regulamento Interno do CIC." },
  { number: 20, date: "04-03", summary: "Análise e reflexão de questões a serem colocadas aos entrevistados no âmbito dos módulos 2 e 3." },
  { number: 21, date: "11-03", summary: "Apresentação dos trabalhos realizados no âmbito dos módulos 2 e 3." },
  { number: 22, date: "18-03", summary: "Debate sobre a competência profissional: saber, fazer e saber ser." },
  { number: 23, date: "25-03", summary: "Autoavaliação." },
  { number: 24, date: "15-04", summary: "Unidade 4 — O ingresso no mundo do trabalho. O \"Curriculum Vitae\". A Entrevista de Seleção." },
  { number: 25, date: "22-04", summary: "Análise de documentos: \"CV MODELOS\". Realização do Curriculum Vitae." },
  { number: 26, date: "29-04", summary: "Unidade 4 — O ingresso no mundo do trabalho. O \"Curriculum Vitae\". A Entrevista de Seleção." },
  {
    number: 27,
    date: "06-05",
    summary:
      "Reflexão sobre as entrevistas realizadas nos módulos 3 e 4 interligando com os principais objetivos do capítulo V.",
  },
  {
    number: 28,
    date: "13-05",
    summary:
      "Reflexão sobre as entrevistas realizadas nos módulos 3 e 4 interligando com os principais objetivos do capítulo V.",
    research: [entrevistaResearch, petaResearch],
  },
];
