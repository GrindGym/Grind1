// Class to handle user registration, demonstrating OOP principles
class UserRegistration {
    // Constructor to initialize form elements and other necessary components
    constructor(formId, welcomeMessageId, continueButtonId) {
        // Encapsulation: Keeps all form elements and UI components encapsulated inside the class
        // This ensures that the internal state (UI elements) is private and protected, making it easier to manage.
        this.form = document.getElementById(formId);
        this.welcomeMessage = document.getElementById(welcomeMessageId); 
        this.continueButton = document.getElementById(continueButtonId);
        this.passwordError = document.getElementById("passwordError"); 
        this.userName = document.getElementById("userName");
        this.membershipType = document.getElementById("membershipType");
        this.membershipSelect = document.getElementById("membership");
        this.membershipInfo = document.getElementById("membershipInfo"); 
        
        // Initialize the class by setting up event listeners
        this.init();
    }

    // Abstraction: Users don't need to understand the internals of event handling, they just trigger actions.
    // This hides complex details and exposes a simplified interface for interacting with the form.
    init() {
        this.form.addEventListener("submit", (event) => this.handleSubmit(event)); // Handle form submission
        this.membershipSelect.addEventListener("change", () => this.updatePrice()); // Update price on membership selection
    }

    // Handles form submission and validates the password
    handleSubmit(event) {
        event.preventDefault();

        let password = document.getElementById("password").value;
        if (this.isPasswordValid(password)) { 
            let fullName = document.getElementById("fullName").value;
            let selectedMembership = this.getSelectedMembership();
            this.displayUserInfo(fullName, selectedMembership); 
            this.showWelcomeMessage(); 
        } else {
            this.showPasswordError();
        }
    }

    // Checks if password meets the minimum length requirement
    isPasswordValid(password) {
        return password.length >= 6; 
    }

    // Displays password error message
    showPasswordError() {
        this.passwordError.textContent = "Password must be at least 6 characters long."; 
    }

    // Retrieves the selected membership option
    getSelectedMembership() {
        return this.membershipSelect.options[this.membershipSelect.selectedIndex].text; 
    }

    // Displays user information (name and membership type)
    displayUserInfo(fullName, selectedMembership) {
        this.userName.textContent = fullName;
        this.membershipType.textContent = selectedMembership; 
    }

    // Shows the welcome message and continue button
    showWelcomeMessage() {
        this.welcomeMessage.style.display = "block";
        this.continueButton.style.display = "block"; 
    }

    // Updates the price based on the selected membership type
    updatePrice() {
        const selectedOption = this.membershipSelect.options[this.membershipSelect.selectedIndex].value;
        let price = this.getMembershipPrice(selectedOption);
        this.membershipInfo.textContent = `Selected membership costs: P${price} per month.`; 
    }

    // Abstraction: Defines membership prices based on selected option. 
    // The user doesn't need to know how the prices are structured, just that they vary by membership type.
    getMembershipPrice(option) {
        switch (option) {
            case "premium":
                return 400;
            case "vip":
                return 600; 
            default:
                return 200;
        }
    }

    // Resets the form and hides the welcome message and continue button
    continueAction() {
        this.form.reset(); 
        this.welcomeMessage.style.display = "none";
        this.continueButton.style.display = "none"; 
    }
}

// Instantiate the UserRegistration class, demonstrating object creation
const registration = new UserRegistration("registrationForm", "welcomeMessage", "continueButton");

// Event listener for the continue button
document.getElementById("continueButton").addEventListener("click", () => registration.continueAction());
