'use strict';

function buildForm() {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let form = document.createElement('form');
    div.append(form);

    let inputValue = document.createElement('input');
    inputValue.setAttribute('type', 'text');
    inputValue.id = 'inputValue';
    inputValue.style.width = '300px';
    form.append(inputValue);

    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Search');
    button.setAttribute('onclick', 'getById()');
    form.append(button);

    main.append(div);
}
