//1-Declarar Array participantes: Elena, Carlos, Javier, Laura, Miguel, Patricia
const participantes = ['Elena','Carlos','Javier','Laura', 'Miguel','Patricia']
//2-Muesta la clasificacion actual
participantes.forEach(participante=>{
    console.log(participante)
})
//3-Ajustes en las posiciones


//4-Laura supera a Javier
laura = participantes.indexOf('Laura')
console.log(`El indice de Laura es ${laura}`)
javier= participantes.indexOf('Javier')
console.log(`El indice de Javier es ${javier}`)
if(laura > -1 && javier > -1){
    [participantes[laura], participantes[javier]] = [participantes[javier], participantes[laura]]
}

//5-Patricia es descalificada
patricia = participantes.indexOf('Patricia')
console.log(patricia)
if(patricia > -1){
    participantes.splice(patricia)
}

//6-Se incorporan Raul y Sofia detras de Elena y antes de Carlos
carlos = participantes.indexOf('Carlos')
participantes.splice(carlos,0,'Raul','Sofia')
participantes.unshift('Carmen')
participantes.forEach(participante=>{
    console.log(participante)
})