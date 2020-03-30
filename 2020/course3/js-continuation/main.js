// $('body').css("background-color","red");
// console.dir($);

// errors and success messages
const errors = document.getElementById('errors');
const success = document.getElementById('success');
const form = document.getElementById('registerForm');

// inputs
const email = document.getElementById('email');
const pass = document.getElementById('password');
const passConfirm = document.getElementById('passwordConfirm');
const age = document.getElementById('age');
const terms = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');

// array with errors
let errArr = [];

function validateForm(){
    if(!isEmailValid(email)) {
        errArr.push("Email is invalid");
    }

    if(!isTextInputValid(pass)) {
        errArr.push("Password is not valid");
    }

    if(!isTextInputValid(passwordConfirm)) {
        errArr.push("Password confirmation is not valid");
    }

    if(!isTextInputValid(age)) {
        errArr.push("Age is not valid");
    }

    errArr.forEach(err => {
        let errDiv = document.createElement('div') // create element on page
        errDiv.classList.add('alert'); // add alert clas to element newly created
        errDiv.classList.add('alert-danger');
        let errNode = document.createTextNode(err); // add text from error to newly created text node
        errDiv.appendChild(errNode); // put text node inside newly created div
        errors.appendChild(errDiv); // put newly created div inside error box

    })


}

function isEmpty(input){
    return input.value === "";
}

// passing html input 
function isNullOrUndefined(input) {
    return input.value === null || input.value === undefined;
}

function isValid(){
    return errArr.length === 0;
}

function isEmailValid(email) {
    let regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm
    return regex.test(email.value.toLowerCase());
}

function isTextInputValid(input) {
    return !isNullOrUndefined(input) && !isEmpty(input);
}





form.addEventListener('submit', (event)=>{
    validateForm();
    if(!isValid()){
        event.preventDefault(); // we stop the form
    }else{
        success.classList.remove('invisible');
    }
})