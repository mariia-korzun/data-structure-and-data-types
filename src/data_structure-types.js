const validateTitle = (value) => {
  if (typeof value !== 'string') { return 'Incorrect input data' }
  if (value[0].localeCompare('A') < 0 || value[0].localeCompare('Z') > 0 || value.length <= 2 || value.length >= 20) { return 'INVALID' }
  return 'VALID'

}

const sum = (value1, value2) => {
  let string
  let number
  if (typeof value1 === 'string') {
    string = value1
    number = value2
  } else {
    string = value2
    number = value1
  }
  if (number % 15 === 0) { number = -number }
  return number + parseFloat(string)
};

module.exports = {
  validateTitle,
  sum,
};
