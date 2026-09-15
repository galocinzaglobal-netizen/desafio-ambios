export type Difficulty = "easy" | "medium" | "hard" | "specialist";
export type Category = "REGENESIS" | "MARIN_DEEP" | "INGROW" | "MARIN_PRIME" | "AMBIOS" | "ALGODAO";

export interface Question {
  id: number;
  category: Category;
  difficulty: Difficulty;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  hintField: string;
  hintTechnical: string;
  hintRegenesis: string;
  status: "validacao";
}

// Conteúdo sujeito à validação técnica da Ambios.
export const questions: Question[] = [
  {
    "id": 1,
    "category": "REGENESIS",
    "difficulty": "easy",
    "question": "Qual conceito apresenta o Protocolo Regenesis?",
    "answers": [
      "Solos vivos e Plantas Fortes",
      "Nutrição sem limites",
      "Máxima produção a qualquer custo",
      "Plantas fortes independentemente do solo"
    ],
    "correctAnswer": 0,
    "explanation": "O Protocolo Regenesis é apresentado pela Ambios com o conceito 'Solos vivos e Plantas Fortes', integrando tecnologias que atuam do solo à planta.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 2,
    "category": "REGENESIS",
    "difficulty": "easy",
    "question": "Quais três tecnologias formam o Protocolo Regenesis?",
    "answers": [
      "Marin Deep, Ingrow e Marin Prime",
      "Marin Deep, Beni e Certiv",
      "Ingrow, Beni e Marin Prime",
      "Certiv, Marin Prime e Ingrow"
    ],
    "correctAnswer": 0,
    "explanation": "O Regenesis integra Marin Deep, Ingrow e Marin Prime em uma estratégia complementar.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 3,
    "category": "REGENESIS",
    "difficulty": "medium",
    "question": "Qual alternativa representa melhor a lógica de atuação do Protocolo Regenesis?",
    "answers": [
      "Integrar qualidade do solo, fisioativação e equilíbrio nutricional",
      "Concentrar todo o manejo exclusivamente na nutrição foliar",
      "Atuar apenas durante a germinação e emergência",
      "Substituir os diferentes manejos por uma única função fisiológica"
    ],
    "correctAnswer": 0,
    "explanation": "O protocolo combina três pilares complementares: qualidade do solo, fisioativação natural e equilíbrio nutricional.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 4,
    "category": "REGENESIS",
    "difficulty": "medium",
    "question": "Quais desafios da agricultura moderna aparecem associados à proposta do Regenesis?",
    "answers": [
      "Solos degradados, estresses climáticos e demanda por produtividade sustentável",
      "Somente deficiência de nitrogênio e fósforo",
      "Exclusivamente pragas e doenças foliares",
      "Apenas dificuldades relacionadas à colheita"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios apresenta o Regenesis como uma solução integrada diante de solos degradados, estresses climáticos e da busca por produtividade sustentável.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 5,
    "category": "REGENESIS",
    "difficulty": "medium",
    "question": "Qual associação entre tecnologia e função está correta dentro do Regenesis?",
    "answers": [
      "Marin Deep — qualidade do solo; Ingrow — fisioativação; Marin Prime — equilíbrio nutricional",
      "Marin Deep — fisioativação; Ingrow — nutrição; Marin Prime — qualidade do solo",
      "Marin Prime — qualidade do solo; Marin Deep — nutrição; Ingrow — germinação",
      "As três tecnologias possuem exatamente o mesmo posicionamento"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Deep está ligado à qualidade do solo, Ingrow à fisioativação e Marin Prime ao equilíbrio nutricional.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 6,
    "category": "REGENESIS",
    "difficulty": "medium",
    "question": "O que a expressão 'do solo à planta' representa no conceito do Regenesis?",
    "answers": [
      "Uma abordagem integrada envolvendo diferentes componentes do desenvolvimento vegetal",
      "Uma recomendação para aplicação exclusiva no solo",
      "Uma estratégia restrita ao tratamento de sementes",
      "Uma tecnologia destinada somente ao período reprodutivo"
    ],
    "correctAnswer": 0,
    "explanation": "A expressão reforça a complementaridade das tecnologias do protocolo, abrangendo solo, fisiologia vegetal e nutrição.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 7,
    "category": "REGENESIS",
    "difficulty": "hard",
    "question": "Uma área apresenta limitações de estrutura do solo, plantas sob estresse e necessidade de maior equilíbrio nutricional. Qual interpretação melhor representa a proposta do Regenesis?",
    "answers": [
      "Utilizar tecnologias complementares para atuar sobre diferentes componentes do sistema",
      "Escolher obrigatoriamente apenas uma tecnologia e ignorar os demais fatores",
      "Concentrar todo o manejo no fornecimento de micronutrientes",
      "Atuar somente depois que a cultura entrar na fase reprodutiva"
    ],
    "correctAnswer": 0,
    "explanation": "A lógica do Regenesis é justamente integrar tecnologias complementares em vez de tratar solo, fisiologia e nutrição como fatores isolados.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 8,
    "category": "REGENESIS",
    "difficulty": "hard",
    "question": "Qual sequência relaciona corretamente os três pilares do Regenesis às suas tecnologias?",
    "answers": [
      "Qualidade do solo → Marin Deep; Fisioativação → Ingrow; Equilíbrio nutricional → Marin Prime",
      "Qualidade do solo → Ingrow; Fisioativação → Marin Prime; Equilíbrio nutricional → Marin Deep",
      "Qualidade do solo → Marin Prime; Fisioativação → Marin Deep; Equilíbrio nutricional → Ingrow",
      "Qualidade do solo → Marin Deep; Fisioativação → Marin Prime; Equilíbrio nutricional → Ingrow"
    ],
    "correctAnswer": 0,
    "explanation": "A associação correta é Marin Deep para qualidade do solo, Ingrow para fisioativação e Marin Prime para equilíbrio nutricional.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 9,
    "category": "REGENESIS",
    "difficulty": "hard",
    "question": "Por que a integração das três tecnologias é central para o conceito do Regenesis?",
    "answers": [
      "Porque permite abordar fatores de solo, fisiologia e nutrição de forma complementar",
      "Porque as três tecnologias repetem exatamente a mesma função",
      "Porque elimina a necessidade de compreender as condições da lavoura",
      "Porque restringe o manejo às fases iniciais da cultura"
    ],
    "correctAnswer": 0,
    "explanation": "O valor conceitual do protocolo está na complementaridade entre diferentes pilares do desenvolvimento da cultura.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 10,
    "category": "REGENESIS",
    "difficulty": "specialist",
    "question": "Em uma interpretação técnica do Regenesis, qual cenário representa melhor a complementaridade proposta pelo protocolo?",
    "answers": [
      "Construir uma melhor base no solo, favorecer processos fisiológicos e apoiar o equilíbrio nutricional da planta",
      "Corrigir somente características químicas do solo e manter os demais fatores constantes",
      "Estimular exclusivamente crescimento vegetativo sem considerar solo ou nutrição",
      "Concentrar toda a estratégia na suplementação nutricional durante a fase reprodutiva"
    ],
    "correctAnswer": 0,
    "explanation": "O Regenesis combina uma base relacionada à qualidade do solo, fisioativação vegetal e equilíbrio nutricional.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 11,
    "category": "MARIN_DEEP",
    "difficulty": "easy",
    "question": "Qual pilar do Regenesis está associado ao Marin Deep?",
    "answers": [
      "Qualidade do Solo",
      "Fisioativação Natural",
      "Equilíbrio Nutricional",
      "Proteção de estruturas reprodutivas"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Deep representa o pilar de qualidade do solo dentro do Regenesis.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 12,
    "category": "MARIN_DEEP",
    "difficulty": "easy",
    "question": "Segundo a Ambios, Marin Deep atua sobre quais propriedades do solo?",
    "answers": [
      "Físicas, químicas e biológicas",
      "Somente químicas e nutricionais",
      "Apenas físicas e hídricas",
      "Exclusivamente biológicas"
    ],
    "correctAnswer": 0,
    "explanation": "O posicionamento do Marin Deep envolve propriedades físicas, químicas e biológicas do solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 13,
    "category": "MARIN_DEEP",
    "difficulty": "medium",
    "question": "Qual benefício relacionado ao estabelecimento inicial é atribuído ao Marin Deep?",
    "answers": [
      "Aumento da taxa de germinação",
      "Indução direta da abertura de flores",
      "Antecipação da abertura de capulhos",
      "Regulação exclusiva do crescimento reprodutivo"
    ],
    "correctAnswer": 0,
    "explanation": "Entre os benefícios apresentados pela Ambios está o aumento da taxa de germinação.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 14,
    "category": "MARIN_DEEP",
    "difficulty": "medium",
    "question": "Qual efeito sobre a emergência é apresentado para Marin Deep?",
    "answers": [
      "Redução do tempo de emergência das plântulas",
      "Aumento controlado do período de emergência",
      "Interrupção temporária da germinação",
      "Atuação somente depois da emergência"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios associa Marin Deep à redução do tempo de emergência.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 15,
    "category": "MARIN_DEEP",
    "difficulty": "medium",
    "question": "Por que a melhoria da estrutura e qualidade do solo é relevante para o posicionamento do Marin Deep?",
    "answers": [
      "Porque cria uma base mais favorável ao desenvolvimento radicular",
      "Porque substitui completamente o funcionamento das raízes",
      "Porque atua somente sobre estruturas reprodutivas",
      "Porque determina diretamente a qualidade da fibra após a colheita"
    ],
    "correctAnswer": 0,
    "explanation": "O produto é posicionado para melhorar características do solo e criar uma base para o desenvolvimento das raízes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 16,
    "category": "MARIN_DEEP",
    "difficulty": "medium",
    "question": "Qual alternativa diferencia corretamente Marin Deep de Ingrow?",
    "answers": [
      "Marin Deep está relacionado principalmente à qualidade do solo; Ingrow, à fisioativação vegetal",
      "Marin Deep é fisioativador; Ingrow atua exclusivamente na estrutura física do solo",
      "Ambos possuem exatamente a mesma função dentro do protocolo",
      "Ingrow é responsável pelo equilíbrio nutricional e Marin Deep pela proteção sistêmica"
    ],
    "correctAnswer": 0,
    "explanation": "Os dois componentes são complementares: Marin Deep está associado ao solo e Ingrow à fisiologia da planta.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 17,
    "category": "MARIN_DEEP",
    "difficulty": "hard",
    "question": "Uma lavoura apresenta emergência desuniforme e limitações associadas à qualidade e estrutura do solo. Dentro do Regenesis, qual tecnologia possui relação mais direta com esse cenário?",
    "answers": [
      "Marin Deep",
      "Ingrow",
      "Marin Prime",
      "As três possuem exatamente o mesmo posicionamento"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Deep está diretamente relacionado à qualidade e estrutura do solo, germinação, emergência e base para desenvolvimento radicular.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 18,
    "category": "MARIN_DEEP",
    "difficulty": "hard",
    "question": "Qual combinação reúne somente benefícios associados ao posicionamento do Marin Deep?",
    "answers": [
      "Qualidade do solo, germinação, emergência e desenvolvimento radicular",
      "Modulação hormonal, proteção sistêmica, florescimento e pegamento",
      "Fornecimento de macro e micronutrientes e equilíbrio nutricional",
      "Controle de insetos, doenças, plantas daninhas e nematoides"
    ],
    "correctAnswer": 0,
    "explanation": "Os benefícios apresentados para Marin Deep concentram-se na qualidade do solo e no estabelecimento/desenvolvimento inicial.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 19,
    "category": "MARIN_DEEP",
    "difficulty": "hard",
    "question": "Qual processo NÃO pertence diretamente ao posicionamento do Marin Deep dentro do Regenesis?",
    "answers": [
      "Modulação de auxinas e citocininas",
      "Melhoria da estrutura do solo",
      "Redução do tempo de emergência",
      "Criação de base para desenvolvimento radicular"
    ],
    "correctAnswer": 0,
    "explanation": "A modulação hormonal é associada ao Ingrow, enquanto Marin Deep está relacionado à qualidade do solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 20,
    "category": "MARIN_DEEP",
    "difficulty": "specialist",
    "question": "Considerando os três pilares do Regenesis, qual situação caracteriza mais especificamente a necessidade relacionada ao papel do Marin Deep?",
    "answers": [
      "Limitações do ambiente radicular associadas às condições físicas, químicas e biológicas do solo",
      "Necessidade de modular processos hormonais ligados ao vigor e desenvolvimento",
      "Necessidade de complementar macro e micronutrientes ao longo do ciclo",
      "Necessidade de atuar especificamente sobre sinalização ligada ao ácido salicílico"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Deep se diferencia dos demais componentes por seu posicionamento ligado às propriedades físicas, químicas e biológicas do solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 21,
    "category": "INGROW",
    "difficulty": "easy",
    "question": "Como o Ingrow é apresentado dentro do Regenesis?",
    "answers": [
      "Fisioativador de origem natural",
      "Corretivo físico do solo",
      "Fertilizante voltado exclusivamente a micronutrientes",
      "Tecnologia de abertura de capulhos"
    ],
    "correctAnswer": 0,
    "explanation": "Ingrow ocupa o pilar de fisioativação natural dentro do protocolo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 22,
    "category": "INGROW",
    "difficulty": "easy",
    "question": "A formulação natural do Ingrow é apresentada pela Ambios como rica em:",
    "answers": [
      "Peptídeos",
      "Celulose",
      "Amido",
      "Lignina"
    ],
    "correctAnswer": 0,
    "explanation": "A página oficial do Ingrow destaca uma formulação natural rica em peptídeos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 23,
    "category": "INGROW",
    "difficulty": "medium",
    "question": "Quais hormônios aparecem associados à modulação promovida pelo Ingrow?",
    "answers": [
      "Auxinas e citocininas",
      "Etileno e ácido abscísico exclusivamente",
      "Giberelinas e etileno exclusivamente",
      "Ácido salicílico e ácido jasmônico exclusivamente"
    ],
    "correctAnswer": 0,
    "explanation": "A comunicação do Regenesis associa Ingrow à modulação de auxinas e citocininas.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 24,
    "category": "INGROW",
    "difficulty": "medium",
    "question": "Qual grupo hormonal é associado no material do Regenesis à ativação do crescimento?",
    "answers": [
      "Giberelinas",
      "Etileno",
      "Ácido abscísico",
      "Ácido salicílico"
    ],
    "correctAnswer": 0,
    "explanation": "As giberelinas aparecem relacionadas à ativação do crescimento.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 25,
    "category": "INGROW",
    "difficulty": "medium",
    "question": "Qual sinalizador é associado à indução de resistência no posicionamento do Ingrow?",
    "answers": [
      "Ácido jasmônico",
      "Ácido cítrico",
      "Ácido fosfórico",
      "Ácido lático"
    ],
    "correctAnswer": 0,
    "explanation": "O ácido jasmônico aparece associado à indução de resistência.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 26,
    "category": "INGROW",
    "difficulty": "medium",
    "question": "Qual composto é relacionado à proteção sistêmica no material do Ingrow?",
    "answers": [
      "Ácido salicílico",
      "Ácido jasmônico",
      "Ácido cítrico",
      "Ácido carbônico"
    ],
    "correctAnswer": 0,
    "explanation": "A comunicação do produto relaciona ácido salicílico à proteção sistêmica.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 27,
    "category": "INGROW",
    "difficulty": "hard",
    "question": "Qual associação está correta segundo o posicionamento do Ingrow?",
    "answers": [
      "Auxinas/citocininas — modulação; giberelinas — crescimento; ácido jasmônico — resistência",
      "Auxinas/citocininas — proteção sistêmica; giberelinas — solo; ácido jasmônico — nutrição",
      "Giberelinas — qualidade do solo; ácido salicílico — germinação; auxinas — micronutrientes",
      "Ácido jasmônico — equilíbrio nutricional; citocininas — estrutura do solo; giberelinas — emergência"
    ],
    "correctAnswer": 0,
    "explanation": "Essa alternativa reúne corretamente três mecanismos apresentados para o Ingrow.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 28,
    "category": "INGROW",
    "difficulty": "hard",
    "question": "Qual conjunto de efeitos está mais alinhado à proposta fisiológica do Ingrow?",
    "answers": [
      "Equilíbrio fisiológico, eficiência metabólica e expressão do potencial produtivo",
      "Correção física do solo, descompactação mecânica e alteração da textura",
      "Fornecimento exclusivo de macronutrientes e correção de pH",
      "Controle direto de insetos, fungos e plantas daninhas"
    ],
    "correctAnswer": 0,
    "explanation": "Ingrow é apresentado como tecnologia de fisioativação ligada ao metabolismo, equilíbrio fisiológico e mecanismos da planta.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 29,
    "category": "INGROW",
    "difficulty": "hard",
    "question": "Qual benefício reprodutivo aparece associado ao Ingrow?",
    "answers": [
      "Otimização do pegamento e desenvolvimento de estruturas reprodutivas",
      "Abertura química imediata dos capulhos",
      "Substituição da fecundação das flores",
      "Eliminação fisiológica da queda de todas as estruturas"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios apresenta entre os benefícios a otimização do pegamento e desenvolvimento das estruturas reprodutivas.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 30,
    "category": "INGROW",
    "difficulty": "specialist",
    "question": "Qual associação reúne corretamente mecanismos apresentados para Ingrow?",
    "answers": [
      "Auxinas/citocininas — modulação hormonal; giberelinas — crescimento; ácido jasmônico — resistência; ácido salicílico — proteção sistêmica",
      "Auxinas — equilíbrio nutricional; giberelinas — estrutura do solo; ácido jasmônico — germinação; ácido salicílico — micronutrientes",
      "Citocininas — correção do solo; giberelinas — controle de pragas; ácido salicílico — descompactação; ácido jasmônico — nutrição",
      "Auxinas — capulhos; giberelinas — pH; ácido jasmônico — macronutrientes; ácido salicílico — textura do solo"
    ],
    "correctAnswer": 0,
    "explanation": "A alternativa reúne corretamente os mecanismos divulgados pela Ambios para o Ingrow.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 31,
    "category": "MARIN_PRIME",
    "difficulty": "easy",
    "question": "Qual pilar do Regenesis está associado ao Marin Prime?",
    "answers": [
      "Equilíbrio Nutricional",
      "Qualidade do Solo",
      "Fisioativação Natural",
      "Manejo Fitossanitário"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Prime representa o pilar de equilíbrio nutricional.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 32,
    "category": "MARIN_PRIME",
    "difficulty": "easy",
    "question": "Marin Prime é apresentado como fonte de:",
    "answers": [
      "Macro e micronutrientes",
      "Somente macronutrientes",
      "Somente micronutrientes",
      "Exclusivamente hormônios"
    ],
    "correctAnswer": 0,
    "explanation": "O posicionamento oficial menciona macro e micronutrientes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 33,
    "category": "MARIN_PRIME",
    "difficulty": "medium",
    "question": "Qual tipo de estresse aparece diretamente associado ao posicionamento do Marin Prime?",
    "answers": [
      "Estresse abiótico",
      "Somente estresse provocado por insetos",
      "Exclusivamente doenças fúngicas",
      "Somente competição com plantas daninhas"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Prime é apresentado como auxiliar na atenuação de estresses abióticos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 34,
    "category": "MARIN_PRIME",
    "difficulty": "medium",
    "question": "Qual combinação descreve melhor o posicionamento do Marin Prime?",
    "answers": [
      "Alívio de estresses e fornecimento de macro e micronutrientes",
      "Correção física do solo e modulação exclusiva de auxinas",
      "Controle de pragas e fornecimento apenas de nitrogênio",
      "Germinação e proteção exclusiva das sementes"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Prime combina compostos associados à atenuação de estresses com macro e micronutrientes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 35,
    "category": "MARIN_PRIME",
    "difficulty": "medium",
    "question": "O equilíbrio nutricional associado ao Marin Prime é proposto para:",
    "answers": [
      "Diferentes estádios ao longo do ciclo",
      "Somente a germinação",
      "Somente o florescimento",
      "Exclusivamente a maturação"
    ],
    "correctAnswer": 0,
    "explanation": "O posicionamento destaca equilíbrio nutricional ao longo do ciclo da cultura.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 36,
    "category": "MARIN_PRIME",
    "difficulty": "medium",
    "question": "Além dos macronutrientes, o Marin Prime complementa:",
    "answers": [
      "Micronutrientes estratégicos",
      "Somente carboidratos",
      "Apenas matéria orgânica sólida",
      "Exclusivamente hormônios vegetais"
    ],
    "correctAnswer": 0,
    "explanation": "O produto é apresentado com suplementação de micronutrientes estratégicos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 37,
    "category": "MARIN_PRIME",
    "difficulty": "hard",
    "question": "Uma cultura enfrenta condições ambientais adversas e simultaneamente precisa manter equilíbrio nutricional. Qual componente do Regenesis possui posicionamento mais diretamente relacionado a essa combinação?",
    "answers": [
      "Marin Prime",
      "Marin Deep",
      "Ingrow",
      "Todos possuem exatamente a mesma função"
    ],
    "correctAnswer": 0,
    "explanation": "Marin Prime é associado ao alívio de estresses abióticos e ao fornecimento equilibrado de macro e micronutrientes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 38,
    "category": "MARIN_PRIME",
    "difficulty": "hard",
    "question": "Qual característica diferencia principalmente Marin Prime de Marin Deep dentro do protocolo?",
    "answers": [
      "Marin Prime está ligado ao equilíbrio nutricional; Marin Deep, à qualidade do solo",
      "Marin Prime atua na estrutura física do solo; Marin Deep, na modulação hormonal",
      "Marin Prime e Marin Deep possuem funções idênticas",
      "Marin Deep fornece macro e micronutrientes; Marin Prime atua somente na germinação"
    ],
    "correctAnswer": 0,
    "explanation": "Os produtos ocupam pilares diferentes e complementares no Regenesis.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 39,
    "category": "MARIN_PRIME",
    "difficulty": "hard",
    "question": "Qual alternativa NÃO pertence diretamente ao posicionamento do Marin Prime?",
    "answers": [
      "Modulação de auxinas e citocininas",
      "Suplementação de micronutrientes estratégicos",
      "Fornecimento de macronutrientes essenciais",
      "Atenuação de estresses abióticos"
    ],
    "correctAnswer": 0,
    "explanation": "A modulação de auxinas e citocininas pertence ao posicionamento do Ingrow.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 40,
    "category": "MARIN_PRIME",
    "difficulty": "specialist",
    "question": "Dentro da lógica do Regenesis, qual cenário aponta mais especificamente para o papel do Marin Prime?",
    "answers": [
      "Necessidade de suporte nutricional com macro e micronutrientes associado à atenuação de estresses",
      "Limitação predominantemente física, química e biológica do ambiente radicular",
      "Necessidade específica de modulação de auxinas, citocininas e sinalização de defesa",
      "Necessidade de manejo direto de insetos nas estruturas reprodutivas"
    ],
    "correctAnswer": 0,
    "explanation": "O diferencial do Marin Prime é a combinação entre equilíbrio nutricional e suporte diante de estresses abióticos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 41,
    "category": "AMBIOS",
    "difficulty": "easy",
    "question": "Em que ano nasceu a Ambios?",
    "answers": [
      "2019",
      "2016",
      "2017",
      "2022"
    ],
    "correctAnswer": 0,
    "explanation": "Segundo a página institucional da Ambios, a empresa nasceu em 2019.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 42,
    "category": "AMBIOS",
    "difficulty": "easy",
    "question": "Segundo seu site institucional, a Ambios nasceu com o desejo de influenciar e impactar a agricultura de forma:",
    "answers": [
      "Sustentável",
      "Exclusivamente industrial",
      "Independente das condições ambientais",
      "Restrita à comercialização de commodities"
    ],
    "correctAnswer": 0,
    "explanation": "A sustentabilidade faz parte do propósito apresentado na história da Ambios.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 43,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "A Ambios afirma buscar soluções inovadoras especialmente para qual abordagem de agricultura?",
    "answers": [
      "Agricultura regenerativa",
      "Agricultura exclusivamente hidropônica",
      "Agricultura sem manejo de solo",
      "Agricultura exclusivamente mecanizada"
    ],
    "correctAnswer": 0,
    "explanation": "A página institucional relaciona o nascimento da Ambios à busca por soluções inovadoras para a agricultura regenerativa.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 44,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual área aparece como foco das soluções inovadoras desenvolvidas pela Ambios?",
    "answers": [
      "Nutrição vegetal",
      "Máquinas agrícolas",
      "Armazenamento de grãos",
      "Logística rodoviária"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios se posiciona no desenvolvimento de soluções para nutrição vegetal.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 45,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "A Ambios integra qual grupo?",
    "answers": [
      "Natter",
      "Abrapa",
      "Embrapa",
      "Conab"
    ],
    "correctAnswer": 0,
    "explanation": "O site oficial informa que a Ambios integra a Natter.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 46,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual expressão aparece na comunicação institucional da Ambios?",
    "answers": [
      "De produtor para produtor",
      "Da indústria para o campo",
      "Da cidade para a fazenda",
      "Do laboratório para o consumidor"
    ],
    "correctAnswer": 0,
    "explanation": "A comunicação institucional utiliza a ideia 'de produtor para produtor'.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 47,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual destes é um valor oficial da Ambios?",
    "answers": [
      "Cuidar da vida",
      "Produzir a qualquer custo",
      "Evitar transformações",
      "Padronizar todos os cultivos"
    ],
    "correctAnswer": 0,
    "explanation": "'Cuidar da vida' aparece entre os valores institucionais da Ambios.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 48,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual destes também é um valor declarado pela Ambios?",
    "answers": [
      "Liderar a transformação",
      "Evitar mudanças",
      "Reduzir a inovação",
      "Priorizar volume sobre excelência"
    ],
    "correctAnswer": 0,
    "explanation": "'Liderar a transformação' é um dos valores apresentados pela empresa.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 49,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual alternativa apresenta outro valor oficial da Ambios?",
    "answers": [
      "Inovar com excelência",
      "Evitar riscos tecnológicos",
      "Manter soluções imutáveis",
      "Produzir sem inovação"
    ],
    "correctAnswer": 0,
    "explanation": "'Inovar com excelência' integra os valores institucionais.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 50,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Qual alternativa completa corretamente o conjunto de valores da Ambios?",
    "answers": [
      "Agir de forma empreendedora",
      "Evitar transformações",
      "Eliminar a diversidade",
      "Padronizar soluções"
    ],
    "correctAnswer": 0,
    "explanation": "'Agir de forma empreendedora' é um dos quatro valores apresentados pela Ambios.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 51,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Qual conjunto contém apenas valores institucionais apresentados pela Ambios?",
    "answers": [
      "Cuidar da vida; Liderar a transformação; Inovar com excelência; Agir de forma empreendedora",
      "Cuidar da produção; Liderar o mercado; Reduzir custos; Maximizar volume",
      "Preservar processos; Evitar riscos; Padronizar soluções; Controlar mudanças",
      "Produzir mais; Aplicar mais; Crescer mais; Vender mais"
    ],
    "correctAnswer": 0,
    "explanation": "Os quatro valores oficiais são cuidar da vida, liderar a transformação, inovar com excelência e agir de forma empreendedora.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 52,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Segundo a Ambios, as soluções para as culturas devem considerar:",
    "answers": [
      "As necessidades particulares de cada cultivo",
      "Uma receita nutricional única para todas as culturas",
      "Somente o tamanho da propriedade",
      "Exclusivamente a época da colheita"
    ],
    "correctAnswer": 0,
    "explanation": "A comunicação da Ambios destaca soluções formuladas considerando necessidades específicas dos cultivos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 53,
    "category": "AMBIOS",
    "difficulty": "medium",
    "question": "Segundo o site da Ambios, seus produtos são desenvolvidos por:",
    "answers": [
      "Produtores experientes",
      "Exclusivamente operadores de máquinas",
      "Somente empresas de logística",
      "Apenas comerciantes de commodities"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios destaca que seus produtos são desenvolvidos por produtores experientes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 54,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Qual característica é mencionada pela Ambios sobre a formulação de suas soluções?",
    "answers": [
      "São formuladas à base de componentes orgânicos",
      "São formuladas exclusivamente com fibras vegetais",
      "São compostas somente por macronutrientes minerais",
      "São produzidas exclusivamente para aplicação no solo"
    ],
    "correctAnswer": 0,
    "explanation": "O site institucional menciona produtos formulados à base de componentes orgânicos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 55,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Qual objetivo aparece associado à proposta de sustentabilidade da Ambios?",
    "answers": [
      "Produzir mais utilizando menos recursos naturais",
      "Aumentar o uso de recursos independentemente da eficiência",
      "Separar produtividade e sustentabilidade",
      "Concentrar o manejo exclusivamente na fase final da cultura"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios relaciona suas soluções à produtividade, sustentabilidade e melhor utilização dos recursos naturais.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 56,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Qual ação relacionada ao solo aparece na comunicação institucional da Ambios?",
    "answers": [
      "Recuperar o solo",
      "Eliminar a atividade biológica do solo",
      "Desconsiderar as condições do perfil",
      "Trabalhar exclusivamente com a parte aérea"
    ],
    "correctAnswer": 0,
    "explanation": "A recuperação do solo aparece associada à proposta da empresa.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 57,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Qual expressão resume o posicionamento institucional apresentado pela Ambios para o agronegócio?",
    "answers": [
      "Agro a favor da vida",
      "Agro sem limites",
      "Produção acima de tudo",
      "Agricultura sem transformação"
    ],
    "correctAnswer": 0,
    "explanation": "A Ambios utiliza o posicionamento de um agro a favor da vida.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 58,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Na visita técnica apresentada pela Ambios, quais características estão entre as avaliadas no solo?",
    "answers": [
      "Composição nutricional e pH",
      "Somente cor e temperatura",
      "Apenas profundidade de semeadura",
      "Exclusivamente população de plantas"
    ],
    "correctAnswer": 0,
    "explanation": "O site da Ambios menciona avaliação de composição nutricional, pH e outras características do solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 59,
    "category": "AMBIOS",
    "difficulty": "hard",
    "question": "Depois da avaliação técnica, qual abordagem é apresentada pela Ambios?",
    "answers": [
      "Recomendações personalizadas considerando as particularidades do cultivo",
      "Uma recomendação idêntica para qualquer área e cultura",
      "Aumento automático das doses aplicadas",
      "Substituição do acompanhamento por uma recomendação única"
    ],
    "correctAnswer": 0,
    "explanation": "A proposta de atendimento considera particularidades da cultura e recomendações personalizadas.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 60,
    "category": "AMBIOS",
    "difficulty": "specialist",
    "question": "Qual sequência representa melhor a abordagem de acompanhamento técnico apresentada pela Ambios?",
    "answers": [
      "Avaliar condições → recomendar considerando o cultivo → acompanhar desenvolvimento → ajustar quando necessário",
      "Escolher produto → aplicar dose padrão → encerrar acompanhamento",
      "Avaliar somente produtividade → repetir o manejo anterior → colher",
      "Aplicar primeiro → analisar o solo depois → manter a mesma recomendação"
    ],
    "correctAnswer": 0,
    "explanation": "O atendimento divulgado pela Ambios envolve avaliação, recomendação e acompanhamento, permitindo ajustes quando necessários.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 61,
    "category": "ALGODAO",
    "difficulty": "easy",
    "question": "Qual espécie corresponde ao algodoeiro herbáceo amplamente cultivado comercialmente?",
    "answers": [
      "Gossypium hirsutum",
      "Glycine max",
      "Zea mays",
      "Phaseolus vulgaris"
    ],
    "correctAnswer": 0,
    "explanation": "Gossypium hirsutum é a principal espécie de algodoeiro cultivada comercialmente.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 62,
    "category": "ALGODAO",
    "difficulty": "easy",
    "question": "Qual sequência representa corretamente o desenvolvimento reprodutivo do algodoeiro?",
    "answers": [
      "Botão floral → flor → maçã → capulho",
      "Flor → botão floral → capulho → maçã",
      "Maçã → flor → botão floral → capulho",
      "Capulho → maçã → flor → botão floral"
    ],
    "correctAnswer": 0,
    "explanation": "A sequência simplificada é botão floral, flor, desenvolvimento da maçã e posteriormente capulho.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 63,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual estrutura está associada ao início da fase reprodutiva do algodoeiro?",
    "answers": [
      "Primeiro botão floral",
      "Primeira folha verdadeira",
      "Raiz secundária",
      "Cotilédone"
    ],
    "correctAnswer": 0,
    "explanation": "A emissão dos primeiros botões florais marca a entrada da cultura na fase reprodutiva.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 64,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Após a fecundação da flor do algodoeiro, qual estrutura passa a se desenvolver?",
    "answers": [
      "Maçã",
      "Cotilédone",
      "Raiz primária",
      "Hipocótilo"
    ],
    "correctAnswer": 0,
    "explanation": "Após o florescimento e a fecundação, ocorre o desenvolvimento do fruto conhecido como maçã.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 65,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "A abertura dos capulhos está associada principalmente a qual etapa?",
    "answers": [
      "Maturação",
      "Germinação",
      "Emergência",
      "Formação dos cotilédones"
    ],
    "correctAnswer": 0,
    "explanation": "A abertura dos capulhos ocorre na fase de maturação do algodoeiro.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 66,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual função do sistema radicular é essencial para sustentar o desenvolvimento do algodoeiro?",
    "answers": [
      "Explorar o perfil do solo para absorção de água e nutrientes",
      "Produzir diretamente as fibras comerciais",
      "Realizar a maior parte da fotossíntese",
      "Promover diretamente a abertura dos capulhos"
    ],
    "correctAnswer": 0,
    "explanation": "As raízes são fundamentais para exploração do solo e absorção de água e nutrientes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 67,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual consequência é mais diretamente esperada quando existe impedimento físico significativo no perfil do solo?",
    "answers": [
      "Restrição à exploração radicular",
      "Aumento automático da retenção de estruturas reprodutivas",
      "Antecipação obrigatória do florescimento",
      "Abertura imediata dos capulhos"
    ],
    "correctAnswer": 0,
    "explanation": "Impedimentos físicos podem limitar o crescimento e a capacidade das raízes de explorar o perfil.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 68,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Por que uma emergência uniforme é desejável em uma lavoura de algodão?",
    "answers": [
      "Favorece maior uniformidade de desenvolvimento entre as plantas",
      "Elimina a necessidade de monitoramento de pragas",
      "Garante que todas as plantas produzam exatamente o mesmo número de maçãs",
      "Substitui o manejo nutricional posterior"
    ],
    "correctAnswer": 0,
    "explanation": "Uma emergência uniforme contribui para uma população mais homogênea em desenvolvimento.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 69,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual órgão realiza grande parte da fotossíntese responsável pela produção de fotoassimilados?",
    "answers": [
      "Folhas",
      "Raízes",
      "Sementes",
      "Capulhos abertos"
    ],
    "correctAnswer": 0,
    "explanation": "As folhas são os principais órgãos fotossintéticos da planta.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 70,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Os fotoassimilados produzidos pela planta são importantes porque:",
    "answers": [
      "Fornecem compostos utilizados no crescimento e desenvolvimento dos órgãos",
      "Substituem completamente a absorção de nutrientes pelas raízes",
      "Eliminam diretamente insetos e patógenos",
      "Atuam somente depois da abertura dos capulhos"
    ],
    "correctAnswer": 0,
    "explanation": "Os produtos da fotossíntese sustentam crescimento, manutenção e desenvolvimento das estruturas vegetais e reprodutivas.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 71,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual das situações representa um estresse abiótico?",
    "answers": [
      "Déficit hídrico",
      "Ataque de bicudo",
      "Infecção por fungo",
      "Ataque de lagarta"
    ],
    "correctAnswer": 0,
    "explanation": "Déficit hídrico é um estresse provocado por fator não vivo e, portanto, abiótico.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 72,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual situação representa um fator biótico?",
    "answers": [
      "Ataque de insetos",
      "Temperatura elevada",
      "Déficit hídrico",
      "Salinidade"
    ],
    "correctAnswer": 0,
    "explanation": "Insetos são organismos vivos e constituem fatores bióticos.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 73,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Uma lavoura entra na fase reprodutiva sob déficit hídrico intenso. Qual interpretação é agronomicamente mais adequada?",
    "answers": [
      "O estresse pode afetar processos fisiológicos e comprometer o desenvolvimento e retenção de estruturas reprodutivas",
      "O déficit hídrico afeta somente as raízes e não interfere na parte aérea",
      "A fase reprodutiva torna o algodoeiro independente da disponibilidade de água",
      "O estresse hídrico necessariamente aumenta a retenção de todas as estruturas"
    ],
    "correctAnswer": 0,
    "explanation": "O déficit hídrico pode afetar a fisiologia da planta e ter consequências sobre crescimento e desenvolvimento reprodutivo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 74,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Por que conhecer o estádio fenológico é importante para interpretar uma lavoura?",
    "answers": [
      "Porque necessidades, processos fisiológicos e riscos mudam ao longo do ciclo",
      "Porque todas as fases possuem exatamente as mesmas demandas",
      "Porque o estádio fenológico determina sozinho a produtividade",
      "Porque conhecer a fase elimina a necessidade de monitorar a área"
    ],
    "correctAnswer": 0,
    "explanation": "A interpretação agronômica depende do momento de desenvolvimento em que a cultura se encontra.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 75,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Ao observar um sintoma desconhecido na lavoura, qual sequência de decisão é tecnicamente mais adequada?",
    "answers": [
      "Observar → levantar hipóteses → diagnosticar → definir o manejo → acompanhar",
      "Aplicar → aumentar a dose → diagnosticar → observar",
      "Escolher um produto → aplicar → procurar a causa posteriormente",
      "Esperar a colheita → diagnosticar → decidir se o problema existiu"
    ],
    "correctAnswer": 0,
    "explanation": "Uma boa decisão agronômica depende primeiro de observação e diagnóstico antes da definição da intervenção.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 76,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Duas áreas apresentam sintomas semelhantes, mas históricos de solo e manejo diferentes. Qual abordagem é mais adequada?",
    "answers": [
      "Investigar as condições de cada área antes de concluir que a causa é a mesma",
      "Aplicar necessariamente o mesmo manejo porque o sintoma visual é semelhante",
      "Desconsiderar o histórico e avaliar somente a parte aérea",
      "Utilizar apenas a produtividade da safra anterior como diagnóstico"
    ],
    "correctAnswer": 0,
    "explanation": "Sintomas semelhantes podem possuir causas diferentes, portanto histórico, ambiente e diagnóstico são fundamentais.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 77,
    "category": "ALGODAO",
    "difficulty": "easy",
    "question": "Qual praga do algodoeiro corresponde à espécie Anthonomus grandis?",
    "answers": [
      "Bicudo-do-algodoeiro",
      "Mosca-branca",
      "Pulgão-do-algodoeiro",
      "Lagarta-do-cartucho"
    ],
    "correctAnswer": 0,
    "explanation": "Anthonomus grandis é o bicudo-do-algodoeiro.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 78,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "O bicudo-do-algodoeiro causa danos particularmente importantes em:",
    "answers": [
      "Estruturas reprodutivas",
      "Exclusivamente raízes profundas",
      "Somente folhas cotiledonares",
      "Apenas sementes armazenadas"
    ],
    "correctAnswer": 0,
    "explanation": "O bicudo está fortemente associado a danos em estruturas reprodutivas do algodoeiro.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 79,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Durante o monitoramento do bicudo, qual estrutura merece atenção especial?",
    "answers": [
      "Botões florais",
      "Raízes profundas",
      "Cotilédones secos",
      "Fibras já beneficiadas"
    ],
    "correctAnswer": 0,
    "explanation": "Os botões florais são estruturas importantes na inspeção de danos provocados pelo bicudo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 80,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Quais sinais podem ser procurados nos botões durante o monitoramento do bicudo?",
    "answers": [
      "Sinais de alimentação e oviposição",
      "Somente sintomas de deficiência de nitrogênio",
      "Exclusivamente sintomas de déficit hídrico",
      "Apenas alterações de cor provocadas por maturação"
    ],
    "correctAnswer": 0,
    "explanation": "O monitoramento pode observar sinais relacionados à alimentação e oviposição do bicudo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 81,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Botões florais severamente afetados pelo bicudo podem apresentar qual consequência?",
    "answers": [
      "Abscisão e queda",
      "Transformação imediata em capulhos",
      "Formação de raízes adventícias",
      "Aumento obrigatório da retenção"
    ],
    "correctAnswer": 0,
    "explanation": "Danos às estruturas reprodutivas podem resultar em abscisão e queda dos botões.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 82,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual princípio é fundamental no Manejo Integrado de Pragas?",
    "answers": [
      "Monitorar a população e utilizar informações da lavoura para apoiar a tomada de decisão",
      "Aplicar sempre em datas fixas independentemente da população da praga",
      "Utilizar obrigatoriamente uma única tática de controle",
      "Eliminar qualquer inseto encontrado, independentemente de sua função"
    ],
    "correctAnswer": 0,
    "explanation": "O MIP depende de monitoramento, identificação e critérios técnicos para a tomada de decisão.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 83,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Por que o monitoramento é importante dentro do MIP?",
    "answers": [
      "Porque permite acompanhar a situação da lavoura e fundamentar decisões de controle",
      "Porque garante que nenhuma praga jamais estará presente",
      "Porque substitui todas as outras estratégias de manejo",
      "Porque determina diretamente a produtividade final"
    ],
    "correctAnswer": 0,
    "explanation": "O monitoramento gera informações para decidir quando e como intervir.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 84,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Qual alternativa melhor representa o conceito de Manejo Integrado de Pragas?",
    "answers": [
      "Combinar diferentes táticas compatíveis com base no monitoramento e na tomada de decisão",
      "Utilizar somente controle químico durante todo o ciclo",
      "Aplicar a mesma estratégia em qualquer nível de infestação",
      "Evitar qualquer forma de controle biológico ou cultural"
    ],
    "correctAnswer": 0,
    "explanation": "O MIP integra diferentes métodos e utiliza informações da lavoura para orientar decisões.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 85,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "O controle biológico pode integrar qual estratégia?",
    "answers": [
      "Manejo Integrado de Pragas",
      "Somente beneficiamento da fibra",
      "Apenas classificação comercial",
      "Exclusivamente colheita mecanizada"
    ],
    "correctAnswer": 0,
    "explanation": "Controle biológico é uma das ferramentas que podem compor programas de MIP.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 86,
    "category": "ALGODAO",
    "difficulty": "medium",
    "question": "Qual prática pode contribuir para o manejo do sistema produtivo e de problemas fitossanitários?",
    "answers": [
      "Rotação de culturas",
      "Ausência permanente de monitoramento",
      "Manutenção obrigatória de plantas voluntárias",
      "Repetição de uma única estratégia independentemente do diagnóstico"
    ],
    "correctAnswer": 0,
    "explanation": "A rotação de culturas pode contribuir para diversificação do sistema e manejo de diferentes problemas.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 87,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Por que o histórico de uma área deve ser considerado na tomada de decisão?",
    "answers": [
      "Porque ajuda a interpretar riscos, recorrências e possíveis causas dos problemas atuais",
      "Porque permite dispensar completamente o diagnóstico atual",
      "Porque garante que os mesmos problemas sempre ocorrerão",
      "Porque elimina a influência das condições climáticas"
    ],
    "correctAnswer": 0,
    "explanation": "O histórico é uma informação importante, mas deve ser combinado com a avaliação atual da área.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 88,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Uma área apresenta crescimento radicular superficial mesmo havendo umidade em camadas mais profundas. Qual fator deve ser investigado?",
    "answers": [
      "Possíveis impedimentos físicos ou químicos no perfil do solo",
      "Somente a cor das flores",
      "Exclusivamente o tamanho dos capulhos",
      "Apenas a velocidade da colheita"
    ],
    "correctAnswer": 0,
    "explanation": "Limitações físicas ou químicas no perfil podem restringir o aprofundamento e exploração das raízes.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 89,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Qual consequência pode ocorrer quando o sistema radicular explora menor volume de solo?",
    "answers": [
      "Menor acesso potencial a água e nutrientes disponíveis no perfil",
      "Maior fotossíntese obrigatória",
      "Maior retenção garantida de estruturas reprodutivas",
      "Eliminação da sensibilidade a estresses"
    ],
    "correctAnswer": 0,
    "explanation": "Um menor volume explorado pelas raízes pode limitar o acesso da planta aos recursos do solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 90,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Uma planta apresenta crescimento vegetativo intenso, mas baixa retenção de estruturas reprodutivas. Qual abordagem é mais adequada?",
    "answers": [
      "Avaliar o equilíbrio entre crescimento, ambiente, nutrição e condições que podem estar causando perda de estruturas",
      "Concluir imediatamente que crescimento vegetativo elevado sempre significa alta produtividade",
      "Desconsiderar as estruturas reprodutivas até a colheita",
      "Avaliar somente a altura da planta"
    ],
    "correctAnswer": 0,
    "explanation": "Produtividade depende do equilíbrio entre desenvolvimento vegetativo e reprodutivo, além das condições ambientais e de manejo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 91,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Por que a perda elevada de estruturas reprodutivas merece atenção?",
    "answers": [
      "Porque pode reduzir o potencial produtivo da cultura",
      "Porque afeta somente a aparência da planta",
      "Porque melhora obrigatoriamente a qualidade da fibra",
      "Porque não possui relação com produção"
    ],
    "correctAnswer": 0,
    "explanation": "A retenção de estruturas reprodutivas está diretamente relacionada à construção do potencial produtivo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 92,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Uma lavoura apresenta queda de estruturas reprodutivas. Qual conclusão deve ser evitada?",
    "answers": [
      "Atribuir automaticamente o problema a uma única causa sem diagnóstico",
      "Avaliar estresses ambientais",
      "Investigar pragas e doenças",
      "Considerar nutrição e estado fisiológico"
    ],
    "correctAnswer": 0,
    "explanation": "A queda de estruturas pode possuir múltiplas causas; o diagnóstico deve considerar diferentes fatores.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 93,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Uma área apresenta baixa retenção de estruturas reprodutivas, solo com limitação radicular e histórico recente de déficit hídrico. Qual é a interpretação mais adequada?",
    "answers": [
      "Os fatores podem estar interagindo, portanto o diagnóstico deve considerar solo, água, fisiologia e estruturas reprodutivas em conjunto",
      "A baixa retenção deve ser atribuída obrigatoriamente apenas ao déficit hídrico",
      "A limitação radicular não pode influenciar a resposta da planta ao déficit hídrico",
      "Como existem flores, as condições do solo deixam de ser relevantes"
    ],
    "correctAnswer": 0,
    "explanation": "Problemas agronômicos frequentemente resultam da interação de fatores, e não de uma única variável isolada.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 94,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Diante de sintomas foliares semelhantes em diferentes pontos do talhão, mas com distribuição espacial irregular, qual é a melhor primeira interpretação?",
    "answers": [
      "A distribuição dos sintomas deve ser usada como pista no diagnóstico antes de concluir a causa",
      "Sintomas visualmente iguais possuem necessariamente a mesma causa",
      "Todo sintoma foliar irregular é causado por insetos",
      "A distribuição espacial não fornece informação útil ao diagnóstico"
    ],
    "correctAnswer": 0,
    "explanation": "O padrão espacial dos sintomas pode ajudar a diferenciar causas nutricionais, ambientais, fitossanitárias e relacionadas ao solo.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 95,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Qual visão é mais adequada para interpretar a nutrição do algodoeiro?",
    "answers": [
      "Considerar demanda da planta, disponibilidade no solo, estádio e condições ambientais",
      "Utilizar a mesma recomendação independentemente da análise e do estádio",
      "Considerar somente a concentração de um único nutriente",
      "Desconsiderar o sistema radicular na absorção"
    ],
    "correctAnswer": 0,
    "explanation": "A nutrição deve ser interpretada dentro do sistema solo-planta-ambiente e do estágio de desenvolvimento.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 96,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Uma análise indica disponibilidade adequada de determinado nutriente no solo, mas a planta apresenta sinais compatíveis com baixa absorção. Qual hipótese deve ser considerada?",
    "answers": [
      "Condições radiculares ou ambientais podem estar limitando a absorção mesmo com o nutriente presente",
      "A presença do nutriente no solo garante necessariamente sua absorção adequada",
      "As raízes não interferem na aquisição de nutrientes",
      "Todo sintoma nutricional é causado exclusivamente pela quantidade aplicada"
    ],
    "correctAnswer": 0,
    "explanation": "Disponibilidade no solo e absorção pela planta não são conceitos idênticos; condições do sistema radicular e do ambiente podem interferir.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 97,
    "category": "ALGODAO",
    "difficulty": "hard",
    "question": "Qual sequência representa melhor uma tomada de decisão agronômica consistente?",
    "answers": [
      "Monitorar → diagnosticar → decidir → executar → acompanhar a resposta",
      "Aplicar → aumentar dose → diagnosticar → monitorar",
      "Decidir → aplicar → buscar evidências depois",
      "Escolher produto → repetir manejo → ignorar resposta"
    ],
    "correctAnswer": 0,
    "explanation": "Decisões consistentes partem de informação, diagnóstico e acompanhamento dos resultados.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 98,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Qual cenário melhor demonstra a importância de analisar o algodoeiro como um sistema integrado?",
    "answers": [
      "Compactação reduz raízes, menor exploração do solo aumenta sensibilidade ao déficit hídrico e o estresse repercute no desenvolvimento da parte aérea",
      "O solo influencia somente as raízes e não possui relação com a resposta da parte aérea",
      "A disponibilidade de água é independente do sistema radicular",
      "O desenvolvimento reprodutivo ocorre independentemente das condições vegetativas"
    ],
    "correctAnswer": 0,
    "explanation": "Solo, raízes, água, fisiologia e desenvolvimento reprodutivo estão interligados.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 99,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Durante a fase reprodutiva, a planta enfrenta simultaneamente alta demanda, temperatura elevada e disponibilidade hídrica limitada. Qual raciocínio é mais adequado?",
    "answers": [
      "A combinação dos estresses pode comprometer processos fisiológicos e deve ser avaliada de forma integrada",
      "Cada fator atua isoladamente e nunca existe interação entre eles",
      "A presença de estruturas reprodutivas torna a planta menos dependente do ambiente",
      "Temperatura e água deixam de ser relevantes depois do florescimento"
    ],
    "correctAnswer": 0,
    "explanation": "A interação entre fatores ambientais pode intensificar o estresse e repercutir sobre a fisiologia e o desenvolvimento.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  },
  {
    "id": 100,
    "category": "ALGODAO",
    "difficulty": "specialist",
    "question": "Qual princípio resume melhor uma condução tecnicamente consistente do algodoeiro da emergência à abertura dos capulhos?",
    "answers": [
      "Acompanhar a evolução da cultura e adaptar decisões conforme estádio, ambiente, solo, sanidade e resposta das plantas",
      "Definir todo o manejo na emergência e mantê-lo sem alterações até a colheita",
      "Considerar somente o número de aplicações realizadas",
      "Avaliar exclusivamente as estruturas reprodutivas e ignorar solo e raízes"
    ],
    "correctAnswer": 0,
    "explanation": "O algodoeiro passa por diferentes fases e condições; o manejo exige monitoramento e decisões adaptadas à evolução do sistema.",
    "hintField": "Use os elementos do enunciado e o contexto da lavoura para orientar sua escolha.",
    "hintTechnical": "Compare as alternativas com o conceito central apresentado na pergunta.",
    "hintRegenesis": "Observe como solo, fisiologia e nutrição podem se conectar ao tema.",
    "status": "validacao"
  }
];
