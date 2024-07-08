const crypto = require("node:crypto");

// hashing cannot be de-hashed
const start = Date.now();
crypto.pbkdf2Sync("mypass", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("mypass", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("mypass", "salt", 100000, 512, "sha512");
const end = Date.now() - start;
console.log(`Hashing took ${end}ms`);
