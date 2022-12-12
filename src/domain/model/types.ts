import {
  tiposDeConexaoEnum,
  classesDeConsumoEnum,
  modalidadesTarifariasEnum,
  razoesDeInelegibilidadeEnum
} from './enums'

export const cpf = {
  type: 'string',
  pattern: '^\\d{11}$',
  example: '21554495008'
}

export const cnpj = {
  type: 'string',
  pattern: '^\\d{14}$',
  example: '33400689000109'
}

export const tiposDeConexao = Object.values(tiposDeConexaoEnum)

export const classesDeConsumo = Object.values(classesDeConsumoEnum)

export const modalidadesTarifarias = Object.values(modalidadesTarifariasEnum)

export const razoesDeInelegibilidade = Object.values(
  razoesDeInelegibilidadeEnum
)

export type ClassesDeConsumoType =
  typeof classesDeConsumoEnum[keyof typeof classesDeConsumoEnum];

export type TipoDeConexaoType =
  typeof tiposDeConexaoEnum[keyof typeof tiposDeConexaoEnum];

export type ModalidadeTarifariaType =
  typeof modalidadesTarifariasEnum[keyof typeof modalidadesTarifariasEnum];

export type MotivosDeInelegibilidadeType =
  typeof razoesDeInelegibilidadeEnum[keyof typeof razoesDeInelegibilidadeEnum];

export const KiloGramaCO2ParaKiloWattHora = 0.084
