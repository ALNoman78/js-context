function delayedGreetings(name , delayTime) {
    setTimeout((delayedGreetings) => {
        console.log(`Hello ${name}`);
    }, delayTime)
}

delayedGreetings("Bonba", 3000);


const x = (name , delayTime) => {
    setTimeout((x) => {
        console.log(`Hello ${name}`);
    }, delayTime)
}
x("Maisa Monoara Moule", 1000);