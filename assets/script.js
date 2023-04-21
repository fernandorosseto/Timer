
/* 
============================================
     VAR HOUR, MINUTES AND SECONDS          
============================================
*/
var seconds
var minutes
var hours
var inicialTime
var timer


/* 
============================================
      BUTTONS START, PAUSE AND STOP
============================================
*/

var startbtn = document.getElementById('startbtn')

startbtn.addEventListener('click', function(e){
// add function star timer.
    e.preventDefault()
    coudowTimer()

});

var pausebtn = document.getElementById('pausebtn')

pausebtn.addEventListener('click', function(){
// add function pause timer.
});

var stopbtn = document.getElementById('stopbtn')

stopbtn.addEventListener('click', function(){
// add function stop timer.
    alert("ClickOn")
});


/* 
============================================
     FUNCIONS          
============================================

*/

var coudowTimer = function (){
    seconds = Number(document.getElementById('seconds').value)
    minutes = Number(document.getElementById('minutes').value)
    hours = Number(document.getElementById('hours').value)
    inicialTime = (hours*3600 + minutes*60 + seconds)
    
    timer = setInterval(function(){
        inicialTime = inicialTime - 1
        hours=parseInt(inicialTime/3600)
        minutes=parseInt((inicialTime%3600)/60)
        seconds=parseInt(inicialTime%60)
        console.log(hours + ':' + minutes + ':' + seconds)

       

        if (inicialTime === 0) {
            
            clearInterval(timer)
        }
    }, 1000)
}