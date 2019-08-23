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

					break;

				case 'π':

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

				case 'BS':
					let oldArr = field.value.split('');

					if( oldArr.includes(arithmeticSymbol, -2) ) {
						let removeArithmeticSymbol = oldArr.splice(-3);
						arithmeticSymbol = '';

						field.value = oldArr.join('');
					} 
					else if ( lastArgument === '' ) {
						let firstArgumentArr = firstArgument.split('');

						let removeLastSymbolField = oldArr.pop();
						let removeLastSymbolArgument = firstArgumentArr.pop();

						field.value = oldArr.join('');
						firstArgument = firstArgumentArr.join('');
					} else {
						let lastArgumentArr = lastArgument.split('');

						let removeLastSymbolField = oldArr.pop();
						let removeLastSymbolArgument = lastArgumentArr.pop();

						field.value = oldArr.join('');
						lastArgument = lastArgumentArr.join('');
					}
				
					break;

				case '=':

					field.value = "";
					result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
					field.value = result;

					firstArgument = '';
					lastArgument = '';
					arithmeticSymbol = '';
					arithmeticResult = true;

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

					}

					if ( field.value.indexOf(arithmeticSymbol) === -1 || !arithmeticSymbol ) {

						if ( firstArgument !== Math.PI || firstArgument !== Math.E ) {
							
							firstArgument === "" ? firstArgument = symbol : firstArgument += symbol;
							field.value += symbol;
						
						}
						
					} else {
						
						if ( firstArgument !== Math.PI || firstArgument !== Math.E ) {
	
							lastArgument === "" ? lastArgument = symbol : lastArgument += symbol;
							field.value += symbol;
							
						}

					}
			}
		}
		
	console.log(firstArgument)
	console.log(lastArgument)
	}

	function arithmeticOperations(firstArguments, lastArgument, arithmeticSymbol) {
		let result;
		// debugger

		switch (arithmeticSymbol) {
			case '+':
				return result = +firstArguments + +lastArgument;
			case '-':
				return result = +firstArguments - +lastArgument;
			case '*':
				return result = +firstArguments * +lastArgument;
			case '/':
				return result = +firstArguments / +lastArgument;
			case '^':
				return result = Math.pow(+firstArgument, +lastArgument);
			case '√':
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
