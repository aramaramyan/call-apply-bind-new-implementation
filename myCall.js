"use strict";

// Call() implementation

Function.prototype.myCall = function(_context, ...args) {
  let context;
  const uniqueID = Date.now().toString();

  if(typeof(_context) === "function" || (typeof(_context) === "object" && !!_context)) {
    context = _context;
  } else {
    context = {};
  }

  context[uniqueID] = this;

  const result = context[uniqueID](...args);

  delete context[uniqueID];

  return result;
}

function foo(text) {
  return `${text} ${this.name}`;
}

const person = {
  name: "Poghos"
};

console.log(foo.myCall(person, "Hello")); // Hello Poghos