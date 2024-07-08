// Declare array of foods
const fs = require("fs");
let Food = [{name:"Burger", value:0},
     {name:"Fool", value:10}, 
     {name:"Koshri", value:30},
      {name:"Kofta", value:40},
       {name:"Pasta", value:80}]

// arrange function
function arrange(Food){
    Food.sort((a,b) => b.value -a.value)
    return Food
}

// Write a file

try {
    fs.writeFileSync("Food.txt", JSON.stringify(arrange(Food)));
    console.log("File created successfully");
    
} catch (error) {
    console.log(error);
    
}
