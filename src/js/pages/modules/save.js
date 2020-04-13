let historyField = document.querySelector('#historyField');

export default function() {

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
