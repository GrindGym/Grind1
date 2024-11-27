
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

function showNextStep(currentStep) {
    let currentElement = document.getElementById(currentStep);
    currentElement.classList.remove('active');
    currentElement.style.display = 'none';

    let nextStep = parseInt(currentStep.replace('step', '')) + 1;
    let nextStepId = 'step' + nextStep;

    if (document.getElementById(nextStepId)) {
        let nextElement = document.getElementById(nextStepId);
        nextElement.classList.add('active');
        nextElement.style.display = 'block';
    }
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