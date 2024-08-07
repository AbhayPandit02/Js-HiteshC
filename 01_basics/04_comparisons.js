//**********COMPARISONS *//

console.log(null>0)
console.log(null==0)
console.log(null>=0)

// Output will be false(1)  false(2)  true(3)  Because the equality check == and comparison >,<,>=,<= work differently, Comaprison convert null to a number, treating it as zero, hence (1) becomes false but (3) is true 

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

//Strict check denoted by === three assignment signs, it along with, value also checks datatype it values are same but data type are different then it won't consider them equal.

console.log("2"===2)




