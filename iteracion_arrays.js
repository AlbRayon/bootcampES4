const biblioteca = [
    {autor:'Bill Gates',
     titulo: 'The Road Ahead',
     estadoLectura:'true'},

    {autor:'Steve Jobs',
     titulo: 'Walter Isaacson',
     estadoLectura:'true'},

    {autor:'Suzanne Collins',
     titulo: 'Mockingjay: The Final Book of The Hunger Games',
     estadoLectura:'false'},
    ]

console.log(biblioteca)

biblioteca.forEach(libro=>{
    let estado = libro.estadoLectura
    if(estado){
        lecturaActiva = "si"
    }else{
        lecturaActiva = "no"
    }
    console.log(`El nombre del libro es ${libro.titulo} y su autor es ${libro.autor} y actualmente ${lecturaActiva} se esta leyendo`)
})