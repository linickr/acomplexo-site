export interface PostBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface Post {
  id: number;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: PostBlock[];
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "como-transformar-conhecimento-em-curso-online",
    category: "Monetização",
    title: "Como transformar seu conhecimento em um curso online lucrativo",
    subtitle: "O passo a passo que profissionais liberais estão usando para gerar renda passiva com o que já sabem.",
    author: "AComplexo Editorial",
    date: "18 Abr 2026",
    readTime: "6 min",
    excerpt: "Médicos, advogados, nutricionistas e coaches têm algo em comum: anos de expertise que o mercado digital está disposto a pagar. O problema não é o conhecimento — é a estrutura para transformá-lo em produto.",
    content: [
      { type: "paragraph", text: "Médicos, advogados, nutricionistas e coaches têm algo em comum: anos de expertise que o mercado digital está disposto a pagar. O problema não é o conhecimento — é a estrutura para transformá-lo em produto." },
      { type: "heading", text: "O maior erro de quem tenta criar um curso" },
      { type: "paragraph", text: "A maioria dos profissionais começa pelo lugar errado: a ferramenta. Escolhem a plataforma antes de definir o público. Gravam aulas antes de validar o tema. Investem em equipamento antes de ter um único aluno." },
      { type: "paragraph", text: "O resultado é previsível — horas de trabalho que não convertem, um produto que ninguém comprou e a conclusão equivocada de que 'curso online não funciona para minha área'." },
      { type: "heading", text: "A ordem certa: validar antes de produzir" },
      { type: "paragraph", text: "Antes de gravar uma única aula, você precisa responder três perguntas com precisão: quem é seu aluno ideal, qual transformação concreta ele vai ter ao final do curso e quanto ele está disposto a pagar por isso." },
      { type: "paragraph", text: "Essas respostas não vêm de suposições — vêm de conversas reais com pessoas do seu nicho. Trinta conversas de 20 minutos valem mais do que seis meses de produção de conteúdo sem direção." },
      { type: "heading", text: "Da ideia à estrutura em 5 passos" },
      { type: "list", items: ["Defina a transformação central: o que o aluno consegue fazer ao terminar o curso que não conseguia antes?", "Mapeie os obstáculos: quais são os bloqueios que impedem seu público de chegar lá sozinho?", "Crie os módulos em torno desses obstáculos: cada módulo remove uma barreira específica.", "Precifique pela transformação, não pelo conteúdo: um curso que muda a carreira de alguém vale mais do que 40 horas de vídeo.", "Valide antes de gravar: venda o curso para 10 pessoas com acesso antecipado e produza com demanda já confirmada."] },
      { type: "heading", text: "O papel do posicionamento no sucesso do lançamento" },
      { type: "paragraph", text: "Um curso genérico compete com milhares de outros. Um curso posicionado para um nicho específico — 'gestão financeira para dentistas autônomos', por exemplo — enfrenta muito menos concorrência e permite cobrar mais." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Transformar conhecimento em curso não é sobre tecnologia nem sobre produção. É sobre clareza — saber exatamente para quem você está falando, qual problema está resolvendo e por que sua abordagem é diferente." },
    ],
  },
  {
    id: 2,
    slug: "por-que-profissionais-liberais-fracassam-no-instagram",
    category: "Redes Sociais",
    title: "Por que profissionais liberais fracassam no Instagram — e como reverter isso",
    subtitle: "A maioria erra na base. Entenda o que separa perfis que crescem dos que ficam estagnados.",
    author: "AComplexo Editorial",
    date: "10 Abr 2026",
    readTime: "5 min",
    excerpt: "Postar todo dia sem estratégia é o erro mais comum. Autoridade digital não se constrói com volume — se constrói com consistência de posicionamento e clareza de mensagem.",
    content: [
      { type: "paragraph", text: "Postar todo dia sem estratégia é o erro mais comum. Autoridade digital não se constrói com volume — se constrói com consistência de posicionamento e clareza de mensagem." },
      { type: "heading", text: "O problema não é a falta de conteúdo" },
      { type: "paragraph", text: "Profissionais liberais geralmente têm muito a dizer. O problema é que tentam dizer tudo para todo mundo ao mesmo tempo. O resultado é um perfil que fala de tudo e não converte nada." },
      { type: "heading", text: "Os três erros mais comuns" },
      { type: "list", items: ["Conteúdo educativo sem direcionamento comercial: ensinar é ótimo, mas se o conteúdo nunca conecta com o que você vende, você apenas forma seguidores, não clientes.", "Ausência de chamada para ação: posts que terminam sem dizer o que o seguidor deve fazer a seguir desperdiçam o momento de maior engajamento.", "Foco em estética em vez de mensagem: um feed bonito não vende. Uma mensagem clara, sim."] },
      { type: "heading", text: "O que perfis que crescem fazem diferente" },
      { type: "paragraph", text: "Perfis de autoridade que crescem de forma consistente compartilham três características: sabem exatamente para quem falam, têm uma promessa clara e repetem essa promessa de formas diferentes com frequência." },
      { type: "heading", text: "Como reverter o estagnamento" },
      { type: "paragraph", text: "O primeiro passo é parar de postar por obrigação e começar a postar com intenção. Isso significa definir antes de qualquer coisa: quem eu quero que me siga e o que quero que essa pessoa faça depois de me seguir?" },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O Instagram funciona para profissionais liberais — desde que seja usado com estratégia. Volume sem direção cansa quem posta e não converte quem vê." },
    ],
  },
  {
    id: 3,
    slug: "site-ou-redes-sociais-o-que-vem-primeiro",
    category: "Estratégia",
    title: "Site ou redes sociais? O que vem primeiro para quem quer monetizar",
    subtitle: "A ordem importa mais do que você pensa. Construir na ordem errada custa tempo e dinheiro.",
    author: "AComplexo Editorial",
    date: "02 Abr 2026",
    readTime: "4 min",
    excerpt: "A resposta não é simples — e quem te der uma resposta simples provavelmente está errado. O que realmente importa é entender o papel de cada canal antes de investir em qualquer um deles.",
    content: [
      { type: "paragraph", text: "A resposta não é simples — e quem te der uma resposta simples provavelmente está errado. O que realmente importa é entender o papel de cada canal antes de investir em qualquer um deles." },
      { type: "heading", text: "Qual é a função de cada canal?" },
      { type: "paragraph", text: "Redes sociais são canais de descoberta e relacionamento. São onde pessoas te encontram, passam a te conhecer e começam a confiar em você. Mas são terreno alugado — o algoritmo muda, o alcance cai, a conta pode ser derrubada." },
      { type: "paragraph", text: "O site é sua propriedade. É onde você controla a experiência, apresenta sua autoridade com profundidade e converte visitantes em clientes ou leads." },
      { type: "heading", text: "A sequência ideal" },
      { type: "list", items: ["Defina seu posicionamento e público antes de criar qualquer canal", "Comece com redes sociais para validar sua mensagem e construir audiência inicial", "Crie o site quando tiver clareza do que precisa comunicar e uma audiência mínima para direcionar até ele", "Use as redes para alimentar o site e o site para converter o tráfego das redes"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Não é uma questão de site versus redes sociais. É uma questão de sequência e de entender o papel de cada um. Quem compreende isso constrói um ecossistema digital que funciona junto." },
    ],
  },
  {
    id: 4,
    slug: "funil-nutricionista-40k-primeiro-lancamento",
    category: "Funil de Vendas",
    title: "O funil que levou uma nutricionista a faturar R$40k no primeiro lançamento",
    subtitle: "Análise completa de uma estratégia de lançamento do zero — sem tráfego pago.",
    author: "AComplexo Editorial",
    date: "25 Mar 2026",
    readTime: "8 min",
    excerpt: "Com uma lista de e-mails de 800 pessoas e um produto de R$497, a estratégia certa fez toda a diferença. Veja como foi estruturado cada etapa do funil que gerou 82 vendas em 7 dias.",
    content: [
      { type: "paragraph", text: "Com uma lista de e-mails de 800 pessoas e um produto de R$497, a estratégia certa fez toda a diferença. Veja como foi estruturado cada etapa do funil que gerou 82 vendas em 7 dias." },
      { type: "heading", text: "O contexto" },
      { type: "paragraph", text: "A cliente era nutricionista com consultório estabelecido e perfil no Instagram com 4.200 seguidores. Nunca havia lançado nenhum produto digital. A lista de e-mails tinha sido construída em seis meses com um e-book gratuito." },
      { type: "heading", text: "A estrutura do funil em 4 fases" },
      { type: "list", items: ["Pré-lançamento (3 semanas): aquecimento da lista com sequência de e-mails de conteúdo profundo, sem mencionar o produto.", "Abertura de lista de espera (1 semana): anúncio do curso para a lista com condições exclusivas.", "Carrinho aberto (7 dias): sequência de e-mails diários com depoimentos, esclarecimento de objeções e urgência real.", "Encerramento: último dia com três e-mails espaçados reforçando o prazo."] },
      { type: "heading", text: "Os números" },
      { type: "paragraph", text: "800 pessoas na lista. Taxa de abertura média de 41%. 312 pessoas na lista de espera. 82 vendas realizadas — taxa de conversão de 26% sobre a lista de espera. Resultado: R$40.754 em 7 dias, sem tráfego pago." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Este lançamento prova que lista pequena e aquecida supera lista grande e fria. 800 pessoas certas valeram mais do que 80.000 seguidores sem direcionamento." },
    ],
  },
  {
    id: 5,
    slug: "nicho-ou-generalista-como-definir-posicionamento",
    category: "Posicionamento",
    title: "Nicho ou generalista? Como definir seu posicionamento no mercado digital",
    subtitle: "A decisão mais importante que você vai tomar antes de criar qualquer conteúdo.",
    author: "AComplexo Editorial",
    date: "18 Mar 2026",
    readTime: "5 min",
    excerpt: "Quem fala para todo mundo não fala para ninguém. Mas nichar demais também tem seus riscos. O equilíbrio entre especificidade e alcance é onde está o crescimento sustentável.",
    content: [
      { type: "paragraph", text: "Quem fala para todo mundo não fala para ninguém. Mas nichar demais também tem seus riscos. O equilíbrio entre especificidade e alcance é onde está o crescimento sustentável." },
      { type: "heading", text: "O medo de nichar" },
      { type: "paragraph", text: "A resistência mais comum é o medo de perder clientes potenciais ao se especializar demais. Mas 1% de um nicho específico quase sempre vale mais do que 0,01% de um mercado amplo." },
      { type: "heading", text: "O modelo de posicionamento em três camadas" },
      { type: "list", items: ["Quem você atende: defina o perfil com especificidade (profissão, fase de vida, problema central)", "Qual transformação você entrega: seja concreto — evite termos vagos como 'qualidade de vida' ou 'equilíbrio'", "O que te diferencia: sua abordagem, método, trajetória ou perspectiva única"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "A pergunta não é 'nicho ou generalista?' A pergunta é 'qual é o nicho mais específico possível dentro do qual ainda consigo crescer?' Comece lá. A expansão vem com a autoridade conquistada." },
    ],
  },
  {
    id: 6,
    slug: "como-planejar-30-dias-de-conteudo-em-uma-tarde",
    category: "Conteúdo",
    title: "Como planejar 30 dias de conteúdo em uma tarde",
    subtitle: "O método de calendário editorial que usamos com todos os nossos clientes.",
    author: "AComplexo Editorial",
    date: "10 Mar 2026",
    readTime: "7 min",
    excerpt: "A falta de tempo é o maior inimigo da consistência. Com o método certo, você consegue planejar um mês inteiro de conteúdo em poucas horas — e nunca mais ficar sem o que postar.",
    content: [
      { type: "paragraph", text: "A falta de tempo é o maior inimigo da consistência. Com o método certo, você consegue planejar um mês inteiro de conteúdo em poucas horas — e nunca mais ficar sem o que postar." },
      { type: "heading", text: "O método dos quatro pilares" },
      { type: "paragraph", text: "Todo conteúdo de autoridade cumpre uma das quatro funções: educar, inspirar, converter ou aproximar. Um calendário equilibrado distribui essas funções ao longo do mês." },
      { type: "list", items: ["Educação (40%): conteúdo que ensina algo útil diretamente relacionado à sua área de expertise", "Inspiração (20%): histórias, casos reais, perspectivas que mudam a forma como o público enxerga um problema", "Conversão (25%): conteúdo que apresenta sua oferta, serviço ou produto de forma direta ou indireta", "Aproximação (15%): conteúdo mais pessoal que humaniza sua presença e cria conexão com o público"] },
      { type: "heading", text: "O processo em uma tarde" },
      { type: "list", items: ["Hora 1 — Listar temas: anote 40 temas relacionados à sua expertise sem filtrar.", "Hora 2 — Filtrar e categorizar: selecione os 30 melhores e distribua nas quatro categorias.", "Hora 3 — Montar o calendário: atribua um tema a cada dia do mês seguindo a proporção dos pilares.", "Hora 4 — Escrever os ganchos: para cada post, escreva a primeira linha — aquela que vai parar o scroll."] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Consistência não nasce de inspiração — nasce de sistema. Quem planeja uma tarde por mês nunca fica olhando para o celular às 22h tentando descobrir o que postar amanhã." },
    ],
  },
];
