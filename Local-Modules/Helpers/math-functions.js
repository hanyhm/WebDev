function sum(...num){
    let sum =0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    return sum;
}

module.exports = { sum };

let X = 7;
console.log(X)
console.log("Math Function file print");

