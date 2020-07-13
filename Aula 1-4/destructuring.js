/* var arr = ['Apple', 'Banana', 'Orange']

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]

//Destructuring Assigment

var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange']

console.log(apple, apple2) */

//--------------------------------------------------------

var obj = {
    name: 'Celso'
}

var arr = ['Apple', 'Orange']

var name = obj.name

//Destructuring Assigment 

var { name } = obj
var [apple2] = arr

console.log(name)

//Destructuring Assigment  - Nested (Obj dentro de outro obj)

var obj2 = {
    name: 'Celso',
    props: {
        age: 26
    }
}
var age = obj2.props.age
var { props: {age: age2}
} = obj2

console.log(age)

//Destructuring de Array, multiniveis 

var obj3 = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var {
    props: { age: age2, favoriteColors: [color1, color2]}
} = obj3

console.log(color1)

//Pegar as propriedades dentro do array

var arr = [{name: 'Apple', type: 'fruit'}]

var fruit1 = arr[0].name

var [{ name: fruitname }] = arr
console.log(fruitname)

//Poderia utilizar o destructuring para definir variaveis. Como também uma lista de argumentos de uma função.

//Exemplo - Functions

/* function sum([a, b] = [0, 0]) {
    
    //Anteriormente
    //var a = arr[0]
    //var b = arr[1] 
    
    return a + b
}
console.log(sum([5, 5])) */

//Exemplo2 - Functions

function sum({ a, b}) {
    return a + b
}
console.log(sum({ a: 5, b: 5}))
