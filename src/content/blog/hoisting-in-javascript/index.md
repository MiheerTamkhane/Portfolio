---
title: "Hoisting/TDZ in Javascript✨"
description: "Understanding Hoisting and TDZ(Temporal Dead Zone) in Javscript."
date: "July 06 2022"
---

Hello folks! In this article, we will look at two very advanced and essential topics in javascript which are related to each other, **Hoisting and TDZ(Temporal Dead Zone)**. In the first half, we will see what is hoisting? How do things get hoisted in JS? And in the second half we will see what is TDZ? and the relation between hoisting and TDZ. So let's begin.

### What is Hoisting?

**Hoisting in javascript is a phenomenon where we get access to variables, functions, and also ES6 classes before they get declared and initialized with some value.**

![Hoisting](https://cdn.hashnode.com/res/hashnode/image/upload/v1657108153236/OeD7koNmw.jpeg)

What does it mean? First, we will see a simple example with normal flow and accessibility.

```plaintext
var country= "India";
function sayJayHind(){
  console.log("Jay Hind!");
}
console.log(country); // India
sayJayHind(); // Jay Hind!
```

In the above code, nothing seems magical. We know the interpreter will run code line by line and will `console.log` and execute the function.

Let's tweak this example a little bit,

```plaintext
console.log(country); // undefined
sayJayHind(); // Jay Hind!

var country = "India";
function sayJayHind(){
  console.log("Jay Hind!");
}
```

Now, in the above code, we are trying to access the variable and function before they get declared, in most languages, it will throw an error but in the case of javascript, this code will get executed without throwing an error. This is happening because of ***Hoisting*** in javascript.

Every time we write and execute our code the epic ***Global Execution Context*** is get created and we know it has two phases of execution the first one is ***the Memory Creation Phase*** and all this magic is happening over there only. In this phase, the JS engine just snaps our whole code and take out all declared variables and function and store it inside a memory. Why does the function `sayJayHind()` gets executed and the variable `country` get initialized with the value `undefined`?

### Function Hoisting

When functions get hoisted, it copies the whole code `{}` written inside it and stores it in the memory phase. If we `console.log(sayJayHind);` without invoking it we can see the output is the whole code.

```plaintext
console.log(sayJayHind);
console.log(country); // undefined
sayJayHind(); // Jay Hind!

var country = "India";
function sayJayHind(){
  console.log("Jay Hind!");
}
// OUTPUT 
/*
ƒ sayJayHind() {
  console.log("Jay Hind!");
}
undefined
Jay Hind
*/
```

### Variable Hoisting with `var`

Variable declared with the keyword `var` get hoisted and initialize with the special value `undefined`.

```plaintext
console.log(country); // returns undefined because var get hoisted
var country = "India";
console.log(country); // return India after initialized with that value.
```

If we try to access a variable that doesn't have any keyword it will throw a `ReferenceError`

```plaintext
console.log(state); // Uncaught ReferenceError: state is not defined
state = "Maharashtra"; // Initialization
/* If we console 'state' now and comment out
the first console it will return 'Maharashtra'.
*/
console.log(state); // Maharashtra
```

### `let` & `const` Hoisting

`let` and `const` keyword variables also get hoisted unlike `var`. When `var` get hoisted it assigns a value `undefined` to it but let and const don't get initialized with any default value. Also if we try to access them before they are declared it throws a `ReferenceError`.

```plaintext
console.log(dist); Uncaught ReferenceError: Cannot access 'dist' before initialization
console.log(village); Uncaught ReferenceError: Cannot access 'village' before initialization
let dist = "Nasik";
const village = "Dindori";
```

As we can see the above code results in `ReferenceError`. But how do we know that the variables are getting hoisted, in the case of `var` we know that the variables are hoisted and have a value `undefined`. In the case of `let` and `const` we are getting only an error. But if you read that error carefully it says `Cannot access 'dist' before initialization` when the JS engine throws this error it knows what variable we are trying to access and put it in that error also. That means the variable is hoisted.

### `class` Hoisting

Classes defined using an ES6 class declaration are get hoisted. They behave like let and const only if we try to access class before its declaration, it will throw and `ReferenceError`.

```plaintext
const mammel = new Animal ("dog", true); // Uncaught ReferenceError: Cannot access 'Animal' before initialization
class Animal {
   constructor(name, isPet) {
      this.name = name;
      this.isPet = isPet;
   }
}
```

### Function expressions

Function expressions like ***anonymous functions stored inside a variable***, ***arrow functions*** get hoisted like normal variables according to its keyword `let` & `const` or `var`.

Now let's jump into the second phase **TDZ(temporal dead zone).**

## TDZ (Temporal Dead Zone)

As of now, we saw what is hoisting and how it works. The TDZ is strongly related to hoisting, without hoisting there will be no such thing as TDZ.

![TDZ](https://cdn.hashnode.com/res/hashnode/image/upload/v1657107727686/Bl8ok4n4s.jpeg)

### What is TDZ?

**TDZ is the part of code where the variables are not accessible, they are in scope according to declaration but we can't access them.**

The variables with keywords `let` and `const` are in TDZ with their current scope before declaring and initializing them.

```plaintext
// this is TDZ for 'India' variable
// this is TDZ for 'India' variable
// this is TDZ for 'India' variable
const name = "India";

function learningTdz(){
// this is TDZ for 'x' variable
// this is TDZ for 'x' variable
// this is TDZ for 'x' variable
let x = 7;
console.log(x); // 7
}
```

You can see above that if I accessed the `x` variable earlier than its declaration, it would throw a ReferenceError. Because of the TDZ.

Remember variables with the `var` keyword don't exist in TDZ. `var` is just default initialized to `undefined` unlike the other declaration.

### Why does TDZ occurs and when?

TDZ occurs because of the ***Hoisting***. It's simple. programs, where we are accessing the variables with `let` and `const` before assigning a value, are not good, let's say you have declared a variable and didn't initialize it, and still accessing before initializing this is a very bad thing to do in programs.

Now when TDZ occurs, this happens in the first phase of *Execution context*. The ***Memory creation phase*** where hoisting takes place and assigns memory to the variable names only and initializes with `undefined`, and because of that we can also access these variables while in execution. After the update on ES6, we have new keywords for declaring variables `let` and `const` these keywords has restrictions to access them before their declaration, to help the developer to write good code and make debugging very easy.

### Uses of TDZ?

* It helps us to catch errors.
    
* Trying to access variables before their declaration is not a good way to write a code.
    
* Because of TDZ we write all variables first in our code and are very helpful while writing code.
    

That's it guys hope you learned something from this article, if so please react or comment.

### Thanks for reading!

Happy Coding👨‍💻!