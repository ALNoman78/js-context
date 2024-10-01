function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    c()
    console.log('bb');
}
function c(){
    console.log('c');
    console.log('çc');
}
function x(){
    console.log('x');
    y()
    console.log('xx');
}
function y(){
    console.log('y');
    z()
    console.log('yy');
}
function z (){
    console.log('z');
    console.log('zz');
}

setTimeout(() => {
    console.log('This is setTime out method in js');
}, 2000)

const loader = async() => {
    const req = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    const data = await req.json()
    console.log(data);
}
loader()
a()
x()