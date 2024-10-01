// a = global context excitation
let a = 4;
// function is function context excitation
function add(num1, num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(3,5)
console.log(sum);