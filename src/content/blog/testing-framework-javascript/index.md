---
title: "Testing framework javaScript🛠️"
description: "Build simple testing framework in javascript."
date: "January 18 2024"
---

### Introduction

Hello everyone! It's been a while since I shared a blog post, and today we have an exciting topic to dive into: building our very own JavaScript testing framework or just some test functions inspired by Jest. This exercise will not only enhance your understanding of JavaScript but also give you insights into the mechanics of testing frameworks commonly used in the industry.

### **Getting Started**

Before we start, let's outline the basic functionalities our testing framework should have:

1. **Test Suite:** A container for organizing related test cases.
    
2. **Test Case:** A specific unit of code to be tested.
    
3. **Assertions:** Functions to check if the expected results and functions to match the actual results.
    

**Initiating the setup by configuring the three functions mentioned above.**

```javascript
function describe(testSuiteName, fn) {
    // Our test suite.
}
function test(testCaseName, fn) {
    // Test case for specific code.
}
function expect(actual) {
    // expected values and assertions.
}
```

Let's begin with the implementation of the `expect` function. We will create our own simplified version of the `expect` function inspired by Jest and explore how it works under the hood.

```javascript
function expect(actual) {
  const stringifiedActual = JSON.stringify(actual);
  const toExist = () => {
    if (actual == null) {
      throw Error("Expected value does not exist.");
    }
  };

  const toBe = (expected) => {
    let stringifiedExpected = JSON.stringify(expected);
    if (stringifiedActual !== stringifiedExpected) {
     throw Error(
     `Expected value is ${stringifiedActual}, but got ${stringifiedExpected}.`,
     );
    }
  };

  const toBeType = (expectedType) => {
    const currentType = typeof actual;
    if (expectedType !== currentType) {
      throw Error(`Expected type is ${expectedType}, but got ${currentType}.`);
    }
  };

  return {
    toBe,
    toExist,
    toBeType,
  };
}
```

Our `expect` function takes an `actual` value as an argument and begins by converting it to a string using `JSON.stringify`. This step enables a consistent comparison of values, especially useful when dealing with objects and complex data structures.

1. **toExist():** The `toExist` method checks if the `actual` value is null or undefined. If so, it throws an error with the message "Expected value not exist." This ensures that the value is present.
    
2. **toBe():** The `toBe` method compares the `stringifiedActual` value with a `stringifiedExpected` value. If they do not match, it throws an error with message. This functionality ensures precise comparisons between the expected and actual values.
    
3. **toBeType():** The `toBeType` method checks if the type of the `actual` value matches the `expectedType`. If not, it throws an error specifying the expected and received types are not equal.
    

Cool now lets move to our next two functions `describe` and `test` that provide a structured and expressive approach to writing and running tests.

### **The** `describe` Function

The `describe` function is designed to **cover** a group of tests, also referred as a test suite. Its primary purpose is to log the start a test suite and execute the provided test functions. Let's dive into its structure:

```javascript
function describe(testSuiteNmae, fn) {
  console.log(`Starting testSuite : ${testSuiteNmae}`);
  try {
    fn();
  } catch (err) {
    const { testCaseName, error } = err;
    console.error(
      `failed running ${testSuiteNmae} on test case ${testCaseName} with ${error}`,
    );
  }
}
```

### **The** `test` Function

The `test` function is responsible for executing individual test cases within a test suite. It logs the beginning of each test, executes the provided test function, and reports the test status. Let's explore its implementation:

```javascript
function test(testCaseName, fn) {
  console.log(`Starting test: ${testCaseName}`);
  try {
    fn();
    console.log(`Test ${testCaseName} passed.`);
  } catch (error) {
    throw { testCaseName, error };
  }
}
```

### **Bringing It All Together**

By combining these functions, you can create a structured and readable testing environment. Here's an example of how you might use them:

```javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

describe("Math Operations", () => {
  test("Adding two numbers", () => {
    expect(add(3,4)).toBe(7); // Test Adding two numbers passed.
   /** Starting testSuite : Math Operations
       Starting test: Adding two numbers
       Test Adding two numbers passed. **/
  });

  test("Subtracting two numbers", () => {
    expect(sub(4,2)).toBe(2); // Test Subtracting two numbers passed.
    expect(sub(7,2)).toBe(3);
   /** Starting test: Subtracting two numbers
       failed running Math Operations on test case Subtracting two 
       numbers with Error: Expected value is 5, but got 3.  **/
  });
});
```

And that's it, I hope you have liked this Interview question will bring more questions and small Web Implementations in future blogs.

### Happy coding and testing!🤓