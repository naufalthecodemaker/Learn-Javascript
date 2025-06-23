import {formatCurrency} from '../../scripts/utils/money.js';

// create test suite / description what we test about
describe('test suite: formatCurrency function', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95'); // means: we expect formatCurrency(2095) to equal 20.95
  }); // create the first test

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  }); // create the second test

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  }); // create the third test
}); 