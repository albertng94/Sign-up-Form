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
        noMatchCP.style.color = "white";
        noMatchP.style.color = "white";
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
            
            // Style labels white and cue paragraphs transparent when input is valid (color rgb(98, 98, 97))

            else if (inputColor === "rgb(98, 98, 97)") {
                input.parentNode.previousElementSibling.style.color = "rgb(98, 98, 97)";

                if (input.id === "name" || input.id === "surname" || input.id === "phone") {
                    input.parentNode.nextElementSibling.style.color = "transparent";
                }

                else if (input.id === "password" || input.id === "password-confirm") {
                    input.parentNode.nextElementSibling.nextElementSibling.style.color = "transparent";
                    input.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "transparent";
                }
            }
        });

        // Style cue paragraphs white when the input field is the current focus and has some value.

        input.addEventListener("focusin", () => {
            const computedStyle = window.getComputedStyle(input);
            const inputColor = computedStyle.color;

            if (inputColor !== "rgb(237, 94, 94)" && input.value) {
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


// Unable to submit the form when passwords match pattern criteria but do not match

const submitButton = document.getElementById("button");

function noSubmit() {
    submitButton.addEventListener("click",function(event) {
        event.preventDefault();
        alert("Passwords do not match! Please fix it before submitting the form.");
    });
}

noSubmit();