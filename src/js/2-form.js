const LS_KEY = "feedback-form-state";


const formEl = document.querySelector(".feedback-form");
const inputEmeil = formEl.elements.email;
const inputMessage = formEl.querySelector("textarea");


formEl.addEventListener('submit', handleSubmit);
formEl.addEventListener('input', handleInput);

populateFormEl();



function handleSubmit(event) {
    event.preventDefault();
    console.log({email: inputEmeil.value.trim(), message: inputMessage.value.trim()});

    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY)
} 
        

function handleInput() {
    const formValues = {email: inputEmeil.value.trim(), message: inputMessage.value.trim()};
    localStorage.setItem(LS_KEY, JSON.stringify(formValues));

}


function populateFormEl() {
    const savedValues = localStorage.getItem(LS_KEY);
    if (savedValues) {
            const { email, message } = JSON.parse(savedValues);
            inputEmeil.value = email;
            inputMessage.value = message;

}
}