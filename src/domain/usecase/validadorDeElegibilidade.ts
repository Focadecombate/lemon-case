import { Checker } from '../checkers/Checker'
import { Input, Output, KiloGramaCO2ParaKiloWattHora } from '../model'

export class ValidadorDeElegibilidade {
  constructor (private checkers: Checker[]) {}

  validar (input: Input): Output {
    const razoesDeInelegibilidade = this.checkers.flatMap((checker) =>
      checker.check(input)
    )

    if (razoesDeInelegibilidade.length > 0) {
      return {
        elegivel: false,
        razoesDeInelegibilidade
      }
    }

    return {
      elegivel: true,
      economiaAnualDeCO2: this.economiaAnualDeCO2(input.historicoDeConsumo)
    }
  }

  economiaAnualDeCO2 (historicoDeConsumoAnual: number[]): number {
    const consumoAnual = historicoDeConsumoAnual.reduce(
      (total, consumo) => total + consumo,
      0
    )

    return (
      Math.round(consumoAnual * KiloGramaCO2ParaKiloWattHora * 1000) / 1000
    )
  }
}
