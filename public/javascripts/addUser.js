'use strict';

async function addUser() {
    let userName = document.getElementById('name').value;
    let userAge = document.getElementById('age').value;

    let user = {
        name: userName,
        age: userAge,
    };

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
    });

    const result = await response.json();

    writeAddedUser(result);
}

function writeAddedUser(object) {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let h11 = document.createElement('h1');
    h11.innerText = 'Your added user:';
    div.append(h11);

    let h12 = document.createElement('h1');
    h12.innerText = "User's name: " + object.name;
    div.append(h12);

    let h13 = document.createElement('h1');
    h13.innerText = "User's age: " + object.age;
    div.append(h13);

    main.append(div);
}
