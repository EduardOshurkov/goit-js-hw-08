import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector(".feedback-form"), 
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputValue, 500));
refs.textarea.addEventListener('input', throttle(onTextareaValue, 500));

const STORAGE_KEY = 'feedback-form-state';
let formData = {};


// refs.form.addEventListener('input', event => {
//     formData[event.target.name] = event.target.value;
// })

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}


function onInputValue(event) {
    formData[event.target.name] = event.target.value;
    const inputValueForStorage = JSON.stringify(formData)

    localStorage.setItem(STORAGE_KEY, inputValueForStorage);
}

function onTextareaValue(event) {
    formData[event.target.name] = event.target.value;
    const textareaValueForStorage = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, textareaValueForStorage);
}
 



