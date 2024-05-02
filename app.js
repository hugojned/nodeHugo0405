require('colors');



const Tareas = require('./models/tareas');
//const Tarea = require('./models/tarea');

const { inquirerMenu,
        pausa,
        leerInput } = require('./helpers/inquirer');


console.clear();

const main = async() => {

    //#region 
        //Usado en mensajes.js (do while)
        //if ( opt !== '0' ) await pausa();

        //console.log({opt});

        //Objeto
        //tareas._listado[tarea.id] = tarea;
        //console.log(tareas);
    //#endregion

    //opcion del menú
    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();


        switch ( opt ) {

            case '1':
                //crear tarea
                const desc = await leerInput('Descripción de la tarea: ');
                tareas.crearTarea( desc );
            break;

            case '2':
                console.log(tareas.listadoArreglo);
            break;
        }

        await pausa();
        
    }
    while( opt !== '0' );

    
}

main();