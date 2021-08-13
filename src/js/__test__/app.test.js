import Validator from '../app';

test('Правильное написание имя пользователя', () => {
  const username = new Validator('petya');
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});

test('Заглавные буквы', () => {
  const username = new Validator('PETYA');
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});

test('Имя начинается с цифры', () => {
  const username = new Validator('2petya');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Имя заканчивается цифрами', () => {
  const username = new Validator('petya1');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Меньше 4 цифр подряд', () => {
  const username = new Validator('pe555tya');
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});

test('Более 3 цифр подряд', () => {
  const username = new Validator('petya1234');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Имя начинается с подчёркивания', () => {
  const username = new Validator('_petya');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Имя заканчивается подчеркиванием', () => {
  const username = new Validator('petya_');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Имя начинается с дефиса', () => {
  const username = new Validator('-petya');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test('Имя заканчивается дефисом', () => {
  const username = new Validator('petya-');
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
