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

password.addEventListener("change", () => {
    passwordMatch();
});

confirmPassword.addEventListener("input", () => {
    passwordMatch();
});


// Change the color of Labels to red when input value is invalid but not empty.

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

function styleInvalidLabels() {
    for (const input of inputs) {
        input.addEventListener("focusout", () => {
            const computedStyle = window.getComputedStyle(input);
            const inputColor = computedStyle.color;
            console.log('Input color:', inputColor);

            if (inputColor === "rgb(237, 94, 94)") {
                input.parentNode.previousElementSibling.style.color = "rgb(237, 94, 94)";
            } else {
                input.parentNode.previousElementSibling.style.color = "rgb(98, 98, 97)";
            }
        });
    }
}

styleInvalidLabels();


// Unable to submit the form when passwords match pattern criteria but do not match

const submitButton = document.getElementById("button");

function noSubmit() {
    submitButton.addEventListener("click",function(event) {
        event.preventDefault();
        alert("Passwords do not match! Please fix it before submitting the form.");
    });
}

noSubmit();