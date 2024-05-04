require('colors');

const Tareas = require('./models/tareas');
//const Tarea = require('./models/tarea');

const { saveDB, readDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist } = require('./helpers/inquirer');


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

    //Constante de objeto de tareas
    const tareas = new Tareas();

    const tareasDB = readDB();

    if( tareasDB ) {
        //Cargar las tareas
        tareas.cargarTareasDesdeArreglo( tareasDB );
    }

    do{
        opt = await inquirerMenu();


        switch ( opt ) {

            case '1':
                //crear tarea
                const desc = await leerInput('Descripción de la tarea: ');
                tareas.crearTarea( desc );
            break;

            case '2':
                //console.log(tareas.listadoArreglo);
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArreglo );
                tareas.toggleCompletadas( ids );
            break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArreglo );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }

            break;

        }

        saveDB(tareas.listadoArreglo);

        await pausa();
        
    }while( opt !== '0' );

    
}

main();