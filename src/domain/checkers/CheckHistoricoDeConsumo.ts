import { Checker } from './Checker'
import {
  Input,
  MotivosDeInelegibilidadeType,
  TipoDeConexaoType,
  razoesDeInelegibilidadeEnum,
  tiposDeConexaoEnum
} from '../model'

export class CheckHistoricoDeConsumo implements Checker {
  private readonly historicoDeConsumoMinimo: Record<TipoDeConexaoType, number>

  constructor () {
    this.historicoDeConsumoMinimo = {
      [tiposDeConexaoEnum.monofasico]: 400,
      [tiposDeConexaoEnum.bifasico]: 500,
      [tiposDeConexaoEnum.trifasico]: 750
    }
  }

  check (input: Input): MotivosDeInelegibilidadeType[] {
    const { historicoDeConsumo, tipoDeConexao } = input

    const consumoTotal = historicoDeConsumo.reduce(
      (prev, curr) => prev + curr,
      0
    )

    const mediaDeConsumo = consumoTotal / historicoDeConsumo.length

    if (mediaDeConsumo < this.historicoDeConsumoMinimo[tipoDeConexao]) {
      return [razoesDeInelegibilidadeEnum.consumoMuitoBaixo]
    }

    return []
  }
}
