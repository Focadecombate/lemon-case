import { enumOf } from './common'
import {
  tiposDeConexao,
  classesDeConsumo,
  modalidadesTarifarias,
  cpf,
  cnpj
} from './types'

export const input = {
  type: 'object',
  additionalProperties: false,
  required: [
    'numeroDoDocumento',
    'tipoDeConexao',
    'classeDeConsumo',
    'modalidadeTarifaria',
    'historicoDeConsumo'
  ],
  properties: {
    numeroDoDocumento: { oneOf: [cpf, cnpj] },
    tipoDeConexao: enumOf(tiposDeConexao),
    classeDeConsumo: enumOf(classesDeConsumo),
    modalidadeTarifaria: enumOf(modalidadesTarifarias),
    historicoDeConsumo: {
      // em kWh
      type: 'array',
      minItems: 3,
      maxItems: 12,
      items: {
        type: 'integer',
        minimum: 0,
        maximum: 9999
      }
    }
  }
}

export interface Input {
  numeroDoDocumento: string;
  tipoDeConexao: typeof tiposDeConexao[number];
  classeDeConsumo: typeof classesDeConsumo[number];
  modalidadeTarifaria: typeof modalidadesTarifarias[number];
  historicoDeConsumo: number[];
}
