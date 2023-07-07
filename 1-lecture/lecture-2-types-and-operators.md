---
marp: true
---

# Javascript FUNdamentals
## Types and Operators

---

## Six basic types in JavaScript

- Booleans
- Numbers
- Empty Values (A.K.A. Null Values)
- Strings
- Arrays
- Objects

⚡ If you are unsure of the type of a given value, you can use `typeof <VARIABLE>`

---

## String interpolation

```js
const pi = 3.14;
const diameter = 30;
const radius = diameter / 2;

// Declare a string
const introduction = "The area of a circle is π * r².";

// Declare a string with interpolation
const example = `A ${diameter}cm pizza has an area of ${pi * radius * radius}cm².`;

// Combine the strings (technical term: concatinate)
const text = introduction + ' ' + example;

console.log(text); 
// The area of a circle is πr². A 30cm pizza has an area of 706.5cm².
```

❗ Notice how we have all 3 different kinds of strings. 
❗❗ Strings can be combined together no matter their type of quotation.

---

## Arrays: accessing the values in an array

⚠️ Indexing starts at 0! ⚠️

```js
const anArray = ["bacon", undefined, 900, true];
```

1. What is the value of anArray[0]?
2. How do we access the value of 900?

---

## Objects: accessing the values in an object

Values in an object can be accessed with:
- dot notation.
- bracket notation.

```js
const person = {name: "Bob", age: 23};
```

1. How do we access "Bob"?

---

## Javascript operators

- Arithmetic operators.
- Comparison operators.
- Logical operators.

Comparison operators and logical operators are usually combined in an expression to create a boolean value, like this `2 > 1 && -1 < 0` which is `true`.

---

## Exercise 1

Look at these expressions below and determine weather they evaluate to true or false:

`true || false`

`fale && false`

`1 < 2 && 2 > 1`

`31 < 13 || 1 < 2 && 3 > 1`

`400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)`

`true && false && false || false && true`

`true && false || true || false`

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

```js
const corn = {label: "corn", price: 5.3 + "$"};
const tag = {ISBN: 53532, isAvailable: true, author: "Nakamoto"};
```

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

---

## Exercise 4

```js
const person = { name: 'Bob', age: 23 };
const name = 'John';
```

What is the value of the following expressions?
- `person.name`
- `person["name"]`
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
