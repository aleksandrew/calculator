export default function () {
	let child = historyField.children;
	let childrenLength = child.length; 

	clearBtn.removeAttribute('style');

	localStorage.clear();
	
	for (let i = 0; i < childrenLength; i++ ) {
		historyField.removeChild(child[0]);
	}
}
