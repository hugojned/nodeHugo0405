const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        
        console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('==========================\n'.green);

        //Lista de tareas
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        //#region Interfaz de consola del usuario
        const readline = require('readline').createInterface({

            //Pausa la ejecución de la aplicación para recibir un valor
            input: process.stdin,

            //Muestra el mensaje en consola luego de recibir la información del usuario
            output: process.stdout
        });

        //
        readline.question('Seleccione una opción: ', (opt) => {
            //Impresión de la opción
            //console.log(opt)
            readline.close();
            resolve(opt);
        })
        //#endregion

    })
    
}


const pausa = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}