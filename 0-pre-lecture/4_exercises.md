# Fundamentals: Exercises

_We will correct these exercises in class._

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false
2. false && false
3. 1 < 2 && 2 > 1
4. 31 < 13 || 1 < 2 && 3 > 1
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)
6. true && false && false || false && true
7. true && false || true || false
```

---

## Exercise 2

Given this data structure:

```js
const data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`?
2. How would you access the value `3`?
3. How would you access the value `4`?

---

## Exercise 3

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

```js
const corn = {label: "corn", price: 5.3 + "$"};
const tag = {ISBN: 53532, isAvailable: true, author: "Nakamoto"};
```

---

## Exercise 4

```js
// Given
const person = { name: "Bob", age: 23 };
const name = 'John';
```

What is the value of the following expressions?

- `person.name`
- `person['name']`
- `person[name]`

---

## Exercise 5

```js
const person = { name: 'Bob', age: 23 };
const key = 'name';
```

What is the value of the following expressions?
- `person.key`
- `person["key"]`
- `person[key]`