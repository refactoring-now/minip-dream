import { say }  from '../utils/index'

test('should be show hello world', () => {
  expect(say('hello world')).toBe('hello world')
})
