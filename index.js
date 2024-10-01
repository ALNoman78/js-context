const z = {
    a : 1,
    b: 2,
}

const x = JSON.stringify(z)
console.log(x);

const y = JSON.parse(x)
console.log(y);