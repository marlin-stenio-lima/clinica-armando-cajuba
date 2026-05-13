export const exams = [
  // ─── ULTRASSONOGRAFIA ───────────────────────────────────────────────────────
  {
    id: "ultrassonografia",
    title: "Ultrassonografia",
    category: "Ultrassonografia",
    description: "Realize sua ultrassonografia com radiologistas experientes e modernos aparelhos.",
    message: "Olá, tenho interesse no exame de Ultrassonografia.",
    color: "#ef4444",
    details: {
      about: "A ultrassonografia é um método seguro e não invasivo. Nossos equipamentos de última geração proporcionam imagens em alta resolução. Oferecemos uma ampla gama, desde exames obstétricos até avaliações articulares e de órgãos.",
      indications: [
        "Obstétrica, Morfológica e 3D/4D",
        "Transvaginal e Gestacional com Doppler",
        "Abdome total e Próstata (via abdominal)",
        "Órgãos e estruturas (tireóide, mamas, bolsa escrotal)",
        "Articulações (ombro, cotovelo, punho, joelho)"
      ],
      preparation: "O preparo varia. Abdome total exige jejum. Exames pélvicos requerem bexiga cheia. Para a Ultrassonografia de Próstata por via abdominal (procedimento não invasivo para avaliação da bexiga, próstata e vesículas seminais), também é necessário retenção urinária."
    }
  },

  // ─── TOMOGRAFIAS ────────────────────────────────────────────────────────────
  {
    id: "tomografia-cranio",
    title: "Tomografia de Crânio",
    category: "Tomografia",
    description: "Diagnóstico preciso de crânio com tomógrafo de alta tecnologia para avaliação neurológica detalhada.",
    message: "Olá, tenho interesse no exame de Tomografia de Crânio.",
    color: "#ef4444",
    details: {
      about: "A Tomografia de Crânio permite avaliar com precisão estruturas cerebrais, detectar lesões, sangramentos, tumores e alterações vasculares. Utilizamos tomógrafo Multislice de última geração para imagens com altíssima resolução.",
      indications: [
        "Avaliação de traumas cranianos",
        "Investigação de AVC e hemorragias",
        "Diagnóstico de tumores cerebrais",
        "Estudo de seios paranasais e base do crânio",
        "Acompanhamento de lesões neurológicas"
      ],
      preparation: "Geralmente não exige preparo. Para exames com contraste, é necessário jejum de 4 a 6 horas. Pacientes com alergias ou problemas renais devem informar a clínica previamente."
    }
  },
  {
    id: "tomografia-torax",
    title: "Tomografia de Tórax",
    category: "Tomografia",
    description: "Avaliação pulmonar e torácica de alta precisão para diagnóstico de pneumonias, nódulos e muito mais.",
    message: "Olá, tenho interesse no exame de Tomografia de Tórax.",
    color: "#ef4444",
    details: {
      about: "A Tomografia de Tórax é fundamental para avaliar pulmões, pleura, mediastino e estruturas vasculares torácicas. Permite diagnóstico precoce de doenças pulmonares, nódulos e embolia pulmonar.",
      indications: [
        "Investigação de nódulos pulmonares",
        "Diagnóstico de pneumonias e Covid-19",
        "Avaliação de embolia pulmonar",
        "Estudo do mediastino e grandes vasos",
        "Acompanhamento de doenças pulmonares crônicas"
      ],
      preparation: "Para exames simples, não exige preparo. Com contraste, é necessário jejum de 4 a 6 horas e exame de função renal recente. Informar alergias previamente."
    }
  },
  {
    id: "tomografia-multislice",
    title: "Tomografia Multislice",
    category: "Tomografia",
    description: "Imagens em fatias milimétricas com resolução máxima para diagnósticos complexos de qualquer região do corpo.",
    message: "Olá, tenho interesse no exame de Tomografia Multislice.",
    color: "#ef4444",
    details: {
      about: "A Tomografia Multislice captura múltiplas fatias simultâneas com altíssima resolução espacial, permitindo reconstruções 3D e multiplanares de qualquer região do corpo com rapidez e precisão excepcionais.",
      indications: [
        "Tomografia de abdome e pelve",
        "Avaliação de coluna vertebral",
        "Estudo de articulações complexas",
        "Diagnóstico de lesões e tumores",
        "Reconstruções 3D para planejamento cirúrgico"
      ],
      preparation: "Para exames com contraste, jejum de 4 a 6 horas obrigatório. Pacientes com problemas renais devem apresentar creatinina recente. Informar alergias a contraste iodado."
    }
  },
  {
    id: "angiotomografia",
    title: "Angiotomografia",
    category: "Tomografia",
    description: "Visualização não invasiva e altamente precisa dos vasos sanguíneos arteriais e venosos.",
    message: "Olá, tenho interesse no exame de Angiotomografia.",
    color: "#ef4444",
    details: {
      about: "A Angiotomografia é um exame de imagem que utiliza tomógrafo com injeção de contraste para mapear vasos sanguíneos com precisão, substituindo de forma segura e rápida procedimentos invasivos como a angiografia convencional.",
      indications: [
        "Estudo das artérias coronárias",
        "Avaliação de aorta e seus ramos",
        "Diagnóstico de aneurismas vasculares",
        "Estudo de artérias carótidas e cerebrais",
        "Avaliação pré-operatória vascular"
      ],
      preparation: "Exige jejum de 4 a 6 horas. É obrigatório exame de creatinina recente (função renal). Suspender Metformina 48h antes sob orientação médica. Informar alergias a contraste."
    }
  },

  // ─── DOPPLER ────────────────────────────────────────────────────────────────
  {
    id: "doppler",
    title: "Doppler (Ecodoppler colorido)",
    category: "Ultrassonografia",
    description: "Avaliação vascular completa: arterial, venosa e de órgãos específicos com Doppler colorido.",
    message: "Olá, tenho interesse no exame de Doppler.",
    color: "#ef4444",
    details: {
      about: "O exame de Ultrassom com Doppler avalia o fluxo sanguíneo nos vasos, permitindo diagnosticar obstruções, tromboses, varizes e problemas de circulação de forma indolor e não invasiva.",
      indications: [
        "Doppler arterial e venoso de membros superiores e inferiores",
        "Doppler de Carótidas e vertebrais",
        "Doppler hepático, da aorta abdominal, artérias renais ou ilíacas",
        "Avaliação de insuficiência venosa e trombose"
      ],
      preparation: "A maioria dos exames de Doppler não exige preparo. Porém, o Doppler hepático e de aorta abdominal requerem jejum de 6 a 8 horas."
    }
  },

  // ─── RADIOGRAFIA ────────────────────────────────────────────────────────────
  {
    id: "raio-x",
    title: "Radiografia (Raio-X)",
    category: "Radiografia",
    description: "Radiografias digitais rápidas e precisas para avaliação de ossos, pulmões e estruturas internas.",
    message: "Olá, tenho interesse no exame de Radiografia (Raio-X).",
    color: "#ef4444",
    details: {
      about: "Oferecemos Raio-X convencional digital e exames contrastados que utilizam um meio de contraste para realçar o trato digestivo ou urinário, permitindo diagnósticos que radiografias simples não mostram.",
      indications: [
        "Radiografia (Raio-X) digital em geral",
        "Uretrocistografia e Urografia Excretora",
        "Clister opaco (exame do intestino grosso)",
        "Esôfago, Estômago e Duodeno (EED)"
      ],
      preparation: "Raios-X simples não exigem preparo. Exames contrastados (como EED e Clister opaco) requerem dieta rigorosa, uso de laxantes e jejum prévio. As instruções detalhadas são passadas no agendamento."
    }
  },

  // ─── MAMOGRAFIA ─────────────────────────────────────────────────────────────
  {
    id: "mamografia",
    title: "Mamografia",
    category: "Outros",
    description: "O principal exame para detecção precoce do câncer de mama.",
    message: "Olá, tenho interesse no exame de Mamografia.",
    color: "#ef4444",
    details: {
      about: "A mamografia é essencial para a saúde da mulher. Nossos equipamentos garantem a melhor resolução com a compressão estritamente necessária, buscando o máximo de conforto durante o rastreamento.",
      indications: [
        "Rastreamento anual de rotina para mulheres acima de 40 anos",
        "Investigação de nódulos ou calcificações mamárias",
        "Acompanhamento de lesões benignas",
        "Avaliação em casos de histórico familiar de câncer de mama"
      ],
      preparation: "Evite agendar no período pré-menstrual para maior conforto. No dia do exame, não utilize desodorantes, cremes, talcos ou perfumes na região das mamas e axilas."
    }
  },

  // ─── DENSITOMETRIA ──────────────────────────────────────────────────────────
  {
    id: "densitometria",
    title: "Densitometria Óssea",
    category: "Outros",
    description: "Exame fundamental para diagnóstico de osteopenia e osteoporose.",
    message: "Olá, tenho interesse no exame de Densitometria Óssea.",
    color: "#ef4444",
    details: {
      about: "A densitometria óssea é o padrão-ouro para avaliar a massa óssea e o risco de fraturas. O procedimento é rápido, indolor e expõe o paciente a uma quantidade mínima de radiação.",
      indications: [
        "Prevenção e diagnóstico de Osteoporose",
        "Acompanhamento de perda óssea em mulheres pós-menopausa",
        "Homens acima de 70 anos",
        "Avaliação de pacientes em uso prolongado de corticoides"
      ],
      preparation: "Não ingerir suplementos de cálcio nas 24h anteriores ao exame. Use roupas confortáveis sem botões, fivelas ou zíperes de metal."
    }
  },

  // ─── BIÓPSIAS ───────────────────────────────────────────────────────────────
  {
    id: "biopsia-e-puncao",
    title: "Biópsias e Punção (PAAF)",
    category: "Outros",
    description: "Procedimentos seguros guiados por imagem para coleta de material e diagnóstico definitivo.",
    message: "Olá, tenho interesse em agendar uma Biópsia ou Punção.",
    color: "#ef4444",
    details: {
      about: "As biópsias e punções são procedimentos minimamente invasivos onde retiramos fragmentos ou líquidos de lesões suspeitas. São realizadas com precisão cirúrgica, sempre guiadas por equipamentos de imagem.",
      indications: [
        "Punção com agulha fina (PAAF) de Tireóide",
        "Biópsia de Próstata",
        "Biópsia guiada por Tomografia",
        "Biópsia guiada por Ultrassom"
      ],
      preparation: "O preparo depende do local da biópsia. Exames de coagulação recentes são obrigatórios. Pode ser necessário suspender anticoagulantes sob orientação médica prévia."
    }
  },

  // ─── CARDIOVASCULAR ─────────────────────────────────────────────────────────
  {
    id: "cardiovascular",
    title: "Exames Cardiovasculares",
    category: "Outros",
    description: "Avaliação completa da saúde do seu coração.",
    message: "Olá, tenho interesse em agendar um Exame Cardiovascular.",
    color: "#ef4444",
    details: {
      about: "Oferecemos exames focados no sistema cardiovascular, como ecocardiogramas e risco cirúrgico.",
      indications: ["Avaliação cardíaca", "Risco cirúrgico", "Acompanhamento cardiológico"],
      preparation: "Varia de acordo com o exame específico. As instruções serão passadas no agendamento."
    }
  },

  // ─── ORTOPEDISTA ────────────────────────────────────────────────────────────
  {
    id: "ortopedista",
    title: "Ortopedista",
    category: "Outros",
    description: "Diagnóstico preciso para dores articulares, coluna e lesões musculoesqueléticas.",
    message: "Olá, tenho interesse em agendar um Exame de Ortopedia.",
    color: "#ef4444",
    details: {
      about: "Utilizamos as melhores técnicas de imagem para avaliar articulações, ligamentos e coluna vertebral, fornecendo subsídios precisos para o diagnóstico ortopédico.",
      indications: ["Dores na coluna", "Lesões no joelho", "Artrose e artrite", "Avaliação de fraturas e lesões musculares"],
      preparation: "Geralmente não exige preparo específico. Usar roupas confortáveis."
    }
  },

  // ─── GASTRO ─────────────────────────────────────────────────────────────────
  {
    id: "gastro",
    title: "Exames Gastroenterológicos",
    category: "Outros",
    description: "Exames voltados para a saúde do sistema digestivo.",
    message: "Olá, tenho interesse em agendar um Exame Gastroenterológico.",
    color: "#ef4444",
    details: {
      about: "Diagnósticos por imagem focados na região abdominal e órgãos do sistema digestivo.",
      indications: ["Dores abdominais", "Investigação hepática", "Acompanhamento gastrointestinal"],
      preparation: "Exige jejum prévio de acordo com a área a ser avaliada."
    }
  }
];

// Categorias para exibição agrupada no site principal
export const examCategories = [
  {
    id: "tomografia",
    label: "Tomografia",
    description: "Tomografia de Crânio, Tórax, Multislice e Angiotomografia",
    icon: "🧠",
    examIds: ["tomografia-cranio", "tomografia-torax", "tomografia-multislice", "angiotomografia"]
  },
  {
    id: "ultrassonografia",
    label: "Ultrassonografia",
    description: "Ultrassonografia geral, obstétrica, Doppler e muito mais",
    icon: "🔊",
    examIds: ["ultrassonografia", "doppler"]
  },
  {
    id: "radiografia",
    label: "Radiografia",
    description: "Raio-X digital e exames contrastados especializados",
    icon: "🦴",
    examIds: ["raio-x"]
  },
  {
    id: "mamografia",
    label: "Mamografia",
    description: "Detecção precoce do câncer de mama com equipamento moderno",
    icon: "🩺",
    examIds: ["mamografia"]
  },
  {
    id: "densitometria",
    label: "Densitometria Óssea",
    description: "Diagnóstico de osteopenia e osteoporose",
    icon: "🦷",
    examIds: ["densitometria"]
  },
  {
    id: "biopsia-e-puncao",
    label: "Biópsias e Punção",
    description: "Procedimentos guiados por imagem para diagnóstico definitivo",
    icon: "💉",
    examIds: ["biopsia-e-puncao"]
  },
  {
    id: "cardiovascular",
    label: "Exames Cardiovasculares",
    description: "Avaliação completa da saúde do coração",
    icon: "❤️",
    examIds: ["cardiovascular"]
  },
  {
    id: "ortopedista",
    label: "Ortopedista",
    description: "Diagnóstico de coluna, joelho e lesões articulares",
    icon: "🦴",
    examIds: ["ortopedista"]
  },
  {
    id: "gastro",
    label: "Exames Gastroenterológicos",
    description: "Saúde do sistema digestivo",
    icon: "🏥",
    examIds: ["gastro"]
  }
];

export const clinicWhatsApp = "5586994822971";
