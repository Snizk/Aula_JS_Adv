
//Exemplo 1 - const e let não podem ser utilizadores antes da sua inicialização

//Melhor maneira - usar try e catch

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Celso W';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError
}   catch(err){
    if (err.data.type === 'Server error'){
    } else {
    }
}   finally {
    console.log('Keep going...');
}
