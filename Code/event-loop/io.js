const fs = require("fs");

console.log("Start");

fs.readFile(__filename, () => {
  console.log("I/O callback");

  setTimeout(() => {
    console.log("setTimeout inside I/O callback");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate inside I/O callback");
  });

  process.nextTick(() => {
    console.log("process.nextTick inside I/O callback");
  });
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("End");

// start -> end -> nextTick -> setTimeout -> I/O -> setImmediate
