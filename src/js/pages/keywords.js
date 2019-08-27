import $ from 'jquery';

export default $(() => {
	let controlPanel = document.querySelector('.calculator__controller');
	let field = document.querySelector('#field');

	let firstArgument = '';
	let lastArgument = '';
	let result = '';
	let arithmeticSymbol = false;
	let arithmeticResult = false;
	let arithmeticConstPi = false;
	let arithmeticConstExp = false;
	let arithmeticPercent = false;

	controlPanel.addEventListener('click', pressKey);

	function pressKey(e) {
		let fieldValue = field.value;
		let symbol = e.target.textContent;
		// arithmeticOperations = true;
		
 		if ( typeof symbol !== 'undefined' ) {
			
			switch (symbol) {

				case '+':

					if ( !arithmeticSymbol ) {

						if ( arithmeticResult ) {
							firstArgument = result;
							lastArgument = "";
							arithmeticResult = false;
							
							arithmeticSymbol = "+";
							field.value += " + ";
						} else {
							arithmeticSymbol = "+";
							field.value += " + ";
						}
					
					}
					
					break;

				case '-':
					
					if ( firstArgument === '' && !arithmeticResult ) {
						firstArgument += '-';
						field.value += '-';
					} 

					if ( lastArgument === '' && arithmeticSymbol ) {
						lastArgument += '-';
						field.value += '-';
					} 

					if ( !arithmeticSymbol ) {

						if ( arithmeticResult ) {
							firstArgument = result;
							lastArgument = "";
							arithmeticResult = false;
							
							arithmeticSymbol = "-";
							field.value += " - ";
						} else if ( field.value !== "-" ) {							
							arithmeticSymbol = "-";
							field.value += " - ";
						}
						
					}

						break;
						
				case '*':

					if ( !arithmeticSymbol ) {
					
						if ( arithmeticResult ) {
							firstArgument = result;
							lastArgument = "";
							arithmeticResult = false;
							
							arithmeticSymbol = "*";
							field.value += " * ";
						} else {
							arithmeticSymbol = "*";
							field.value += " * ";
						}
					
					}
						
					break;

				case '/':

					if ( !arithmeticSymbol ) {
					
						if ( arithmeticResult ) {
							firstArgument = result;
							lastArgument = "";
							arithmeticResult = false;
							
							arithmeticSymbol = "/";
							field.value += " / ";
						} else {
							arithmeticSymbol = "/";
							field.value += " / ";
						}
					
					}					
						
					break;

				case '^':

					if ( !arithmeticSymbol ) {
						
						if ( arithmeticResult ) {
							firstArgument = result;
							lastArgument = "";
							arithmeticResult = false;
							
							arithmeticSymbol = "^";
							field.value += " ^ ";
						} else {
							arithmeticSymbol = "^";
							field.value += " ^ ";
						}
					
					}

					break;

				case '√':

					if ( !arithmeticSymbol ) {
						
						if ( firstArgument === '' && !arithmeticResult ) {
							
							firstArgument = '2';
							arithmeticSymbol = "√";
							
							field.value += "√ ";

						} else if ( firstArgument !== '') {

							arithmeticSymbol = "√";
							field.value += " √ ";

						} else if ( arithmeticResult ) {

							firstArgument = '2';
							arithmeticSymbol = "√";
							
							field.value = "√ ";

							arithmeticResult = false;

						}

					}

					break;

				case '.':

					if ( arithmeticResult ) {
						firstArgument = result + '.';
						lastArgument = "";
						field.value += ".";
						arithmeticResult = false;
					}

					if ( field.value.indexOf(arithmeticSymbol) === -1 || !arithmeticSymbol ) {
						
						if ( firstArgument.indexOf('.') === -1 ) {
							firstArgument === "" ? firstArgument = '.' : firstArgument += '.';
							field.value += '.';
						}

					}	else {
						if ( lastArgument.indexOf('.') === -1 ) {
							lastArgument === "" ? lastArgument = '.' : lastArgument += '.';
							field.value += '.';
						}
					}

					break;

				case 'C':

					field.value = '';
					firstArgument = '';
					lastArgument = '';
					result = '';
					arithmeticSymbol = false;
					arithmeticResult = false;
					arithmeticConstExp = false;
					arithmeticConstPi = false;
					arithmeticPercent = false;

					break;

				case 'π':
					
					if ( arithmeticResult ) {

						field.value = symbol;
						firstArgument = Math.PI;
						lastArgument = '';
						
						arithmeticConstPi = true;

						arithmeticSymbol = false;
						arithmeticResult = false;
						arithmeticConstExp = false;
						arithmeticPercent = false;						

					}

					if ( !arithmeticResult && !arithmeticConstPi ) {

						if ( field.value.indexOf(arithmeticSymbol) === -1 || !arithmeticSymbol ) {

							if ( firstArgument === '' ) {
								
								firstArgument = Math.PI;
								field.value += symbol;

								arithmeticConstPi = true;

							}
						
						} else {
							
							if ( lastArgument === '' ) {
								
								lastArgument = Math.PI;
								field.value += symbol;

								arithmeticConstPi = true;

							} 

						}

					}

					break;

				case 'e':
					
					if ( arithmeticResult ) {

						field.value = symbol;
						firstArgument = Math.E;
						lastArgument = '';
						
						arithmeticConstExp = true;

						arithmeticSymbol = false;
						arithmeticResult = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;						

					}

					if ( !arithmeticResult && !arithmeticConstExp ) {

						if ( field.value.indexOf(arithmeticSymbol) === -1 || !arithmeticSymbol ) {

							if ( firstArgument === '' ) {

								
								firstArgument = Math.E;
								field.value += symbol;

								arithmeticConstExp = true;

							} 
						
						} else {
							
							if ( lastArgument === '' ) {

							
								lastArgument = Math.E;
								field.value += symbol;

								arithmeticConstExp = true;

							} 

						}
					}

					break;

				case '%':

					if ( !arithmeticResult && !arithmeticPercent ) {

						if ( field.value.indexOf(arithmeticSymbol) === -1 || !arithmeticSymbol ) {

							if ( firstArgument !== '' ) {

								firstArgument = Math.floor( +firstArgument ) / 100;
								field.value += symbol;
								
								arithmeticPercent = true;
							
							}

						} else {
							
							if ( lastArgument !== '' ) {

								lastArgument = Math.floor( +lastArgument ) / 100;
								field.value += symbol;
								
								arithmeticPercent = true;

							} 

						}
					
					}

					break;

				case 'BS':
					let oldArr = field.value.split('');

					if ( oldArr.includes(arithmeticSymbol, -2) ) {

						if ( arithmeticSymbol === '√' && firstArgument === '2' ) {

							firstArgument = '';
							field.value = '';

							arithmeticSymbol = false;

						} else {
							
							let removeArithmeticSymbol = oldArr.splice(-3);
							arithmeticSymbol = false;
							
							field.value = oldArr.join('');
	
						}

					} else if ( oldArr.includes('%', -1) ) {
						
						if ( !arithmeticSymbol ) {

							let removeLastSymbolField = oldArr.pop();

							firstArgument = +(firstArgument) * 100;
							field.value = oldArr.join('');

							arithmeticPercent = false;

						} else {

							let removeLastSymbolField = oldArr.pop();

							lastArgument = +(lastArgument) * 100;
							field.value = oldArr.join('');

							arithmeticPercent = false;
						}
						
					} else if ( lastArgument === '' ) {
						
						if ( firstArgument === Math.PI || firstArgument === Math.E ) {
							
							firstArgument = '';
							field.value = '';

							arithmeticConstExp = false; 
							arithmeticConstPi = false; 

						} else {

							let firstArgumentArr = firstArgument.split('');
							
							let removeLastSymbolField = oldArr.pop();
							let removeLastSymbolArgument = firstArgumentArr.pop();
							
							field.value = oldArr.join('');
							firstArgument = firstArgumentArr.join('');
						}
						
					} else {
						
						if ( lastArgument === Math.PI || lastArgument === Math.E ) {
							
							lastArgument = '';
							
							let lastArgumentArr = lastArgument.split('');
							
							let removeLastSymbolField = oldArr.pop();
						
							field.value = oldArr.join('');
							lastArgument = lastArgumentArr.join('');

							arithmeticConstExp = false; 
							arithmeticConstPi = false; 

						} else {

							let lastArgumentArr = lastArgument.split('');
							
							let removeLastSymbolField = oldArr.pop();
							let removeLastSymbolArgument = lastArgumentArr.pop();
						
							field.value = oldArr.join('');
							lastArgument = lastArgumentArr.join('');

						}

					}
				
					break;

				case '=':

					if ( arithmeticPercent && lastArgument === '' ) {
					
						result = firstArgument;
						field.value = result;
	
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
					
					} else if ( arithmeticConstPi && lastArgument === '' ) {
					
						result = firstArgument;
						field.value = result;
	
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
					
					} else if ( arithmeticConstExp && lastArgument === '' ) {
					
						result = firstArgument;
						field.value = result;
	
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
					
					} else {

						result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
						field.value = result;
						
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
					
					}

					break;

				default:
					
					if ( arithmeticResult ) {

						field.value = '';
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = false;
						arithmeticResult = false;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;						

					}

					if ( !arithmeticSymbol && firstArgument === Math.PI && lastArgument === '' ) {
						
						arithmeticSymbol = '*';
						field.value += ' * ';

					}

					if ( !arithmeticSymbol && firstArgument === Math.E && lastArgument === '' ) {
						
						arithmeticSymbol = '*';
						field.value += ' * ';

					}

					if ( !arithmeticSymbol && !arithmeticPercent ) {

						firstArgument === "" ? firstArgument = symbol : firstArgument += symbol;
						field.value += symbol;
						
					} else if ( firstArgument === Math.PI || firstArgument === Math.E ) {
						
						lastArgument === "" ? lastArgument = symbol : lastArgument += symbol;
						field.value += symbol;

					} else {

						if ( arithmeticSymbol || !arithmeticPercent && lastArgument !== Math.PI && lastArgument !== Math.E ) {

							lastArgument === "" ? lastArgument = symbol : lastArgument += symbol;
							field.value += symbol;
						
						}
							
					}
			}
		}
		
	console.log(firstArgument)
	console.log(lastArgument)
	}

	function arithmeticOperations (firstArguments, lastArgument, arithmeticSymbol) {
		let result;
		debugger

		switch (arithmeticSymbol) {
			case '+':
				// result = +firstArguments + +lastArgument;
				// decimalPlace(firstArguments, lastArgument, result)
				return result = +firstArguments + +lastArgument;
			case '-':
				// result = +firstArguments - +lastArgument;
				return result = +firstArguments - +lastArgument;
			case '*':
				// result = +firstArguments * +lastArgument;
				return result = +firstArguments * +lastArgument;
			case '/':
				// result = +firstArguments / +lastArgument;
				return result = +firstArguments / +lastArgument; 
			case '^':
				// result = Math.pow(+firstArgument, +lastArgument);
				return result = Math.pow(+firstArgument, +lastArgument); 
			case '√':
				// result = Math.pow(+lastArgument, 1/+firstArgument);
				return result = Math.pow(+lastArgument, 1/+firstArgument); 
		} 
	}
	

	// class Calculator {
	// 	constructor (initial) {
	// 		this.counter = initial;
	// 	}

	// 	sum(value) {
	// 		return this.value = this.counter + value; 
	// 	}
	// }

	// let c = new Calculator(2);

	// console.log(c.sum(2))
	
});

// function decimalPlace (firstArguments, lastArguments, number) {
// 	let firstArgumentPoint = firstArguments.toString().includes('.') ? firstArguments.toString().split('.').pop().length : 0;
// 	let lastArgumentPoint = lastArguments.toString().includes('.') ? lastArguments.toString().split('.').pop().length : 0;

// 	console.log(firstArgumentPoint);
// 	console.log(lastArgumentPoint);

// 	if ( firstArguments >= lastArguments ) {

// 		number = 

// 	}
// }
