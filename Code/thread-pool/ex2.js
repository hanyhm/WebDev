const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 8;
const ITERATIONS = 8;

const start = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  crypto.pbkdf2("mypass", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i} done in ${Date.now() - start}ms`);
  });
}
