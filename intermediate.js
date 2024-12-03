// Encapsulation: The WorkoutStep class encapsulates the properties and behaviors associated with each workout step.
class WorkoutStep {
    // Constructor to initialize each workout step with unique attributes.
    constructor(stepId, timerId, nextButtonId, timerDuration) {
        this.stepId = stepId; // ID of the step (used for DOM manipulation)
        this.timerId = timerId; // ID of the timer element
        this.nextButtonId = nextButtonId; // ID of the next button to proceed to the next step
        this.timerDuration = timerDuration; // Duration for the timer in seconds
        this.timeRemaining = timerDuration; // Remaining time for the current timer
        this.timerInterval = null; // Interval ID for the timer, used to clear it when needed
    }

    // Abstraction: The startTimer method abstracts the functionality of starting a timer for each workout step.
    startTimer() {
        const timerDisplay = document.getElementById(this.timerId); // Get the timer element from the DOM
        this.timerInterval = setInterval(() => {
            this.timeRemaining--; // Decrease remaining time
            let minutes = Math.floor(this.timeRemaining / 60); // Calculate minutes
            let seconds = this.timeRemaining % 60; // Calculate seconds
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Update the timer display

            // If time runs out, stop the timer and alert the user
            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval); // Stop the interval
                alert('Time is up!'); // Notify the user that time is up
            }
        }, 1000); // Set the interval to update the timer every second
    }

    // Encapsulation: The showNextStep method handles the transition to the next workout step.
    showNextStep() {
        document.getElementById(this.stepId).style.display = 'none'; // Hide the current step
        const nextStep = document.getElementById(`step${parseInt(this.stepId.slice(4)) + 1}`); // Determine the next step based on current step ID
        if (nextStep) {
            nextStep.style.display = 'block'; // Show the next step if it exists
        }
    }

    // Encapsulation: The setNextButton method allows the next button ID to be set dynamically.
    setNextButton(nextButtonId) {
        this.nextButtonId = nextButtonId; // Set the ID for the next button
    }
}

// Inheritance: The WarmUp class inherits from WorkoutStep, extending its functionality for a warm-up workout.
class WarmUp extends WorkoutStep {
    constructor() {
        super('step1', 'timer-step1', 'next-step1', 180); // Initialize with 3 minutes for warm-up
    }

    // Polymorphism: Overriding the showNextStep method to customize the behavior for the warm-up step.
    showNextStep() {
        super.showNextStep(); // Call the parent method to handle the transition to the next step
        // Additional functionality can be added here if necessary (e.g., showing a warm-up-specific message)
    }
}

// Inheritance: The Squats class inherits from WorkoutStep, extending its functionality for a squats workout.
class Squats extends WorkoutStep {
    constructor() {
        super('step2', 'timer-step2', 'next-step2', 45); // Initialize with 45 seconds for squats
    }

    // Polymorphism: Overriding the showNextStep method to customize the behavior for the squats step.
    showNextStep() {
        super.showNextStep(); // Call the parent method to handle the transition to the next step
        // Additional functionality can be added here if necessary (e.g., showing a squats-specific message)
    }
}

// Initialization: Creating instances of the workout steps (WarmUp and Squats).
const warmUpStep = new WarmUp(); // Instantiate the warm-up step
const squatsStep = new Squats(); // Instantiate the squats step

// Event listeners for the start buttons to begin the timer for each step.
document.getElementById('step1').querySelector('button').addEventListener('click', () => warmUpStep.startTimer());
document.getElementById('step2').querySelector('button').addEventListener('click', () => squatsStep.startTimer());

// Event listeners for the next buttons to proceed to the next step after completing the current one.
document.getElementById('step1').querySelector('.next-button').addEventListener('click', () => warmUpStep.showNextStep());
document.getElementById('step2').querySelector('.next-button').addEventListener('click', () => squatsStep.showNextStep());
