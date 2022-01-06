"use strict";

// Bind() implementation

Function.prototype.myBind = function(_context, ...args) {
  return (...rest) => {
    let context;
    const uniqueID = Date.now().toString();

    if(typeof(_context) === "function" || (typeof(_context) === "object" && !!_context)) {
      context = _context;
    } else {
      context = {};
    }

    context[uniqueID] = this;

    const result = context[uniqueID](...args.concat(rest));

    delete context[uniqueID];

    return result;
    }
}

function foo(text) {
  return `${text} ${this.name}`;
}

const person = {
  name: "Poghos"
};

const baz = foo.myBind(person, "Hello");
console.log(baz());