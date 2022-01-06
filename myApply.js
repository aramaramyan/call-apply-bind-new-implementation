"use strict";

// Apply() implementation

Function.prototype.myApply = function(_context, _args) {
  let context;
  const args = (Array.isArray(_args) && _args.length) ? _args : [];
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

console.log(foo.myApply(person, ["Hello"])); // Hello Poghos