import model from './model';

export default function (e) {
	let symbol;
	e.preventDefault();
	
	
	if ( e.code === 'Numpad0' || e.code === 'Digit0' ) {
		symbol = '0';
	} else if ( e.code === 'Numpad1' || e.code === 'Digit1' ) {
		symbol = '1';
	} else if ( e.code === 'Numpad2' || e.code === 'Digit2' ) {
		symbol = '2';
	} else if ( e.code === 'Numpad3' || e.code === 'Digit3' ) {
		symbol = '3';
	} else if ( e.code === 'Numpad4' || e.code === 'Digit4' ) {
		symbol = '4';
	} else if ( e.code === 'Numpad5' || e.code === 'Digit5' ) {
		symbol = e.key;
	} else if ( e.code === 'Numpad6' || e.code === 'Digit6' ) {
		symbol = e.key;
	} else if ( e.code === 'Numpad7' || e.code === 'Digit7' ) {
		symbol = '7';
	} else if ( e.code === 'Numpad8' || e.code === 'Digit8' ) {
		symbol = '8';
	} else if ( e.code === 'Numpad9' || e.code === 'Digit9' ) {
		symbol = '9';
	} else if ( e.code === 'Backspace' ) {
		symbol = 'DEL';
	} else if ( e.code === 'Enter' || e.code === 'NumpadEnter' ) {
		symbol = '=';
	} else if ( e.code === 'NumpadAdd' || e.code === 'Equal' && e.code === 'ShiftLeft' ) {
		symbol = '+';
	} else if ( e.code === 'NumpadSubtract' || e.code === 'Minus' ) {
		symbol = '-';
	} else if ( e.code === 'NumpadDivide' || e.code === 'Slash' ) {
		symbol = '/';
	} else if ( e.code === 'NumpadMultiply' || e.code === 'Digit8' && e.code === 'ShiftLeft' ) {
		symbol = '*';
	} else if ( e.code === 'Digit6' && e.code === 'ShiftLeft' ) {
		symbol = '^';
	} else if ( e.code === 'KeyP' ) {
		symbol = 'π';
	} else if ( e.code === 'Digit5' && e.code === 'ShiftLeft' ) {
		symbol = '%';
	} else if ( e.code === 'NumpadDecimal' || e.code === 'Period' || e.code === 'Comma' ) {
		symbol = '.';
	} else if ( e.code === 'KeyE' ) {
		symbol = 'e';
	} else if ( e.code === 'KeyR' ) {
		symbol = '√';
	} else if ( e.code === 'Delete' ) {
		symbol = 'C';
	}

	model(symbol);
}
