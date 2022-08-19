const {sum, myRemove} = require('./sum.js')

describe('Testes da função sum', () => {
  it('soma 4 + 5 e retorna 9', () => {
    expect(sum( 4, 5)).toBe(9)
  });
  
  it('soma 0 + 0 e retorna 0', () => {
    expect(sum( 0, 0)).toBe(0)
  });
  
  it(`lança erro quando recebe parâmetros 4 e "5"`, () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers')
  });
  
});

