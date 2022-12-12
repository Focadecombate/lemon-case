import {
  CheckClassesDeConsumo,
  CheckModalidadesTarifarias,
  CheckHistoricoDeConsumo
} from '../src/domain/checkers'
import {
  classesDeConsumoEnum,
  modalidadesTarifariasEnum,
  razoesDeInelegibilidadeEnum
} from '../src/domain/model'
import { eligibleInput } from '../src/inputs'

describe('Checks', () => {
  describe('Classes de Consumo', () => {
    it('should not have zero length in not eligible reasons', () => {
      const sut = new CheckClassesDeConsumo()

      const resp = sut.check(eligibleInput)

      expect(resp).toEqual([])
    })

    it('should not have a element in not eligible reasons', () => {
      const sut = new CheckClassesDeConsumo()

      const resp = sut.check({
        ...eligibleInput,
        classeDeConsumo: classesDeConsumoEnum.rural
      })

      expect(resp).toContain(razoesDeInelegibilidadeEnum.classeNaoAceita)
    })
  })

  describe('Modalidade Tarifaria', () => {
    it('should not have zero length in not eligible reasons', () => {
      const sut = new CheckModalidadesTarifarias()

      const resp = sut.check(eligibleInput)

      expect(resp).toEqual([])
    })

    it('should not have a element in not eligible reasons', () => {
      const sut = new CheckModalidadesTarifarias()

      const resp = sut.check({
        ...eligibleInput,
        modalidadeTarifaria: modalidadesTarifariasEnum.verde
      })

      expect(resp).toContain(
        razoesDeInelegibilidadeEnum.modalidadeTarifariaNaoAceita
      )
    })
  })

  describe('Histórico de Consumo', () => {
    it('should not have zero length in not eligible reasons', () => {
      const sut = new CheckHistoricoDeConsumo()

      const resp = sut.check(eligibleInput)

      expect(resp).toEqual([])
    })

    it('should not have a element in not eligible reasons', () => {
      const sut = new CheckHistoricoDeConsumo()

      const resp = sut.check({
        ...eligibleInput,
        historicoDeConsumo: [10, 10, 10, 10, 10, 10, 20, 20]
      })

      expect(resp).toContain(razoesDeInelegibilidadeEnum.consumoMuitoBaixo)
    })
  })
})
