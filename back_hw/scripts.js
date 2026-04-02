let allUsers = [];
let ascUsers = [];
let descUsers = [];

// function createParagraph(text) {
//     let paragraph = document.createElement('p');
//     paragraph.textContent = 'text';
//     return paragraph;
// }

// render func
function render_page(users) {
    let container = document.getElementById('users-container');
    container.innerHTML = '';

    let row = document.createElement('div');
    row.classList.add('row');

    users.forEach((user) => {

        let colDiv = document.createElement('div');
        colDiv.classList.add('col');

        colDiv.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${user.avatar_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.login}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
            `;

        row.appendChild(colDiv);
    });

    container.appendChild(row);
}

// users
fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((users) => {
        allUsers = users;
        console.log(allUsers);
        render_page(allUsers);
    })

    .catch(error => console.error('error: ', error));

//clear btn
let btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    render_page(allUsers)
});

// a-z btn
let btnAsc = document.getElementById('a-z');
btnAsc.addEventListener('click', () => {
    ascUsers = [...allUsers];
    ascUsers.sort(
        (a, b) => {
            let res = a.login.localeCompare(b.login);
            console.log(res);
            return res;
    });

    render_page(ascUsers);    
});

// z-a btn
let btnDesc = document.getElementById('z-a');
btnDesc.addEventListener('click', () => {
    descUsers = [...allUsers];
    descUsers.sort(
        (a, b) => {
            let res = b.login.localeCompare(a.login);
            console.log(res);
            return res;
        });
    render_page(descUsers);    
});