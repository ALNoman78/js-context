const tellJoke = () => {
    console.log('Why do not scientists trust atoms? Because they make up everything!');
} 

setInterval(() =>{
    console.log(tellJoke);
} , 2000)