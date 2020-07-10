//Rest e Spread Operator

//Anteriormente como era feito
/* function sum(a,b) {
    
    var value = 0;

    for (var i = 0; i < arguments.length; i++) { //(arguments)//variavel reservada para todos argumentos da função
        value += arguments[i];    
    }

    return value
}
console.log(sum(5,5,2,3)) */

//ECM6 - operadores para auxiliar - rest operador ... dentro da lista de argumentos

/* function sum(...args) {
    return args.reduce((acc,value) => acc + value, 0) //utilizado metodo Array - Reduce
    
}
console.log(sum(5,5,2,3)) */

//rest operador ... (ele pode pegar argumentos restantes, como por exemplo pegar alguns parametros. )

/* const sum = (a, b, ...rest) => {
    console.log(a, b, rest)
}
console.log(sum(5,5,2,3)) */

