//FileSystem
const fs = require('fs');
const archivo = './database/data.json';

//Guardar datos
const saveDB = ( data ) => {

    //ruta, salida en JSON para pasarlo a string
    fs.writeFileSync( archivo, JSON.stringify(data) );

    
}

//Leer datos
const readDB = () => {
    if( !fs.existsSync(archivo) ){
        return null;
    }

    //lee los datos del JSON
    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );

    //String a Array
    const data = JSON.parse( info );

    //console.log(data);

    return data;
}

module.exports = {
    saveDB,
    readDB
}