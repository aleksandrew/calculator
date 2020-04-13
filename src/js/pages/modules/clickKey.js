import viewModel from './model';

export default function (e) {

	let symbol = e.target.textContent;
	
	viewModel(symbol);

}
