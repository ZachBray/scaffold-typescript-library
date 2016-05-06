import * as chai from 'chai';
import Calculator from '../src/Calculator';
const expect = chai.expect;

describe('Adding', () => {
  it('should be commutative', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).to.equal(calculator.add(2, 1));
  });
});
