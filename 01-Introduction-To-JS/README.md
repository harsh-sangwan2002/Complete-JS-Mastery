# 📘 Introduction to JavaScript

Welcome to the **Introduction to JavaScript** guide! This document is a beginner-friendly walkthrough covering the most essential JS concepts — from its origin and usage to core programming fundamentals.

---

## 📌 Table of Contents

1. [What is JavaScript?](#what-is-javascript)
2. [Is JavaScript Compiled or Interpreted?](#is-javascript-compiled-or-interpreted)
3. [Data Types and Variables](#data-types-and-variables)
4. [Basic Operators](#basic-operators)
5. [Conditional and Looping Statements](#conditional-and-looping-statements)
6. [Functions in JavaScript](#functions-in-javascript)
7. [Objects and Loops](#objects-and-loops)

---

## 📖 What is JavaScript?

JavaScript (JS) is a high-level, dynamic programming language primarily used for adding interactivity and functionality to web pages. It runs in the browser and powers most of the modern web.

- **Client-side**: DOM manipulation, event handling
- **Server-side**: Using platforms like Node.js
- **Mobile & Desktop**: Via frameworks like React Native and Electron

---

## ⚙️ Is JavaScript Compiled or Interpreted?

JavaScript is **Just-In-Time (JIT)** compiled.

### Popular JS Engines:

| Engine           | Browser       |
| ---------------- | ------------- |
| **V8**           | Chrome, Edge  |
| **SpiderMonkey** | Firefox       |
| **Chakra**       | (Legacy) Edge |
| **Nitro**        | Safari        |

JIT compilation combines interpretation and compilation — JS code is compiled to bytecode, then optimized during execution for performance.

---

## 🧮 Data Types and Variables

### 🔹 Primitive Types:

- `Number`
- `String`
- `Boolean`
- `undefined`
- `null`
- `Symbol` (ES6+)
- `BigInt` (ES2020+)

### 🔹 Variable Declarations:

- `var` — function-scoped
- `let` — block-scoped
- `const` — block-scoped and immutable reference

---

## ➕ Basic Operators

### Arithmetic:

`+`, `-`, `*`, `/`, `%`, `++`, `--`

### Logical:

`&&`, `||`, `!`

### Boolean Comparisons:

`==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`

---

## 🔁 Conditional and Looping Statements

### Conditional:

- `if`, `else if`, `else`
- `switch-case`

### Loops:

- `for`
- `while`
- `do-while`

---

## 🔧 Functions in JavaScript

### Declaration:

```js
function greet() {
  console.log("Hello!");
}
```

````

### Function Hoisting:

- Function declarations are **hoisted**.
- Function expressions are **not** hoisted.

### Types:

- Named functions
- Anonymous functions
- Arrow functions
- IIFEs (Immediately Invoked Function Expressions)

---

## 🧱 Objects and Loops

### Object Creation:

```js
const person = {
  name: "John",
  age: 25,
};
```

### Access Properties:

- Dot notation: `person.name`
- Bracket notation: `person["age"]`

### `for-in` loop:

Used to iterate over object properties:

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## 🧠 Summary

By understanding these core JS concepts, you are laying the groundwork for more advanced topics like DOM manipulation, asynchronous JS, closures, prototypes, and ES6+ features.

---

## 🎥 Video Link

[👉 Watch the full video on YouTube](https://www.youtube.com/live/lTsnEj3_QYk)

---

## 🙌 Stay Connected

- Subscribe for more JS tutorials
- Comment your doubts or feedback
- Share with fellow developers

---

> **Happy Coding! 🚀**
````
