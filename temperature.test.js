/* eslint-env jest */
const { fahrenheitToCelsius, celsiusToFahrenheit, friendlyCelsiusToFahrenheit } = require('./temperature')

test('fahrenheitToCelsius should be a function', () => {
  expect(typeof fahrenheitToCelsius).toEqual('function')
})

test('celsiusToFahrenheit should be a function', () => {
  expect(typeof celsiusToFahrenheit).toEqual('function')
})

test('friendlyCelsiusToFahrenheit should be a function', () => {
  expect(typeof friendlyCelsiusToFahrenheit).toEqual('function')
})

test('fahrenheitToCelsius should take 1 parameter', () => {
  expect(typeof fahrenheitToCelsius).toEqual('function')
  expect(fahrenheitToCelsius.length).toEqual(1)
})

test('celsiusToFahrenheit should take 1 parameter', () => {
  expect(typeof celsiusToFahrenheit).toEqual('function')
  expect(celsiusToFahrenheit.length).toEqual(1)
})

test('friendlyCelsiusToFahrenheit should take 1 parameter', () => {
  expect(typeof friendlyCelsiusToFahrenheit).toEqual('function')
  expect(friendlyCelsiusToFahrenheit.length).toEqual(1)
})

test("celsiusToFahrenheit should return 32 if the argument 0 is passed", () => {
  expect(typeof celsiusToFahrenheit).toEqual('function')
  expect(celsiusToFahrenheit(0)).toEqual(32)
})

test("fahrenheitToCelsius should return 0 if the argument 32 is passed", () => {
  expect(typeof fahrenheitToCelsius).toEqual('function')
  expect(fahrenheitToCelsius(32)).toEqual(0)
})

test("friendlyCelsiusToFahrenheit should return the string '0 Celsius equals to 32 Fahrenheit' if the argument 0 is passed", () => {
  expect(typeof friendlyCelsiusToFahrenheit).toEqual('function')
  expect(friendlyCelsiusToFahrenheit(0)).toEqual('0 Celsius equals to 32 Fahrenheit')
})
