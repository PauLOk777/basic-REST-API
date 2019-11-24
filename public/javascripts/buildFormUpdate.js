'use strict';

function buildFormUpdate() {
    let main = document.getElementById('main_content');
    main.innerHTML = '';

    let div = document.createElement('div');
    div.id = 'form_id';

    let h3 = document.createElement('h3');
    h3.innerText =
        "Enter properties of user and then click 'Update' to update real 	user";
    div.append(h3);

    let form = document.createElement('form');
    div.append(form);

    let h3Name = document.createElement('h3');
    h3Name.innerHTML = 'Update name';
    form.append(h3Name);

    let inputNameOld = document.createElement('input');
    inputNameOld.setAttribute('type', 'text');
    inputNameOld.id = 'nameOld';
    inputNameOld.style.width = '200px';
    inputNameOld.setAttribute('placeholder', "Enter user's name");
    form.append(inputNameOld);

    let span1 = document.createElement('span');
    span1.innerHTML = '===>';
    form.append(span1);

    let inputNameNew = document.createElement('input');
    inputNameNew.setAttribute('type', 'text');
    inputNameNew.id = 'nameNew';
    inputNameNew.style.width = '200px';
    inputNameNew.setAttribute('placeholder', "Enter user's name");
    form.append(inputNameNew);

    let h3Age = document.createElement('h3');
    h3Age.innerHTML = 'Update age';
    form.append(h3Age);

    let inputAgeOld = document.createElement('input');
    inputAgeOld.setAttribute('type', 'text');
    inputAgeOld.id = 'ageOld';
    inputAgeOld.style.marginBottom = '10px';
    inputAgeOld.style.width = '200px';
    inputAgeOld.setAttribute('placeholder', "Enter user's age");
    form.append(inputAgeOld);

    let span2 = document.createElement('span');
    span2.innerHTML = '===>';
    form.append(span2);

    let inputAgeNew = document.createElement('input');
    inputAgeNew.setAttribute('type', 'text');
    inputAgeNew.id = 'ageNew';
    inputAgeNew.style.marginBottom = '10px';
    inputAgeNew.style.width = '200px';
    inputAgeNew.setAttribute('placeholder', "Enter user's age");
    form.append(inputAgeNew);

    form.append(document.createElement('br'));

    let button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Update');
    button.setAttribute('onclick', 'updateUser();');
    form.append(button);

    main.append(div);
}
