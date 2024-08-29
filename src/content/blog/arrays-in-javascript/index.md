---
title: "Arrays in Javascript"
description: "Things about Javascript Array data structure."
date: "June 17 2022"
---

Hello folks!, I'm Miheer this is a simple guide for **\["Arrays", "in", "javascript"\]**.  
As of now, you are reading this article, which means you have knowledge of basic datatypes in javascript. Like **Primitive and Non-primitive**. Primitive datatypes such as Number, Boolean, Strings, Undefined, Null, BigInt, Symbol. and Non-primitive such as Arrays & Objects. Don't worry about objects right now we will look later on them.

So, the question is why do we need arrays? after all, we have seven different datatypes.

* Arrays can store a list of different datatypes.
    
* Arrays handle a large amount of data under a single variable.
    
* We can access all values in an array by a single variable name and manipulate it.
    

Now, we know why arrays are so important in a programming language ( Javascript ).

What is an array?  
An array is a Data Structure or we can say a container that holds values of single data types as well as multiple data types.

![hip hip array](https://cdn.hashnode.com/res/hashnode/image/upload/v1655029328512/BWLuQM8eh.png)

**Let's start with the Arrays** :

### Declaration

**1\. Using bracket notation** : To create an array you can simply add a `const` and set is equal to `[]` brackets. Which will create an empty array.

```javascript
const array = [];
// you can add a values in it like 
const numArray = [1, 3, 5, 7];
// try 
console.log(numArray);
// output : [1, 3, 5, 7]
```

**2\. Using Object constructor**: To create an array using the object constructor add `const` and set a value to `new Array()`. It will create an empty array.

```javascript
const arr = new Array();
// will create empty array, Check using console.log();
```

Now if we add values in-between () like so `Array(1,2,3)`.

```javascript
const arr = new Array(1, 2, 3);
// will get, [1, 2, 3]
```

If we give a single value to a `Array(7)`. It will create an empty array of `length` 7.

```javascript
const arr = new Array(7);
// [ <7 empty items> ]
// we can fill the items using fill();
const arr = new Array(7).fill(1);
// output : [1, 1, 1, 1, 1, 1, 1]
```

There is a most important and useful property `.length`. which gives the length of an array or how many elements are stored inside of an array. We can also set the length of an array using this property `arr.length = 10`, but I don't recommend doing that.

```javascript
// we can access it using .length
console.log(arr.length);
// 7
```

**How we can get and set the array values** : We can get the values using `[]` around our variable like `arr[index]`, and also set using same `arr[index] = newValue`.

```plaintext
const arr = [1, 2, 3, 4];
console.log(arr[1]);
// output : 2, Because at index 1 the value in array is 2.
arr[0] = 7;
console.log(arr);
// output : [7, 2, 3, 4];
```

**The most important thing to remember the index of an array starts from 0.**

![yo so dump](https://cdn.hashnode.com/res/hashnode/image/upload/v1655032068954/PmoEkeUly.png)

## Array methods

Now, we will look into array methods which can be very helpful while working with arrays.

A **List** of numbers or strings is the best example of an array. array provides methods for adding/removing items from it. We have these first four methods to work with an array, there are a lot more and important as well but these are the basic ones. Which are `push(), pop(), shift() & unshift()`. We will look into them one by one.

**IMPORTANT: This methods manipulate the original array only and do not return a new one.**

The first one is the `push(...items)` method. **Which adds a new item to the end of an array.**

```plaintext
const arr = ["first","second","third"];
arr.push("fourth");
console.log(arr);
// output : ["first", "second", "third", "fourth"]
```

The next one is `pop()` which remove item from the end.

```plaintext
const arr = ["first","second","third"];
arr.pop();
console.log(arr);
// output : ["first", "second"]
```

Similar to this two we have `shift() & unshift(..items)`. Which does the same thing but from the beginning.

```plaintext
const arr = ["first","second","third"];
arr.unshift("fourth");
console.log(arr);
// output : ["fourth", "first", "second", "third"]

const arr = ["fourth", "first", "second", "third"];
arr.shift();
console.log(arr);
// output : ["first", "second", "third"]
```

Okay, that's it for this post there are more array methods, we will look at them in the next part of this blogpost. Hope you learned something from this post. Thank you.

***Always pass on what you have learned - Yoda.***