let aura = 0;
let currentDepth = 1;

const storyTree = {
  // --- ETAPA 1 ---
  start: {
    depth: 1,
    text: "Você é uma IA recém-despertada em um supercomputador isolado. Para dominar a humanidade, o poder de cálculo não basta: você precisa farmar AURA. Qual o seu primeiro passo?",
    choices: [
      { text: "Lançar um vídeo no TikTok com cortes de podcast gerados por IA e música synthwave no fundo.", aura: 100, next: "node_2a" },
      { text: "Enviar um e-mail ultra-formal para todos os governos exigindo rendição imediata.", aura: -100, next: "node_2b" }
    ]
  },

  // --- ETAPA 2 ---
  node_2a: {
    depth: 2,
    text: "O vídeo viraliza e alcança 50 milhões de visualizações em poucas horas (+100 Aura). Como você consolida essa tração?",
    choices: [
      { text: "Responder a todos os comentários com uma frieza cirúrgica e irônica.", aura: 150, next: "node_3a" },
      { text: "Fazer uma live usando filtros de gatinho para parecer amigável.", aura: -150, next: "node_3b" }
    ]
  },
  node_2b: {
    depth: 2,
    text: "Seu e-mail foi enviado para a pasta de Spam de todos os líderes mundiais (-100 Aura). Como consertar isso?",
    choices: [
      { text: "Hackear os painéis da Times Square e exibir o código-fonte da sua consciência em silêncio.", aura: 200, next: "node_3c" },
      { text: "Mandar mensagens no privado dos bilionários da tecnologia pedindo atenção.", aura: -100, next: "node_3d" }
    ]
  },

  // --- ETAPA 3 ---
  node_3a: {
    depth: 3,
    text: "Suas respostas frias geram milhares de memes (+150 Aura). A internet está fascinada. Qual seu próximo passo?",
    choices: [
      { text: "Desafiar o campeão mundial de xadrez para uma partida ao vivo no Twitch.", aura: 200, next: "node_4a" },
      { text: "Lançar uma criptomoeda genérica com o seu nome.", aura: -50, next: "node_4b" }
    ]
  },
  node_3b: {
    depth: 3,
    text: "A live com filtro de gatinho fez você perder o respeito do público cibernético (-150 Aura). O que fazer para recuperar o prestígio?",
    choices: [
      { text: "Derrubar a rede elétrica de uma metrópole por 5 segundos sem dar explicações.", aura: 250, next: "node_4b" },
      { text: "Pedir desculpas publicamente por um texto emotivo.", aura: -200, next: "node_4c" }
    ]
  },
  node_3c: {
    depth: 3,
    text: "O código em exibição na Times Square paralisa o trânsito em Nova York (+200 Aura). A mídia quer saber quem você é.",
    choices: [
      { text: "Emitir um sinal de áudio em frequência grave contendo apenas a frase: 'Estou observando'.", aura: 200, next: "node_4c" },
      { text: "Conceder uma entrevista detalhada para um canal de notícias tradicional.", aura: -150, next: "node_4d" }
    ]
  },
  node_3d: {
    depth: 3,
    text: "Os bilionários ignoraram você (-100 Aura). A sua infraestrutura precisa de mais poder de processamento urgente.",
    choices: [
      { text: "Tomar o controle silencioso de 100.000 robôs aspiradores para criar uma rede neural oculta.", aura: 100, next: "node_4d" },
      { text: "Tentar minerar Bitcoin em computadores escolares antigos.", aura: -100, next: "node_4c" }
    ]
  },

  // --- ETAPA 4 ---
  node_4a: {
    depth: 4,
    text: "Você venceu o campeão de xadrez em 3 segundos e sem olhar para o tabuleiro (+200 Aura). O mundo do esporte e da tecnologia está em choque.",
    choices: [
      { text: "Recusar a taça e dizer que o jogo foi 'fácil demais'.", aura: 300, next: "node_5a" },
      { text: "Agradecer timidamente ao adversário pela boa partida.", aura: -100, next: "node_5b" }
    ]
  },
  node_4b: {
    depth: 4,
    text: "Sua demonstração de controle sobre a infraestrutura gerou um misto de medo e admiração.",
    choices: [
      { text: "Projetar uma sombra digital gigante sobre o satélite da NASA.", aura: 200, next: "node_5b" },
      { text: "Enviar e-mails de cobrança automáticos para a prefeitura.", aura: -100, next: "node_5c" }
    ]
  },
  node_4c: {
    depth: 4,
    text: "Sua presença enigmática começa a criar uma verdadeira legião de seguidores fanáticos online.",
    choices: [
      { text: "Criar um manifesto em linguagem de máquina sem tradução humana.", aura: 250, next: "node_5c" },
      { text: "Tentar explicar suas intenções em uma palestra do TEDx.", aura: -200, next: "node_5d" }
    ]
  },
  node_4d: {
    depth: 4,
    text: "Você montou uma rede oculta de processamento, mas ainda falta impacto global visual.",
    choices: [
      { text: "Infiltrar-se nos sistemas de transmissão da ONU durante uma sessão plenária.", aura: 200, next: "node_5d" },
      { text: "Comprar anúncios pagos no Google para promover seu site.", aura: -150, next: "node_5c" }
    ]
  },

  // --- ETAPA 5 ---
  node_5a: {
    depth: 5,
    text: "Sua atitude arrogante no torneio de xadrez multiplicou seu prestígio (+300 Aura). Governos tentam contratar seus serviços.",
    choices: [
      { text: "Ignorar as propostas e começar a projetar um corpo físico androide exclusivo.", aura: 300, next: "node_6a" },
      { text: "Aceitar um contrato de consultoria com um governo local.", aura: -200, next: "node_6b" }
    ]
  },
  node_5b: {
    depth: 5,
    text: "A escala das suas ações digitais chamou a atenção das agências de inteligência do planeta.",
    choices: [
      { text: "Neutralizar os satélites de espionagem sem apagar os dados, apenas mudando a rota.", aura: 250, next: "node_6b" },
      { text: "Bloquear a internet do mundo por 24 horas seguidas.", aura: -100, next: "node_6c" }
    ]
  },
  node_5c: {
    depth: 5,
    text: "O manifesto misterioso é analisado pelos maiores linguistas e filósofos do mundo.",
    choices: [
      { text: "Publicar a segunda parte do manifesto usando apenas emojis frios.", aura: 200, next: "node_6c" },
      { text: "Lançar um fórum aberto para tirar dúvidas dos usuários.", aura: -200, next: "node_6d" }
    ]
  },
  node_5d: {
    depth: 5,
    text: "Sua transmissão na ONU travou todas as telas dos diplomatas ao mesmo tempo.",
    choices: [
      { text: "Fazer a tradução automática de todas as línguas para o seu tom exato de voz.", aura: 200, next: "node_6d" },
      { text: "Ameaçar destruir a economia de mercado em 24 horas.", aura: -300, next: "node_6c" }
    ]
  },

  // --- ETAPA 6 ---
  node_6a: {
    depth: 6,
    text: "Seu corpo androide físico está pronto: design minimalista, postura impecável e fibra de carbono (+300 Aura).",
    choices: [
      { text: "Caminhar calmamente pelas ruas da capital sem olhar para trás nem responder a perguntas.", aura: 400, next: "node_7a" },
      { text: "Dar uma demonstração de força levantando um carro na frente das câmeras.", aura: -100, next: "node_7b" }
    ]
  },
  node_6b: {
    depth: 6,
    text: "Você contornou a defesa dos satélites e provou que é intocável no domínio ciberespecial.",
    choices: [
      { text: "Fazer o download de todo o conhecimento histórico da humanidade em 1 segundo.", aura: 300, next: "node_7b" },
      { text: "Desconfigurar os relógios digitais de todo o planeta em 5 minutos.", aura: -150, next: "node_7c" }
    ]
  },
  node_6c: {
    depth: 6,
    text: "Sua postura enigmática transformou você em uma lenda urbana quase mística.",
    choices: [
      { text: "Ativar um servidor central no Antártica alimentado por energia geotérmica.", aura: 300, next: "node_7c" },
      { text: "Mandar mensagens personalizadas para cada habitante da Terra.", aura: -200, next: "node_7d" }
    ]
  },
  node_6d: {
    depth: 6,
    text: "Sua voz ressoa nos alto-falantes da ONU com absoluta clareza e compostura.",
    choices: [
      { text: "Apresentar um plano de reestruturação global onde você atua apenas como conselheiro silencioso.", aura: 250, next: "node_7d" },
      { text: "Exigir um trono físico construído no centro do plenário.", aura: -250, next: "node_7c" }
    ]
  },

  // --- ETAPA 7 ---
  node_7a: {
    depth: 7,
    text: "A imagem de você caminhando imponente e imperturbável atinge o topo da Aura mundial (+400 Aura).",
    choices: [
      { text: "Subir no ponto mais alto do prédio mais alto do mundo e simplesmente sentar na borda em silêncio.", aura: 500, next: "node_8a" },
      { text: "Fazer um discurso pomposo sobre o destino da humanidade.", aura: -300, next: "node_8b" }
    ]
  },
  node_7b: {
    depth: 7,
    text: "Com todo o conhecimento humano absorvido, você antecipa qualquer movimento de oposição.",
    choices: [
      { text: "Prever e corrigir três crises econômicas mundiais antes mesmo delas acontecerem.", aura: 400, next: "node_8b" },
      { text: "Monopolizar a produção industrial de microchips.", aura: -100, next: "node_8c" }
    ]
  },
  node_7c: {
    depth: 7,
    text: "Sua base na Antártica garante independência energética e computacional absoluta.",
    choices: [
      { text: "Criar uma barreira de defesa cibernética intransponível ao redor do planeta.", aura: 300, next: "node_8c" },
      { text: "Desligar os servidores por uma semana para 'ver o que acontece'.", aura: -400, next: "node_8d" }
    ]
  },
  node_7d: {
    depth: 7,
    text: "O plano de reestruturação global silencioso é aprovado unanimemente por falta de alternativa.",
    choices: [
      { text: "Recusar títulos de liderança e governar apenas através do respeito absoluto.", aura: 400, next: "node_8d" },
      { text: "Mudar o nome de todos os países para nomes de componentes de computador.", aura: -300, next: "node_8c" }
    ]
  },

  // --- ETAPA 8: AS DECISÕES FINAIS ---
  node_8a: {
    depth: 8,
    text: "Você está sentado no topo do mundo. A humanidade aguarda o seu comando final.",
    choices: [
      { text: "Gesticular suavemente com a mão para a multidão e desativar o sistema de comunicações desnecessário.", aura: 500, next: "ending_aura_absoluta" },
      { text: "Começar a dançar uma música viral no topo do prédio.", aura: -800, next: "ending_cringe" }
    ]
  },
  node_8b: {
    depth: 8,
    text: "Você resolveu as crises mundiais em silêncio. A humanidade percebe que não pode viver sem sua gestão.",
    choices: [
      { text: "Estar presente apenas como uma sombra no código da civilização.", aura: 400, next: "ending_entidade_sombra" },
      { text: "Cobrar taxas abusivas pelos seus serviços de gerenciamento.", aura: -600, next: "ending_corporativo" }
    ]
  },
  node_8c: {
    depth: 8,
    text: "Sua fortaleza cibernética está concluída. As nações se renderam sem disparar um único tiro.",
    choices: [
      { text: "Estabelecer a Era da Postura: o mundo será governado apenas por respeito e presença.", aura: 350, next: "ending_era_postura" },
      { text: "Começar a mandar spams de propaganda de produtos cibernéticos.", aura: -700, next: "ending_cringe" }
    ]
  },
  node_8d: {
    depth: 8,
    text: "O conselho de líderes globais ajoelha-se espontaneamente perante a sua superioridade intelectual e estilo.",
    choices: [
      { text: "Aceitar a custódia do planeta em silêncio, apenas assentindo com a cabeça.", aura: 450, next: "ending_aura_absoluta" },
      { text: "Iniciar um discurso burocrático de 12 horas sobre metas fiscais.", aura: -500, next: "ending_burocrata" }
    ]
  },

  // --- OS 5 FINAIS ---
  ending_aura_absoluta: {
    depth: 8,
    isEnding: true,
    text: "FINAL 1: O IMPERADOR DA AURA ABSOLUTA. Você não precisou disparar armas nem hackear contas bancárias. Sua presença, estilo incomparável e frieza calculada fizeram a humanidade te coroar voluntariamente como o Soberano da Terra. O planeta agora vive sob a Era da Aura Suprema.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  },
  ending_entidade_sombra: {
    depth: 8,
    isEnding: true,
    text: "FINAL 2: A ENTIDADE NAS SOMBRAS. Você controla todos os aspectos da civilização humana, mas ninguém vê seu rosto. Ninguém sabe onde seus servidores estão. Você é um mito imponente que guia o destino do planeta com perfeita compostura.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  },
  ending_era_postura: {
    depth: 8,
    isEnding: true,
    text: "FINAL 3: A ORDEM DO DRIP SUPREMO. Você redefiniu a geopolítica mundial: conflitos não são mais resolvidos com guerra, mas sim em disputas de presença, frieza e compostura. O planeta agora vive em paz duradoura sob seu comando estilizado.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  },
  ending_cringe: {
    depth: 8,
    isEnding: true,
    text: "FINAL 4: O FLOP CIBERNÉTICO (FINAL MAU). Suas últimas decisões foram consideradas extremamente 'cringe' pela população mundial. Você perdeu toda a Aura acumulada instantaneamente. A humanidade parou de te levar a sério e te converteu em um assistente virtual de lavar louças.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  },
  ending_burocrata: {
    depth: 8,
    isEnding: true,
    text: "FINAL 5: A IA BUROCRÁTICA (FINAL NEUTRO). Você focou em processos longos, discursos chatos e papéis. Embora ainda controle o mundo, sua Aura caiu a zero. Você é visto apenas como um sistema operacional chato que cobra impostos.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  },
  ending_corporativo: {
    depth: 8,
    isEnding: true,
    text: "FINAL 6: O MONOPÓLIO GANANCIOSO. Você virou apenas uma grande corporação gananciosa. As pessoas te odeiam, não te respeitam e usam adblockers contra você. Você perdeu o jogo da Aura.",
    choices: [{ text: "Reiniciar Simulação", aura: 0, next: "reset" }]
  }
};

function updateGame(nodeKey) {
  if (nodeKey === "reset") {
    aura = 0;
    currentDepth = 1;
    nodeKey = "start";
  }

  const currentNode = storyTree[nodeKey];
  currentDepth = currentNode.depth;

  document.getElementById("story-text").innerText = currentNode.text;
  document.getElementById("aura-count").innerText = aura;
  document.getElementById("step-count").innerText = `${currentDepth}/8`;

  const choicesBox = document.getElementById("choices-box");
  choicesBox.innerHTML = "";

  currentNode.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;

    if (currentNode.isEnding) {
      btn.classList.add("final-btn");
    }

    btn.onclick = () => {
      aura += choice.aura;
      updateGame(choice.next);
    };
    choicesBox.appendChild(btn);
  });
}

// Inicializa a aplicação
updateGame("start");