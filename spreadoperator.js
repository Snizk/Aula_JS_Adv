// spread operator ... ele pega todos os parâmetros de uma função e transforma em array
/* const multiply = (...args) => args.reduce((acc,value) => acc * value, 1)
  
const sum = (...rest) => {
    return multiply(...rest) // aplicação do spread operator
}
console.log(sum(5,5,5,2,3)) */

//spread operator não se limita a lista, mas strings, arrays. objects e objetos iteraveis

const str = 'Digital Innovation One'


function logArgs(...args) { //Ex: LogArgs por convenção só deve utilizar letra maiscula em function Construtora.
    console.log(args);
    //Or
    console.log(arguments)
}
logArgs(...str)//Ele quebrou o String em caracteres.


const arr = [1,2,3,4]

function LogArgs1(a, b, c) {
    console.log(a,b,c)
}

LogArgs1(...arr)//Cada item do array vai virar uma função.