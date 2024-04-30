require('colors')

//const{ mostrarMenu } = require('./helpers/mensajes')
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {
    
    //opción
    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log(opt);

        if( opt !== '0' ) await pausa();
    }
    while( opt !== '0' );

}

main();