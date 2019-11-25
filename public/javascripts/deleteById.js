'use strict';

async function deleteById() {
    let _id = document.getElementById('inputValue').value;
    if (_id == '') {
        _id = 'error';
    }

    const response = await fetch('/api/users/' + _id, { method: 'DELETE' });

    if (response.ok) {
        const result = await response.json();
        writeUserGetDel(result);

        let main = document.getElementById('main_content');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'User was deleted';
        main.prepend(h1);

        return;
    }

    alert('Invalid id');
    console.log('Invalid id');
}
