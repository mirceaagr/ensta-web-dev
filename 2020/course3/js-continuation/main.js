// $('body').css("background-color","red");
// console.dir($);

// errors and success messages
const errors      = document.getElementById('errors');
const success     = document.getElementById('success');
const form        = document.getElementById('registerForm');

// inputs
const email       = document.getElementById('email');
const pass        = document.getElementById('password');
const passConfirm = document.getElementById('passwordConfirm');
const age         = document.getElementById('age');
const terms       = document.getElementById('terms');
const submitBtn   = document.getElementById('submitBtn');

// array with errors
let errArr = [];
let formCounter = localStorage.getItem('formCount')
if(formCounter === null) {
    formCounter = 0;
    localStorage.setItem('formCount',0);
}


// function that validates form
function validateForm(){
    submitBtn.textContent = "Please wait.."; // we change the text of the button
    submitBtn.disabled = true; // we disable the button 

    if(!isEmailValid(email)) {
        errArr.push("Email is invalid");
    }

    if(!isTextInputValid(pass)) {
        errArr.push("Password is not valid");
    }

    if(!isTextInputValid(passwordConfirm)) {
        errArr.push("Password confirmation is not valid");
    }

    if(!passwordsMatch(pass, passwordConfirm)) {
        errArr.push("Passwords do not match");
    }

    if(!isTextInputValid(age)) {
        errArr.push("Age is not valid");
    } else if (!ageIsApropriate(age)){
        errArr.push(`Sorry, at the age of ${age.value} I was hunting butterflies..`);
    }

    if(!isTermsChecked(terms)) {
        errArr.push("You have to agree with our TOS");
    }

    errArr.forEach(err => {
        let errDiv  = document.createElement('div') // create element on page
        errDiv.classList.add('alert'); // add alert clas to element newly created
        errDiv.classList.add('alert-danger');
        let errNode = document.createTextNode(err); // add text from error to newly created text node
        errDiv.appendChild(errNode); // put text node inside newly created div
        errors.appendChild(errDiv); // put newly created div inside error box

    })

    setTimeout(()=>{
        submitBtn.textContent = "Submit";
        submitBtn.disabled = false;
    }, 2000)

}

function isTermsChecked(terms) {
    return terms.checked;
}

function passwordsMatch(pass1, pass2) {
    return pass1.value === pass2.value;
}

function ageIsApropriate(age) {
    return age.value > 18;
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

function resetErrors() {
    errArr = [];
    while(errors.hasChildNodes()) {
        errors.removeChild(errors.firstChild);
    }
    success.classList.add('invisible');
}

function checkIfSpam(){
    if(localStorage.getItem('formCount') > 3) {
        errArr.push("You are BOT");
        return true;
    }
    return false;
}

function storeData(data){
    localStorage.setItem('db', data);
}


form.addEventListener('submit', (event)=>{
    resetErrors();
    checkIfSpam();
    validateForm();
    if(!isValid()){
        event.preventDefault(); // we stop the form
    }else{
        formCounter++;
        localStorage.setItem('formCount', formCounter)
        success.classList.remove('invisible');
        let data =  {
            email: email.value,
            pass: "******",
            passConfirm: "******",
            age: age.value,
            terms:terms.checked
        };
        console.log(data);
        storeData(JSON.stringify(data));
        form.reset();
    }
})