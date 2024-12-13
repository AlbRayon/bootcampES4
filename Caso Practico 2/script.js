$(document).ready(function () {
    $('#display').val(0)

});

let acumulador='';
let acumuladorNumero=0;
let tipoDeOperacion= ''; // 1 = suma 2 resta 
function ingresoValor(numero){
    if(numero == '='){
        $('#display').val(eval(acumulador))
        acumulador=eval(acumulador)
        return
    }
    acumulador += ''+numero
    $('#display').val(acumulador)
}
function limpiar(){
    $('#display').val(0)
    acumulador=''
}