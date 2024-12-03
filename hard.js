let totalTime = 0; 
let intervalId; 


function startTimer(step, durationInSeconds) {
    let timerElement = document.getElementById('timer-' + step);
    let totalTimeElement = document.getElementById('total-time');
    let countdown = durationInSeconds;
    intervalId = setInterval(function() {
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;
        timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        countdown--;

  
        totalTime += 1;  
        let totalMinutes = Math.floor(totalTime / 60);
        let totalSeconds = totalTime % 60;
        totalTimeElement.innerHTML = `${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;

        if (countdown < 0) {
            clearInterval(intervalId); 
        }
    }, 1000);
}


function stopTimer() {
    clearInterval(intervalId);
    alert("Timer Stopped!"); 
}


function showNextStep(currentStep) {
  
    document.getElementById(currentStep).style.display = 'none';


    let nextStepId = 'step' + (parseInt(currentStep.replace('step', '')) + 1);
    let nextStep = document.getElementById(nextStepId);
    if (nextStep) {
        nextStep.style.display = 'block';
    }
}


document.getElementById('stop-button').addEventListener('click', stopTimer);