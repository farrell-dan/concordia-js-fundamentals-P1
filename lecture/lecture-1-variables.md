---
marp: true
---

# Javascript FUNdamentals
## Variables

---

## JS variables

- Variables are used to hold data values, they are essentially data containers.
- They can also hold any type of data, even functions.
- There are 3 ways to declare variables: 

```js
var name = 'Rick';

let grandson = 'Morty';

const profession = 'Scientist';
```

---

## Defining variables

Use either `const` or `let`.
- `const` for variables that will never change. `const` is also our default declaration type.
- `let` for variables that may change.

_Never use `var`. It really should be deprecated…_

---

## Defining variables

Naming conventions:
- Can be just about anything.
- Cannot contain spaces.
- Can contain numbers but cannot start with a number.

⚡ Make your variable names meaningful. This will ease the debugging process considerably.

---

## Defining variables

There are a few ways to properly spell our variable names:

| Spelling method |                Example               |
|-----------------|--------------------------------------|
|   Camel case    |             myVariableName           |
|   Underscores   | my_variable_name or MY_VARIABLE_NAME |
|      Dashes     |   Doesn't work! Will break your code |

⚡ In the course, we use **camelCase** most of the time (it's the most popular).
