'use strict';

function changeHr(obj) {
    let line_ = document.getElementById('line');
    let tempColor = obj.colorChange.value;
    let color = '';
    for (let i = 0; i < tempColor.length; i++) {
        if (tempColor[i] == 'C') break;
        color += tempColor[i];
    }
    line_.color = color;
    line_.width = `${obj.widthChange.value}%`;
    line_.size = obj.thickness.value;
}

function resetChanges(obj) {
    let line_ = document.getElementById('line');
    line_.color = 'blue';
    line_.width = '100%';
    line_.size = '1px';
}
