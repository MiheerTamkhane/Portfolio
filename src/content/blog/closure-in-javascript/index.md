---
title: "Closures in Javascript🔥"
description: "Understanding Closures in Javascript."
date: "July 04 2022"
---

Bonjour everyone, I hope you are doing well. In this article, I'm going to write on the very important and one of the most complicated topics of javascript which is ***Closures***. But before we start it's important to you have knowledge of functions and scoping in javascript, which can you read [here](../blog/understanding-functions-in-js/)

## What is Closure?

**A closure is a combination of function and its lexical environment, which is basically the scope or scope chain of the function and what variables that function has access to.**

Scope/scope chain and closures are very related to each other and you have to know scope before learning closures. When we create a function each function has its own scope and every function we declare has its own closure as well.

Let's see an example of closure below :

```plaintext
function parent(){
  let a = "parent variable";
    return function(){
    console.log(a); 
  }
}
const children = parent();
console.log(children);
children();
// function(){
//   console.log(a); 
//  }
// parent variable
```

Now before explaining how the above code is working, let's revise how the javascript function gets executed.

As we know when we declare a function in javascript and invoke it creates its own execution context in the call stack, the code inside that will get executed and that function also has access to a few things like parents variables and parameters etc. But when we complete its execution and returned some value from it, that whole function got vanished completely and popped out from the call stack.

Now look at the above code we have written its works differently when we are invoking the function `parent()` and returning a new function and storing it inside a `children` variable. after that the `parent()` function will get fully vanished from the code, but if we call our `children()` function we still get access to variable `a` from its parent scope while there is no parent function left. That magic happening because of ***closures***. This basically means we get access to outer function or parent function variables meanwhile there is no function left. If we try to access variable `a` it will give `undefined`.

```plaintext
parent.a // will give undefined
```

Closures make a function more powerful because we still persist the parent or parent's parent variables and parameters in the innermost function.

### Creation of closure

Every time we create a function the closure for that function gets created, and the scope chain also gets created. But the power of closures is only seen when we create a function that returns another function or has nested functions in it.

**Free variables** are the variables that are not declared inside a given function, but used inside that function, they can be parameters of the parent function also.*All global variables are free variables but not all free variables are global*.

```plaintext
const x = 700; // free variable, access to all functions, and block withing code.
function outer(){
let y = 800; // free variable
    return function(){
      console.log(x + y); // 1500
    }
}
const inner = outer();
inner();
// 1500
```

NOTE: We only get a reference to those free variables and not values if while execution somewhere in between `outer()` or `inner()` functions we overwrite the global variable, then we will get that new overwritten value.

### Garbage Collection

In javascript, memory is get managed by garbage collection by the javascript engine. When data is no longer reachable and there is no use of that data in any function or calculation within our code javascript engine discovers it and cleans it up.

**let's look at Garbage collection in the context of closures**

```plaintext
function expandArray(){
    let myArray = [7,7,7];
    return function(){
        myArray.push(7)
        return myArray;
    }
}
const result = expandArray();
result();
result();
result();
// [7, 7, 7, 7, 7, 7]
```

As we can see in the above example, the `myArray` variable in the parent function is accessible in the children function those variables are in closure and retain in memory. We are still accessing it and manipulating the `myArray` variable and did not get garbage collected. That is the one big disadvantage of closure for memory leak because the closed variables under the closure may not use in the future but still get retained and not get garbage collected.

### Uses of closures

* Module design pattern
    
* Currying
    
* Function which executes only once
    
* Memoize
    
* Maintaining state in the async world
    
* setTimeouts
    
* Iterators etc.
    

That's it guys hope you learned something from this article, if you so please react or comment.

### Thanks for reading!

Happy Coding👨‍💻!