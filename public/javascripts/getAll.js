'use strict';

async function getAll() {
    const response = await fetch('/api/users');
    const result = await response.json();

    write(result);
}

function write(text) {
    let table = document.createElement('table');
    table.id = 'users_table';
    let tr = document.createElement('tr');
    table.append(tr);

    let thUser = document.createElement('th');
    thUser.innerText = 'Users';
    tr.append(thUser);

    let thName = document.createElement('th');
    thName.innerText = 'Name';
    tr.append(thName);

    let thAge = document.createElement('th');
    thAge.innerText = 'Age';
    tr.append(thAge);

    for (let i = 0; i < text.length; i++) {
        let tr = document.createElement('tr');
        table.append(tr);

        let tdUser = document.createElement('td');
        tdUser.innerText = 'Users' + (i + 1);
        tr.append(tdUser);

        let tdName = document.createElement('td');
        tdName.innerText = text[i].name;
        tr.append(tdName);

        let tdAge = document.createElement('td');
        tdAge.innerText = text[i].age;
        tr.append(tdAge);
    }

    let main = document.getElementById('main_content');
    main.innerHTML = '';
    main.append(table);
}
