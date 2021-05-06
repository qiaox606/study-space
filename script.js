const startBBtn = document.querySelector('.start-break');
const cancelBBtn = document.querySelector('.cancel-break');
const bTimer = document.querySelector('.break-timer');
const sound = document.querySelector('#audio');
let intervalId;
let intervalId2;
let bTime;
let updatedTime2;


function getCustomTime2() {
    let val2 = document.querySelector('#length2').value;
    let bStartingMins = val2;
    bTime = bStartingMins * 60;
    console.log(val2, 'hi')
}


function startCountdown2() {
    intervalId2 = setInterval(timerFunc2, 1000);
}
        
function timerFunc2() {
    if(updatedTime2 === bTime) {
        getCustomTime2()
        let minutes = Math.floor(bTime / 60) 
        let seconds = bTime % 60
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        bTimer.textContent = `${minutes}:${seconds}`;
        bTime--;
    } else {
        let minutes = Math.floor(bTime / 60) 
        let seconds = bTime % 60
        if(minutes < 0 && seconds < 0) {
            sound()
       return;
        } else {
            bTime--
        }
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        bTimer.textContent = `${minutes}:${seconds}`;
    }
}


function bStartOrPause() {
	if(!intervalId2) {
		intervalId2 = setInterval(timerFunc2, 1000);
        startBBtn.textContent = 'pause'; 
	} else {
		clearInterval(intervalId2);
		intervalId2 = null; 
		startBBtn.textContent = 'start';
	}
}
startBBtn.addEventListener('click', bStartOrPause);

function bCancelTimer() {
    let alert2 = confirm('Are you sure you want to finish the round early?')
    if(alert2) {
        bTimer.textContent = '00:00'
        clearInterval(intervalId2); 
        intervalId2 = null; 
        startBBtn.textContent = 'start';
        getCustomTime2();
    } else if(!alert && startBBtn.textContent === 'start') {
        intervalId2 = setInterval(timerFunc2, 1000);
        startBBtn.textContent = 'pause'; 
    } else {
        startBBtn.textContent = 'pause'; 
    }
}
cancelBBtn.addEventListener('click', bCancelTimer)