import {
  PlanItem,
  ProblemSolution,
  ComparisonItem,
  Differential,
  TargetAudience,
  FaqItem,
  ServiceMediaItem,
  ReviewItem,
  ReviewGalleryImage,
} from '../types';
import rev1Img from '../assets/images/regenerated_image_1789429191139.png';
import rev2Img from '../assets/images/regenerated_image_1789429308718.png';
import rev3Img from '../assets/images/regenerated_image_1789429565454.png';
import rev4Img from '../assets/images/regenerated_image_1789429648135.png';
import rev5Img from '../assets/images/regenerated_image_1789429728170.png';

export const COMPANY_INFO = {
  name: 'Intelsecsul — Segurança Eletrônica',
  shortName: 'Intelsecsul',
  tagline: 'Segurança Eletrônica & Locação de Câmeras',
  phoneDisplay: '(41) 99156-0946',
  phoneRaw: '5541991560946',
  phoneTel: 'tel:+5541991560946',
  whatsappBaseUrl: 'https://wa.me/5541991560946',
  hoursWeekday: 'Segunda a Sexta: 08h às 18h',
  hoursEmergency: 'Emergências e plantão técnico: 24h',
  brandEquipment: 'Equipamentos Homologados',
  cities: [
    'Curitiba',
    'Pinhais',
    'São José dos Pinhais',
    'Araucária',
    'Almirante Tamandaré',
    'Colombo',
    'Campo Largo',
    'Fazenda Rio Grande',
    'Campo Magro',
    'Quatro Barras',
    'Campina Grande do Sul',
  ],
};

export function buildWhatsAppLink(message: string): string {
  return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim do site e quero conhecer os planos de locação de câmeras da Intelsecsul.';

export const HERO_DEFAULT_WHATSAPP = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

export const PLANS_DATA: PlanItem[] = [
  {
    id: 'plano-essencial',
    name: 'Plano Essencial',
    camerasCount: 2,
    specs: '2 câmeras IP 1080p, NVR 4 canais, HD 500GB',
    image: '/1.png',
    items: [
      '2 Câmeras IP Full HD 1080p',
      'Gravador NVR 4 Canais IP',
      'HD Especial para CFTV 500GB',
      'Acesso no celular 24h por app',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 149,
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 2 câmeras por R$149/mês.',
  },
  {
    id: 'plano-compacto',
    name: 'Plano Compacto',
    camerasCount: 3,
    specs: '3 câmeras IP 1080p, NVR 4 canais, HD 500GB',
    image: '/2.png',
    items: [
      '3 Câmeras IP Full HD 1080p',
      'Gravador NVR 4 Canais IP',
      'HD Especial para CFTV 500GB',
      'Acesso no celular 24h por app',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 199,
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 3 câmeras por R$199/mês.',
  },
  {
    id: 'plano-protecao',
    name: 'Plano Proteção',
    camerasCount: 4,
    specs: '4 câmeras IP 1080p, NVR 4 canais, HD 500GB',
    image: '/3.png',
    items: [
      '4 Câmeras IP Full HD 1080p',
      'Gravador NVR 4 Canais IP',
      'HD Especial para CFTV 500GB',
      'Acesso no celular 24h por app',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 249,
    highlighted: true,
    badge: 'Mais escolhido',
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 4 câmeras por R$249/mês.',
  },
  {
    id: 'plano-completo',
    name: 'Plano Completo',
    camerasCount: 6,
    specs: '6 câmeras IP 1080p, NVR 8 canais, HD 1TB',
    image: '/4.png',
    items: [
      '6 Câmeras IP Full HD 1080p',
      'Gravador NVR 8 Canais IP',
      'HD Especial para CFTV 1TB (gravação estendida)',
      'Acesso no celular 24h por app',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 389,
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 6 câmeras por R$389/mês.',
  },
  {
    id: 'plano-empresarial',
    name: 'Plano Empresarial',
    camerasCount: 8,
    specs: '8 câmeras IP 1080p, NVR 8 canais, HD 1TB',
    image: '/5.png',
    items: [
      '8 Câmeras IP Full HD 1080p',
      'Gravador NVR 8 Canais IP',
      'HD Especial para CFTV 1TB',
      'Acesso no celular 24h por app',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 489,
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 8 câmeras por R$489/mês.',
  },
  {
    id: 'plano-condominio',
    name: 'Plano Condomínio/Corporativo',
    camerasCount: 16,
    specs: '16 câmeras IP 1080p, NVR 16 canais, HD 2TB',
    image: '/6.png',
    items: [
      '16 Câmeras IP Full HD 1080p',
      'Gravador NVR 16 Canais IP',
      'HD Especial para CFTV 2TB',
      'Acesso multiusuário no celular e portaria',
      'Gabinete rack metálico com chave',
      'Switch PoE',
      'Cabo 100% cobre',
      'Instalação, manutenção e suporte inclusos',
    ],
    priceMonthly: 899,
    buttonLabel: 'Quero este plano',
    whatsappMessage:
      'Olá! Vim do site e quero saber mais sobre o plano de 16 câmeras por R$899/mês para projeto condomínio/corporativo.',
  },
];

export const TRUST_BAR_ITEMS = [
  {
    title: 'Equipamentos de ponta',
    description: 'Linha profissional homologada com garantia de ponta a ponta',
  },
  {
    title: 'Equipe técnica própria',
    description: 'Técnicos qualificados, uniformizados e não terceirizados',
  },
  {
    title: 'Atendimento em 11 cidades da RMC',
    description: 'Cobertura rápida em Curitiba e Região Metropolitana',
  },
  {
    title: 'Contrato com SLA',
    description: 'Compromisso formal de atendimento rápido para seu imóvel',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Fale com a gente',
    description:
      'Chame nossa equipe pelo WhatsApp para entender suas necessidades e tirar todas as dúvidas rapidamente.',
  },
  {
    step: '2',
    title: 'Mapeamento Gratuito',
    description:
      'Nossa equipe técnica planeja a melhor cobertura para eliminar pontos cegos do seu espaço, sem custo.',
  },
  {
    step: '3',
    title: 'Instalação e Configuração',
    description:
      'Instalamos toda a infraestrutura física e configuramos o acesso 24h direto no seu celular ou PC.',
  },
];

export const INCLUDED_ITEMS = [
  {
    title: 'Câmeras Full HD / IP',
    description: 'Resolução 1080p nítida com visão noturna infravermelha para capturar todos os detalhes.',
  },
  {
    title: 'Gravador NVR Dedicado',
    description: 'Equipamento dedicado para gravação contínua sem depender de computadores.',
  },
  {
    title: 'HD de Gravação Dedicado',
    description: 'Disco rígido próprio para CFTV, operando 24 horas por dia com segurança.',
  },
  {
    title: 'Cabeamento 100% Cobre',
    description: 'Transmissão de sinal sem ruídos, maior durabilidade e estabilidade garantida.',
  },
  {
    title: 'Gabinete Rack com Trava',
    description: 'Proteção física para o gravador e conexões, evitando acessos não autorizados.',
  },
  {
    title: 'Switch PoE Profissional',
    description: 'Alimentação e sinal de dados no mesmo cabo, garantindo organização e confiabilidade.',
  },
  {
    title: 'Instalação Completa',
    description: 'Toda a infraestrutura, fixação, passagem de cabos e conectores feita por especialistas.',
  },
  {
    title: 'Manutenção Preventiva e Corretiva',
    description: 'Visitas técnicas periódicas e reparos sempre que necessário, sem surpresas.',
  },
  {
    title: 'Substituição Imediata de Peças',
    description: 'Equipamento queimou ou apresentou defeito? Trocamos sem cobrar nada a mais.',
  },
  {
    title: 'Suporte Técnico Contínuo',
    description: 'Atendimento direto com nossa equipe para dúvidas, configurações e redefinições.',
  },
];

export const PROBLEMS_SOLVED_ITEMS: ProblemSolution[] = [
  {
    id: 'prob-1',
    problem: 'Câmeras antigas quebrando sempre',
    solution: 'Substituição sem custo.',
  },
  {
    id: 'prob-2',
    problem: 'Câmeras queimadas por raio',
    solution: 'Manutenção e troca já inclusas na mensalidade.',
  },
  {
    id: 'prob-3',
    problem: 'Conserto mais caro que comprar novo',
    solution: 'Mão de obra e peças cobertas pela mensalidade.',
  },
  {
    id: 'prob-4',
    problem: 'Empresa que vendeu e sumiu, sem garantia',
    solution: 'Suporte contínuo com equipe própria.',
  },
  {
    id: 'prob-5',
    problem: 'Portaria sem identificar rosto ou placa',
    solution: 'Upgrade para Full HD/IP sem custo de compra.',
  },
  {
    id: 'prob-6',
    problem: 'Falta de caixa para investir',
    solution: 'Capex zero, começa sem desembolso inicial.',
  },
];

export const COMPARISON_TABLE_ITEMS: ComparisonItem[] = [
  {
    id: 'comp-1',
    criterion: 'Investimento Inicial',
    buyingTitle: 'Alto desembolso imediato.',
    buyingDescription: 'Exige capital de giro da empresa ou orçamento familiar.',
    rentingTitle: 'Zero investimento inicial.',
    rentingDescription: 'Comece sem tirar nada do caixa ou da poupança.',
  },
  {
    id: 'comp-2',
    criterion: 'Taxa de Instalação',
    buyingTitle: 'Cobrada separadamente',
    buyingDescription: '(mão de obra, infraestrutura, conectores).',
    rentingTitle: 'R$ 0,00 de taxa.',
    rentingDescription: 'Instalação especializada já inclusa.',
  },
  {
    id: 'comp-3',
    criterion: 'Queima, desconfiguração, defeitos',
    buyingTitle: 'Custo total seu.',
    buyingDescription: 'Garantia do fabricante não cobre.',
    rentingTitle: 'Substituição sem custo.',
    rentingDescription: 'Equipamento trocado sem cobrança adicional.',
  },
  {
    id: 'comp-4',
    criterion: 'Defeito no HD de Gravação',
    buyingTitle: 'Você compra um HD novo',
    buyingDescription: 'e paga a visita do técnico para trocar.',
    rentingTitle: 'Troca imediata.',
    rentingDescription: 'Manutenção preventiva e corretiva sem surpresas.',
  },
  {
    id: 'comp-5',
    criterion: 'Suporte e Mão de Obra',
    buyingTitle: 'Paga por cada visita técnica',
    buyingDescription: '(entre R$ 150 e R$ 250 por chamado).',
    rentingTitle: 'Atendimento contínuo incluso na mensalidade.',
    rentingDescription: 'Chamados técnicos sem limite.',
  },
  {
    id: 'comp-6',
    criterion: 'Previsibilidade de Caixa',
    buyingTitle: 'Incerta.',
    buyingDescription: 'Gastos imprevisíveis com manutenções e trocas de peças.',
    rentingTitle: '100% Previsível.',
    rentingDescription: 'Mensalidade fixa, sem surpresas no fim do mês.',
  },
];

export const DIFFERENTIALS_ITEMS: Differential[] = [
  {
    id: 'diff-1',
    title: 'Mensalidade fixa e previsível',
    description:
      'Sem surpresas no orçamento no fim do mês: você sabe exatamente o que paga e tem cobertura total de manutenção e peças.',
  },
  {
    id: 'diff-2',
    title: 'Equipamentos profissionais homologados',
    description:
      'Trabalhamos exclusivamente com tecnologia de ponta e equipamentos homologados de alta confiabilidade.',
  },
  {
    id: 'diff-3',
    title: 'Suporte com equipe própria (SLA contratual)',
    description:
      'Não terceirizamos instalações nem chamados. Técnicos treinados e prontos para atender com compromisso e agilidade.',
  },
  {
    id: 'diff-4',
    title: 'Abatimento fiscal facilitado para empresas',
    description:
      'A locação é contabilizada como despesa operacional (OPEX), possibilitando abatimento de impostos para empresas tributadas no Lucro Real.',
  },
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'residencia',
    title: 'Residência',
    description:
      'Proteção total para sua família e patrimônio com monitoramento pelo celular de onde você estiver.',
    whatsappMessage:
      'Olá! Vim do site e tenho interesse em locação de câmeras para minha residência.',
  },
  {
    id: 'empresa',
    title: 'Empresa',
    description:
      'Controle operacional de equipes, fluxo de clientes e estoque sem imobilizar capital da sua empresa.',
    whatsappMessage:
      'Olá! Vim do site e quero uma proposta de locação de câmeras para minha empresa.',
  },
  {
    id: 'condominio',
    title: 'Condomínio',
    description:
      'Segurança reforçada em portarias, garagens e áreas comuns com manutenção permanente inclusa na cota condominial.',
    whatsappMessage:
      'Olá! Vim do site e preciso de uma avaliação para locação de câmeras em condomínio.',
  },
];

export interface FaqCategoryGroup {
  category: string;
  items: FaqItem[];
}

export const FAQ_ITEMS: FaqItem[] = [
  // --- GRUPO: Planos e valores ---
  {
    id: 'faq-planos-incluso',
    category: 'Planos e valores',
    question: 'O que exatamente está incluso na mensalidade de todos os planos?',
    answer:
      'Todos os planos são completos, sem custos ocultos e sem cobranças extras. Cuidamos de toda a infraestrutura: câmeras IP Full HD, gravador NVR com HD dedicado gravando 24 horas por dia, cabeamento estruturado, switch PoE profissional, gabinete rack metálico com trava, instalação profissional completa sem taxa de instalação, manutenção preventiva e corretiva, substituição de peças por defeito de fabricação ou desgaste natural, e suporte técnico contínuo.',
  },
  {
    id: 'faq-planos-taxa',
    category: 'Planos e valores',
    question: 'Existe taxa de instalação ou cobrança extra na locação?',
    answer:
      'Não! Zero taxas extras. Você apenas paga a primeira mensalidade no final da instalação e já pode usufruir do monitoramento e manutenções. Equipamentos, cabeamento, conectores, rack metálico, switch PoE, mão de obra especializada e visitas técnicas já estão cobertos pela sua mensalidade fixa contratada.',
  },
  {
    id: 'faq-planos-defeito',
    category: 'Planos e valores',
    question: 'O que acontece se um equipamento apresentar defeito?',
    answer:
      'Defeitos de fabricação, falhas no sistema ou desgaste natural são reparados ou substituídos sem custo extra, dentro da manutenção inclusa no seu contrato. Você não precisa se preocupar com garantia expirada ou orçamentos de assistência técnica.',
  },
  {
    id: 'faq-planos-raio',
    category: 'Planos e valores',
    question: 'Danos causados por raio ou problemas na rede elétrica do imóvel são cobertos?',
    answer:
      'A manutenção inclusa cobre defeitos de fabricação, falhas de sistema e desgaste natural. Danos causados por descargas elétricas (raios) ou por instalação elétrica irregular no imóvel são tratados à parte, conforme as condições do contrato — por isso recomendamos manter a rede elétrica do local estabilizada e, se possível, com proteção contra surtos.',
  },

  // --- GRUPO: Contrato e pagamento ---
  {
    id: 'faq-contrato-prazo',
    category: 'Contrato e pagamento',
    question: 'Qual o prazo mínimo de contrato?',
    answer: 'O contrato de locação tem fidelidade de 36 meses.',
  },
  {
    id: 'faq-contrato-cancelar',
    category: 'Contrato e pagamento',
    question: 'Posso cancelar o contrato antes do prazo de 36 meses?',
    answer:
      'Sim, mas o cancelamento antes do fim da fidelidade gera uma multa proporcional ao número de mensalidades restantes até completar os 36 meses, calculada sobre o valor da mensalidade vigente na data do cancelamento.',
  },
  {
    id: 'faq-contrato-reajuste',
    category: 'Contrato e pagamento',
    question: 'O valor da mensalidade pode aumentar com o tempo?',
    answer:
      'Sim. Assim como a maioria dos contratos de prestação de serviço contínuo, o valor é reajustado uma vez por ano com base na variação do IPCA (índice oficial de inflação), para manter o equilíbrio do contrato ao longo do tempo.',
  },
  {
    id: 'faq-contrato-propriedade',
    category: 'Contrato e pagamento',
    question: 'Os equipamentos ficam sendo meus depois de um tempo?',
    answer:
      'Não. Os equipamentos permanecem de propriedade da Intelsecsul durante toda a locação — é justamente por isso que você não precisa de investimento inicial. Ao final do contrato, fazemos a retirada sem custo para você.',
  },
  {
    id: 'faq-contrato-atraso',
    category: 'Contrato e pagamento',
    question: 'O que acontece se eu atrasar o pagamento da mensalidade?',
    answer:
      'Em caso de atraso, o acesso ao aplicativo de monitoramento e o suporte técnico podem ser suspensos temporariamente até a regularização. Assim que o pagamento é identificado, o acesso volta ao normal.',
  },

  // --- GRUPO: Atendimento técnico e segurança dos dados ---
  {
    id: 'faq-atendimento-perfis',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'A locação funciona para residências, empresas e condomínios?',
    answer:
      'Sim, perfeitamente! Atendemos cada perfil de imóvel com soluções sob medida: residências (proteção contínua, monitoramento pelo celular de onde estiver, instalação discreta), empresas e comércios (controle operacional, proteção de estoque e caixa, sem imobilizar capital de giro) e condomínios (segurança reforçada em portarias e áreas comuns, manutenção permanente inclusa e apoio técnico para apresentação do projeto em assembleia).',
  },
  {
    id: 'faq-atendimento-infra',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Preciso ter internet e rede elétrica própria no local?',
    answer:
      'Sim, o local precisa de rede elétrica estabilizada e de uma conexão de internet ativa para você gravar e acompanhar as imagens em tempo real.',
  },
  {
    id: 'faq-atendimento-app',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Consigo ver as câmeras pelo celular?',
    answer:
      'Sim! No momento da instalação, configuramos o aplicativo oficial de monitoramento no celular ou PC. Você pode assistir imagens ao vivo, reproduzir gravações passadas e receber alertas de movimento.',
  },
  {
    id: 'faq-atendimento-prazo',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Qual o prazo de atendimento técnico quando eu abro um chamado?',
    answer:
      'Nosso compromisso é atender chamados corretivos em até 48 horas úteis após a abertura do chamado. Para casos de urgência, oferecemos atendimento emergencial mais rápido, sujeito à disponibilidade técnica no momento.',
  },
  {
    id: 'faq-atendimento-roubo',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Se as câmeras forem roubadas ou destruídas em um incêndio, eu preciso pagar por elas?',
    answer:
      'É necessário registrar um Boletim de Ocorrência em até 5 dias úteis e nos comunicar. A partir disso avaliamos o caso: sem negligência comprovada, tratamos a reposição de forma negociada entre as partes; havendo negligência do responsável pelo imóvel, a reposição fica a cargo do contratante, conforme previsto em contrato.',
  },
  {
    id: 'faq-atendimento-terceiros',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Posso chamar outra empresa para mexer no sistema?',
    answer:
      'Não. Intervenções de terceiros no sistema não são permitidas pelo contrato e comprometem a cobertura de manutenção gerando quebra de contrato e multa. Qualquer ajuste deve ser feito pela nossa equipe técnica.',
  },
  {
    id: 'faq-atendimento-lgpd',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Meus dados e imagens armazenadas ficam seguros?',
    answer:
      'Sim. Seguimos a LGPD (Lei Geral de Proteção de Dados) e mantemos sigilo total sobre as imagens gravadas, acessando o sistema apenas quando necessário para execução de manutenção técnica.',
  },
  {
    id: 'faq-atendimento-placa',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Preciso colocar uma placa avisando que o local é monitorado por câmeras?',
    answer:
      'Não se preocupe com isso — a Intelsecsul já fornece a placa de sinalização de área monitorada como parte da instalação, atendendo à exigência legal de informar visitantes e funcionários.',
  },
  {
    id: 'faq-atendimento-cidades',
    category: 'Atendimento técnico e segurança dos dados',
    question: 'Vocês atendem minha cidade?',
    answer:
      'Atendemos Curitiba e mais 10 cidades da Região Metropolitana: Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul.',
  },
];

/**
 * 3 Imagens e 2 Vídeos de serviços realizados pela Intelsecsul.
 * Para substituir pelas suas fotos e vídeos reais:
 * - Coloque seus arquivos na pasta /public (ex: /public/servico-1.jpg ou /public/video-1.mp4)
 * - Atualize as propriedades `mediaUrl` e `posterUrl` abaixo com os caminhos correspondentes.
 */
export const SERVICE_MEDIA_ITEMS: ServiceMediaItem[] = [
  // 3 Imagens de Serviços Realizados
  {
    id: 'servico-foto-1',
    type: 'image',
    slotNumber: 1,
    badge: 'Foto 1 • Residencial',
    title: 'Instalação de Câmeras IP Externas',
    subtitle: 'Residência em Curitiba/PR',
    description:
      'Fixação com vedação IP67, acabamento limpo sem fios aparentes e ângulo panorâmico cobrindo portão e fachada.',
    mediaUrl:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'servico-foto-2',
    type: 'image',
    slotNumber: 2,
    badge: 'Foto 2 • Comercial',
    title: 'Gabinete Rack Metálico & Switch PoE',
    subtitle: 'Comércio em São José dos Pinhais/PR',
    description:
      'Cabeamento 100% cobre conectorizado, switch PoE e gravador NVR protegidos em rack fechado com chave de segurança.',
    mediaUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'servico-foto-3',
    type: 'image',
    slotNumber: 3,
    badge: 'Foto 3 • Condomínio',
    title: 'Monitoramento de Portaria e Garagens',
    subtitle: 'Condomínio Residencial em Pinhais/PR',
    description:
      'Câmeras com visão noturna infravermelha de longo alcance para leitura de placas e circulação de pedestres.',
    mediaUrl:
      'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?auto=format&fit=crop&w=1200&q=80',
  },

  // 2 Vídeos de Serviços Realizados
  {
    id: 'servico-video-1',
    type: 'video',
    slotNumber: 1,
    badge: 'Vídeo 1 • Instalação',
    title: 'Tour pela Instalação e Teste Full HD',
    subtitle: 'Demonstração de nitidez e acabamento técnico',
    description:
      'Veja o teste prático de gravação em tempo real, passagem de cabos e posicionamento estratégico das câmeras.',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-security-camera-monitoring-a-street-41584-large.mp4',
    posterUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'servico-video-2',
    type: 'video',
    slotNumber: 2,
    badge: 'Vídeo 2 • Aplicativo',
    title: 'Acesso às Imagens no Celular em 24h',
    subtitle: 'Interface em tempo real com reprodução de eventos',
    description:
      'Acompanhe como o cliente acessa as imagens na palma da mão com zero delay, zoom digital e alertas instantâneos.',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-smartphone-screen-displaying-data-42721-large.mp4',
    posterUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcelo D.',
    role: 'Residencial',
    location: 'Curitiba / PR',
    rating: 5,
    date: 'Cliente desde 2023',
    comment:
      'Instalação caprichosa no muro de casa. A caixinha escondeu todos os fios, acabamento perfeito!',
    verified: true,
    imageUrl: rev1Img,
    imageAlt: 'Câmera Intelbras fixada com tubulação aparente e acabamento perfeito',
  },
  {
    id: 'rev-2',
    author: 'Luciana K.',
    role: 'Condomínio',
    location: 'São José dos Pinhais / PR',
    rating: 5,
    date: 'Cliente desde 2023',
    comment:
      'Excelente serviço, profissional de confiança',
    verified: true,
    imageUrl: rev2Img,
    imageAlt: 'Câmera dome branca instalada em teto de residência',
  },
  {
    id: 'rev-3',
    author: 'Paulo R.',
    role: 'Comércio',
    location: 'Pinhais / PR',
    rating: 5,
    date: 'Cliente desde 2022',
    comment:
      'Sistema excelente para o nosso comércio. Imagem limpa e sem travamentos',
    verified: true,
    imageUrl: rev3Img,
    imageAlt: 'Câmera bullet Intelbras em muro de condomínio',
  },
  {
    id: 'rev-4',
    author: 'Amanda C.',
    role: 'Condomínio',
    location: 'Araucária / PR',
    rating: 5,
    date: 'Cliente desde 2024',
    comment:
      'Instalação impecável no nosso condomínio, profissional nota 10',
    verified: true,
    imageUrl: rev4Img,
    imageAlt: 'Imagem da tela do celular mostrando o aplicativo com as câmeras',
  },
  {
    id: 'rev-5',
    author: 'Diego V.',
    role: 'Comércio',
    location: 'Curitiba / PR',
    rating: 5,
    date: 'Cliente desde 2023',
    comment:
      'Projeto super organizado com a central montada com rack muito bem estruturado para o nosso galpão.',
    verified: true,
    imageUrl: rev5Img,
    imageAlt: 'Rack metálico organizado com switch e fios estruturados',
  },
];

/**
 * Imagens de avaliações (prints de WhatsApp, avaliações do Google, fotos de entrega com clientes).
 * Para adicionar ou substituir imagens:
 * 1. Adicione a imagem na pasta /public (ex: /public/print-avaliacao-1.png)
 * 2. Atualize o campo `imageUrl` abaixo para o caminho do arquivo.
 */
export const REVIEW_GALLERY_IMAGES: ReviewGalleryImage[] = [
  {
    id: 'review-img-1',
    title: 'Print de Avaliação — WhatsApp',
    caption: 'Cliente elogiando a pontualidade e o acabamento limpo da instalação.',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'review-img-2',
    title: 'Satisfação Pós-Instalação — Condomínio',
    caption: 'Feedback positivo do síndico sobre a estabilidade do sistema e visualização noturna.',
    imageUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'review-img-3',
    title: 'Print de Avaliação 5 Estrelas — Comercial',
    caption: 'Confirmação de atendimento ágil com suporte técnico em horário comercial.',
    imageUrl:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  },
];


