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

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;