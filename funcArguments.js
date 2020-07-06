


//Ao tentar multiplicar um numero por um undefined, o JS retorna um NAN(Not a number)
function multiply(a, b) {
    //Antigamente: Usava o operador logico Ou(||) - Exemplo b = b || 1 
    return a * b
}
console.log(multiply(5))