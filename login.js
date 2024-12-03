class LoginForm {
    constructor(formId, emailId, passwordId, errorMessageId) {
        this.form = document.getElementById(formId);
        this.emailInput = document.getElementById(emailId);
        this.passwordInput = document.getElementById(passwordId);
        this.errorMessage = document.getElementById(errorMessageId);
        
  
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        if (this.isValidForm(email, password)) {
            this.redirectToHome();
        } else {
            this.showError("Cannot log in. Please enter both email and password.");
        }
    }

    isValidForm(email, password) {
        return email !== "" && password !== "";
    }

    showError(message) {
        this.errorMessage.textContent = message;
    }

    redirectToHome() {
        window.location.href = "startworkout.html";
    }
}


const loginForm = new LoginForm("loginForm", "email", "password", "errorMessage");