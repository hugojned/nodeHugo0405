/**
 *  _listado:
 *      {  'uuid-XXXXXX-XXXXXX-X': { id:12, desc:'asd', fecha:05022003 }  },
 */

const Tarea = require('./tarea');
require('colors');

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


    listarPendientesCompletadas( completadas = true ){
        console.log();

        let cont = 0;
        
        this.listadoArreglo.forEach( tarea => {

            //Desestructuración
            const { descripcion, fecha } = tarea;

            const estado = ( fecha ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;


            if ( completadas ){
                //Mostrar completadas
                if ( fecha ) {
                    cont += 1;
                    console.log(`${ ( cont + '.' ).green } ${ descripcion } :: ${ ( fecha + '' ).green  } `);
                }

            } else {
                //Mostrar pendientes
                if ( !fecha ) {
                    cont += 1;
                    console.log(`${ ( cont + '.' ).green } ${ descripcion } :: ${ estado }`);
                }
            }
            
        });
    }

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            let tarea = this._listado[id];
            if ( !tarea.fecha ) {
                tarea.fecha = new Date().toISOString()
            }

        });

        this.listadoArreglo.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].fecha = null;
            }

        });
    }

}

module.exports = Tareas;