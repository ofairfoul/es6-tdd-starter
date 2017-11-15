import StringCalculator from '../stringCalculator';

describe('StringCalculator', () => {

  let stringCalculator;

  beforeEach(() => {
    stringCalculator = StringCalculator();
  });

  it('Empty string', () => {

    expect(stringCalculator.add('')).toBe(0);

  });

  it('One number', () => {

    expect(stringCalculator.add('1')).toBe(1);
    
  });

  it('Two numbers', () => {

    expect(stringCalculator.add('1,2')).toBe(3);

  });

  it('Many numbners', () => {

    expect(stringCalculator.add('1,2,3,4')).toBe(10);
    
  });

  it('Handles newlines', () => {

    expect(stringCalculator.add('1\n2\n3')).toBe(6);

  });
  
  it('Handles newlines and commas mixture', () => {

    expect(stringCalculator.add('1\n2,3')).toBe(6);

  });

});