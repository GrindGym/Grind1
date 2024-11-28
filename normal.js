let totalTime = 0;  


function startTimer(step, duration) {
    let remainingTime = duration;
    let timerDisplay = document.getElementById('timer-' + step);
    const interval = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(interval);
        } else {
            remainingTime--;
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);

    totalTime += duration;
}


function showNextStep(currentStep) {
    const currentStepElement = document.getElementById(currentStep);
    currentStepElement.style.display = 'none';

    const nextStep = parseInt(currentStep.replace('step', '')) + 1;
    const nextStepElement = document.getElementById('step' + nextStep);
    if (nextStepElement) {
        nextStepElement.style.display = 'block';
    }
}

function finishWorkout(step) {
    const totalMinutes = Math.floor(totalTime / 60);
    const totalSeconds = totalTime % 60;
    document.getElementById('total-time').textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;

 
    const currentStepElement = document.getElementById(step);
    currentStepElement.style.display = 'none';

    const finalStepElement = document.getElementById('step11');
    finalStepElement.style.display = 'block';
}
