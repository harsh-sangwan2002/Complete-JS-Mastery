# 📘 Lecture 05 - Deep Dive into Objects and Strings

Welcome to Lecture 05 of our JavaScript series!  
In this session, we explore **JavaScript Objects** and **Strings** in depth — covering both theory and hands-on examples to strengthen your understanding.

---

## 📌 Topics Covered

### 🔹 Objects in JavaScript

- What are Objects?
- Object Creation Methods
  - Object Literals
  - `Object.create()`
  - Constructor Functions
- Nested Objects
- Shallow vs Deep Copy
- Iterating over objects
- Common pitfalls with object references

### 🔹 Strings in JavaScript

- What are Strings and how are they stored?
- String Immutability
- String Manipulation Methods
  - `slice()`, `substring()`, `substr()`
  - `replace()`, `toUpperCase()`, `toLowerCase()`
  - `split()`, `join()`, `trim()`
- Template Literals and Interpolation
- Performance insights when concatenating strings

---

## 📂 Code Examples

### ✅ Deep Copy of an Object

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  let res = {};
  for (let key in obj) {
    res[key] = deepCopy(obj[key]);
  }

  return res;
}
```

### ✅ String Mutation Example

```js
let str = "Harsh";
for (let i = 0; i < 10; i++) {
  str += i;
}
console.log(str); // Harsh0123456789
```

---

## 📽️ Watch the Lecture

🔗 [Click here to watch the full video on YouTube](#)
_(Replace the link with your actual video URL)_

---

## 🧠 What You’ll Learn

By the end of this lecture, you'll be able to:

- Confidently work with deeply nested objects
- Understand and apply deep copy vs shallow copy
- Avoid common string performance pitfalls
- Master real-world string operations and formatting

---

## 💬 Connect With Me

If you have any questions or want to share your thoughts:

📧 Email: `your-email@example.com`
📸 Instagram / Twitter / LinkedIn: `@yourhandle`
💬 YouTube Comments: Always open to feedback and discussion!

---

## ⭐ Don't Forget

If you found the video helpful, please **Like**, **Share**, and **Subscribe** 🙏
Your support means a lot and keeps this series going!
