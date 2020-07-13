// Symbols - maneira de identifcar o identificador unico

/* const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2) */ //comparação - Symbol


//Pode ser utilizado para gerar propriedades privadas ou seja que ela n
/* const obj = {
    [uniqueId] : 'Hello'
}

console.log(obj )*/

// Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag


/*
const arr = [1, 2, 3, 4]
const str = 'Digital Innovate One'
const it = arr[Symbol.iterator]() //interface para você consumir passo a passo uma lista ou estrutura de dados.

while (true) {
    let { value, done} = it.next();
     
    if (done) {
        break
    }
}
console.log(value)//valores e uma propriedade do array */

//Ecma 6
/* for (let value of arr){
    console.log(value)
}

for (let value of str){
    console.log(value)
}
 */

 //Function Iteradora no Object

const arr = [1, 2, 3, 4]

console.log(arr[Symbol.iterator]().next())

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i],
                    done: i > this.values.length
                }
            }
        }
    }
}

for (let value of obj){
    console.log(value)
}
