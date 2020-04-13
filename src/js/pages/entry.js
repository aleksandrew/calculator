import $ from 'jquery';
import load from './modules/load';
import clickKey from './modules/clickKey';
import pressKey from './modules/pressKey';
import addOldResult from './modules/addOldResult';
import clearResult from './modules/clearResult';

export default $(() => {
	let controlPanel = document.querySelector('.calculator__controller');
	let historyField = document.querySelector('#historyField');
	let clearBtn = document.querySelector('#clearBtn');

	if ( typeof localStorage.data !== "undefined" ) {
		load();
	}

	if ( historyField.children.length > 0 ) {
		clearBtn.setAttribute('style', 'display: flex; font-size: 1.1rem;	width: 50px;')
	}

	controlPanel.addEventListener('click', clickKey);
	window.addEventListener('keydown', pressKey);
	historyField.addEventListener('click', addOldResult);
	clearBtn.addEventListener('click', clearResult);

})
