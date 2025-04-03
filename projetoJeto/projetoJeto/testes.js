
/*
for(let i=0; i<10; i++) {
console.log("oi vida " +i);
}


let idade = 20; //numero
//let idade = "20" é string

console.log("idade " ,idade); // virgula serve para destacar o valor, e o + serve para nada
*/

/*

function fazAlgo(valor){
    console.log("oia o numero ai", valor);    
    console.log("Estou brincando");
    return valor+1
}

console.log(fazAlgo);


let outro = fazAlgo;


let x = fazAlgo(5);

let y = outro(8);


console.log("x" , x);
console.log("y" , y);
*/


let contador = 1;

let id = setInterval(function () { // o primeiro paramentro é uma funcao e o segundo é o tempo que deve-se chamar ela
    contador++
    console.log(contador);
}, 50)

setTimeout(() => {
    clearInterval(id);
}, 10000)


function parar() {
    clearInterval(id);
}


//setTimeout(parar,4000);
//console.log("Algo");
//console.log("outro");

//clearInterval(id);

//export exporta de outro lugar