import { Checker } from './Checker'

import {
  Input,
  modalidadesTarifariasEnum,
  ModalidadeTarifariaType,
  MotivosDeInelegibilidadeType,
  razoesDeInelegibilidadeEnum
} from '../model'

export class CheckModalidadesTarifarias implements Checker {
  private readonly modalidadesTarifariasPermitidas: ModalidadeTarifariaType[]
  constructor () {
    this.modalidadesTarifariasPermitidas = [
      modalidadesTarifariasEnum.convencional,
      modalidadesTarifariasEnum.branca
    ]
  }

  check ({ modalidadeTarifaria }: Input): MotivosDeInelegibilidadeType[] {
    return this.modalidadesTarifariasPermitidas.includes(modalidadeTarifaria)
      ? []
      : [razoesDeInelegibilidadeEnum.modalidadeTarifariaNaoAceita]
  }
}
