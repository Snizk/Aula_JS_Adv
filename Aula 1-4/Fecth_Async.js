//Fecth - Fazer requisições utilizando promise

/* fetch('/data.json')

    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();    
        } else {
            throw new Error ('Request error');
        }
    })

    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    }); */


    //ES7 - Async : Criar promises de forma mais simples.
    //      Await : Espera que outras promises sejam resolvidas. Processamento assincrono sequencial.

    const asyncTimer = () => new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(12345)
        }, 1000);
    }); 

    const simpleFunc = async () => { //transformou uma function em promise
        const data = await asyncTimer()
        console.log(data);
        const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
        return dataJSON;
    };
    simpleFunc().then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });