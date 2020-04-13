export default function (randomId, firstArgument, arithmeticSymbol, lastArgument, result) {

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
