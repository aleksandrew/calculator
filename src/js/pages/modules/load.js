import addOperation from './addOperation';

export default function () {
	let obj = JSON.parse(localStorage.getItem('data'));
	let key = obj.data.length - 1;

	for ( let i = 0; i <= key; key-- ) {
		let id = obj.data[key].id;
		let firstArgument = obj.data[key].firstArgument;
		let arithmeticSymbol = obj.data[key].arithmeticSymbol;
		let lastArgument = obj.data[key].lastArgument;
		let result = obj.data[key].result;

		addOperation (id, firstArgument, arithmeticSymbol, lastArgument, result);
	}

}
