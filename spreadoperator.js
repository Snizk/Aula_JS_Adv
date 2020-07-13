// spread operator ... ele pega todos os parâmetros de uma função e transforma em array
/* const multiply = (...args) => args.reduce((acc,value) => acc * value, 1)
  
const sum = (...rest) => {
    return multiply(...rest) // aplicação do spread operator
}
console.log(sum(5,5,5,2,3)) */

//spread operator não se limita a lista, mas strings, arrays. objects e objetos iteraveis

/* const str = 'Digital Innovation One'


function logArgs(...args) { //Ex: LogArgs por convenção só deve utilizar letra maiscula em function Construtora.
    console.log(args);
    //Or
    console.log(arguments)
}
logArgs(...str)//Ele quebrou o String em caracteres. */


/* const arr = [1,2,3,4]

function LogArgs1(a, b, c) {
    console.log(a,b,c)
}

LogArgs1(...arr)//Cada item do array vai virar uma função. */

//Anteriormente usava concat para combinar 2 arrays
/* const arr2 = arr.concat([5,6,7]) */

//Or - spread
/* const arr2 = [...arr, 5, 6, 7]

console.log(arr2) */

//Or
/* const arr3 = [...arr2, ...arr, 0, 0, 0]
console.log(arr3) */

//spreadoperador - objetos literais(Lembrando que é so para construir novos objetos)
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj2 = {
    ...obj,
    test2: 'hello'
}
console.log(obj2)

//O objeto não é interavel. Não é possivel usar
/* 
const arr = [...obj]
console.log(arr) */

const objMerged = {
    ...obj,
    ...obj2
}

console.log(objMerged)

//Gerar clone do objeto = Shallow Clone

const obj3 = { ...obj}

//or - sub obj
const obj4 = { ...obj, subObj1: { ...obj.subObj1}}

obj3.subObj.test = 456
console.log(obj3)

