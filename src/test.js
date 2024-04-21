const index = require('./index');

test('Capitalize', () => {
    expect(index.capitalize('aaa')).toBe('Aaa');
});

test('Reverse string', () => {
    expect(index.reverseString('abc')).toBe('cba');
});

test('Add', () => {
    expect(index.calculator.add(1, 2)).toBe(3);
});

test('Subtract', () => {
    expect(index.calculator.subtract(2, 1)).toBe(1);
});

test('Multiply', () => {
    expect(index.calculator.multiply(5, 2)).toBe(10);
});

test('Divide', () => {
    expect(index.calculator.divide(16, 4)).toBe(4);
});

test('Caesar: wrapping z -> a', () => {
    expect(index.caesarCipher('zzz', 2)).toBe('bbb');
});

test('Caesar: keeping case', () => {
    expect(index.caesarCipher('zZz', 2)).toBe('bBb');
});

test('Caesar: punctuation', () => {
    expect(index.caesarCipher('z.!', 26)).toBe('z.!');
});

test('Analyze array ex1', () => {
    expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('Analyze array ex2', () => {
    expect(index.analyzeArray([5, 5, 5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 3,
    });
});
