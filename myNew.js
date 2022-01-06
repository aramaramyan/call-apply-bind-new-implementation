"use strict";

// new implementation

const NEW = function(func, ...args) {
  const newObj = Object.create(func.prototype);
  const result = func.call(newObj, ...args);

  return (typeof result === 'object') ? result : newObj;
};

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.sayHi = function() {
    return `Hi! I am ${this.name } ${this.surname}, and I am ${this.age} years old.`;
  }
}

const person1 = NEW(Person, "Aram", "Aramyan", 24);
console.log(person1.sayHi()); // Hi! I am Aram Aramyan, and I am 24 years old.