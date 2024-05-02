const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const menuOp = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            }

        ]
    }
]


const inquirerMenu = async() => {

    console.clear();
    console.log('================================\n'.america);
    console.log('     Seleccione una opción\n'.magenta);
    console.log('================================\n'.america);

    //Desestructuración de la opción en objeto
    const { opcion } = await inquirer.prompt(menuOp);

    //Retorna el valor de la opción
    return opcion;

}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.cyan } para continuar...\n`
        }
    ];

    console.log('\n\n');

    //Espera el dato de la variable 'question'
    await inquirer.prompt(question);
    
}


const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ){
                    return '¡¡¡Ingrese un valor por favor!!!'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}