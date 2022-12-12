import { Input, Output } from './domain/model'
import { make } from './make'

export const run = (input: Input): Output => {
  const { validadorDeElegibilidade } = make()

  return validadorDeElegibilidade.validar(input)
}
