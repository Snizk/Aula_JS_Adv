// spread operator ... ele pega todos os parâmetros de uma função e transforma em array
const multiply = (...args) => args.reduce((acc,value) => acc * value, 1)
  
const sum = (...rest) => {
    return multiply(...rest) // aplicação do spread operator
}
console.log(sum(5,5,5,2,3))

//spread operator não se limita a lista, mas strings, arrays. objects e objetos iteraveis
