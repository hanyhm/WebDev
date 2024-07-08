const fs = require("fs");

// Write a file
try {

    //fs.writeFileSync("./filename/file.txt", "Hello, This is the first file 30-6-2024");
    //console.log("File created successfully");
    
} catch (e) {
    console.log(e.message);
    
}


// read a file

try {

    const data = fs.readFileSync("./filename/file.txt", "utf-8");
    console.log("File read successfully", data);
    
} catch (e) {
    console.log(e.message);
    
}