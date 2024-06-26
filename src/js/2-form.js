const LS_KEY = "feedback-form-state";


const formEl = document.querySelector(".feedback-form");
const inputEmail = formEl.elements.email;
const inputMessage = formEl.querySelector("textarea");


formEl.addEventListener('submit', handleSubmit);
formEl.addEventListener('input', handleInput);

populateFormEl();



function handleSubmit(event) {
    event.preventDefault();

    if (inputEmail.value && inputMessage.value) {
        console.log({email: inputEmail.value.trim(), message: inputMessage.value.trim()});

    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY)
    } else {
        alert ("All form fields must be filled in")
    }
    
} 
        

function handleInput() {
    const formValues = {email: inputEmail.value.trim(), message: inputMessage.value.trim()};
    localStorage.setItem(LS_KEY, JSON.stringify(formValues));

}


function populateFormEl() {
    const savedValues = localStorage.getItem(LS_KEY);
    if (savedValues) {
            const { email, message } = JSON.parse(savedValues);
            inputEmail.value = email;
            inputMessage.value = message;

}
}