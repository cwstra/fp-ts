import * as _ from '../src/Endomorphism'
import { pipe } from '../src/function'
import * as U from './util'

describe('Endomorphism', () => {
  it('getMonoid', () => {
    const M = _.getMonoid<number>()
    const inc = (n: number) => n + 1
    const f = pipe(inc, M.concat(U.double))
    U.deepStrictEqual(f(3), 8)
  })
})
