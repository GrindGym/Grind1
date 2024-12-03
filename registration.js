// Class to handle user registration, demonstrating OOP principles
class UserRegistration {
    // Constructor to initialize form elements and other necessary components
    constructor(formId, welcomeMessageId, continueButtonId) {
        // Encapsulation: Keeps all form elements and UI components encapsulated inside the class
        this.form = document.getElementById(formId);
        this.welcomeMessage = document.getElementById(welcomeMessageId); 
        this.continueButton = document.getElementById(continueButtonId);
        this.passwordError = document.getElementById("passwordError"); 
        this.userName = document.getElementById("userName");
        this.membershipType = document.getElementById("membershipType");
        this.membershipSelect = document.getElementById("membership");
        this.membershipInfo = document.getElementById("membershipInfo"); 
        
       
        this.init();
    }

    // Abstraction: Users don't need to understand the internals of event handling, they just trigger actions.
    init() {
        this.form.addEventListener("submit", (event) => this.handleSubmit(event)); // Handle form submission
        this.membershipSelect.addEventListener("change", () => this.updatePrice()); // Update price on membership selection
    }

   
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

  
    showPasswordError() {
        this.passwordError.textContent = "Password must be at least 6 characters long."; 
    }

   
    getSelectedMembership() {
        return this.membershipSelect.options[this.membershipSelect.selectedIndex].text; 
    }

    // Displays user information on the page (full name and membership type)
    displayUserInfo(fullName, selectedMembership) {
        this.userName.textContent = fullName;
        this.membershipType.textContent = selectedMembership; 
    }

    // Shows the welcome message and continue button
    showWelcomeMessage() {
        this.welcomeMessage.style.display = "block";
        this.continueButton.style.display = "block"; 
    }

   
    updatePrice() {
        const selectedOption = this.membershipSelect.options[this.membershipSelect.selectedIndex].value;
        let price = this.getMembershipPrice(selectedOption);
        this.membershipInfo.textContent = `Selected membership costs: P${price} per month.`; 
    }

    // Abstraction: Defines membership prices based on selected option
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

   
    continueAction() {
        this.form.reset(); 
        this.welcomeMessage.style.display = "none";
        this.continueButton.style.display = "none"; 
    }
}


const registration = new UserRegistration("registrationForm", "welcomeMessage", "continueButton");

document.getElementById("continueButton").addEventListener("click", () => registration.continueAction());
