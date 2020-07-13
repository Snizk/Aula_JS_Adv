//Ao tentar multiplicar um numero por um undefined, o JS retorna um NAN(Not a number)
/* function multiply(a, b = a) {
    //Exemplo b = 1 ou b = a
    //Antigamente: Usava o operador logico Ou(||) - Exemplo b = b || 1 
    //Exemplo: b = typeof b === 'undefined' ? 1 : b
    return a * b
}
console.log(multiply(5)) */

//lazy evaluation

function randomNumber() {
    console.log('Generating a random number')
    return Math.random() * 10;
}

function multiply(a, b = a){
    return a + b
}
console.log(randomNumber())