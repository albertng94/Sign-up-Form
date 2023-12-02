// Validate password inputs matching and display a warning when not.

const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const noMatchP = document.getElementById("no-match-p");
const noMatchCP = document.getElementById("no-match-cp");


function passwordMatch() {
    if (password.value !== "" && confirmPassword.value !== "" && password.value !== confirmPassword.value) {
        noMatchCP.textContent = "*Passwords do not match!";
        noMatchP.textContent = "*Passwords do not match!";
        noMatchCP.style.color = "rgb(237, 94, 94)";
        noMatchP.style.color = "rgb(237, 94, 94)";
    } else if (password.value !== "" && password.value === confirmPassword.value) {
        noMatchCP.textContent = "*Passwords match!";
        noMatchP.textContent = "*Passwords match!";
        noMatchCP.style.color = "rgb(196, 196, 196)";
        noMatchP.style.color = "rgb(196, 196, 196)";
    }
}

password.addEventListener("input", () => {
    passwordMatch();
});

confirmPassword.addEventListener("input", () => {
    passwordMatch();
});


// Style labels and cue paragraphs according to the current input status (empty, valid, or invalid)

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

function styleInputElements() {
    for (const input of inputs) {
        input.addEventListener("focusout", () => {
            const computedStyle = window.getComputedStyle(input);
            const inputColor = computedStyle.color;

            // Style labels and cue paragraphs red when input is invalid (color rgb(237, 94, 94))

            if (inputColor === "rgb(237, 94, 94)") {
                input.parentNode.previousElementSibling.style.color = "rgb(237, 94, 94)";

                if (input.id === "name" || input.id === "surname" || input.id === "phone") {
                    input.parentNode.nextElementSibling.style.color = "rgb(237, 94, 94)";
                } 
                
                else if (input.id === "password" || input.id === "password-confirm") {
                    input.parentNode.nextElementSibling.nextElementSibling.style.color = "rgb(237, 94, 94)";
                    input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "rgb(237, 94, 94)";
                }
            } 
            
            // Style labels white and cue paragraphs transparent when input is valid (color rgb(196, 196, 196))

            else if (inputColor === "rgb(196, 196, 196)") {
                input.parentNode.previousElementSibling.style.color = "rgb(196, 196, 196)";

                if (input.id === "name" || input.id === "surname" || input.id === "phone") {
                    input.parentNode.nextElementSibling.style.color = "transparent";
                }

                else if (input.id === "password" || input.id === "password-confirm") {
                    input.parentNode.nextElementSibling.nextElementSibling.style.color = "transparent";
                    input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "transparent";
                }
            }
        });

        // Style labels and cue paragraphs white when the input field is the current focus (paragraphs only when it has some value)

        input.addEventListener("focus", () => {
            
            // Style associated labels white when focusing an input element.

            input.parentNode.previousElementSibling.style.color = "rgb(196, 196, 196)";

            // Style cue paragraphs white when the input field is the current focus and has some value.

            if (input.value) {
                if (input.id === "name" || input.id === "surname" || input.id === "phone") {
                    input.parentNode.nextElementSibling.style.color = "rgb(196, 196, 196)";
                } 
                
                else if (input.id === "password" || input.id === "password-confirm") {
                    input.parentNode.nextElementSibling.nextElementSibling.style.color = "rgb(196, 196, 196)";
                    input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "rgb(196, 196, 196)";
                }
            }
        });
    }
}

styleInputElements();


// Unable to submit the form when passwords match pattern criteria but do not match, able to do so when all the camps are correctly filled and both passwords match

const submitButton = document.getElementById("button");

function submit() {
    submitButton.addEventListener("click",function(event) {
        
        const name1 = document.getElementById("name");
        const surname = document.getElementById("surname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");

        const computedStyleName = window.getComputedStyle(name1);
        const computedStyleSurname = window.getComputedStyle(surname);
        const computedStyleEmail = window.getComputedStyle(email);
        const computedStylePhone = window.getComputedStyle(phone);
        const computedStylePassword = window.getComputedStyle(password);
        const computedStyleConfirmPassword = window.getComputedStyle(confirmPassword);

        const nameColor = computedStyleName.getPropertyValue("color");
        const surnameColor = computedStyleSurname.getPropertyValue("color");
        const emailColor = computedStyleEmail.getPropertyValue("color");
        const phoneColor = computedStylePhone.getPropertyValue("color");
        const passwordColor = computedStylePassword.getPropertyValue("color");
        const confirmPasswordColor = computedStyleConfirmPassword.getPropertyValue("color");

        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Passwords do not match! Please fix this issue before submitting the form.");
        } 
        else if (nameColor === "rgb(196, 196, 196)" && surnameColor === "rgb(196, 196, 196)" && emailColor === "rgb(196, 196, 196)" && phoneColor === "rgb(196, 196, 196)" && passwordColor === "rgb(196, 196, 196)" && confirmPasswordColor === "rgb(196, 196, 196)") {
            alert(`Thank you ${name1.value} ${surname.value}! Your Routemap account has successfully been created.`);
        }
    });
}

submit();