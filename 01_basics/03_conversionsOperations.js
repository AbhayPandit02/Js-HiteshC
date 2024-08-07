let score = null

console.log(typeof score)

// here we know the value assigned to score variable is number, so it's type will be number but sometimes the data coming from frontend can be of form string or any other data type that's why we have to check what's the data type

// if the variable score is assigned a value that is string it will give type as string

// To convert a string back to number we use 'Number' keyword (N of Number should be in uppercase)

let valueinnumber = Number(score) //This converted string to nummber and if String keyword is used it will convert number to string.


console.log(typeof valueinnumber)


// had score's value been 33abc then too typeof valueinnumber would have been a number but it actually isn't a number and if we print the value of valueinnumber it will give Nan(NOT A NUMBER as output) so you need to keep a check on this as well

// if score's value is null then typeof valueinnumber will be number and it's value will be zero 


// if score's value is some string, say, abhay then typeof valueinnumber will be NaN as it can't be converted to a string.

// for boolean ----> true=1 and false= 0 , ""-->empty string ka boolean value will be zero , "abhay"--> boolean value will be true 
