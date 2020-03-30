//window.location.replace("http://google.com")
let person = document.getElementById('person');
let firstDiv = document.querySelector('#person');
let divs = document.querySelectorAll('.bigDiv');
let btn = document.getElementById('btn');
//let all = document.querySelector('*');
//let divsOld = document.getElementsByClassName('bigDiv'); // old school .. not realy used 
person.remove();
//divs.lastElementChild.remove(); // check back later
console.dir(divs[0]);
divs[0].innerText = "bla" // inner text for the first one
divs[1].classList.add('pink');
divs[2].classList.add('red');

console.dir(btn);
let increment = 0;

btn.addEventListener('click', function(event){
    console.log(event);
    divs[2].innerText = increment++;
})

divs[1].addEventListener('mouseover', function(event){
    divs[1].classList.remove('pink');
    divs[1].classList.add('red');
})  

divs[1].addEventListener('mouseout', function(event){
    divs[1].classList.remove('red');
    divs[1].classList.add('pink');
})

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(document.getElementById('bla').value);
    // validate data
})

setTimeout(()=>{
    console.log("Started with delay");
}, 3000) // it's gonna run with a 3 seconds delay

let inc2 = 0;
interval = setInterval(()=>{
    divs[1].innerText = inc2++;
    if(inc2 === 10) {
        clearInterval(interval);
    }
}, 1000)

localStorage.setItem("fruit", "banana");


let pageViewed = localStorage.getItem('views');
if(pageViewed == null) {
    pageViewed = 0;
}else{
    pageViewed++;
}
localStorage.setItem('views', pageViewed);

if(localStorage.getItem('views') > 2) {
    alert("Stop stalking me");
}



let fruit = localStorage.getItem('fruit');
console.log(fruit);




