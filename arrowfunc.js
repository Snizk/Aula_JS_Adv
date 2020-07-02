// Arrow Function ( => )


//Soma de 2 valores 
/* var sum = (a, b) => {
    return a + b
}
console.log(sum(5, 15)) */

//Or
//var sum = (a,b) => {a + b}
//console.log(sum(5, 15))



//
/* var createObj = () => ({ teste: 123})
console.log(createObj())
 */
//Function Construtora

/* function Car() {
    this.foo = 'bar'
}

console.log(new Car()) */


//Exemplo - Como era feito

var obj = {
    showContext: function showContent(){
        this.log('teste'),
        setTimeout(() =>{

        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}
console.log(obj.showContext())

