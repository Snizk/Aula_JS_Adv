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
//Contesto de invocação - 
/* var obj = {
    showContext: function showContent(){
        //Or var _that = this;
        
        this.log('teste'),
        setTimeout(() =>{
            //Or _that.log('After 1000ms')
            this.log('After 1000ms')
        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}
console.log(obj.showContext()) */

//arrow function

/* var obj = {
    showContext: function showContext() {
        //this = obj

        setTimeout(() => {
            this.log('After 1000ms');
        }, 1000)
    },
    log: function log(value) {
        console.log(value)
    }
}
obj.showContext() */
