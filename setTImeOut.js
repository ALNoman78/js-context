console.log(1)
console.log(2)
// console.log(3)
// add()
// setTimeout(add , 5000)
// setTimeout(() => {
//     console.log('using set time out method');
// }, 5000)
// console.log(4)
// console.log(5)
// console.log(6)

// fetch('')

const time = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data);
}
time()

// function called by add
function add(){
    console.log(3);
}


// set interval function

let number = 0;
const intervalId = setInterval(() => {
    number++;
    if(number > 5){
        clearInterval(intervalId)
    }
    console.log( intervalId ,number);
}, 2000)