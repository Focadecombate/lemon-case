import { enumOf } from './common'

import { razoesDeInelegibilidade } from './types'

export const output = {
  oneOf: [
    {
      type: 'object',
      additionalProperties: false,
      required: ['elegivel', 'economiaAnualDeCO2'],
      properties: {
        elegivel: enumOf([true]), // always true
        economiaAnualDeCO2: { type: 'number', minimum: 0 }
      }
    },
    {
      type: 'object',
      additionalProperties: false,
      required: ['elegivel', 'razoesDeInelegibilidade'],
      properties: {
        elegivel: enumOf([false]), // always false
        razoesDeInelegibilidade: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string',
            enum: razoesDeInelegibilidade
          }
        }
      }
    }
  ]
}

export interface Success {
  elegivel: true;
  economiaAnualDeCO2: number;
}

export interface Failure {
  elegivel: false;
  razoesDeInelegibilidade: string[];
}

export type Output = Success | Failure;
