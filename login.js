class LoginForm {
    // Constructor to initialize form elements and event listener
    constructor(formId, emailId, passwordId, errorMessageId) {
        // Encapsulation: All form-related functionality is encapsulated within the class
        this.form = document.getElementById(formId); 
        this.emailInput = document.getElementById(emailId);
        this.passwordInput = document.getElementById(passwordId);
        this.errorMessage = document.getElementById(errorMessageId); 

        // Event listener for form submission
        this.form.addEventListener("submit", this.handleSubmit.bind(this)); 
    }

   
    handleSubmit(event) {
        event.preventDefault();

        const email = this.emailInput.value; // Get email value from the input field
        const password = this.passwordInput.value; // Get password value from the input field

        // Abstraction: Simple interface for validation and redirection
        if (this.isValidForm(email, password)) {
            this.redirectToHome(); 
        } else {
            this.showError("Cannot log in. Please enter both email and password.");
        }
    }

    // Validate that email and password are non-empty
    isValidForm(email, password) {
        return email !== "" && password !== ""; 
    }

    // Display an error message
    showError(message) {
        this.errorMessage.textContent = message; 
    }

    // Redirect user to the home page (startworkout.html)
    redirectToHome() {
        window.location.href = "startworkout.html"; // Redirect the user
    }
}

const loginForm = new LoginForm("loginForm", "email", "password", "errorMessage");
