import { make } from '../src/make'
import { eligibleInput, notEligibleInput } from '../src/inputs'

describe('Validador de Elegibilidade', () => {
  it('should return true if the user is elegible', () => {
    const { validadorDeElegibilidade } = make()

    const output = validadorDeElegibilidade.validar(eligibleInput)

    if (!output.elegivel) {
      throw new Error('User should be elegible')
    }

    expect(output.elegivel).toBe(true)
    expect(output.economiaAnualDeCO2).toBe(5553.24)
  })

  it('should return false if the user is not elegible', () => {
    const { validadorDeElegibilidade } = make()

    const output = validadorDeElegibilidade.validar(notEligibleInput)

    if (output.elegivel) {
      throw new Error('User should be not elegible')
    }

    expect(output.elegivel).toBe(false)
    expect(output.razoesDeInelegibilidade).toEqual([
      'Classe de consumo não aceita',
      'Modalidade tarifária não aceita'
    ])
  })
})
