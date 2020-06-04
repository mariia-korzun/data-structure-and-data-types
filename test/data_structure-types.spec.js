const validateTitle = require('../src/data_structure-types.js').validateTitle;
const sum = require('../src/data_structure-types.js').sum;

describe('validateTitle function testing', () => {
  it('Should return correct result string according to function', () => {
    expect(validateTitle(false))
        .to.eql('Incorrect input data');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle([]))
        .to.eql('Incorrect input data');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle(15))
        .to.eql('Incorrect input data');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle('s'))
        .to.eql('INVALID');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle('12title'))
        .to.eql('INVALID');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle('Title!'))
        .to.eql('VALID');
  });
  it('Should return correct result string according to function', () => {
    expect(validateTitle('Title?'))
        .to.eql('VALID');
  });
});


describe('sum function testing', () => {
  it('Should return correct sum according to given arguments in function', () => {
    expect(sum('25', 15))
        .to.eql(10);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(sum(41, '3'))
        .to.eql(44);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(sum('3', 45))
        .to.eql(-42);
  });
  it('Should return correct sum according to given arguments in function', () => {
    expect(sum('15', 15))
        .to.eql(0);
  });
});

