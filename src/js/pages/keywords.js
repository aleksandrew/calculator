import $ from 'jquery';

export default $(() => {
	let controlPanel = document.querySelector('.calculator__controller');
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

	if ( typeof localStorage.data !== "undefined" ) {
		load();
	}

	if ( historyField.children.length > 0 ) {
		clearBtn.setAttribute('style', 'display: flex')
	}

	controlPanel.addEventListener('click', clickKey);
	window.addEventListener('keydown', pressKey);
	historyField.addEventListener('click', addOldResult);
	clearBtn.addEventListener('click', clearResult);

	function clearResult() {
		let child = historyField.children;
		let childrenLength = child.length; 

		clearBtn.removeAttribute('style');

		localStorage.clear();
		
		for (let i = 0; i < childrenLength; i++ ) {
			historyField.removeChild(child[0]);
		}
	}

	function clickKey(e) {
		let symbol = e.target.textContent;
		
		viewModel(symbol);
	}
	
	function pressKey(e) {
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
			symbol = 'BS';
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

		viewModel(symbol);
	}

	function addOldResult(e) {
		let operation = e.target;

		console.log(operation)
		
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
	
	function viewModel(symbol) {
		
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
						clearBtn.setAttribute('style', 'display: flex')
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

	function arithmeticOperations (firstArgument, lastArgument, arithmeticSymbol) {
		let result;
		// debugger

		switch (arithmeticSymbol) {
			case '+':
				result = +firstArgument + +lastArgument;

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result; 
			case '-':
				result = +firstArgument - +lastArgument

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result;
			case '*':
				result = +firstArgument * +lastArgument;

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result;
			case '/':
				result = +firstArgument / +lastArgument; 

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result;
			case '^':
				result = Math.pow(+firstArgument, +lastArgument);

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result;
			case '√':
				result = Math.pow(+lastArgument, 1/+firstArgument)

				if ( field.value.indexOf('.') !== -1 || field.value.indexOf('π') !== -1 || field.value.indexOf('e') !== -1 ) {
					result = decimalPlace (firstArgument, lastArgument, result);
				}

				return result;
		} 

	}
	
	function addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result) {

		historyField.insertAdjacentHTML('afterbegin', 
			`<p id="${randomId}" class="history"> 
				<span class="operation btn--hover">
					<span class="first-argument">${firstArgument}</span> 
					<spas class="arithmetic-symbol">${arithmeticSymbol}</spas>
					<span class="last-argument">${lastArgument}</span>
				</span>
				<span>=</span>
				<span class="result btn--hover">${result}</span>
			</p>`
		);

	}
	
	function save() {
		let saveArr = [];
		
		for ( let i = 0; i < historyField.children.length; i++ ) {

			let id = historyField.children[i].id;
			let firstArgument = historyField.children[i].querySelector('.first-argument').textContent;
			let arithmeticSymbol = historyField.children[i].querySelector('.arithmetic-symbol').textContent;
			let lastArgument = historyField.children[i].querySelector('.last-argument').textContent;
			let result = historyField.children[i].querySelector('.result').textContent;

			let saveObj = {
				id: id,
				firstArgument: firstArgument,
				arithmeticSymbol: arithmeticSymbol,
				lastArgument: lastArgument,
				result: result
			};

			saveArr.push(saveObj);

		}

		localStorage.clear();
		localStorage.setItem('data', JSON.stringify ({
			data: saveArr
		}))
	}

	function load () {
		let obj = JSON.parse(localStorage.getItem('data'));
		let key = obj.data.length - 1;

		for ( let i = 0; i <= key; key-- ) {
			let id = obj.data[key].id;
			let firstArgument = obj.data[key].firstArgument;
			let arithmeticSymbol = obj.data[key].arithmeticSymbol;
			let lastArgument = obj.data[key].lastArgument;
			let result = obj.data[key].result;

			addOpertion (id, firstArgument, arithmeticSymbol, lastArgument, result);
		}

	}

	function decimalPlace (firstArguments, lastArguments, result) {
		let firstArgumentPoint = firstArguments.toString().includes('.') ? firstArguments.toString().split('.').pop().length : 0;
		let lastArgumentPoint = lastArguments.toString().includes('.') ? lastArguments.toString().split('.').pop().length : 0;
	
		let resultArr = result.toString().split('');
		let resultPointPosition = result.toString().split('').indexOf('.');

		if ( firstArgumentPoint > 5 ) {
			firstArgumentPoint = 5;
		}

		if ( lastArgumentPoint > 5 ) {
			lastArgumentPoint = 5;
		}

		firstArgumentPoint >= lastArgumentPoint ?	resultArr.splice(resultPointPosition+1+firstArgumentPoint) : resultArr.splice(resultPointPosition+1+lastArgumentPoint);

		return resultArr.join('');

	}

})
