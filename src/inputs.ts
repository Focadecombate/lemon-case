import { Input } from './domain/model'

export const eligibleInput: Input = {
  numeroDoDocumento: '14041737706',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'comercial',
  modalidadeTarifaria: 'convencional',
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597
  ]
}

export const notEligibleInput: Input = {
  numeroDoDocumento: '14041737706',
  tipoDeConexao: 'bifasico',
  classeDeConsumo: 'rural',
  modalidadeTarifaria: 'verde',
  historicoDeConsumo: [
    3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160
  ]
}
