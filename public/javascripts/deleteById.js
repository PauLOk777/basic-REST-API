'use strict';

async function deleteById() {
    let _id = document.getElementById('inputValue').value;
    if (_id == '') {
        _id = 'error';
    }

    const response = await fetch('/api/users/' + _id, { method: 'DELETE' });

    if (response.ok) {
        const result = await response.json();
        writeUser(result);

        let main = document.getElementById('main-content');
        main.prepend(
            (document.createElement('h1').innerHTML = 'User was deleted')
        );

        return;
    }

    alert('Invalid id');
}
