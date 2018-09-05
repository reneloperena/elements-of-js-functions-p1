/* eslint-env jest */
import sayHello from './hello'

test('sayHello should be a function', () => {
  expect(typeof sayHello).toEqual('function')
})

test('sayHello should take 1 parameter', () => {
  expect(typeof sayHello).toEqual('function')
  expect(sayHello.length).toEqual(1)
})

test("sayHello should return 'Hello Paulina!' if the argument 'Paulina' is passed", () => {
  expect(typeof sayHello).toEqual('function')
  expect(sayHello('Paulina')).toEqual('Hello Paulina!')
})
