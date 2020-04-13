import decimalPlace from './decimalPlace';

export default function (firstArgument, lastArgument, arithmeticSymbol) {
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
			result = +firstArgument - +lastArgument;

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
