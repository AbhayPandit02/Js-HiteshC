
     // JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
//Primitive data type
    //primitive datatypes are call by refrence ie there original address isn't given there copy is given 
// 7- categories : String , Number , Boolean , null , undefined , Symbol (kisi bhi value of unique banane ke liye symbol use hota hai ), Bigint

const score = 100 
const scoreValue = 100.3 // Js me float ka koi concept nahi hai 

const isLoggedIn = false
const outsideTemp = null 


const id = Symbol('123')
const anotherId =Symbol("123")

console.log(id===anotherId) //output wil be fALSE


// Refrencetype or non-primitive

// ye saari values wo hai jinka memory me refrence directly allocate kiya ja sakta hai 

// Arrays , Objects , Functions


const heros = ["shaktiman" , "nagraj" , "doga"] //array

{    // curly braces wale object hote hai 
     // key value pair me object hote hai 

     name: 'Abhay';
     age:22;

}


const myFunction = function(){
    console.log("Hellow World")

}

//Jitne bhi non primitive hai unka dataype  Object hi aata hai 

// function of return type objectfunction hota hai 

console.log(typeof myFunction)




//****************MEMORIES ***************//

// Stack memory is used where Primitive datatypes are use 
// Heap memory is used where where non- primitive datatypes are used

// Jab bhi stack memory use hoti hai tab, jo bhi variable aapne declare kara hai uski ek copy milti hai 
// jab bhi Heap memory use hoti hai tab, humko milta hai refrence toh jo bhi change hoga wo directly original value me hoga 


let myYtname="Abhay"
let anothername = myYtname
// anothername= "alpha"

console.log(myYtname)
console.log(anothername)


let userOne ={

    email: "alpha@gmail.com" ,
    upiId: "123@ibl"

}

let userTwo = userOne 

userTwo.email="Gogo@google.com"

console.log(userOne.email)
console.log(userTwo.email)