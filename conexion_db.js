const mysql = require('mysql2');
const fs = require('fs')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '_GrupoNieto01_',
    database: 'inventario_db'
});


conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

conexion.query('SELECT * FROM producto', (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Resultados de la consulta:', results);
    const data = JSON.stringify(results, null, 2);
    fs.writeFileSync('resultados.txt',data,'utf-8')
});

conexion.end();