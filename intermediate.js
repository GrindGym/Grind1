class Timer {
    constructor(stepId, duration) {
        this.stepId = stepId;
        this.duration = duration;
        this.remainingTime = duration;
        this.timerElement = document.getElementById(`timer-${stepId}`);
    }

    start() {
        const self = this;
        this.interval = setInterval(function() {
            let minutes = Math.floor(self.remainingTime / 60);
            let seconds = self.remainingTime % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            self.timerElement.textContent = minutes + ':' + seconds;
            self.remainingTime--;
            if (self.remainingTime < 0) {
                clearInterval(self.interval);
                document.getElementById(self.stepId).style.display = 'none';
                let nextStep = document.querySelector(`#step${parseInt(self.stepId.replace('step', '')) + 1}`);
                if (nextStep) {
                    nextStep.style.display = 'block';
                }
            }
        }, 1000);
    }
}

function startTimer(stepId, duration) {
    const timer = new Timer(stepId, duration);
    timer.start();
}

function showNextStep(stepId) {
    document.getElementById(stepId).style.display = 'none';
    let nextStep = document.querySelector(`#step${parseInt(stepId.replace('step', '')) + 1}`);
    if (nextStep) {
        nextStep.style.display = 'block';
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