//Executar após uma tarefa assincrona ter sido realizada.


//Callbacks

/* function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

//Executar de maneira sequêncial

function doAll() {
    try {
        doSomething(function(data) {
            var processdData = data.split('');
        try {      
        doOtherThing(function(data2) {
            var processdData2 = data2.split('');

            try {
            setTimeout(function() {
                console.log(processdData, processdData2)
            }, 1000);
            }  catch(err){
                //handle error
            }  

            });
            } catch(err) {
                // handle error
            }   
        });
    } catch(err) {
        // handle error
    }
}
doAll(); */


//Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //did other something
        resolve('Second Data');
    }, 1000);
});

//Promise ela pode ter 3 estados: pending(exec.), fulfiled(termino de ex.), rejected

 //Execução Sequencial
/* doSomethingPromise()
    .then(data => {
        console. log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)); */

//Execução Paralela
/* Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
}); */

//Promise que for resolvida primeiro

/* Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data)
});  */