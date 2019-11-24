'use strict';

async function updateUser() {
    let userNameOld = document.getElementById('nameOld').value;
    let userNameNew = document.getElementById('nameNew').value;
    let userAgeOld = document.getElementById('ageOld').value;
    let userAgeNew = document.getElementById('ageNew').value;

    let userOld = {};
    let userNew = {};

    userOld.name = userNameOld;
    userOld.age = userAgeOld;

    userNew.name = userNameNew;
    userNew.age = userAgeNew;

    if (userOld.name == '') delete userOld.name;
    if (userOld.age == '') delete userOld.age;
    if (userNew.name == '') delete userNew.name;
    if (userNew.age == '') delete userNew.age;

    let users = [userOld, userNew];

    const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(users),
    });

    const result = await response.json();
    writeUpdatedUsers(result);
}

function writeUpdatedUsers(result) {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let h1 = document.createElement('h1');
    h1.innerHTML = 'You updated ' + result.nModified + " user's";
    div.append(h1);

    main.append(div);
}
