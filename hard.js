let totalTime = 0;
let globalInterval;

function startTimer(step, seconds) {
    let timerDisplay = document.getElementById('timer-' + step);
    let button = document.querySelector(`#${step} .button`);
    let remainingTime = seconds;

    totalTime += seconds;
    button.disabled = true;

    let interval = setInterval(function() {
        remainingTime--;
        let minutes = Math.floor(remainingTime / 60);
        let secs = remainingTime % 60;
        timerDisplay.textContent = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;

        if (remainingTime <= 0) {
            clearInterval(interval);
            showNextStep(step);
        }
    }, 1000);

    globalInterval = interval;
}

function showNextStep(currentStepId) {
    const currentStep = document.getElementById(currentStepId);
    currentStep.style.display = 'none';
    const nextStep = document.getElementById('step' + (parseInt(currentStepId.replace('step', '')) + 1));
    if (nextStep) {
        nextStep.style.display = 'block';
    }
}

function startTimer(stepId, duration) {
    const timerElement = document.getElementById('timer-' + stepId);
    let timeRemaining = duration;

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            alert('Timer for ' + stepId + ' is complete!');
        }
    }, 1000);
}

function finishWorkout(step) {
    const steps = document.querySelectorAll('.workout-step');
    steps.forEach(stepElement => {
        stepElement.style.display = 'none';
    });

    const congratsSection = document.getElementById('congratulations');
    congratsSection.style.display = 'block';

    let totalTime = 0;
    const timers = document.querySelectorAll('.timer');
    timers.forEach(timer => {
        const timeText = timer.textContent;
        const [minutes, seconds] = timeText.split(':').map(Number);
        totalTime += minutes * 60 + seconds;
    });

    const totalTimeElement = document.getElementById('total-time');
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    totalTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}