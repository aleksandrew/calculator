export default function (firstArguments, lastArguments, result) {
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
