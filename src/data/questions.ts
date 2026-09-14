export type Difficulty = "easy" | "medium" | "hard";
export type Category =
  | "solo" | "fisiologia" | "nutricao" | "manejo"
  | "ciencia_tecnologia" | "sustentabilidade" | "agronegocio"
  | "ambios" | "curiosidades";

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
}

export const questions: Question[] = [
  {
    "id": 1,
    "category": "solo",
    "difficulty": "easy",
    "question": "Qual componente do solo é formado por partículas minerais, matéria orgânica, água e ar?",
    "answers": [
      "O próprio solo",
      "Apenas a matéria orgânica",
      "Apenas a água",
      "Apenas partículas minerais"
    ],
    "correctAnswer": 0,
    "explanation": "O solo é um sistema formado por componentes sólidos, líquidos e gasosos.",
    "hintField": "Pense nos quatro componentes básicos do solo.",
    "hintRegenesis": "O solo funciona como um sistema integrado, não apenas como suporte.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 2,
    "category": "solo",
    "difficulty": "easy",
    "question": "Qual propriedade do solo está mais diretamente relacionada ao tamanho e à distribuição de suas partículas?",
    "answers": [
      "Textura",
      "pH",
      "Temperatura",
      "Radiação"
    ],
    "correctAnswer": 0,
    "explanation": "A textura depende das proporções de areia, silte e argila.",
    "hintField": "Relacione a pergunta ao tamanho das partículas.",
    "hintRegenesis": "A estrutura das partículas influencia vários processos físicos do solo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 3,
    "category": "solo",
    "difficulty": "easy",
    "question": "Qual fração mineral do solo possui, em geral, as menores partículas?",
    "answers": [
      "Argila",
      "Areia",
      "Cascalho",
      "Pedregulho"
    ],
    "correctAnswer": 0,
    "explanation": "A argila é composta por partículas menores que areia e silte.",
    "hintField": "Procure a fração de menor tamanho.",
    "hintRegenesis": "Partículas menores apresentam maior área superficial específica.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 4,
    "category": "solo",
    "difficulty": "easy",
    "question": "Qual medida indica se um solo é ácido, neutro ou alcalino?",
    "answers": [
      "pH",
      "CTC",
      "Densidade",
      "Umidade"
    ],
    "correctAnswer": 0,
    "explanation": "O pH é a medida usada para caracterizar a acidez ou alcalinidade.",
    "hintField": "É uma escala de acidez e alcalinidade.",
    "hintRegenesis": "O pH influencia a disponibilidade de diversos nutrientes.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 5,
    "category": "solo",
    "difficulty": "easy",
    "question": "A matéria orgânica contribui para qual conjunto de características do solo?",
    "answers": [
      "Estrutura, retenção de água e atividade biológica",
      "Somente cor",
      "Somente temperatura",
      "Somente salinidade"
    ],
    "correctAnswer": 0,
    "explanation": "A matéria orgânica influencia propriedades físicas, químicas e biológicas.",
    "hintField": "Pense em efeitos físicos e biológicos ao mesmo tempo.",
    "hintRegenesis": "Matéria orgânica é parte importante da qualidade do solo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 6,
    "category": "solo",
    "difficulty": "medium",
    "question": "O que é capacidade de troca de cátions, conhecida como CTC?",
    "answers": [
      "Capacidade do solo de reter e trocar cátions",
      "Quantidade total de água no solo",
      "Velocidade de infiltração",
      "Quantidade de areia"
    ],
    "correctAnswer": 0,
    "explanation": "A CTC representa a capacidade de retenção e troca de íons de carga positiva.",
    "hintField": "Cátions são íons com carga positiva.",
    "hintRegenesis": "Argila e matéria orgânica têm papel importante na CTC.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 7,
    "category": "solo",
    "difficulty": "medium",
    "question": "Qual prática tende a reduzir o risco de erosão em áreas agrícolas?",
    "answers": [
      "Manter cobertura do solo",
      "Deixar o solo permanentemente descoberto",
      "Aumentar o revolvimento sem necessidade",
      "Remover toda a palhada"
    ],
    "correctAnswer": 0,
    "explanation": "A cobertura protege a superfície do impacto das gotas de chuva e do escoamento.",
    "hintField": "Pense em proteção física da superfície.",
    "hintRegenesis": "Cobertura reduz o impacto direto da chuva sobre o solo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 8,
    "category": "solo",
    "difficulty": "medium",
    "question": "A compactação do solo pode dificultar principalmente qual processo?",
    "answers": [
      "Crescimento e exploração das raízes",
      "Formação de luz solar",
      "Fotossíntese nas folhas diretamente",
      "Polinização"
    ],
    "correctAnswer": 0,
    "explanation": "A compactação pode aumentar a resistência mecânica e reduzir porosidade e aeração.",
    "hintField": "Pense no ambiente físico encontrado pelas raízes.",
    "hintRegenesis": "Raízes precisam de espaço, água e oxigênio no perfil.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 9,
    "category": "solo",
    "difficulty": "medium",
    "question": "Qual componente da porosidade do solo é particularmente importante para aeração?",
    "answers": [
      "Macroporos",
      "Microporos exclusivamente",
      "Pedras",
      "Partículas de areia isoladas"
    ],
    "correctAnswer": 0,
    "explanation": "Macroporos favorecem a circulação de ar e a drenagem rápida.",
    "hintField": "Pense nos poros maiores.",
    "hintRegenesis": "A distribuição de poros afeta água e oxigênio.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 10,
    "category": "solo",
    "difficulty": "medium",
    "question": "O que é infiltração de água no solo?",
    "answers": [
      "Entrada da água da superfície para o perfil do solo",
      "Evaporação da água das folhas",
      "Transpiração da planta",
      "Movimento de nutrientes para a atmosfera"
    ],
    "correctAnswer": 0,
    "explanation": "Infiltração é a entrada da água pela superfície do solo.",
    "hintField": "É o movimento da água para dentro do solo.",
    "hintRegenesis": "A infiltração é fundamental para o aproveitamento da chuva.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 11,
    "category": "solo",
    "difficulty": "medium",
    "question": "Por que a estrutura do solo é importante para o desenvolvimento radicular?",
    "answers": [
      "Porque influencia porosidade, água, ar e resistência mecânica",
      "Porque determina diretamente a cor das folhas",
      "Porque elimina a necessidade de nutrientes",
      "Porque impede toda movimentação de água"
    ],
    "correctAnswer": 0,
    "explanation": "A estrutura interfere na organização dos poros e, consequentemente, no ambiente das raízes.",
    "hintField": "Relacione agregados e espaço poroso.",
    "hintRegenesis": "Um solo bem estruturado tende a oferecer melhor ambiente físico às raízes.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 12,
    "category": "solo",
    "difficulty": "medium",
    "question": "Qual situação pode aumentar o risco de deficiência de oxigênio nas raízes?",
    "answers": [
      "Saturação prolongada do solo com água",
      "Boa drenagem",
      "Solo com porosidade equilibrada",
      "Cobertura vegetal"
    ],
    "correctAnswer": 0,
    "explanation": "Quando os poros ficam preenchidos por água por muito tempo, a difusão de oxigênio é prejudicada.",
    "hintField": "Pense no que acontece com o ar dos poros.",
    "hintRegenesis": "Água e ar disputam o espaço poroso do solo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 13,
    "category": "solo",
    "difficulty": "medium",
    "question": "A agregação do solo está relacionada principalmente à organização de quê?",
    "answers": [
      "Partículas em agregados estáveis",
      "Apenas sais solúveis",
      "Somente água livre",
      "Somente raízes grossas"
    ],
    "correctAnswer": 0,
    "explanation": "Agregados são unidades estruturais formadas pela associação de partículas do solo.",
    "hintField": "Pense em partículas que se unem em unidades maiores.",
    "hintRegenesis": "Agregação influencia estabilidade, porosidade e infiltração.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 14,
    "category": "solo",
    "difficulty": "hard",
    "question": "Por que a análise de solo é importante antes de recomendar uma adubação?",
    "answers": [
      "Porque fornece informações para diagnosticar condições químicas e orientar o manejo",
      "Porque substitui todas as avaliações de campo",
      "Porque mede apenas a produtividade futura",
      "Porque determina automaticamente a cultivar"
    ],
    "correctAnswer": 0,
    "explanation": "A análise fornece dados que ajudam a tomar decisões de correção e adubação.",
    "hintField": "Uma decisão técnica precisa de diagnóstico.",
    "hintRegenesis": "Recomendação eficiente começa com informação sobre o solo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 15,
    "category": "solo",
    "difficulty": "hard",
    "question": "Em um solo com forte limitação física, por que simplesmente aumentar a dose de fertilizante pode não resolver o problema?",
    "answers": [
      "Porque a restrição física pode limitar o crescimento radicular e o aproveitamento dos nutrientes",
      "Porque fertilizantes sempre destroem as raízes",
      "Porque nutrientes não são absorvidos por plantas",
      "Porque solo e raiz não têm relação"
    ],
    "correctAnswer": 0,
    "explanation": "A eficiência nutricional depende também de um ambiente físico adequado ao desenvolvimento das raízes.",
    "hintField": "Nem todo problema de planta é exclusivamente nutricional.",
    "hintRegenesis": "Manejo integrado considera solo, planta e ambiente.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 16,
    "category": "fisiologia",
    "difficulty": "easy",
    "question": "Qual processo permite que a planta produza açúcares utilizando luz, água e CO₂?",
    "answers": [
      "Fotossíntese",
      "Respiração",
      "Transpiração",
      "Germinação"
    ],
    "correctAnswer": 0,
    "explanation": "A fotossíntese converte energia luminosa em energia química armazenada.",
    "hintField": "É o principal processo de conversão de energia luminosa.",
    "hintRegenesis": "Folhas capturam luz e utilizam CO₂ e água.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 17,
    "category": "fisiologia",
    "difficulty": "easy",
    "question": "Qual estrutura da folha é responsável principalmente pelas trocas gasosas?",
    "answers": [
      "Estômatos",
      "Xilema",
      "Floema",
      "Raízes"
    ],
    "correctAnswer": 0,
    "explanation": "Estômatos regulam a entrada de CO₂ e a saída de vapor d'água.",
    "hintField": "Procure a estrutura que abre e fecha na folha.",
    "hintRegenesis": "Estômatos conectam fotossíntese, transpiração e ambiente.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 18,
    "category": "fisiologia",
    "difficulty": "easy",
    "question": "Como se chama a perda de água em forma de vapor pelas plantas?",
    "answers": [
      "Transpiração",
      "Respiração",
      "Fotoperiodismo",
      "Germinação"
    ],
    "correctAnswer": 0,
    "explanation": "Transpiração é a perda de água, principalmente através dos estômatos.",
    "hintField": "É uma perda de água para a atmosfera.",
    "hintRegenesis": "A transpiração está ligada ao balanço hídrico da planta.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 19,
    "category": "fisiologia",
    "difficulty": "easy",
    "question": "Qual tecido conduz água e nutrientes minerais das raízes para a parte aérea?",
    "answers": [
      "Xilema",
      "Floema",
      "Epiderme",
      "Câmbio"
    ],
    "correctAnswer": 0,
    "explanation": "O xilema conduz principalmente água e elementos minerais absorvidos pelas raízes.",
    "hintField": "Pense no fluxo ascendente de água.",
    "hintRegenesis": "Xilema está associado ao transporte de água e sais minerais.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 20,
    "category": "fisiologia",
    "difficulty": "easy",
    "question": "Qual tecido transporta principalmente açúcares produzidos nas folhas?",
    "answers": [
      "Floema",
      "Xilema",
      "Epiderme",
      "Estômato"
    ],
    "correctAnswer": 0,
    "explanation": "O floema distribui fotoassimilados para diferentes órgãos da planta.",
    "hintField": "Pense nos produtos da fotossíntese.",
    "hintRegenesis": "O floema distribui assimilados conforme a demanda dos órgãos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 21,
    "category": "fisiologia",
    "difficulty": "medium",
    "question": "O que acontece com os estômatos durante um forte déficit hídrico, em geral?",
    "answers": [
      "Tendem a se fechar",
      "Ficam sempre mais abertos",
      "Desaparecem",
      "Mudam para xilema"
    ],
    "correctAnswer": 0,
    "explanation": "O fechamento estomático reduz a perda de água, embora também limite a entrada de CO₂.",
    "hintField": "Pense na tentativa da planta de reduzir a perda de água.",
    "hintRegenesis": "A resposta estomática é importante na adaptação ao déficit hídrico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 22,
    "category": "fisiologia",
    "difficulty": "medium",
    "question": "Qual hormônio vegetal está fortemente associado à resposta ao déficit hídrico e ao fechamento estomático?",
    "answers": [
      "Ácido abscísico (ABA)",
      "Auxina",
      "Giberelina",
      "Etileno"
    ],
    "correctAnswer": 0,
    "explanation": "O ABA participa de respostas a estresses, incluindo sinalização para fechamento estomático.",
    "hintField": "É conhecido pela sigla ABA.",
    "hintRegenesis": "ABA é um importante sinalizador de estresse hídrico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 23,
    "category": "fisiologia",
    "difficulty": "medium",
    "question": "O que são fotoassimilados?",
    "answers": [
      "Compostos orgânicos produzidos pela fotossíntese",
      "Somente nutrientes minerais",
      "Apenas moléculas de água",
      "Somente proteínas absorvidas do solo"
    ],
    "correctAnswer": 0,
    "explanation": "Fotoassimilados são produtos orgânicos resultantes da assimilação de carbono.",
    "hintField": "Pense no carbono fixado pela fotossíntese.",
    "hintRegenesis": "Eles são distribuídos e utilizados para crescimento e armazenamento.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 24,
    "category": "fisiologia",
    "difficulty": "medium",
    "question": "Qual condição tende a reduzir a fotossíntese por limitar a entrada de CO₂?",
    "answers": [
      "Fechamento estomático",
      "Maior disponibilidade de CO₂",
      "Iluminação adequada",
      "Boa hidratação"
    ],
    "correctAnswer": 0,
    "explanation": "Com estômatos fechados, a entrada de CO₂ para o interior da folha diminui.",
    "hintField": "CO₂ precisa chegar aos tecidos fotossintéticos.",
    "hintRegenesis": "Estresse hídrico pode afetar fotossíntese por vias estomáticas e não estomáticas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 25,
    "category": "fisiologia",
    "difficulty": "medium",
    "question": "O que caracteriza uma planta em crescimento vegetativo?",
    "answers": [
      "Predomínio do desenvolvimento de folhas, caules e raízes",
      "Produção exclusiva de sementes",
      "Ausência total de raízes",
      "Somente maturação de frutos"
    ],
    "correctAnswer": 0,
    "explanation": "A fase vegetativa está associada à formação e expansão dos órgãos vegetativos.",
    "hintField": "Pense nos órgãos que não são estruturas reprodutivas.",
    "hintRegenesis": "Crescimento vegetativo constrói a estrutura da planta.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 26,
    "category": "fisiologia",
    "difficulty": "hard",
    "question": "Por que a fotossíntese pode cair mesmo quando existe luz suficiente?",
    "answers": [
      "Porque outros fatores, como CO₂, temperatura, água e nutrientes, podem limitar o processo",
      "Porque luz nunca participa da fotossíntese",
      "Porque raízes não existem durante a fotossíntese",
      "Porque folhas não possuem estômatos"
    ],
    "correctAnswer": 0,
    "explanation": "A fotossíntese é controlada pela interação de diversos fatores ambientais e fisiológicos.",
    "hintField": "Luz é apenas um dos fatores.",
    "hintRegenesis": "Processos biológicos raramente dependem de uma única variável.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 27,
    "category": "fisiologia",
    "difficulty": "hard",
    "question": "O que significa fonte e dreno no transporte de assimilados?",
    "answers": [
      "Fonte produz ou libera assimilados; dreno os utiliza ou armazena",
      "Fonte absorve água e dreno produz luz",
      "Fonte é sempre raiz e dreno é sempre folha",
      "São nomes para tipos de solo"
    ],
    "correctAnswer": 0,
    "explanation": "Folhas maduras podem atuar como fontes, enquanto frutos, sementes e tecidos em crescimento podem atuar como drenos.",
    "hintField": "Pense em origem e destino dos açúcares.",
    "hintRegenesis": "A relação fonte-dreno muda conforme o estágio da planta.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 28,
    "category": "fisiologia",
    "difficulty": "hard",
    "question": "Por que altas temperaturas podem prejudicar a produtividade mesmo sem causar murcha visível?",
    "answers": [
      "Porque podem alterar processos fisiológicos, reprodução, fotossíntese e respiração",
      "Porque temperatura só afeta a cor da planta",
      "Porque altas temperaturas aumentam sempre a produtividade",
      "Porque a planta deixa de precisar de água"
    ],
    "correctAnswer": 0,
    "explanation": "Estresse térmico pode afetar vários processos simultaneamente.",
    "hintField": "Pense além do sintoma visual.",
    "hintRegenesis": "Temperatura influencia enzimas, membranas, fotossíntese e reprodução.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 29,
    "category": "fisiologia",
    "difficulty": "hard",
    "question": "Qual é uma consequência possível do excesso de água no sistema radicular?",
    "answers": [
      "Redução da disponibilidade de oxigênio",
      "Aumento ilimitado da respiração aeróbia",
      "Fotossíntese das raízes",
      "Eliminação da necessidade de nutrientes"
    ],
    "correctAnswer": 0,
    "explanation": "Saturação reduz a difusão de oxigênio no solo e pode comprometer o metabolismo radicular.",
    "hintField": "As raízes também precisam respirar.",
    "hintRegenesis": "Ambiente radicular é determinante para absorção e crescimento.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 30,
    "category": "fisiologia",
    "difficulty": "hard",
    "question": "Por que uma planta pode apresentar sintomas semelhantes de estresses diferentes?",
    "answers": [
      "Porque diferentes estresses podem afetar processos fisiológicos comuns",
      "Porque todos os estresses são iguais",
      "Porque sintomas visuais sempre identificam uma causa única",
      "Porque nutrientes não interferem na fisiologia"
    ],
    "correctAnswer": 0,
    "explanation": "Déficit hídrico, deficiência nutricional e outros estresses podem convergir para alterações semelhantes.",
    "hintField": "Sintoma visual é evidência, não necessariamente diagnóstico definitivo.",
    "hintRegenesis": "Diagnóstico deve considerar contexto, solo, planta e ambiente.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 31,
    "category": "nutricao",
    "difficulty": "easy",
    "question": "Qual nutriente é um dos principais macronutrientes e participa da formação de proteínas?",
    "answers": [
      "Nitrogênio",
      "Potássio",
      "Cálcio",
      "Cloro"
    ],
    "correctAnswer": 0,
    "explanation": "Nitrogênio integra aminoácidos, proteínas e outras moléculas importantes.",
    "hintField": "Pense no nutriente associado a proteínas e clorofila.",
    "hintRegenesis": "Nitrogênio é essencial ao crescimento e metabolismo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 32,
    "category": "nutricao",
    "difficulty": "easy",
    "question": "Qual nutriente participa fortemente do metabolismo energético e integra moléculas como ATP?",
    "answers": [
      "Fósforo",
      "Boro",
      "Ferro",
      "Manganês"
    ],
    "correctAnswer": 0,
    "explanation": "O fósforo participa de ATP e outros compostos fundamentais ao metabolismo energético.",
    "hintField": "Pense em transferência de energia.",
    "hintRegenesis": "Fósforo está ligado a ATP, ácidos nucleicos e membranas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 33,
    "category": "nutricao",
    "difficulty": "easy",
    "question": "Qual nutriente está associado à regulação osmótica e ativação de diversas enzimas?",
    "answers": [
      "Potássio",
      "Boro",
      "Molibdênio",
      "Níquel"
    ],
    "correctAnswer": 0,
    "explanation": "O potássio atua na regulação osmótica e em várias funções enzimáticas.",
    "hintField": "É um cátion essencial e não faz parte da estrutura de moléculas orgânicas como proteínas.",
    "hintRegenesis": "Potássio tem papel importante no equilíbrio hídrico da planta.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 34,
    "category": "nutricao",
    "difficulty": "easy",
    "question": "Qual micronutriente é componente da molécula de clorofila?",
    "answers": [
      "Magnésio",
      "Boro",
      "Zinco",
      "Cobre"
    ],
    "correctAnswer": 0,
    "explanation": "O magnésio ocupa posição central na molécula de clorofila.",
    "hintField": "Pense no átomo central da clorofila.",
    "hintRegenesis": "Magnésio conecta nutrição mineral e fotossíntese.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 35,
    "category": "nutricao",
    "difficulty": "easy",
    "question": "Qual nutriente é importante para a integridade das paredes celulares e possui baixa mobilidade na planta?",
    "answers": [
      "Cálcio",
      "Nitrogênio",
      "Potássio",
      "Magnésio"
    ],
    "correctAnswer": 0,
    "explanation": "O cálcio tem papel estrutural e, em geral, baixa mobilidade pelo floema.",
    "hintField": "Pense em parede celular e baixa redistribuição.",
    "hintRegenesis": "Por isso sintomas de deficiência podem aparecer em tecidos jovens.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 36,
    "category": "nutricao",
    "difficulty": "medium",
    "question": "Qual elemento está associado à formação e estabilidade da parede celular e à reprodução vegetal?",
    "answers": [
      "Boro",
      "Potássio",
      "Cloro",
      "Níquel"
    ],
    "correctAnswer": 0,
    "explanation": "O boro participa de processos estruturais e reprodutivos, entre outras funções.",
    "hintField": "É um micronutriente essencial.",
    "hintRegenesis": "Sua disponibilidade precisa estar dentro de uma faixa adequada.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 37,
    "category": "nutricao",
    "difficulty": "medium",
    "question": "Qual nutriente é essencial para a formação de clorofila, embora não faça parte da molécula de clorofila?",
    "answers": [
      "Nitrogênio",
      "Cálcio",
      "Boro",
      "Cloro"
    ],
    "correctAnswer": 0,
    "explanation": "O nitrogênio participa da formação de compostos necessários ao aparato fotossintético.",
    "hintField": "A pergunta diferencia participação na formação de clorofila de ser átomo central.",
    "hintRegenesis": "Nutrição influencia diretamente o aparato fotossintético.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 38,
    "category": "nutricao",
    "difficulty": "medium",
    "question": "O que é deficiência nutricional?",
    "answers": [
      "Condição em que a disponibilidade de um nutriente limita funções ou crescimento da planta",
      "Excesso de água",
      "Apenas presença de insetos",
      "Aumento de produtividade"
    ],
    "correctAnswer": 0,
    "explanation": "Deficiência ocorre quando o suprimento de um nutriente é insuficiente para atender às necessidades da planta.",
    "hintField": "Não confunda deficiência com toxicidade.",
    "hintRegenesis": "Diagnóstico deve considerar solo, tecido, sintomas e contexto.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 39,
    "category": "nutricao",
    "difficulty": "medium",
    "question": "Por que a mobilidade de um nutriente na planta influencia o local onde aparecem sintomas?",
    "answers": [
      "Porque nutrientes móveis podem ser redistribuídos de tecidos velhos para tecidos novos",
      "Porque nutrientes móveis nunca entram nas folhas",
      "Porque todos os nutrientes têm a mesma mobilidade",
      "Porque raízes não absorvem nutrientes móveis"
    ],
    "correctAnswer": 0,
    "explanation": "Nutrientes móveis podem ser remobilizados para órgãos em crescimento, alterando o padrão de sintomas.",
    "hintField": "Compare folhas velhas e novas.",
    "hintRegenesis": "Mobilidade ajuda no diagnóstico, mas não deve ser usada isoladamente.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 40,
    "category": "nutricao",
    "difficulty": "medium",
    "question": "O que é antagonismo entre nutrientes?",
    "answers": [
      "Quando a presença ou concentração de um nutriente pode reduzir a absorção ou utilização de outro",
      "Quando dois nutrientes sempre aumentam a absorção um do outro",
      "Quando não existe interação entre nutrientes",
      "Quando nutrientes viram água"
    ],
    "correctAnswer": 0,
    "explanation": "Interações entre nutrientes podem alterar absorção, transporte e metabolismo.",
    "hintField": "Pense em competição ou interferência.",
    "hintRegenesis": "A nutrição vegetal envolve equilíbrio entre elementos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 41,
    "category": "nutricao",
    "difficulty": "hard",
    "question": "Por que uma aplicação foliar não substitui automaticamente a adubação via solo?",
    "answers": [
      "Porque as vias de absorção, doses, mobilidade e necessidades da planta são diferentes",
      "Porque folhas não absorvem nada",
      "Porque raízes absorvem apenas água",
      "Porque adubação foliar é sempre inútil"
    ],
    "correctAnswer": 0,
    "explanation": "Aplicação foliar pode ser estratégica, mas não significa que todas as demandas nutricionais possam ser atendidas por essa via.",
    "hintField": "A planta possui diferentes vias e limitações de absorção.",
    "hintRegenesis": "Estratégia depende do nutriente, cultura, estádio e objetivo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 42,
    "category": "nutricao",
    "difficulty": "hard",
    "question": "Por que o pH do solo influencia a disponibilidade de nutrientes?",
    "answers": [
      "Porque altera processos químicos que controlam solubilidade, retenção e formas químicas dos elementos",
      "Porque pH determina apenas a temperatura",
      "Porque nutrientes não sofrem reações no solo",
      "Porque pH não afeta raízes"
    ],
    "correctAnswer": 0,
    "explanation": "A reação do solo influencia a forma química e a disponibilidade de diversos nutrientes.",
    "hintField": "Disponibilidade não é igual a quantidade total.",
    "hintRegenesis": "Química do solo e absorção estão conectadas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 43,
    "category": "nutricao",
    "difficulty": "hard",
    "question": "Uma planta com alto potencial produtivo exige apenas mais fertilizante?",
    "answers": [
      "Não; exige equilíbrio entre nutrição, água, ambiente, genética, solo e manejo",
      "Sim, sempre",
      "Somente água",
      "Somente micronutrientes"
    ],
    "correctAnswer": 0,
    "explanation": "Potencial produtivo depende de múltiplos fatores e do equilíbrio entre eles.",
    "hintField": "Evite pensar em produtividade como função de um único insumo.",
    "hintRegenesis": "Manejo integrado busca limitar os principais fatores restritivos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 44,
    "category": "nutricao",
    "difficulty": "hard",
    "question": "O que pode acontecer quando um nutriente está presente no solo, mas não está em forma disponível para a planta?",
    "answers": [
      "A planta pode apresentar deficiência mesmo havendo quantidade total do elemento",
      "A planta sempre absorve 100% do elemento",
      "O nutriente desaparece fisicamente",
      "A planta deixa de fazer fotossíntese"
    ],
    "correctAnswer": 0,
    "explanation": "Quantidade total e disponibilidade são conceitos diferentes.",
    "hintField": "Pense na diferença entre estoque e acesso.",
    "hintRegenesis": "Química do solo, pH, umidade e interações influenciam disponibilidade.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 45,
    "category": "nutricao",
    "difficulty": "hard",
    "question": "Por que diagnosticar apenas um sintoma visual pode levar a uma recomendação nutricional errada?",
    "answers": [
      "Porque sintomas semelhantes podem ter causas diferentes",
      "Porque sintomas nunca são úteis",
      "Porque nutrientes não produzem sintomas",
      "Porque solo não influencia nutrição"
    ],
    "correctAnswer": 0,
    "explanation": "Sintomas devem ser interpretados junto com histórico, análise, distribuição na lavoura e condições ambientais.",
    "hintField": "Sintoma é uma pista, não uma sentença.",
    "hintRegenesis": "Diagnóstico robusto combina diferentes evidências.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 46,
    "category": "manejo",
    "difficulty": "easy",
    "question": "Qual é o objetivo principal do manejo integrado de pragas?",
    "answers": [
      "Combinar estratégias para manter pragas abaixo de níveis que causem dano econômico",
      "Eliminar todos os insetos da lavoura",
      "Aplicar inseticida sempre",
      "Evitar qualquer monitoramento"
    ],
    "correctAnswer": 0,
    "explanation": "O MIP combina métodos e usa monitoramento e critérios de decisão.",
    "hintField": "Nem todo inseto presente é necessariamente uma praga econômica.",
    "hintRegenesis": "Manejo integrado busca eficiência e sustentabilidade.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 47,
    "category": "manejo",
    "difficulty": "easy",
    "question": "Por que monitorar uma lavoura antes de tomar uma decisão de controle?",
    "answers": [
      "Para conhecer a ocorrência e a intensidade do problema",
      "Para aumentar automaticamente o número de aplicações",
      "Para substituir a análise de solo",
      "Para evitar qualquer tomada de decisão"
    ],
    "correctAnswer": 0,
    "explanation": "Monitoramento fornece evidências para decidir se, quando e como agir.",
    "hintField": "Decisão técnica depende de informação.",
    "hintRegenesis": "Monitoramento é uma das bases do manejo racional.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 48,
    "category": "manejo",
    "difficulty": "easy",
    "question": "O que é rotação de culturas?",
    "answers": [
      "Alternância planejada de diferentes culturas na mesma área ao longo do tempo",
      "Plantio da mesma cultura continuamente",
      "Colheita antecipada",
      "Aplicação de dois fertilizantes"
    ],
    "correctAnswer": 0,
    "explanation": "Rotação alterna espécies e pode contribuir para manejo de solo, pragas e doenças.",
    "hintField": "Pense em diversidade temporal.",
    "hintRegenesis": "Rotação é uma ferramenta de planejamento do sistema produtivo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 49,
    "category": "manejo",
    "difficulty": "easy",
    "question": "Qual é uma vantagem da cobertura do solo com palhada?",
    "answers": [
      "Redução da erosão e conservação de umidade",
      "Aumento obrigatório da erosão",
      "Eliminação de todas as plantas daninhas",
      "Aumento automático da compactação"
    ],
    "correctAnswer": 0,
    "explanation": "Palhada protege a superfície e ajuda a conservar água.",
    "hintField": "Pense na proteção física do solo.",
    "hintRegenesis": "Cobertura também influencia temperatura e dinâmica biológica.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 50,
    "category": "manejo",
    "difficulty": "easy",
    "question": "O que significa janela de plantio?",
    "answers": [
      "Período considerado adequado para realizar a semeadura de uma cultura",
      "Tempo necessário para colher",
      "Período de armazenamento de sementes",
      "Tempo de transporte"
    ],
    "correctAnswer": 0,
    "explanation": "A janela considera condições climáticas e agronômicas favoráveis ao estabelecimento.",
    "hintField": "É uma janela de oportunidade agrícola.",
    "hintRegenesis": "Escolher o momento influencia risco e potencial produtivo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 51,
    "category": "manejo",
    "difficulty": "medium",
    "question": "Por que a qualidade de sementes é importante para o estabelecimento da lavoura?",
    "answers": [
      "Porque influencia germinação, vigor e formação do estande",
      "Porque determina apenas o preço da semente",
      "Porque elimina a necessidade de manejo",
      "Porque controla diretamente o clima"
    ],
    "correctAnswer": 0,
    "explanation": "Sementes de qualidade favorecem emergência uniforme e estande adequado.",
    "hintField": "Pense no início da lavoura.",
    "hintRegenesis": "Estabelecimento uniforme é uma base importante do potencial produtivo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 52,
    "category": "manejo",
    "difficulty": "medium",
    "question": "O que é estande de plantas?",
    "answers": [
      "Número e distribuição de plantas estabelecidas por área",
      "Quantidade de fertilizante aplicada",
      "Volume de chuva acumulada",
      "Número de máquinas"
    ],
    "correctAnswer": 0,
    "explanation": "Estande descreve a população e sua distribuição na área.",
    "hintField": "É uma medida da população da cultura.",
    "hintRegenesis": "Estande influencia competição e aproveitamento de recursos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 53,
    "category": "manejo",
    "difficulty": "medium",
    "question": "Por que a uniformidade de emergência pode ser importante?",
    "answers": [
      "Porque reduz diferenças de desenvolvimento e competição entre plantas",
      "Porque elimina a necessidade de água",
      "Porque impede qualquer doença",
      "Porque aumenta automaticamente a fertilidade"
    ],
    "correctAnswer": 0,
    "explanation": "Emergência uniforme tende a produzir plantas com estádios mais semelhantes.",
    "hintField": "Pense em competição entre plantas da mesma lavoura.",
    "hintRegenesis": "Uniformidade ajuda a sincronizar desenvolvimento.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 54,
    "category": "manejo",
    "difficulty": "medium",
    "question": "Qual prática ajuda a reduzir a pressão de seleção para resistência a defensivos?",
    "answers": [
      "Rotacionar mecanismos de ação e integrar diferentes estratégias",
      "Usar sempre o mesmo mecanismo de ação",
      "Aumentar sempre a dose",
      "Aplicar sem monitoramento"
    ],
    "correctAnswer": 0,
    "explanation": "Rotação e integração reduzem a dependência repetitiva de um único mecanismo de ação.",
    "hintField": "Resistência é favorecida por pressão de seleção contínua.",
    "hintRegenesis": "Estratégia de manejo precisa ser planejada.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 55,
    "category": "manejo",
    "difficulty": "medium",
    "question": "O que é manejo conservacionista do solo?",
    "answers": [
      "Conjunto de práticas que busca reduzir degradação e preservar funções do solo",
      "Revolvimento máximo do solo em todas as situações",
      "Remoção completa da cobertura",
      "Eliminação da matéria orgânica"
    ],
    "correctAnswer": 0,
    "explanation": "Inclui práticas como cobertura, menor perturbação e diversificação, conforme o sistema.",
    "hintField": "Pense em conservar a função do solo.",
    "hintRegenesis": "Conservação é um princípio de longo prazo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 56,
    "category": "manejo",
    "difficulty": "hard",
    "question": "Por que o manejo deve considerar o estádio fenológico da cultura?",
    "answers": [
      "Porque necessidades, sensibilidade e respostas da planta mudam ao longo do ciclo",
      "Porque estádio fenológico só muda a cor da folha",
      "Porque plantas têm as mesmas necessidades em todas as fases",
      "Porque o estádio não influencia decisões"
    ],
    "correctAnswer": 0,
    "explanation": "O estádio altera demanda de água e nutrientes e sensibilidade a estresses.",
    "hintField": "A planta não é igual do início ao fim do ciclo.",
    "hintRegenesis": "Timing é parte da eficiência do manejo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 57,
    "category": "manejo",
    "difficulty": "hard",
    "question": "O que significa manejo baseado em diagnóstico?",
    "answers": [
      "Tomar decisões a partir de evidências sobre solo, planta, ambiente e problema identificado",
      "Aplicar insumos por hábito",
      "Copiar uma dose sem avaliar a área",
      "Decidir apenas pela aparência de uma planta"
    ],
    "correctAnswer": 0,
    "explanation": "Diagnóstico transforma observações e análises em decisões mais direcionadas.",
    "hintField": "Primeiro entender, depois intervir.",
    "hintRegenesis": "Decisões melhores começam com diagnóstico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 58,
    "category": "manejo",
    "difficulty": "hard",
    "question": "Por que a variabilidade dentro de uma lavoura importa?",
    "answers": [
      "Porque diferentes zonas podem apresentar limitações e necessidades distintas",
      "Porque toda lavoura é sempre uniforme",
      "Porque só a borda da lavoura importa",
      "Porque variabilidade elimina a necessidade de monitoramento"
    ],
    "correctAnswer": 0,
    "explanation": "Solo, relevo, histórico e outros fatores podem variar espacialmente.",
    "hintField": "Nem toda área responde da mesma forma.",
    "hintRegenesis": "Manejo localizado pode aumentar precisão.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 59,
    "category": "manejo",
    "difficulty": "hard",
    "question": "Qual é uma consequência de tomar decisões de manejo sem considerar o histórico da área?",
    "answers": [
      "Aumento do risco de repetir erros ou ignorar limitações recorrentes",
      "Garantia de maior produtividade",
      "Eliminação de todos os riscos",
      "Aumento automático da eficiência"
    ],
    "correctAnswer": 0,
    "explanation": "Histórico de culturas, problemas e resultados ajuda a contextualizar decisões.",
    "hintField": "O passado da área contém informação útil.",
    "hintRegenesis": "Manejo é também aprendizado entre safras.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 60,
    "category": "manejo",
    "difficulty": "hard",
    "question": "Por que integrar práticas de manejo pode ser mais eficiente do que depender de uma única intervenção?",
    "answers": [
      "Porque diferentes práticas podem atuar sobre diferentes fatores limitantes",
      "Porque uma única intervenção nunca funciona",
      "Porque integração elimina custos",
      "Porque todas as práticas têm o mesmo efeito"
    ],
    "correctAnswer": 0,
    "explanation": "Sistemas agrícolas são complexos e diferentes práticas podem se complementar.",
    "hintField": "Pense em combinação de estratégias.",
    "hintRegenesis": "Integração aumenta a capacidade de lidar com múltiplos fatores.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 61,
    "category": "ciencia_tecnologia",
    "difficulty": "easy",
    "question": "O que é sensoriamento remoto?",
    "answers": [
      "Obtenção de informações sobre uma área sem contato físico direto com cada ponto observado",
      "Análise manual de uma folha",
      "Aplicação de fertilizante",
      "Irrigação subterrânea"
    ],
    "correctAnswer": 0,
    "explanation": "Sensoriamento remoto usa sensores em satélites, drones ou aeronaves, por exemplo.",
    "hintField": "Pense em observar à distância.",
    "hintRegenesis": "Imagens podem ajudar a identificar padrões espaciais.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 62,
    "category": "ciencia_tecnologia",
    "difficulty": "easy",
    "question": "Para que índices de vegetação podem ser usados no campo?",
    "answers": [
      "Para analisar padrões relacionados à vegetação a partir de dados de sensores",
      "Para substituir todas as análises laboratoriais",
      "Para determinar automaticamente a produtividade final",
      "Para eliminar o monitoramento"
    ],
    "correctAnswer": 0,
    "explanation": "Índices de vegetação podem indicar diferenças relativas no vigor ou cobertura vegetal.",
    "hintField": "São ferramentas de interpretação, não diagnósticos isolados.",
    "hintRegenesis": "Dados precisam de contexto para gerar decisões.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 63,
    "category": "ciencia_tecnologia",
    "difficulty": "easy",
    "question": "O que significa agricultura de precisão?",
    "answers": [
      "Uso de dados e tecnologias para manejar a variabilidade espacial e temporal da produção",
      "Plantio exclusivamente manual",
      "Uso obrigatório de drones em todas as operações",
      "Aplicação uniforme de todos os insumos"
    ],
    "correctAnswer": 0,
    "explanation": "Agricultura de precisão busca melhorar decisões considerando variabilidade.",
    "hintField": "Precisão não significa apenas usar tecnologia.",
    "hintRegenesis": "Dados e manejo caminham juntos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 64,
    "category": "ciencia_tecnologia",
    "difficulty": "medium",
    "question": "O que é uma área de manejo?",
    "answers": [
      "Uma região definida por características semelhantes para orientar decisões específicas",
      "Uma área sem plantas",
      "Um depósito de máquinas",
      "Uma área definida apenas pelo tamanho"
    ],
    "correctAnswer": 0,
    "explanation": "Áreas de manejo agrupam regiões com características ou respostas semelhantes.",
    "hintField": "Pense em zonas de comportamento semelhante.",
    "hintRegenesis": "A definição depende dos dados e do objetivo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 65,
    "category": "ciencia_tecnologia",
    "difficulty": "medium",
    "question": "Qual é uma vantagem de combinar dados de solo e imagens de plantas?",
    "answers": [
      "Permitir uma interpretação mais completa das condições da lavoura",
      "Eliminar a necessidade de campo",
      "Garantir produtividade sem manejo",
      "Substituir todos os profissionais"
    ],
    "correctAnswer": 0,
    "explanation": "Dados de fontes diferentes podem complementar o diagnóstico.",
    "hintField": "Solo e planta contam partes diferentes da história.",
    "hintRegenesis": "Integração de dados aumenta o contexto.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 66,
    "category": "ciencia_tecnologia",
    "difficulty": "medium",
    "question": "O que é uma série temporal de imagens?",
    "answers": [
      "Conjunto de imagens da mesma área obtidas em diferentes momentos",
      "Uma única fotografia ampliada",
      "Um mapa sem coordenadas",
      "Uma análise de solo"
    ],
    "correctAnswer": 0,
    "explanation": "Comparar datas permite acompanhar mudanças ao longo do ciclo.",
    "hintField": "A palavra temporal indica evolução no tempo.",
    "hintRegenesis": "Mudanças são mais informativas quando comparadas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 67,
    "category": "ciencia_tecnologia",
    "difficulty": "hard",
    "question": "Por que um mapa de vigor vegetal não deve ser interpretado sozinho como diagnóstico nutricional?",
    "answers": [
      "Porque diferentes fatores podem produzir padrões semelhantes na vegetação",
      "Porque mapas nunca têm utilidade",
      "Porque nutrientes não afetam plantas",
      "Porque imagens sempre identificam a causa"
    ],
    "correctAnswer": 0,
    "explanation": "Imagem mostra um padrão, mas a causa precisa ser investigada.",
    "hintField": "Padrão não é sinônimo de causa.",
    "hintRegenesis": "Combine imagem com campo, solo e outros dados.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 68,
    "category": "ciencia_tecnologia",
    "difficulty": "hard",
    "question": "Qual é o principal benefício de usar dados georreferenciados no manejo?",
    "answers": [
      "Relacionar informações a posições específicas da área",
      "Eliminar a necessidade de mapas",
      "Impedir qualquer variação",
      "Aumentar automaticamente a chuva"
    ],
    "correctAnswer": 0,
    "explanation": "Georreferenciamento permite saber onde cada observação ocorreu.",
    "hintField": "Localização é parte importante do dado.",
    "hintRegenesis": "Isso permite comparar zonas e acompanhar histórico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 69,
    "category": "ciencia_tecnologia",
    "difficulty": "hard",
    "question": "O que caracteriza uma decisão baseada em dados?",
    "answers": [
      "Usar informações mensuráveis e contexto para reduzir incerteza na decisão",
      "Ignorar medições",
      "Decidir apenas por hábito",
      "Usar tecnologia sem interpretar os dados"
    ],
    "correctAnswer": 0,
    "explanation": "Dados ajudam a reduzir incerteza quando são corretamente coletados e interpretados.",
    "hintField": "Dados sem contexto também podem induzir erro.",
    "hintRegenesis": "Tecnologia é meio para melhorar decisões.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 70,
    "category": "ciencia_tecnologia",
    "difficulty": "hard",
    "question": "Por que a validação em campo é importante ao usar modelos ou imagens para agricultura?",
    "answers": [
      "Porque a realidade da lavoura precisa confirmar e contextualizar a interpretação dos dados",
      "Porque modelos sempre estão certos",
      "Porque imagens não podem ser comparadas ao campo",
      "Porque validação impede o uso de tecnologia"
    ],
    "correctAnswer": 0,
    "explanation": "Validação relaciona o que o sensor indica ao que realmente ocorre na área.",
    "hintField": "Tecnologia e observação de campo devem conversar.",
    "hintRegenesis": "Modelos melhores dependem de dados e validação adequados.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 71,
    "category": "sustentabilidade",
    "difficulty": "easy",
    "question": "O que é conservação do solo?",
    "answers": [
      "Conjunto de práticas que reduz a degradação e mantém suas funções produtivas e ambientais",
      "Remoção da cobertura do solo",
      "Aumento da erosão",
      "Eliminação da matéria orgânica"
    ],
    "correctAnswer": 0,
    "explanation": "Conservar solo significa manter sua capacidade de desempenhar funções ao longo do tempo.",
    "hintField": "Pense em preservar o recurso para o futuro.",
    "hintRegenesis": "Solo é um recurso vivo e estratégico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 72,
    "category": "sustentabilidade",
    "difficulty": "easy",
    "question": "Qual prática contribui para reduzir a erosão?",
    "answers": [
      "Manutenção de cobertura vegetal ou palhada",
      "Solo descoberto",
      "Aumento do escoamento superficial",
      "Remoção de resíduos"
    ],
    "correctAnswer": 0,
    "explanation": "A cobertura protege o solo contra impacto das gotas e escoamento.",
    "hintField": "Pense em uma proteção sobre a superfície.",
    "hintRegenesis": "Cobertura é uma ferramenta simples e importante.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 73,
    "category": "sustentabilidade",
    "difficulty": "easy",
    "question": "O que significa biodiversidade?",
    "answers": [
      "Variedade de formas de vida em determinado ambiente",
      "Quantidade de máquinas",
      "Quantidade de fertilizante",
      "Tamanho da propriedade"
    ],
    "correctAnswer": 0,
    "explanation": "Biodiversidade inclui diversidade de espécies, genes e ecossistemas.",
    "hintField": "É variedade de vida.",
    "hintRegenesis": "Sistemas diversos podem oferecer diferentes funções ecológicas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 74,
    "category": "sustentabilidade",
    "difficulty": "medium",
    "question": "Por que diversificar culturas pode contribuir para a sustentabilidade do sistema?",
    "answers": [
      "Porque aumenta a diversidade e pode melhorar ciclos de nutrientes, solo e manejo de organismos",
      "Porque elimina todos os riscos",
      "Porque dispensa planejamento",
      "Porque garante produtividade em qualquer clima"
    ],
    "correctAnswer": 0,
    "explanation": "Diversificação pode trazer benefícios agronômicos e ecológicos.",
    "hintField": "Pense no sistema como um todo.",
    "hintRegenesis": "Diversidade temporal e espacial pode aumentar resiliência.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 75,
    "category": "sustentabilidade",
    "difficulty": "medium",
    "question": "O que significa eficiência no uso de nutrientes?",
    "answers": [
      "Produzir melhor aproveitando de forma adequada os nutrientes fornecidos e disponíveis",
      "Aplicar sempre a maior dose",
      "Não utilizar nutrientes",
      "Usar nutrientes sem considerar a cultura"
    ],
    "correctAnswer": 0,
    "explanation": "Eficiência envolve sincronizar fonte, dose, época e local com a demanda da cultura.",
    "hintField": "Mais insumo não significa necessariamente mais eficiência.",
    "hintRegenesis": "O objetivo é reduzir perdas e melhorar aproveitamento.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 76,
    "category": "sustentabilidade",
    "difficulty": "medium",
    "question": "Por que a matéria orgânica é relevante para sistemas agrícolas sustentáveis?",
    "answers": [
      "Porque participa de processos físicos, químicos e biológicos do solo",
      "Porque serve apenas para escurecer o solo",
      "Porque substitui toda adubação",
      "Porque elimina a necessidade de água"
    ],
    "correctAnswer": 0,
    "explanation": "Matéria orgânica influencia estrutura, retenção de água, nutrientes e atividade biológica.",
    "hintField": "Pense em múltiplas funções.",
    "hintRegenesis": "Sua contribuição ocorre em várias dimensões.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 77,
    "category": "sustentabilidade",
    "difficulty": "hard",
    "question": "O que significa resiliência de um sistema agrícola?",
    "answers": [
      "Capacidade de suportar ou se recuperar de perturbações mantendo suas funções",
      "Capacidade de evitar qualquer mudança",
      "Apenas produtividade máxima",
      "Uso máximo de insumos"
    ],
    "correctAnswer": 0,
    "explanation": "Resiliência está relacionada à capacidade de lidar com estresses e perturbações.",
    "hintField": "Pense em resistência e recuperação.",
    "hintRegenesis": "Sistemas mais resilientes tendem a lidar melhor com variabilidade.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 78,
    "category": "sustentabilidade",
    "difficulty": "hard",
    "question": "Por que sustentabilidade agrícola não pode ser avaliada apenas pela produtividade de uma safra?",
    "answers": [
      "Porque também envolve aspectos econômicos, ambientais e sociais ao longo do tempo",
      "Porque produtividade não importa",
      "Porque apenas o clima importa",
      "Porque sustentabilidade é somente conservação de água"
    ],
    "correctAnswer": 0,
    "explanation": "Sustentabilidade considera múltiplas dimensões e horizonte de longo prazo.",
    "hintField": "Uma safra é apenas um recorte temporal.",
    "hintRegenesis": "Resultado sustentável precisa ser duradouro.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 79,
    "category": "sustentabilidade",
    "difficulty": "hard",
    "question": "Qual abordagem melhor representa o uso responsável de insumos agrícolas?",
    "answers": [
      "Aplicar com base em necessidade, diagnóstico, recomendação técnica e boas práticas",
      "Aplicar sempre a dose máxima",
      "Aplicar sem monitoramento",
      "Aplicar apenas por calendário fixo"
    ],
    "correctAnswer": 0,
    "explanation": "Uso responsável busca adequação ao problema, à cultura e às condições da área.",
    "hintField": "Eficiência depende de precisão e contexto.",
    "hintRegenesis": "Boa prática reduz desperdícios e riscos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 80,
    "category": "sustentabilidade",
    "difficulty": "hard",
    "question": "Por que saúde do solo é um conceito mais amplo que fertilidade química?",
    "answers": [
      "Porque inclui dimensões físicas e biológicas além da disponibilidade de nutrientes",
      "Porque fertilidade não tem relação com solo",
      "Porque solo saudável não precisa de nutrientes",
      "Porque apenas matéria orgânica importa"
    ],
    "correctAnswer": 0,
    "explanation": "Saúde do solo considera funcionamento físico, químico e biológico.",
    "hintField": "Nutrição é uma parte, não o todo.",
    "hintRegenesis": "Um solo funcional sustenta múltiplos processos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 81,
    "category": "agronegocio",
    "difficulty": "easy",
    "question": "O que é produtividade agrícola?",
    "answers": [
      "Quantidade produzida por unidade de área",
      "Preço de uma máquina",
      "Número de funcionários",
      "Quantidade de chuva"
    ],
    "correctAnswer": 0,
    "explanation": "Produtividade relaciona produção a uma unidade, frequentemente área.",
    "hintField": "É diferente de produção total.",
    "hintRegenesis": "Uma mesma produção total pode resultar de produtividades diferentes.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 82,
    "category": "agronegocio",
    "difficulty": "easy",
    "question": "O que significa custo por hectare?",
    "answers": [
      "Valor dos custos atribuídos a cada hectare cultivado",
      "Preço total da fazenda",
      "Valor de venda da produção",
      "Número de plantas"
    ],
    "correctAnswer": 0,
    "explanation": "É uma forma de relacionar despesas à área manejada.",
    "hintField": "Pense em custo dividido pela área.",
    "hintRegenesis": "Ajuda a comparar eficiência econômica entre áreas.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 83,
    "category": "agronegocio",
    "difficulty": "medium",
    "question": "O que é margem bruta, de forma simplificada?",
    "answers": [
      "Receita menos custos variáveis",
      "Receita mais área",
      "Produtividade multiplicada por chuva",
      "Preço menos hectares"
    ],
    "correctAnswer": 0,
    "explanation": "Margem bruta é uma medida simplificada que desconta custos variáveis da receita.",
    "hintField": "Não confunda com lucro líquido.",
    "hintRegenesis": "Indicadores econômicos ajudam a avaliar decisões.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 84,
    "category": "agronegocio",
    "difficulty": "medium",
    "question": "Por que produtividade e rentabilidade não são sinônimos?",
    "answers": [
      "Porque uma produtividade maior pode vir acompanhada de custos também maiores",
      "Porque produtividade nunca importa",
      "Porque rentabilidade depende apenas do clima",
      "Porque custos não existem na agricultura"
    ],
    "correctAnswer": 0,
    "explanation": "Rentabilidade depende de receitas e custos, não apenas do volume produzido.",
    "hintField": "Mais produção não garante maior resultado econômico.",
    "hintRegenesis": "Decisão deve considerar retorno e risco.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 85,
    "category": "agronegocio",
    "difficulty": "hard",
    "question": "Por que o risco climático é relevante para o planejamento agrícola?",
    "answers": [
      "Porque clima influencia estabelecimento, desenvolvimento, doenças, operações e produtividade",
      "Porque clima afeta apenas máquinas",
      "Porque tecnologia elimina o clima",
      "Porque clima não interfere na produção"
    ],
    "correctAnswer": 0,
    "explanation": "Variabilidade climática pode alterar várias etapas do sistema produtivo.",
    "hintField": "Planejamento agrícola envolve incerteza.",
    "hintRegenesis": "Gestão de risco considera cenários e janelas de decisão.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 86,
    "category": "ambios",
    "difficulty": "easy",
    "question": "Qual é o nome do programa da AMBIOS voltado à abordagem de regeneração?",
    "answers": [
      "Programa Regenesis",
      "Programa Safra Total",
      "Programa Campo Vivo",
      "Programa Nutriplan"
    ],
    "correctAnswer": 0,
    "explanation": "O Programa Regenesis é uma plataforma conceitual importante no universo de comunicação da AMBIOS.",
    "hintField": "A palavra está relacionada à ideia de regeneração.",
    "hintRegenesis": "Regenesis conecta nutrição, solo e visão de sistema.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 87,
    "category": "ambios",
    "difficulty": "easy",
    "question": "Qual destas palavras faz parte da ideia central de valores trabalhada pela AMBIOS?",
    "answers": [
      "Inovar",
      "Estagnar",
      "Simplificar sem diagnosticar",
      "Ignorar"
    ],
    "correctAnswer": 0,
    "explanation": "Inovar aparece entre os valores associados à marca.",
    "hintField": "Pense em transformação e inovação.",
    "hintRegenesis": "A inovação é apresentada como parte da cultura da marca.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 88,
    "category": "ambios",
    "difficulty": "medium",
    "question": "Qual destas palavras também está associada aos valores da AMBIOS?",
    "answers": [
      "Cuidar",
      "Desconsiderar",
      "Acelerar sem avaliar",
      "Padronizar tudo"
    ],
    "correctAnswer": 0,
    "explanation": "Cuidar é um dos valores associados à marca.",
    "hintField": "Pense na relação entre cuidado e vida.",
    "hintRegenesis": "Cuidado é apresentado como princípio de atuação.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 89,
    "category": "ambios",
    "difficulty": "medium",
    "question": "Qual combinação melhor representa uma abordagem integrada para interpretar uma lavoura?",
    "answers": [
      "Solo, planta, ambiente e manejo",
      "Apenas a cor das folhas",
      "Somente o preço do fertilizante",
      "Apenas a previsão do tempo"
    ],
    "correctAnswer": 0,
    "explanation": "Uma visão integrada considera múltiplos fatores que interagem no sistema.",
    "hintField": "Não procure uma única variável.",
    "hintRegenesis": "Diagnóstico sistêmico amplia a compreensão do campo.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 90,
    "category": "ambios",
    "difficulty": "medium",
    "question": "Dentro de uma visão de regeneração, qual ideia faz mais sentido?",
    "answers": [
      "Buscar sistemas mais vivos, equilibrados e capazes de sustentar produção",
      "Buscar apenas uma resposta imediata",
      "Ignorar o solo",
      "Considerar somente produtividade instantânea"
    ],
    "correctAnswer": 0,
    "explanation": "Regeneração pressupõe olhar para processos e funcionamento do sistema.",
    "hintField": "Pense em longo prazo e funcionamento.",
    "hintRegenesis": "O conceito amplia o olhar para além do insumo isolado.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 91,
    "category": "ambios",
    "difficulty": "medium",
    "question": "Qual destas áreas está diretamente relacionada ao universo de uma empresa de nutrição agrícola?",
    "answers": [
      "Nutrição vegetal",
      "Aviação comercial",
      "Moda",
      "Turismo"
    ],
    "correctAnswer": 0,
    "explanation": "Nutrição vegetal é parte central do setor de atuação da AMBIOS.",
    "hintField": "Relacione a marca ao campo.",
    "hintRegenesis": "Nutrição é uma das bases do desenvolvimento vegetal.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 92,
    "category": "ambios",
    "difficulty": "hard",
    "question": "Por que uma abordagem integrada de nutrição vegetal pode ser mais eficiente que olhar apenas para um nutriente isolado?",
    "answers": [
      "Porque disponibilidade e função dos nutrientes interagem com solo, planta, ambiente e manejo",
      "Porque todos os nutrientes têm a mesma função",
      "Porque um nutriente resolve qualquer limitação",
      "Porque solo não interfere na absorção"
    ],
    "correctAnswer": 0,
    "explanation": "A planta responde a um sistema de fatores interdependentes.",
    "hintField": "Pense em equilíbrio e interação.",
    "hintRegenesis": "Nutrição é parte de um sistema maior.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 93,
    "category": "ambios",
    "difficulty": "hard",
    "question": "Qual afirmação melhor representa uma visão sistêmica do campo?",
    "answers": [
      "Uma decisão deve considerar as interações entre solo, planta, ambiente e manejo",
      "Cada fator pode ser analisado sempre de forma isolada",
      "Somente o sintoma visual importa",
      "Apenas o produto utilizado determina o resultado"
    ],
    "correctAnswer": 0,
    "explanation": "Visão sistêmica procura compreender relações entre diferentes componentes.",
    "hintField": "O sistema é maior que a soma de variáveis isoladas.",
    "hintRegenesis": "Essa abordagem ajuda a encontrar fatores limitantes.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 94,
    "category": "ambios",
    "difficulty": "hard",
    "question": "Qual atitude está mais alinhada a uma cultura de excelência técnica?",
    "answers": [
      "Investigar, interpretar dados e tomar decisões com base em evidências",
      "Repetir recomendações sem diagnóstico",
      "Ignorar resultados anteriores",
      "Escolher soluções apenas pela aparência"
    ],
    "correctAnswer": 0,
    "explanation": "Excelência técnica depende de análise, conhecimento e melhoria contínua.",
    "hintField": "Pense em método e evidência.",
    "hintRegenesis": "Boa decisão combina conhecimento e contexto.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 95,
    "category": "ambios",
    "difficulty": "hard",
    "question": "Em uma comunicação técnica responsável, qual é a melhor prática antes de transformar uma observação em recomendação?",
    "answers": [
      "Validar a causa provável e considerar contexto, dados e condições da área",
      "Assumir a causa imediatamente",
      "Recomendar sempre a mesma solução",
      "Ignorar variabilidade"
    ],
    "correctAnswer": 0,
    "explanation": "Comunicação técnica deve diferenciar observação, hipótese e diagnóstico.",
    "hintField": "Primeiro entender a situação.",
    "hintRegenesis": "Responsabilidade técnica começa pela qualidade do diagnóstico.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 96,
    "category": "curiosidades",
    "difficulty": "medium",
    "question": "Qual gás da atmosfera é matéria-prima da fotossíntese?",
    "answers": [
      "Dióxido de carbono (CO₂)",
      "Oxigênio (O₂)",
      "Nitrogênio (N₂)",
      "Hidrogênio (H₂)"
    ],
    "correctAnswer": 0,
    "explanation": "O carbono do CO₂ é incorporado a compostos orgânicos durante a fotossíntese.",
    "hintField": "É o gás associado à fixação de carbono.",
    "hintRegenesis": "CO₂ entra principalmente pelos estômatos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 97,
    "category": "curiosidades",
    "difficulty": "medium",
    "question": "Qual órgão normalmente absorve água e nutrientes minerais do solo?",
    "answers": [
      "Raiz",
      "Flor",
      "Fruto",
      "Semente"
    ],
    "correctAnswer": 0,
    "explanation": "As raízes são os principais órgãos de absorção de água e nutrientes minerais.",
    "hintField": "Pense no órgão em contato com o solo.",
    "hintRegenesis": "Raízes também ancoram a planta e podem armazenar compostos.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 98,
    "category": "curiosidades",
    "difficulty": "medium",
    "question": "Por que folhas geralmente são verdes?",
    "answers": [
      "Porque a clorofila absorve principalmente outras faixas da luz e reflete mais luz verde",
      "Porque não possuem pigmentos",
      "Porque absorvem somente luz verde",
      "Porque o solo colore as folhas"
    ],
    "correctAnswer": 0,
    "explanation": "A clorofila tem um padrão específico de absorção de luz, fazendo o verde ser mais refletido.",
    "hintField": "Pense na interação entre pigmentos e luz.",
    "hintRegenesis": "Cor visível é resultado do que é refletido ou transmitido.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 99,
    "category": "curiosidades",
    "difficulty": "medium",
    "question": "Qual processo transforma água líquida em vapor e contribui para o resfriamento da planta?",
    "answers": [
      "Transpiração",
      "Germinação",
      "Fixação de nitrogênio",
      "Polinização"
    ],
    "correctAnswer": 0,
    "explanation": "A perda de água por transpiração pode contribuir para a dissipação de calor.",
    "hintField": "É a saída de vapor d'água.",
    "hintRegenesis": "Água, temperatura e estômatos estão relacionados.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  },
  {
    "id": 100,
    "category": "curiosidades",
    "difficulty": "medium",
    "question": "Por que raízes podem crescer em direção a regiões do solo com melhores condições?",
    "answers": [
      "Porque o crescimento radicular responde a sinais ambientais, incluindo água, nutrientes e características físicas",
      "Porque raízes sempre crescem aleatoriamente",
      "Porque raízes seguem apenas a luz",
      "Porque raízes não respondem ao ambiente"
    ],
    "correctAnswer": 0,
    "explanation": "O sistema radicular apresenta plasticidade e responde às condições encontradas no perfil.",
    "hintField": "Pense na capacidade da raiz de explorar o ambiente.",
    "hintRegenesis": "Arquitetura radicular é influenciada por múltiplos fatores.",
    "hintTechnical": "Analise os conceitos-chave da pergunta e elimine primeiro as alternativas que contradizem o princípio técnico envolvido."
  }
];
