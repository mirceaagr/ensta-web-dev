let table = document.querySelector('#users');
let pagination = document.querySelector('#pagination');
const DATA_URL = 'https://reqres.in/api/users';
console.log(table);
butonNo = 0;

function createRow(person) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    id.textContent = person.id;

    let email = document.createElement('td');
    email.textContent = person.email;

    let firstName = document.createElement('td');
    firstName.textContent = person.firstName;

    let lastName = document.createElement('td');
    lastName.textContent = person.last_name;

    let avatar = document.createElement('td');
    avatar.textContent = person.avatar;

    row.append(id, email, firstName, lastName, avatar);
    table.append(row);

}

function fillTable(data) {
    data.forEach( createRow);
};

function createPagination(buttonNo) {
    for(let i = 1; i <= buttonNo; i++) {
        let link = document.createElement('a');
        link.href = DATA_URL + "/?page=" + i;
        link.textContent = i + " ";
        pagination.append(link);
    }


}

function addPaginationEventListeners() {
    let links = document.querySelectorAll("a");
    links.forEach((elem) => {
        elem.addEventListener('click', (event)=>{
            event.preventDefault();
            let pageURL = event.target.href;
            console.log(pageURL);
            getData(pageURL);
        })
    })
}

async function getData(pageURL = DATA_URL) {
    let response = await fetch(pageURL);
    let data;
    if(response.ok) {
        // clear table + clear pagination
        data = await response.json();
        console.log(data);
        fillTable(data.data);
        createPagination(data.total_pages);
        addPaginationEventListeners();
    }
  
}


getData(DATA_URL);