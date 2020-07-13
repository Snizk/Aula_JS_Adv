//Generators - são funções com pausa e elas despausam atraves da interface
//Utilizar a palavra reservada ( * )

/* function* hello() {
    console.log('Hello');
    yield 1; //ele executa até aqui e pausa
    console.log('From');
    yield 2; //ele executa até aqui e pausa
    console.log('Function');
    yield 3; //ele executa até aqui e pausa
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

//2º Exemplo

/* function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next()); */


const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[1];
        } 
    }
};

for (let value of obj){
    console.log(value)
}