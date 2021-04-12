
let element = document.querySelector('#message');
async function getJoke(){
    let request = await fetch("https://api.chucknorris.io/jokes/random");
    let json;
    if(request.ok) {
        json = await request.json();
    } else {
        return console.error("Bad URL");
    }
    return json;
}

let interval = setInterval(() => {
    getJoke().then(
        joke => {
            element.textContent = joke.value;
        }
    )
}, 5000)


// data = {...}
// fetch(your URL, {
//     Headers : {
//         method: "POST"
//     }
//     data: JSON.stringify(data);
// })