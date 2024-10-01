// console.log('maisa monoara moule');a

// good practice 

// const myLoader = async() => {
//     // const req = await fetch('')
//     // const data = await req.json()
//     // console.log(data);
// }


// optional structure of promise 

const load = () =>{
    return new Promise ((resolve , reject ) => {
        const success = Math.random();
        if(success < 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
load()
.then(data => console.log('resolved data' , data))
.catch(error => console.log('Rejected data', error))