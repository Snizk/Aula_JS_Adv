//EventEmitter é algo exclusivo do Node

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        setTimeout(() => {
            this.emit('User Logged', data);
        }, 2000);
    }
}

const users = new Users()

users.on('User Logged', data => {
    console.log(data);//Loga todos.
});

/* users.once('User Logged', data => {
    console.log(data); //Loga apenas o 1º
}); */

users.userLogged({ user: 'Celso Henrique' });
users.userLogged({ user: 'Vicente Leonardo' });
