import {
  CheckClassesDeConsumo,
  CheckModalidadesTarifarias,
  CheckHistoricoDeConsumo
} from './domain/checkers'
import { ValidadorDeElegibilidade } from './domain/usecase/validadorDeElegibilidade'

export const make = () => {
  const validadorDeElegibilidade = new ValidadorDeElegibilidade([
    new CheckClassesDeConsumo(),
    new CheckModalidadesTarifarias(),
    new CheckHistoricoDeConsumo()
  ])

  return {
    validadorDeElegibilidade
  }
}
