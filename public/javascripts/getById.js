'use strict';

async function getById() {
    let _id = document.getElementById('inputValue').value;
    if (_id == '') {
        _id = 'error';
    }

    const response = await fetch('/api/users/' + _id);

    if (response.ok) {
        const result = await response.json();
        writeUser(result);
        return;
    }

    alert('Invalid id');
    console.log('Invalid id');
}
