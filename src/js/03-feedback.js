import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector(".feedback-form"), 
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputValue, 500));
refs.input.addEventListener('input', onInputValue);
refs.textarea.addEventListener('input', onTextareaValue);

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    if (!formData['email'] || !formData['message']) {
       return  alert('Заполните все поля!')
    } else {
        console.log(formData);
    }
}

// function clearData(object) {
//     for (const key in object) {
//         delete object[key];
// }
// }

function onInputValue(event) {
    formData[event.target.name] = event.target.value;
    const inputValueForStorage = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, inputValueForStorage);
}

function onTextareaValue(event) {
    formData[event.target.name] = event.target.value;
    const textareaValueForStorage = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, textareaValueForStorage);
}


function savedForm() {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formData) {
        returnSavedLocalStorage(formData);
    } else formData = {};
}

savedForm();

function returnSavedLocalStorage(formData) {
    for (const key in formData) {
        refs.form[key].value = formData[key];
    }
}
