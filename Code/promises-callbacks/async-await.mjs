function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");

  await delay(2000); // Pause for 2 seconds

  console.log("After delay");
}

console.log("Before asyncFunction");
await asyncFunction();
console.log("After asyncFunction");
