import $ from 'jquery';

export default $(() => {
	let controlPanel = document.querySelector('.calculator__controller');
	let field = document.querySelector('#field');
	let historyField = document.querySelector('#historyField');

	let firstArgument = '';
	let lastArgument = '';
	let result = '';
	let arithmeticSymbol = false;
	let arithmeticResult = false;
	let arithmeticConstPi = false;
	let arithmeticConstExp = false;
	let arithmeticPercent = false;

	if ( typeof localStorage.data !== "undefined") {
		load();
	}

	controlPanel.addEventListener('click', pressKey);

	function pressKey(e) {
		let symbol = e.target.textContent;
		
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

				case '=' && '1':

					let randomId = parseInt( Math.random() * 10000)	

					if ( firstArgument !== '' && firstArgument === Math.PI || firstArgument === Math.E ) {

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
							
						} else if ( arithmeticConstExp && lastArgument === '' ) {
							
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
	
	function addOpertion (randomId, firstArgument, arithmeticSymbol, lastArgument, result) {

		historyField.insertAdjacentHTML('afterbegin', 
			`<p id="${randomId}" class="history"> 
				<span class="operation">
					<span class="first-argument">${firstArgument}</span> 
					<spas class="arithmetic-symbol">${arithmeticSymbol}</spas>
					<span class="last-argument">${lastArgument}</span>
				</span>
				<span>=</span>
				<span class="result">${result}</span>
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

		for ( let key in obj.data ) {
			let id = obj.data[key].id;
			let firstArgument = obj.data[key].firstArgument;
			let arithmeticSymbol = obj.data[key].arithmeticSymbol;
			let lastArgument = obj.data[key].lastArgument;
			let result = obj.data[key].result;

			addOpertion (id, firstArgument, arithmeticSymbol, lastArgument, result);
		}

	}

})

// let data = load ();

// for ( var i = 0; i < data.addField.length; i++) {
// 	var listItem = createElem (data.addField[i], data.addField[i].saveArr.saveObj[1].checked);
// 	addField.appendChild(listItem);
// 	bindTaskEvents(listItem);
// }
