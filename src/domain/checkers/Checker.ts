import { Input, MotivosDeInelegibilidadeType } from '../model'

export interface Checker {
  check(input: Input): MotivosDeInelegibilidadeType[];
}
