import arithmeticOperations from './arithmeticOperation';
import addOpertion from './addOperation';
import save from './save';

let field = document.querySelector('#field');
let historyField = document.querySelector('#historyField');
let clearBtn = document.querySelector('#clearBtn');

let firstArgument = '';
let lastArgument = '';
let result = '';
let arithmeticSymbol = false;
let arithmeticResult = false;
let arithmeticConstPi = false;
let arithmeticConstExp = false;
let arithmeticPercent = false;

export default function (symbol) {
		
	if ( typeof symbol !== 'undefined' ) {
		
		switch (symbol) {

			case '+':

				if ( arithmeticSymbol && lastArgument !== '' ) {
					
					result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
					field.value = result;
					
					addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
					save();
					
					firstArgument = '';
					lastArgument = '';
					arithmeticSymbol = '';
					arithmeticResult = true;
					arithmeticConstExp = false;
					arithmeticConstPi = false;
					arithmeticPercent = false;

				}

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

				if ( arithmeticSymbol && lastArgument !== '' ) {
					
					result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
					field.value = result;
					
					addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
					save();
					
					firstArgument = '';
					lastArgument = '';
					arithmeticSymbol = '';
					arithmeticResult = true;
					arithmeticConstExp = false;
					arithmeticConstPi = false;
					arithmeticPercent = false;

				}
				
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

				if ( arithmeticSymbol && lastArgument !== '' ) {
					
					result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
					field.value = result;
					
					addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
					save();
					
					firstArgument = '';
					lastArgument = '';
					arithmeticSymbol = '';
					arithmeticResult = true;
					arithmeticConstExp = false;
					arithmeticConstPi = false;
					arithmeticPercent = false;

				}

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

				if ( arithmeticSymbol && lastArgument !== '' ) {
					
					result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
					field.value = result;
					
					addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
					save();
					
					firstArgument = '';
					lastArgument = '';
					arithmeticSymbol = '';
					arithmeticResult = true;
					arithmeticConstExp = false;
					arithmeticConstPi = false;
					arithmeticPercent = false;

				}

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

							firstArgument = +firstArgument / 100;
							field.value += symbol;
							
							arithmeticPercent = true;
						
						}

					} else {
						
						if ( lastArgument !== '' ) {

							lastArgument = +lastArgument / 100;
							field.value += symbol;
							
							arithmeticPercent = true;

						} 

					}
				
				}

				break;

			case 'DEL':

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

				let randomId = parseInt( Math.random() * 10000);

				if ( firstArgument !== '' && lastArgument !== '' || firstArgument === Math.PI || firstArgument === Math.E ) {

					if ( arithmeticPercent && lastArgument === '' ) {
						
						result = firstArgument;
						field.value = result;
						
						addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
						save();
						
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
						
					} else if ( arithmeticConstPi && lastArgument === '' ) {
						
						result = firstArgument;
						field.value = decimalPlace (firstArgument, lastArgument, result);
						result = field.value;
						arithmeticSymbol = '';
						lastArgument = '';
						
						addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
						save();
						
						firstArgument = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
						
					} else if ( arithmeticConstExp && lastArgument === '' ) {
						
						result = firstArgument;
						field.value = decimalPlace (firstArgument, lastArgument, result);
						result = field.value;
						arithmeticSymbol = '';
						lastArgument = '';
						
						addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
						save();
						
						firstArgument = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
						
					} else {
						
						result = arithmeticOperations(firstArgument, lastArgument, arithmeticSymbol);
						field.value = result;
						
						addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result);
						save();
						
						firstArgument = '';
						lastArgument = '';
						arithmeticSymbol = '';
						arithmeticResult = true;
						arithmeticConstExp = false;
						arithmeticConstPi = false;
						arithmeticPercent = false;
						
					}
				}

				if ( historyField.children.length > 0 ) {
					clearBtn.setAttribute('style', 'display: flex; font-size: 1.1rem;	width: 50px;');
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
}
