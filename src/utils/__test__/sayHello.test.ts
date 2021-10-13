import { sayHello } from '../sayHello'

test('sayHello testing', () => {
  const response: string = sayHello('world')
  expect(response).toBe('Helloworld')
})
