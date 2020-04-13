let firstArgument = '';
let lastArgument = '';
let arithmeticSymbol = false;

export default function (e) {

	let operation = e.target;

	if ( operation.classList.contains('operation') || operation.parentElement.classList.contains('operation') ) {
		
		if ( operation.parentElement.classList.contains('operation') ) {

			operation = operation.parentElement;

		}
		
		firstArgument = operation.querySelector('.first-argument').textContent;
		arithmeticSymbol = operation.querySelector('.arithmetic-symbol').textContent;
		lastArgument = operation.querySelector('.last-argument').textContent;

		field.value = `${firstArgument} ${arithmeticSymbol} ${lastArgument}`;
	
	}

	if ( operation.classList.contains('result') ) {
		
		firstArgument = operation.textContent;

		field.value = `${firstArgument}`;
	
	}
}
