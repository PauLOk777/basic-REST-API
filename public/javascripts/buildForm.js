'use strict';

function buildForm(method) {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let h3 = document.createElement('h3');
    if (method[0] == 'd') {
        h3.innerHTML = 'Delete user by id';
    } else {
        h3.innerHTML = 'Search user by id';
    }
    div.append(h3);

    let form = document.createElement('form');
    div.append(form);

    let inputValue = document.createElement('input');
    inputValue.setAttribute('type', 'text');
    inputValue.id = 'inputValue';
    inputValue.style.width = '300px';
    inputValue.setAttribute('placeholder', "Enter user's id");
    form.append(inputValue);

    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Search');
    button.setAttribute('onclick', method);
    form.append(button);

    main.append(div);
}
