let body = document.body;
let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div3');

div.innerText = "Inner Text in DIV 1";
div2.textContent = "Text content in div 2";
// body.append(div);
// body.append(div2);
body.append(div, div2, "test");
body.appendChild(div3);
console.log(body);

//body.innerHTML = "<h1>My title</h1>"

let mainDiv = document.getElementById('main');
let emojiParagrapsh = document.getElementsByClassName('emoji');
let main = document.querySelector('#main');
let emojiSelector = document.querySelectorAll('.emoji');
let notEmoji = document.querySelectorAll('.notEmoji');

console.log("Get element by id:", mainDiv)
console.log("Get element by classname",emojiParagrapsh)
console.log("Query selector by #main:", main)
console.log("Query selector by .emoji:",emojiSelector);

//Array.from(emojiParagrapsh).forEach(...)
emojiSelector.forEach(emoji => emoji.innerText = "<strong>This is an emoji ⚔ </strong>");

notEmoji.forEach(
    elem => {
        elem.style.color = "white";
        elem.innerHTML = "<strong>Not an emoji</strong>"})

main.setAttribute('title', "My main div");
main.title = "My new title";
main.className = "mainDiv";
main.style.backgroundColor = "red";

let btn = document.querySelector('#clickMe');
btn.addEventListener('click', (event)=> {
    main.style.backgroundColor="green";
    let link = document.createElement('a');
    link.href = "http://ensta.fr";
    link.innerText = "Another Link";
    main.append(link);
    event.target.innerText = "Loading ..."


})

main.addEventListener(
    'mouseover', 
    (e) => {console.log("Mouse is over main")},
    {capture: true}
)

setTimeout(()=>{
    main.removeEventListener();
},2000)

//main.remove();
