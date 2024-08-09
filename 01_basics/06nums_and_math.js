const score = 400.324 
console.log(score);

const newScore = new Number(403.574) // this time it is sure that variables newScore is storing a number, only.

console.log(newScore.toString().length);

console.log(newScore.toFixed(2))  // tofixed fucntion is used to decide kitne digit decimal ke bad number ke screen par show honge 

console.log(newScore.toPrecision(2)); // toPrecision function is used to print number according to number of digits we want but when we choose exact number of digits before decimal so it rounds off to the nearest integer value, so this function should be used wisely.

console.log(typeof newScore.toPrecision(2)); // toPrecision function gives output as string and not a number.

const hundreds = 1000000 // zeros's ki sankhya count karna tough hai toh we can use function toLocalstring

console.log(hundreds.toLocaleString('en-IN')); // although toLocalstring gives output in US standard format but we con convert it to Indian standard using ..... en-IN





