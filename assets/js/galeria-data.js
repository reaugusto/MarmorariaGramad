/* =============================================
   GALERIA DATA — Marmoraria Gramad
   Dados das pedras para popular a galeria
   ============================================= */

const collections = {
  granitos: {
    grid: 'granitos-grid',
    label: 'Granito Natural',
    items: [
      { file: 'GRANITO-AMARELO-FLORENCA.jpg', name: 'Amarelo Florença', desc: 'Granito amarelo com veios suaves. Ideal para bancadas, pisos e revestimentos residenciais.' },
      { file: 'GRANITO-AMARELO-FIORITO.jpg', name: 'Amarelo Fiorito', desc: 'Granito dourado com grãos finos. Excelente para bancadas de cozinha e áreas externas.' },
      { file: 'GRANITO-AMARELO-COLONiL.jpg', name: 'Amarelo Colonial', desc: 'Granito de tom amarelo clássico. Perfeito para pisos e revestimentos de grande formato.' },
      { file: 'GRANITO-AMARELO-ICARAI.jpg', name: 'Amarelo Icaraí', desc: 'Granito amarelo brasileiro. Indicado para bancadas, soleiras e pisos residenciais.' },
      { file: 'GRANITO-AMARELO-MARACUJA.jpg', name: 'Amarelo Maracujá', desc: 'Granito com tonalidade alaranjada. Ótimo para áreas externas e churrasqueiras.' },
      { file: 'GRANITO-AMARELO-ORNAMENTAL.jpg', name: 'Amarelo Ornamental', desc: 'Granito decorativo de base amarela. Ideal para pisos e revestimentos internos.' },
      { file: 'GRANITO-AMARELO-OURO-DESERTO.jpg', name: 'Amarelo Ouro Deserto', desc: 'Granito com tons dourados intensos. Perfeito para ambientes rústicos e sofisticados.' },
      { file: 'GRANITO-AMARELO-OURO.jpg', name: 'Amarelo Ouro', desc: 'Granito dourado premium. Excelente para bancadas e pisos de alto tráfego.' },
      { file: 'GRANITO-AMARELO-SANTA-CECILi.jpg', name: 'Amarelo Santa Cecília', desc: 'Um dos granitos mais populares do Brasil. Versátil para bancadas e pisos.' },
      { file: 'GRANITO-AS-DE-PAUS.jpg', name: 'Ás de Paus', desc: 'Granito com padrão único e movimentado. Ideal para projetos diferenciados.' },
      { file: 'GRANITO-AZUL-BAHi.jpg', name: 'Azul Bahia', desc: 'Granito azul exótico brasileiro. Perfeito para lavabos, bancadas e peças exclusivas.' },
      { file: 'GRANITO-AZUL-NORUEGUES.jpg', name: 'Azul Norueguês', desc: 'Granito azul importado. Indicado para projetos de alto padrão e detalhes sofisticados.' },
      { file: 'GRANITO-BLUE-NIGHT.jpg', name: 'Blue Night', desc: 'Granito escuro com reflexos azulados. Ideal para ambientes contemporâneos.' },
      { file: 'GRANITO-BRANCO-ARABESCO.jpg', name: 'Branco Arabesco', desc: 'Granito branco com veios suaves. Excelente para pisos e bancadas clean.' },
      { file: 'GRANITO-BRANCO-CeRA.jpg', name: 'Branco Ceará', desc: 'Granito branco nacional de custo acessível. Perfeito para pisos residenciais.' },
      { file: 'GRANITO-BRANCO-DALLAS.jpg', name: 'Branco Dallas', desc: 'Granito branco com movimento delicado. Ideal para ambientes claros e modernos.' },
      { file: 'GRANITO-BRANCO-DUNAS.jpg', name: 'Branco Dunas', desc: 'Granito branco com textura ondulada. Ótimo para revestimentos e pisos.' },
      { file: 'GRANITO-BRANCO-FORTALEZA.jpg', name: 'Branco Fortaleza', desc: 'Granito branco resistente. Excelente para áreas externas e pisos de alto tráfego.' },
      { file: 'GRANITO-BRANCO-ITAUNAS2.jpg', name: 'Branco Itaúnas', desc: 'Granito branco com grãos finos. Ideal para bancadas e revestimentos internos.' },
      { file: 'GRANITO-BRANCO-MARFIM.jpg', name: 'Branco Marfim', desc: 'Granito de tom branco creme. Perfeito para ambientes sofisticados e acolhedores.' },
      { file: 'GRANITO-BRANCO-PIRACEMA.jpg', name: 'Branco Piracema', desc: 'Granito branco com veios discretos. Indicado para pisos e escadas.' },
      { file: 'GRANITO-BRANCO-POLAR.jpg', name: 'Branco Polar', desc: 'Granito branco cristalino. Ideal para projetos minimalistas e contemporâneos.' },
      { file: 'GRANITO-BRANCO-SIENA.jpg', name: 'Branco Siena', desc: 'Granito branco premium. Excelente para bancadas e revestimentos de parede.' },
      { file: 'GRANITO-CAFE-IMPERiL.jpg', name: 'Café Imperial', desc: 'Granito marrom sofisticado. Perfeito para bancadas de cozinha e ambientes clássicos.' },
      { file: 'GRANITO-CINZA-ANDORINHA-1.jpg', name: 'Cinza Andorinha', desc: 'Granito cinza uniforme. Ideal para pisos comerciais e residenciais.' },
      { file: 'GRANITO-CINZA-CASTELO.jpg', name: 'Cinza Castelo', desc: 'Granito cinza com textura refinada. Ótimo para fachadas e pisos de grande formato.' },
      { file: 'GRANITO-CINZA-CORUMBA.jpg', name: 'Cinza Corumbá', desc: 'Granito cinza de granulação média. Indicado para pisos e bancadas.' },
      { file: 'GRANITO-CINZA-CORUMBAZINHO.jpg', name: 'Cinza Corumbazinho', desc: 'Granito cinza de grão fino. Ideal para detalhes e acabamentos.' },
      { file: 'GRANITO-CINZA-ITABIRA.jpg', name: 'Cinza Itabira', desc: 'Granito cinza escuro refinado. Perfeito para projetos contemporâneos.' },
      { file: 'GRANITO-CINZA-MAu.jpg', name: 'Cinza Mauá', desc: 'Granito cinza clássico. Excelente para pisos de alto tráfego e fachadas.' },
      { file: 'GRANITO-CINZA-OCRE-ITABIRA.jpg', name: 'Cinza Ocre Itabira', desc: 'Granito com tons cinza e ocre. Ideal para ambientes rústicos e modernos.' },
      { file: 'GRANITO-MARROM-TABACO.jpg', name: 'Marrom Tabaco', desc: 'Granito marrom quente. Perfeito para ambientes acolhedores e bancadas gourmet.' },
      { file: 'GRANITO-MATRIX.jpg', name: 'Matrix', desc: 'Granito exótico com padrão movimentado único. Ideal para peças decorativas e destaque.' },
      { file: 'GRANITO-METEORUS-1.jpg', name: 'Meteorus', desc: 'Granito exótico com veios contrastantes. Perfeito para bancadas e painéis.' },
      { file: 'GRANITO-NEGRESCO.jpg', name: 'Negresco', desc: 'Granito escuro refinado. Indicado para bancadas de lavabo e detalhes de luxo.' },
      { file: 'GRANITO-PRETO-ABSOLUTO.jpg', name: 'Preto Absoluto', desc: 'Granito negro puro sem veios. Clássico para bancadas, pisos e projetos minimalistas.' },
      { file: 'GRANITO-PRETO-INDiNO.jpg', name: 'Preto Indiano', desc: 'Granito negro importado. Excelente para bancadas e revestimentos de alto padrão.' },
      { file: 'GRANITO-PRETO-SAO-GABRIEL.jpg', name: 'Preto São Gabriel', desc: 'Granito negro com reflexos prateados. Ideal para pisos e bancadas contemporâneas.' },
      { file: 'GRANITO-PRETO-Vi-LACTe.jpg', name: 'Preto Via Láctea', desc: 'Granito negro com pontos brancos. Perfeito para bancadas de cozinha gourmet.' },
      { file: 'GRANITO-RED-VERONA.jpg', name: 'Red Verona', desc: 'Granito vermelho intenso. Indicado para detalhes, faixas decorativas e mobiliário.' },
      { file: 'GRANITO-ROSA-RAISSA-1.jpg', name: 'Rosa Raissa', desc: 'Granito rosa suave. Ideal para pisos e revestimentos de ambientes femininos.' },
      { file: 'GRANITO-VERDE-CANDEiS.jpg', name: 'Verde Candeias', desc: 'Granito verde brasileiro. Ótimo para áreas externas e bancadas de churrasqueira.' },
      { file: 'GRANITO-VERDE-LABRADOR.jpg', name: 'Verde Labrador', desc: 'Granito verde escuro com reflexos. Ideal para bancadas e revestimentos sofisticados.' },
      { file: 'GRANITO-VERDE-PEROLA.jpg', name: 'Verde Pérola', desc: 'Granito verde claro perolado. Perfeito para pisos e bancadas de banheiro.' },
      { file: 'GRANITO-VERDE-SAO-FRANCISCO.jpg', name: 'Verde São Francisco', desc: 'Granito verde movimentado. Indicado para pisos de grande formato e fachadas.' },
      { file: 'GRANITO-VERDE-UBATUBA.jpg', name: 'Verde Ubatuba', desc: 'Granito verde escuro clássico. Excelente para bancadas e pisos de alto tráfego.' },
      { file: 'GRANITO-VERMELHO-BRASILi.jpg', name: 'Vermelho Brasília', desc: 'Granito vermelho vibrante. Ideal para detalhes e projetos com personalidade.' },
    ]
  },
  onix: {
    grid: 'onix-grid',
    label: 'Ônix',
    items: [
      { file: 'ONIX-ALABASTRO.png', name: 'Alabastro', desc: 'Ônix translúcido clássico. Ideal para retroiluminação, bancadas de bar e peças decorativas.' },
      { file: 'ONIX-BiNCO-ORO.png', name: 'Bianco Oro', desc: 'Ônix branco com veios dourados. Perfeito para lavabos de luxo e painéis iluminados.' },
      { file: 'ONIX-CAPPICCINO.png', name: 'Cappuccino', desc: 'Ônix em tons cappuccino quentes. Ideal para revestimentos de parede e mobiliário.' },
      { file: 'ONIX-CIELO-DEL-SAHARA-GiLLO-BLUE.png', name: 'Cielo del Sahara', desc: 'Ônix exótico com tons azuis e dourados. Perfeito para painéis retroiluminados.' },
      { file: 'ONIX-CRISTALLO.png', name: 'Cristallo', desc: 'Ônix cristalino translúcido. Ideal para divisórias iluminadas e peças escultóricas.' },
      { file: 'ONIX-ESMERALDA.png', name: 'Esmeralda', desc: 'Ônix verde esmeralda intenso. Perfeito para lavabos exclusivos e detalhes de bar.' },
      { file: 'ONIX-FANTASTICO.png', name: 'Fantástico', desc: 'Ônix com padrão único e exuberante. Ideal para painéis de destaque e obras de arte.' },
      { file: 'ONIX-FANTASY.png', name: 'Fantasy', desc: 'Ônix com veios coloridos expressivos. Perfeito para backlight e bancadas de bar.' },
      { file: 'ONIX-GiLLO.png', name: 'Giallo', desc: 'Ônix amarelo translúcido. Ideal para ambientes com iluminação indireta e peças de luxo.' },
      { file: 'ONIX-KILIMANJARO.png', name: 'Kilimanjaro', desc: 'Ônix exótico inspirado no monte africano. Perfeito para projetos grandiosos.' },
      { file: 'ONIX-LADY.png', name: 'Lady', desc: 'Ônix delicado com tons suaves. Ideal para banheiros de luxo e lavabos.' },
      { file: 'ONIX-LIGHT-GREEN.png', name: 'Light Green', desc: 'Ônix verde claro translúcido. Excelente para divisórias e painéis iluminados.' },
      { file: 'ONIX-MEL.png', name: 'Mel', desc: 'Ônix em tons de mel dourado. Perfeito para bancadas de bar e peças decorativas.' },
      { file: 'ONIX-PeRL-GOLD.png', name: 'Pearl Gold', desc: 'Ônix perolado dourado. Ideal para lavabos de luxo e detalhes em mobiliário.' },
      { file: 'ONIX-SILVER.png', name: 'Silver', desc: 'Ônix prateado translúcido. Perfeito para projetos contemporâneos com backlight.' },
      { file: 'ONIX-SPIDER.png', name: 'Spider', desc: 'Ônix com veios em teia. Ideal para painéis de destaque e revestimentos exclusivos.' },
      { file: 'ONIX-TAVARu.png', name: 'Tavarua', desc: 'Ônix exótico com tonalidades quentes. Perfeito para bancadas e painéis iluminados.' },
      { file: 'ONIX-TIGER.png', name: 'Tiger', desc: 'Ônix com padrão tigre. Ideal para projetos ousados e peças de alto impacto.' },
      { file: 'ONIX-VERDE-1.jpg', name: 'Verde', desc: 'Ônix verde clássico. Excelente para lavabos, bancadas e retroiluminação.' },
      { file: 'ONIX-VERDE-EXTRA.png', name: 'Verde Extra', desc: 'Versão premium do ônix verde. Perfeito para projetos de destaque iluminados.' },
    ]
  },
  quartzitos: {
    grid: 'quartzitos-grid',
    label: 'Quartzito Natural',
    items: [
      { file: 'QuRTZITO-ADAMANTIUM.png', name: 'Adamantium', desc: 'Quartzito ultra resistente. Ideal para bancadas de cozinha de alta performance.' },
      { file: 'QuRTZITO-AGATHA.png', name: 'Agatha', desc: 'Quartzito com desenhos delicados. Perfeito para revestimentos e bancadas.' },
      { file: 'QuRTZITO-ALEXANDRA-BLUE.png', name: 'Alexandra Blue', desc: 'Quartzito azulado exótico. Ideal para lavabos e painéis de destaque.' },
      { file: 'QuRTZITO-AMARELO-MACAUBAS.png', name: 'Amarelo Macaúbas', desc: 'Quartzito amarelo vibrante. Perfeito para bancadas e detalhes decorativos.' },
      { file: 'QuRTZITO-AMAZON.jpg', name: 'Amazon', desc: 'Quartzito inspirado na floresta amazônica. Ideal para projetos naturais.' },
      { file: 'QuRTZITO-AURORA-CREMA.png', name: 'Aurora Crema', desc: 'Quartzito creme suave. Excelente para pisos e bancadas elegantes.' },
      { file: 'QuRTZITO-AZUL-MACAUBAS.png', name: 'Azul Macaúbas', desc: 'Quartzito azul brasileiro premium. Perfeito para peças exclusivas.' },
      { file: 'QuRTZITO-AZULLI.png', name: 'Azulli', desc: 'Quartzito azulado refinado. Ideal para projetos de alto padrão.' },
      { file: 'QuRTZITO-BiNCO-LAURA.png', name: 'Bianco Laura', desc: 'Quartzito branco delicado. Perfeito para banheiros e bancadas clean.' },
      { file: 'QuRTZITO-BiNCO-SUPERIORE.png', name: 'Bianco Superiore', desc: 'Quartzito branco premium. Ideal para pisos e revestimentos sofisticados.' },
      { file: 'QuRTZITO-BLACK-TEMPEST.png', name: 'Black Tempest', desc: 'Quartzito negro intenso. Perfeito para bancadas e projetos dramáticos.' },
      { file: 'QuRTZITO-BLUE-ROMA.png', name: 'Blue Roma', desc: 'Quartzito azul com nuances romanas. Ideal para painéis e lavabos.' },
      { file: 'QuRTZITO-BLUE-SKY.png', name: 'Blue Sky', desc: 'Quartzito azul celeste. Excelente para bancadas e detalhes decorativos.' },
      { file: 'QuRTZITO-BRANCO-MACAUBAS.png', name: 'Branco Macaúbas', desc: 'Quartzito branco clássico. Ideal para pisos e bancadas de banheiro.' },
      { file: 'QuRTZITO-BRILLiNT-BLACK.png', name: 'Brilliant Black', desc: 'Quartzito negro brilhante. Perfeito para bancadas contemporâneas.' },
      { file: 'QuRTZITO-BRILLiNT-GREY.png', name: 'Brilliant Grey', desc: 'Quartzito cinza sofisticado. Ideal para pisos e revestimentos.' },
      { file: 'QuRTZITO-BRONZINE.png', name: 'Bronzine', desc: 'Quartzito bronze natural. Perfeito para ambientes com tons quentes.' },
      { file: 'QuRTZITO-DA-VINCI.png', name: 'Da Vinci', desc: 'Quartzito com padrão artístico. Ideal para peças de destaque e painéis.' },
      { file: 'QuRTZITO-DAKAR.png', name: 'Dakar', desc: 'Quartzito exótico resistente. Excelente para bancadas e pisos.' },
      { file: 'QuRTZITO-ELBRUS.png', name: 'Elbrus', desc: 'Quartzito branco com textura alpina. Ideal para projetos minimalistas.' },
      { file: 'QuRTZITO-ELEGANT.png', name: 'Elegant', desc: 'Quartzito de acabamento refinado. Perfeito para ambientes sofisticados.' },
      { file: 'QuRTZITO-ESSENZA-BLUE.png', name: 'Essenza Blue', desc: 'Quartzito azul intenso. Ideal para lavabos e detalhes exclusivos.' },
      { file: 'QuRTZITO-FUSION.png', name: 'Fusion', desc: 'Quartzito com padrão fusionado. Excelente para painéis e bancadas.' },
      { file: 'QuRTZITO-JADORE.png', name: "J'Adore", desc: 'Quartzito premium com veios elegantes. Perfeito para projetos de luxo.' },
      { file: 'QuRTZITO-MADIRiN.png', name: 'Madirian', desc: 'Quartzito exótico de tom quente. Ideal para bancadas e mobiliário.' },
      { file: 'QuRTZITO-MATARAZZO.png', name: 'Matarazzo', desc: 'Quartzito brasileiro premium. Excelente para pisos e revestimentos.' },
      { file: 'QuRTZITO-MATIRA.png', name: 'Matira', desc: 'Quartzito com textura natural. Ideal para projetos contemporâneos.' },
      { file: 'QuRTZITO-MICHELLANGELO.png', name: 'Michellangelo', desc: 'Quartzito inspirado na arte renascentista. Perfeito para peças exclusivas.' },
      { file: 'QuRTZITO-MONT-BLANC2.png', name: 'Mont Blanc', desc: 'Quartzito branco cristalino. Ideal para bancadas e pisos de alto padrão.' },
      { file: 'QuRTZITO-NUVOLE.png', name: 'Nuvole', desc: 'Quartzito com padrão nuvem. Excelente para revestimentos e painéis.' },
      { file: 'QuRTZITO-PALOMINO.png', name: 'Palomino', desc: 'Quartzito de tom dourado suave. Perfeito para ambientes quentes.' },
      { file: 'QuRTZITO-PATAGONi.png', name: 'Patagônia', desc: 'Quartzito exótico inspirado na paisagem patagônica. Ideal para projetos únicos.' },
      { file: 'QuRTZITO-PERLA-SANTANA.png', name: 'Perla Santana', desc: 'Quartzito perolado delicado. Excelente para bancadas e pisos.' },
      { file: 'QuRTZITO-RIVIERA.png', name: 'Riviera', desc: 'Quartzito azulado refinado. Perfeito para lavabos e detalhes de luxo.' },
      { file: 'QuRTZITO-ROMA-IMPERiLE.png', name: 'Roma Imperiale', desc: 'Quartzito majestoso com veios dourados. Ideal para pisos nobres.' },
      { file: 'QuRTZITO-TAJ-MAHAL.png', name: 'Taj Mahal', desc: 'Quartzito premium com textura sedosa. Perfeito para bancadas e pisos de luxo.' },
      { file: 'QuRTZITO-TITANIUM.png', name: 'Titanium', desc: 'Quartzito ultra resistente. Ideal para bancadas de cozinha gourmet.' },
      { file: 'QuRTZITO-VERDE-BAMBU.png', name: 'Verde Bambu', desc: 'Quartzito verde com textura natural. Excelente para detalhes e painéis.' },
      { file: 'QuRTZITO-WAKANDA-BLACK.png', name: 'Wakanda Black', desc: 'Quartzito negro exótico. Perfeito para projetos dramáticos e contemporâneos.' },
      { file: 'QuRTZITO-WOODSTONE.png', name: 'Woodstone', desc: 'Quartzito com aparência de madeira petrificada. Ideal para pisos rústicos e bancadas.' },
    ]
  },
  travertinos: {
    grid: 'travertinos-grid',
    label: 'Travertino Natural',
    items: [
      { file: 'TRAVERTINO-NACIONAL.png', name: 'Nacional', desc: 'Travertino brasileiro de tom claro. Ideal para pisos e revestimentos residenciais.' },
      { file: 'TRAVERTINO-NAVONA-BRUTO.png', name: 'Navona Bruto', desc: 'Travertino italiano com textura rústica. Perfeito para ambientes externos e fachadas.' },
      { file: 'TRAVERTINO-NAVONA-POLIDO.png', name: 'Navona Polido', desc: 'Travertino Navona com acabamento polido. Ideal para pisos e revestimentos internos.' },
      { file: 'TRAVERTINO-NAVONA-RESINADO.png', name: 'Navona Resinado', desc: 'Travertino com poros preenchidos. Excelente para bancadas e pisos de alto tráfego.' },
      { file: 'TRAVERTINO-ROMANO-BRUTO.png', name: 'Romano Bruto', desc: 'Travertino romano com textura bruta. Perfeito para fachadas e áreas externas.' },
      { file: 'TRAVERTINO-ROMANO-POLIDO.png', name: 'Romano Polido', desc: 'Travertino romano com brilho polido. Ideal para pisos e escadas.' },
      { file: 'TRAVERTINO-ROMANO-RESINADO.png', name: 'Romano Resinado', desc: 'Travertino romano resinado. Excelente para bancadas e pisos residenciais.' },
      { file: 'TRAVERTINO-SILVER-POLIDO.png', name: 'Silver Polido', desc: 'Travertino prateado polido. Ideal para projetos contemporâneos e bancadas.' },
      { file: 'TRAVERTINO-TURCO-BRUTO-1.jpg', name: 'Turco Bruto', desc: 'Travertino turco com textura rústica. Perfeito para revestimentos de piscina e fachadas.' },
    ]
  },
  fabricados: {
    grid: 'fabricados-grid',
    label: 'Material Fabricado',
    items: [
      { file: 'CAESARSTONE.png', name: 'Caesarstone', desc: 'Superfície de quartzo engenheirado. Ideal para bancadas de cozinha e banheiro com alta resistência.' },
      { file: 'COMPOSTO-DE-MARMORE-BRANCO-PRIME.png', name: 'Composto Branco Prime', desc: 'Composto de mármore branco. Excelente para pisos e revestimentos de grande formato.' },
      { file: 'COMPOSTO-QuRTZO-CALACATA.png', name: 'Quartzo Calacata', desc: 'Quartzo com visual Calacatta. Perfeito para bancadas que imitam mármore com mais resistência.' },
      { file: 'COMPOSTO-QuRTZO-INTENSE-WHITE.png', name: 'Quartzo Intense White', desc: 'Quartzo branco puro. Ideal para bancadas minimalistas e ambientes clean.' },
      { file: 'COMPOSTO-QuRTZO-LIGHT-GREY.png', name: 'Quartzo Light Grey', desc: 'Quartzo cinza claro. Excelente para bancadas e revestimentos contemporâneos.' },
      { file: 'COVERLAM.png', name: 'Coverlam', desc: 'Porcelanato de grande formato. Ideal para fachadas, pisos e revestimentos de parede.' },
      { file: 'CS3-REVESTIMENTOS.png', name: 'CS3 Revestimentos', desc: 'Revestimento cerâmico premium. Perfeito para projetos residenciais e comerciais.' },
      { file: 'DEKTON.png', name: 'Dekton', desc: 'Superfície ultracompacta Cosentino. Ideal para bancadas, fachadas e pisos de alto desempenho.' },
      { file: 'LAMINA-ULTRACOMPACTA-CALACATA-GOLD.png', name: 'Lâmina Calacata Gold', desc: 'Lâmina ultracompacta com visual Calacatta dourado. Perfeita para bancadas de luxo.' },
      { file: 'LAMINA-ULTRACOMPACTA-CALACATA.png', name: 'Lâmina Calacata', desc: 'Lâmina ultracompacta com visual Calacatta. Ideal para bancadas e revestimentos.' },
      { file: 'LAMINA-ULTRACOMPACTA-PIETRA-GREY.png', name: 'Lâmina Pietra Grey', desc: 'Lâmina cinza premium. Excelente para bancadas e painéis contemporâneos.' },
      { file: 'LAMINA-ULTRACOMPACTA-PURE-WHITE.png', name: 'Lâmina Pure White', desc: 'Lâmina branca pura. Perfeita para projetos minimalistas e ambientes claros.' },
      { file: 'LAMTEC.png', name: 'Lamtec', desc: 'Laminado técnico de alta performance. Ideal para revestimentos e mobiliário.' },
      { file: 'NEOLITH.png', name: 'Neolith', desc: 'Superfície sinterizada premium. Excelente para bancadas, fachadas e pisos.' },
      { file: 'NILAM.png', name: 'Nilam', desc: 'Material fabricado de alta qualidade. Perfeito para projetos residenciais.' },
      { file: 'SILESTONE.png', name: 'Silestone', desc: 'Superfície de quartzo Cosentino. Ideal para bancadas de cozinha e banheiro.' },
      { file: 'SINTH.jpg', name: 'Sinth', desc: 'Material sinterizado moderno. Excelente para bancadas e revestimentos de alto padrão.' },
    ]
  }
};

// Renderizar coleções
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(collections).forEach(([category, data]) => {
    const grid = document.getElementById(data.grid);
    if (!grid) return;

    const folderMap = {
      granitos: 'granitos',
      onix: 'onix',
      quartzitos: 'quartzitos',
      travertinos: 'travertinos',
      fabricados: 'fabricados'
    };

    data.items.forEach((item, i) => {
      const delay = (i % 3) * 0.1;
      const imgPath = `assets/img/${folderMap[category]}/${item.file}`;
      const card = document.createElement('a');
      card.href = 'javascript:void(0)';
      card.className = 'product-card reveal';
      card.dataset.delay = delay;
      card.dataset.name = item.name;
      card.dataset.origin = data.label;
      card.dataset.img = imgPath;
      card.dataset.desc = item.desc;
      card.onclick = function() { openModal(this); };
      card.innerHTML = `
        <div class="product-card-img reveal-img">
          <img src="${imgPath}" alt="${item.name}" loading="lazy">
        </div>
        <div class="product-card-info">
          <p class="product-card-name">${item.name}</p>
          <p class="product-card-origin">${data.label}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  // Re-initialize GSAP for dynamically added elements
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.collection-section .reveal').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        y: 50, opacity: 0, duration: 1,
        delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0,
        ease: 'power3.out',
      });
    });
    gsap.utils.toArray('.collection-section .reveal-img').forEach((el) => {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
      );
    });
  }
});
