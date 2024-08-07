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




                                         //***********Operations*******//
    let value=3

    // console.log(2+2) //addition operation
    // console.log(2-2) // subtraction operation 
    // console.log(2*2) // multiplication operation
    // console.log(2**2) // ** used to raise power , here it is written to 2 to the power 2
    // console.log(2/4) // to find quotient 
    // console.log(2%4) // to find remainder 


    let str1="Hello"
    let str2=" Abhay"

    let str3=str1+str2

    console.log(str3)

    // console.log("1" + 2);
// console.log(1 + "2");      output--->12
// console.log("1" + 2 +2);   output---> 122
// console.log(1+2+"2");        output--->32
// console.log((3+4)*5%3);


//In above cases according to basic rules of mathematics output should have been something else but in JS rules are different, if first variable is of string type then rest other will also be treated as string and if last variable is string then the variables preceding will be operated according to rules of math and then the string will be printed


console.log(+"")  // + written before empty parenthesis convert it to boolean and boolean value of empty gets printed 
    console.log(+true)
    
    // Above method isn't preferred to convert to bool 



    //***********POSTFIX AND PREFIX OPERATOR**********//

    //POstfix
    let x=3
    let y=x++
    // x ki value toh 4 ho jayegi lekin wo y me assign nahi hui hogi toh y fir bhi 3 hi hoga 
    console.log(x) 

    //prefix

    let x1=4
    let y1=++x1
    // x ki value toh 5 ho jayegi toh y ki value bhi 5 hokar usme assign ho jayegi 
    console.log(y1)
    
    
    