import { Checker } from './Checker'

import {
  Input,
  ClassesDeConsumoType,
  MotivosDeInelegibilidadeType,
  razoesDeInelegibilidadeEnum,
  classesDeConsumoEnum
} from '../model'

export class CheckClassesDeConsumo implements Checker {
  private readonly classesDeConsumoPermitidas: ClassesDeConsumoType[]
  constructor () {
    this.classesDeConsumoPermitidas = [
      classesDeConsumoEnum.comercial,
      classesDeConsumoEnum.residencial,
      classesDeConsumoEnum.industrial
    ]
  }

  check ({ classeDeConsumo }: Input): MotivosDeInelegibilidadeType[] {
    return this.classesDeConsumoPermitidas.includes(classeDeConsumo)
      ? []
      : [razoesDeInelegibilidadeEnum.classeNaoAceita]
  }
}
