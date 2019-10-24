'use strict'

function changeHr(obj) {
	let tempColor = obj.colorChange.value;
	let color = '';
	for (let i = 0; i < tempColor.length; i++) {
		if(tempColor[i] == 'C') break;
		color += tempColor[i];
	}
	line.color = color;
	line.width = `${obj.widthChange.value}%`;
	line.size = obj.thickness.value;
}

function resetChanges(obj) {
	line.color = 'blue';
	line.width = '100%';
	line.size = '1px';
}