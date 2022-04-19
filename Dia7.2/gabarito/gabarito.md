# Gabarito

Esse é o gabarito da academia de lógica dia 7.2, abaixo estão a resolução de cada exercício.

# isEven

```
expect(isEven(2)).toBe('esse valor é par');
expect(isEven(3)).toBe('esse valor é ímpar');
```

# sumEven

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
expect(sumEven(arr)).toEqual(30);

const arr = [1, 3, 5, 7, 9, 11];
expect(sumEven(arr)).toEqual(0);

expect(sumEven()).toEqual(0);
```
