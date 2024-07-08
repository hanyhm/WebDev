function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");

  await delay(2000); // Pause for 2 seconds
  //   delay(2000); // don't pause for 2 seconds without await

  console.log("After delay");
}

console.log("Before asyncFunction");
asyncFunction();
console.log("After asyncFunction");
