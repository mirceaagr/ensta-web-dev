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