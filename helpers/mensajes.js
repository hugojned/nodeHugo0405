const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('================================\n'.america);
        console.log('     Seleccione una opción\n'.magenta);
        console.log('================================\n'.america);

        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completadas`);
        console.log(`${ '4.'.green } Listar tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        //Para recibir y mostrar información al usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //muestra la información al usuario
        readline.question('Elija una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })

}


const pausa = () => {
    return new Promise( resolve => {
        //Para recibir y mostrar información al usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //muestra la información al usuario
        readline.question(`Presione ${ 'ENTER'.cyan } para continuar...\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
    
}


module.exports = {
    mostrarMenu,
    pausa
}