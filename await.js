// using fetch

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('there is and error', error))
}
// using async function
async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    console.log(data);
}
// using async + arrow function
const loadUserArrow = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json()
    console.log(data);
}

//  using async + arrow + try and catch

const loadUserTry = async () => {
    try{
        const req = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await req.json()
        console.log(data);
    }
    catch(error){
        console.log('ERROR FOUND !', error);
    }
}