'use strict';

function writeUser(user) {
    let div = document.createElement('div');

    let usersName = document.createElement('h1');
    usersName.innerText = "User's name: " + user.name;
    div.append(usersName);

    let usersAge = document.createElement('h1');
    usersAge.innerText = "User's age: " + user.age;
    div.append(usersAge);

    let main = document.getElementById('main_content');
    main.innerHTML = '';
    main.append(div);
}
