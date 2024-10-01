console.log("maisa monoara moule");
console.log(1);
console.log(2);
// setTimeOut()

// setTimeout(() => {
//     console.log(3);
// }, 3000);
console.log(4);
console.log(5);
console.log(6);

// setInterval

let number = 0;
const intervalId = setInterval(() => {
    number++;
    if(number > 10){
        clearInterval(intervalId)
    }
    console.log(intervalId ,number);
} , 2000)