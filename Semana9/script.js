let colorActivo = false;
let bordeActivo = false;
const boxes = document.getElementsByClassName('box');

function cambiarColor(){
    colorActivo = !colorActivo;
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = colorActivo ? 'rgb(8, 128, 176)' : 'white';
        
    });
}

 function redondear(){
    bordeActivo = !bordeActivo;
    Array.from(boxes).forEach(box=>{
        box.style.borderRadius = bordeActivo ? '10px' :'0px';
    })

 }

 function agregarCaja(){
    const NuevaCaja = document.createElement('div');
    NuevaCaja.className= 'box';
    const boxes = document.getElementById('boxes')
    boxes.appendChild(NuevaCaja);
 }