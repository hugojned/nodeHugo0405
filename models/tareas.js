/**
 *  _listado:
 *      {  'uuid-XXXXXX-XXXXXX-X': { id:12, desc:'asd', fecha:05022003 }  },
 */

const Tarea = require('./tarea');

class Tareas {

    //Variable privada a modo de objeto
    _listado = {};

    get listadoArreglo(){

        const listado = [];

        //Regresa las llaves del arreglo
        Object.keys( this._listado ).forEach( key =>{
            const tarea = this._listado[key];
            listado.push( tarea );
        })

        return listado;

    }

    constructor(){
        this._listado = {};
    }


    cargarTareasDesdeArreglo( tareas = [] ){

        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log();
        this.listadoArreglo.forEach( (tarea, i) => {

            
            const idx = `${i + 1}`.green;

            //Desestructuración
            const { descripcion, fecha } = tarea;


            const estado = ( fecha ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;



            console.log(`${ idx } ${ descripcion } :: ${ estado }`);
            
        });
    }

}

module.exports = Tareas;