setTimeout(() => {
  console.log("setTimeout inside I/O callback");
}, 0);

setImmediate(() => {
  console.log("setImmediate inside I/O callback");
});
