'use strict';

function buildFormAdd() {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let h3 = document.createElement('h3');
    h3.innerText =
        "Enter properties of user and then click 'Add' to add new user";
    div.append(h3);

    let form = document.createElement('form');
    div.append(form);

    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.id = 'name';
    inputName.style.width = '200px';
    inputName.setAttribute('placeholder', "Enter user's name");
    form.append(inputName);

    let inputAge = document.createElement('input');
    inputAge.setAttribute('type', 'text');
    inputAge.id = 'age';
    inputAge.style.width = '200px';
    inputAge.setAttribute('placeholder', "Enter user's age");
    form.append(inputAge);

    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Add');
    button.setAttribute('onclick', 'addUser();');
    form.append(button);

    main.append(div);
}
