const fs = require('fs');

const input = fs.readFileSync('./input.txt');

function calc() {


	let temp=0;
	const inputArray = input.toString();
	console.time('santa')
	for(let i=0;i<inputArray.length;i++){
		if(inputArray[i]==='('){
			temp++;
		}else if(inputArray[i]===')'){
			temp--;
		}
		if(temp===-1){
			console.timeEnd('santa')
			return i+1;
		}
	}
	console.timeEnd('santa')
	return temp;
}

console.log(calc());