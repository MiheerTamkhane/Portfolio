---
title: "Understanding Functions In Javascript."
description: "Understanding Functions and Scoping In Javascript."
date: "july 03 2022"
draft: false
---

## Introduction

Functions are a fundamental part of many programming languages, it is important to learn functions for a coder, without functions we cannot write simple, minimalistic, and reusable code. Functions are nothing but small programs which can run later. In javascript, functions are first-class citizens and essential because the language is more inclined towards the functional programming paradigm.

### Why functions are first-class citizens in js?

Functions act differently in javascript compared to other languages. We can do all the things with functions that we do with **Numbers**, **Strings**, **Objects**, and **Arrays**.

* We can store functions into variables.
    
* We can return a function from a function.
    
* We can pass functions as an argument.
    

## Defining functions

There are different ways to declare a function in javascript, we will be seeing \*\* Function Declaration \*\* with the legit `function` keyword. Let's see it below.

```plaintext
function newFunction(parameters...){
 // Your code here...
}
newFunction();
```

In the above code, you can see

* `newFunction()` is the name of the function.
    
* Within the parenthesis `()` we get the function parameters(acts like variables).
    
* after that, there are curly braces `{}` within them we write our specific, logical code.
    
* On the last line we are calling or invoking a function. Which states that whatever is inside the function will run when line no.4 will get executed.
    

Another way to declare a function is **Function Expression**.

```plaintext
const myName = function(name){
    let string = "I'm " + name;
}
newFunction("Ironman");
// I'm Ironman.
```

In this method

* We are declared a variable and assigned an anonymous function to it. Which looks cleaner.
    
* This time we have got a parameter `name` inside a function.
    
* Also while invoking we are passing string **Ironman** as an argument.
    

\*Note: A parameter is a variable that has access inside a function. It is Declaration time term. An argument is a value which passed to the function when it gets invoked. It is the invocation time term. \*

\*\*There is also a new Arrow function Expression but we will see that later. If you are still curious about them then this is a good read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow\_functions \*\*

## Callback Function

As we know, we can pass arguments to call the function like Numbers, Strings, or a combination of both. But we can also pass another function as an argument to the function and that passed function is known as a callback function, which will get executed after the given function completes its execution. Let's see an example

```plaintext
function callback(){
console.log("I'm Callback function");
}

function myFunction(string, callback){
console.log(string);
callback();
}

myFunction("calling...", callback);
// calling...
// I'm Callback function
```

**IMPORTANT: Look while I'm invoking the** `myFunction()` and giving `callback()` as an argument to it, I'm not giving parenthesis `()` to the callback function. If you do so the callback function will get executed first and then myFunction() will execute but also fire an error -&gt; Uncaught TypeError: callback is not a function

### Higher Order Functions

The function which takes functions as an argument or returns a function is known as a higher-order function.

## Scope with functions

**The scope is part of the program where we can access variables.** Javascript variables are lexically scoped, which means we can decide variable scope by where it is declared. \*\*Also the old `var` keyword variables are not lexically scoped. \*\*

### Types of scope in javascript

* Global scope
    
* Block scope
    
* Functional scope
    

**Global scope:** The variables declared outside of the *block* or a *function* are globally scoped variables and can access all over the program.

```plaintext
const name = "Batman"; // globally scoped 
if(true){
console.log(name); // Batman , also access here.
}
console.log(name); // Batman , also access here.
```

**Block scope:** Block scope is an area within the **if**, **switch**, and **for** loops. Basically, it is the code within the *curly braces* `{}`. The variables declared inside the block are only accessible within that block. In ES6 update new keywords **let** and **const** allows developers to write block-scoped variables.

```plaintext
function blockScope(){
let a = "functional scope"; // functional scope
if(true){
var z = "var keyword is not block scoped so this is accessible all over the functional scope"; // functional scope.
const b = "block scope"; // block scope
let c = "block scope"; //block scoped
console.log(a); // functional scope
}
console.log(a);  // functional scope
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Uncaught ReferenceError: b is not defined
console.log(z); // var keyword is not block scoped so this is accessible all over the functional scope
}
blockScope();
```

As we learn now that *let* and *const* variables are block scope and accessible only for the corresponding block, but in the above example the `a` variable is accessible inside the `if` block this is happened because of \*\*lexical scoping. \*\*

**Lexical scope means that the children's scope has access to the variables declared in the parent scope. The children's functions are lexically bound to the execution context of their parents.**

### Functional scope

As we know function also has its own scope. Whenever you declare a variable inside a function that variable is only accessible inside that function this work with all keywords including `var`.

```plaintext
function myName(){
var name = "Ironman"; // only accessible in this function
console.log(name); // Ironman
}
myName();
console.log(name); // Uncaught ReferenceError: name is not defined
```

### A function runtime scope

In javascript, every function creates its own execution context and also creates its own runtime scope at that time. It is important to know what things can be accessible by a function at that time.

* The function's arguments.
    
* Local variables are declared inside a function.
    
* Variables from its parent function scope.
    
* Global variables.
    

```plaintext
const global = "Global";
function one(){
let func1 = "one";
  function two(){
   let func2 = "two";
  console.log(global); // Global
  console.log(func1); // one
  console.log(func2); // two
  }
two();
}
one();
```

Let's see how the above code is working, After invoking function `one()` the execution context for that function is get created, and also the runtime scope is get created after that the variable `func1` is get memory allocation and assigned a value to it, After that the function `two()` will get executed and then again variable `func2` will get memory space and value assigned.

After that the main part, logging the values of variables in function `two()`, How the global variable gets access inside the function `two()`. When we are executing a function the Javascript engine will first try to find the variables in the **current scope**, if it's not present then it will jump to their **outer/parent scope** to find those variables, if still not found then again jump to its parent scope, until the **Global scope** and the variables are not in the global as well then fire an error **Uncaught ReferenceError: name is not defined**.

**It is important to know functions in javascript and how the scoping workers with functions. I hope this guide helps you and that you have learned the things which I mentioned.**

### Thanks for reading!

Happy Coding👨‍💻!