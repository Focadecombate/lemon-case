export const tiposDeConexaoEnum = {
  monofasico: 'monofasico',
  bifasico: 'bifasico',
  trifasico: 'trifasico'
} as const

export const classesDeConsumoEnum = {
  residencial: 'residencial',
  industrial: 'industrial',
  comercial: 'comercial',
  rural: 'rural',
  poderPublico: 'poderPublico'
} as const

export const modalidadesTarifariasEnum = {
  azul: 'azul',
  branca: 'branca',
  verde: 'verde',
  convencional: 'convencional'
} as const

export const razoesDeInelegibilidadeEnum = {
  classeNaoAceita: 'Classe de consumo não aceita',
  modalidadeTarifariaNaoAceita: 'Modalidade tarifária não aceita',
  consumoMuitoBaixo: 'Consumo muito baixo para tipo de conexão'
} as const
