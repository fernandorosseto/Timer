
/* 
============================================
     VAR HOUR, MINUTES AND SECONDS          
============================================
*/

var seconds = document.getElementById('seconds')
var minutes = document.getElementById('minutes')
var hours = document.getElementById('hours')
var inicialTime 
var timer
const inputSeconds = document.querySelector('seconds');

/* 
============================================
      BUTTONS START, PAUSE AND STOP
============================================
*/

let functionTimer = false;

var startbtn = document.getElementById('startbtn')

startbtn.addEventListener('click', function(){
// add function star timer.

    if (!functionTimer) {
    functionTimer = true;
    
    coudowTimer()
    
    funcaoEmAndamento = false;
  }
});

var pausebtn = document.getElementById('pausebtn')

pausebtn.addEventListener('click', function(){
// add function pause timer.
    clearInterval(timer)
});

var clearbtn = document.getElementById('clearbtn')

clearbtn.addEventListener('click', function(){
// add function stop timer.
    clearInterval(timer)
    seconds.value = '00'
    minutes.value = '00'
    hours.value = '00'
    
});

/* 
============================================
     FUNCIONS          
============================================
*/

var coudowTimer = function (){
    let secNumber = Number(seconds.value)
    let minNumber = Number(minutes.value)
    let hoursNumber = Number(hours.value)
    inicialTime = (hoursNumber*3600 + minNumber*60 + secNumber)
    
    if (inicialTime === 0 || isNaN(inicialTime)){
        alert('Por favor, preencha o campo de entrada corretamente.')
        seconds.value = '00'
        minutes.value = '00'
        hours.value = '00'
    }
    else{
        timer = setInterval(function(){

            inicialTime = inicialTime - 1
            hoursNumber = parseInt(inicialTime/3600)
            minNumber = parseInt((inicialTime%3600)/60)
            secNumber = parseInt(inicialTime%60)
            if(secNumber < 10){
                seconds.value = (`0${secNumber}`)
            }
            else{
                seconds.value = secNumber
            }
            if(minNumber < 10){
                minutes.value = (`0${minNumber}`)
            }
            else{
                minutes.value = minNumber
            }
            if(hoursNumber < 10){
                hours.value = (`0${hoursNumber}`)
            }
            else{
                hours.value = hoursNumber
            }    
               
            if (inicialTime === 0) {
                
                clearInterval(timer)
            }
        }, 1000)
    }
}
