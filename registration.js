class UserRegistration {
    constructor(formId, welcomeMessageId, continueButtonId) {
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


    init() {
        this.form.addEventListener("submit", (event) => this.handleSubmit(event));
        this.membershipSelect.addEventListener("change", () => this.updatePrice());
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


    isPasswordValid(password) {
        return password.length >= 6;
    }

    showPasswordError() {
        this.passwordError.textContent = "Password must be at least 6 characters long.";
    }

    getSelectedMembership() {
        return this.membershipSelect.options[this.membershipSelect.selectedIndex].text;
    }


    displayUserInfo(fullName, selectedMembership) {
        this.userName.textContent = fullName;
        this.membershipType.textContent = selectedMembership;
    }


    showWelcomeMessage() {
        this.welcomeMessage.style.display = "block"; 
        this.continueButton.style.display = "block"; 
    }

   
    updatePrice() {
        const selectedOption = this.membershipSelect.options[this.membershipSelect.selectedIndex].value;
        let price = this.getMembershipPrice(selectedOption);
        this.membershipInfo.textContent = `Selected membership costs: P${price} per month.`;
    }

    
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
