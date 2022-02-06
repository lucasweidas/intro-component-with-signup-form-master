// Function Statements
function verifyInputs(input) {
    const container = input.parentElement;
    if (input.value.trim().length === 0) {
        container.classList.add('error');
        if (input.id === 'email') {
            errorEmail.innerText = 'Email cannot be empty';
        }
        return;
    }
    if (container.classList.contains('error')) {
        container.classList.remove('error');
        errorEmail.innerText = 'Looks like this is not an email';
    }
}

function verifyEmail(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const container = email.parentElement;
    if (reg.test(email.value)) {
        container.classList.remove('error');
        return;
    }
    container.classList.add('error');
}

// Variables
const form = document.querySelector('.form-c');
const inptContainer = document.querySelectorAll('.input-c');
const inputs = document.querySelectorAll('.input-field');
const errorEmail = document.querySelector('.error-email');
const btnClaim = document.querySelector('.btn-claim');

// Event Listeners
form.addEventListener('submit', e => e.preventDefault());

btnClaim.addEventListener('click', () => {
    inputs.forEach(input => {
        verifyInputs(input);
        if (input.id === 'email') {
            verifyEmail(input);
        }
    });
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        verifyInputs(input);
    });
});
