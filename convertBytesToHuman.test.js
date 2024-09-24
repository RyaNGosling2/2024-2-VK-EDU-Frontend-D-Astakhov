/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1)).toBe("1 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(10240000)).toBe("9.77 MB")
  expect(convertBytesToHuman(9990240000)).toBe("9.30 GB")
  expect(convertBytesToHuman(9999990240000)).toBe("9.09 TB")
  expect(convertBytesToHuman(9999999990240000)).toBe("8.88 PB")
});

// другая группа проверок
