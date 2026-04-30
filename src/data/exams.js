export const exams = [
  {
    id: "ultrassonografia",
    title: "Ultrassonografia",
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
  {
    id: "tomografia",
    title: "Tomografia Multislice e Angiotomografia",
    description: "Diagnósticos rápidos e precisos com tomografia de alta tecnologia (Multislice) e Angiotomografia.",
    message: "Olá, tenho interesse no exame de Tomografia.",
    color: "#ef4444",
    details: {
      about: "A Tomografia Multislice captura imagens detalhadas do corpo em fatias milimétricas e em 3D. A Angiotomografia permite a visualização não invasiva dos vasos sanguíneos com alta precisão e rapidez.",
      indications: [
        "Tomografia Multislice de crânio, tórax, abdome e pelve",
        "Angiotomografia para estudo de artérias e veias",
        "Diagnóstico de lesões complexas e tumores",
        "Avaliação vascular detalhada"
      ],
      preparation: "Para exames com contraste, é necessário jejum de 4 a 6 horas. Pacientes com alergias ou problemas renais devem informar a clínica previamente."
    }
  },
  {
    id: "doppler",
    title: "Doppler (Ecodoppler colorido)",
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
  {
    id: "raio-x-e-contrastados",
    title: "Radiografia (Raio-X) e Raio X Contrastado",
    description: "Radiografias digitais e exames contrastados especializados (Uretrocistografia, Clister Opaco, etc).",
    message: "Olá, tenho interesse no exame de Raio-X ou Raio-X Contrastado.",
    color: "#ef4444",
    details: {
      about: "Oferecemos Raio-X convencional e exames de Raio-X contrastado, que utilizam um meio de contraste para realçar o trato digestivo ou urinário, permitindo diagnósticos que radiografias simples não mostram.",
      indications: [
        "Radiografia (Raio-X) digital em geral",
        "Uretrocistografia e Urografia Excretora",
        "Clister opaco (exame do intestino grosso)",
        "Esôfago, Estômago e Duodeno (EED)"
      ],
      preparation: "Raios-X simples não exigem preparo. Exames contrastados (como EED e Clister opaco) requerem dieta rigorosa, uso de laxantes e jejum prévio. As instruções detalhadas são passadas no agendamento."
    }
  },
  {
    id: "mamografia",
    title: "Mamografia",
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
  {
    id: "densitometria",
    title: "Densitometria Óssea",
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
  {
    id: "biopsia-e-puncao",
    title: "Biópsias e Punção (PAAF)",
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
  }
];

export const clinicWhatsApp = "5586994822971";
