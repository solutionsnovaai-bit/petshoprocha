export const LOJA = {
  nome: 'Pet Shop Diamond',
  descricao: 'Banho e tosa, táxi dog e produtos para pets na Vila Carrão, São Paulo.',
  whatsapp: '5511961874563',
  whatsappExibicao: '(11) 96187-4563',
  instagram: 'https://www.instagram.com/petshop_diamond/',
  instagramHandle: '@petshop_diamond',
  endereco: { rua: 'Rua Antônio de Barros, 2238', bairro: 'Vila Carrão', regiao: 'Zona Leste', cidade: 'São Paulo', uf: 'SP', cep: '03401-001' },
  horario: { texto: 'Consulte os horários pelo WhatsApp', diasTexto: '' },
}

export const ENDERECO_COMPLETO = `${LOJA.endereco.rua} - ${LOJA.endereco.bairro}, ${LOJA.endereco.cidade} - ${LOJA.endereco.uf}, ${LOJA.endereco.cep}`

export const MENSAGENS = {
  padrao: 'Olá! Vim pelo site do Pet Shop Diamond e gostaria de agendar banho ou tosa para o meu cão.',
  duvida: 'Olá! Vim pelo site do Pet Shop Diamond e tenho uma dúvida.',
}

export const NAV = [
  { id: 'servicos', nome: 'Serviços' },
  { id: 'galeria', nome: 'Galeria' },
  { id: 'como-agendar', nome: 'Agendamento' },
  { id: 'onde-estamos', nome: 'Onde estamos' },
  { id: 'duvidas', nome: 'Dúvidas' },
] as const

export const ABERTURA = { texto: 'Preparando o banho…' }
export const FAIXAS = {
  verde: ['Banho e tosa', 'Táxi dog', 'Agende pelo WhatsApp'],
  amarela: ['Pet Shop Diamond', 'Vila Carrão', 'Rações e petiscos', 'Entregas'],
}

export const COMO_AGENDAR = {
  sobretitulo: 'Agendamento',
  titulo: 'Marque o próximo',
  destaque: 'banho do seu pet.',
  passos: [
    { titulo: 'Chame no WhatsApp', texto: 'Conte um pouco sobre o seu pet e diga se procura banho ou tosa.' },
    { titulo: 'Combine um horário', texto: 'Consulte os horários disponíveis e acerte os detalhes com a equipe.' },
    { titulo: 'Dia de cuidado no Diamond', texto: 'Traga seu pet no horário combinado ou consulte a disponibilidade do táxi dog.' },
  ],
  cta: 'Agendar pelo WhatsApp',
}

export const ONDE = {
  sobretitulo: 'Onde estamos', titulo: 'Pertinho de você,', destaque: 'na Vila Carrão.',
  comoChegar: 'Como chegar', chamar: 'Chamar no WhatsApp',
}

export const DUVIDAS = {
  sobretitulo: 'Dúvidas', titulo: 'Perguntou,', destaque: 'a gente responde.', link: 'Perguntar no WhatsApp',
  itens: [
    { pergunta: 'Como agendo banho ou tosa?', resposta: 'Chame no WhatsApp, diga qual serviço procura e combine o melhor horário com a equipe.' },
    { pergunta: 'Quanto custa o serviço?', resposta: 'Peça um orçamento pelo WhatsApp e conte o porte do seu cão e o serviço desejado.' },
    { pergunta: 'Vocês fazem entrega ou táxi dog?', resposta: 'Sim. Consulte pelo WhatsApp a área atendida, os horários e os valores.' },
    { pergunta: 'Onde fica o Pet Shop Diamond?', resposta: ENDERECO_COMPLETO },
  ],
}

export const CHAMADA = {
  titulo: 'Dia de banho?', destaque: 'Combine com a gente.',
  texto: 'Fale com a equipe para consultar horários de banho e tosa.', cta: 'Agendar pelo WhatsApp',
}

export const RODAPE = { credito: 'Site desenvolvido por Nova AI Solutions' }

export const SEO = {
  titulo: 'Pet Shop Diamond | Banho e tosa na Vila Carrão',
  descricao: 'Banho e tosa, táxi dog e produtos para pets na Vila Carrão, São Paulo. Fale pelo WhatsApp (11) 96187-4563.',
  compartilharTitulo: 'Pet Shop Diamond · Banho e tosa',
  compartilharTexto: 'Banho e tosa para cães na Vila Carrão. Agende pelo WhatsApp.',
  imagemAlt: 'Mascote do Pet Shop Diamond em um diamante azul.',
  corTema: '#1156b2', corFundo: '#f8fbff',
}
