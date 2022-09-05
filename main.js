// import { $enviar1, $input, $minutos, $perrafo, $iniciar, $tarea, $minuto, $segundo, $detener} 
// from "/selectores.js";
 const $minutos = document.querySelector(".minutero");
 const $input = document.getElementById("input");
 const $enviar1 = document.getElementById("enviar");
 const $perrafo = document.querySelector(".parrafo");
 const $iniciar = document.querySelector(".botoninicio");
 const $detener = document.querySelector(".botondetener");
 const $tarea = document.querySelector(".tareacontador");
 const $minuto = document.querySelector(".minutos");
 const $segundo= document.querySelector(".segundos");




$enviar1.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    if(input == ""){
       $tarea.innerHTML = "<b>DEBES INDICAR UNA TAREA</b>"
    } else{
    let valor = document.getElementById("input").value;
    $perrafo.innerHTML = `Siguiente tarea : ${valor}`;
    $iniciar.disabled = false
    } 
})
 

$iniciar.addEventListener("click", () => {

    let input = document.getElementById("input").value;
    let valor = document.querySelector(".parrafo").innerHTML;
    
    let minutos = 1000 * 60 * 25;
    let minutosfaltantes = Date.now() + minutos;


    if($perrafo.innerHTML !== ""){
        $tarea.innerHTML = input;
        $enviar1.disabled = true;
            const intervalo = setInterval(() => {
        let hora = Date.now()
        let final = minutosfaltantes - hora;
        let minutos = Math.floor(final / (1000 * 60));
        let resto = final % (1000 * 60)
        let segundos = Math.floor(resto / 1000);
        if(minutos === 0 && segundos === 0){
            clearInterval(intervalo)
            let minutosfaltantes = Date.now() + (1000 * 60 * 5);
            const intervaloDescanso = setInterval(()=>{
                let hora = Date.now();
                let final = minutosfaltantes - hora;
                let minutos = Math.floor(final / (1000 * 60));
                let resto = final % (1000 * 60)
                let segundos = Math.floor(resto / 1000);
                if(minutos === 0 && segundos === 0){
                    clearInterval(intervaloDescanso)
                }
                $minuto.innerHTML = minutos;
                $segundo.innerHTML = segundos;
            }, 100);
            $tarea.innerHTML = "Tiempo Cumplido, tendras 5 minutos de descanso"
            $iniciar.disabled = false;
            $enviar1.disabled = false;
            
        }
        $minuto.innerHTML = minutos;
        $segundo.innerHTML = segundos;
    }, 100);


    $detener.addEventListener("click", ()=>{
    $minuto.innerHTML = "00";
    $segundo.innerHTML = "00";
    clearInterval(intervalo)
    $iniciar.disabled = false;
    $enviar1.disabled = false;
    $tarea.innerHTML = null;
})
}   else{
    $tarea.innerHTML = "<b>DEBES INDICAR UNA TAREA</b>"
}
    $perrafo.innerHTML = "";
    $input.value  = "";
    $iniciar.disabled = true;
    
    

})




