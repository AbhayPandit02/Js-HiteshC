const gameName = new String('AbhayP')

console.log(gameName.length) //length of the string 
console.log(gameName.toUpperCase()) // converts string to uppercase
console.log(gameName.charAt(2)) // this function allows us to get the char at some certain index
console.log(gameName.indexOf('P'))  // this function allows us to get the index of some certain char 


const newString = gameName.substring(0,4) // ab ye ek substring create kar dega jiak start aur end point humne ise de diya hai lekin jo last point hai (4) wo includ enhai hoga iska start point negative kabhi nahi ho sakta 

 console.log(newString)

 const anotherString = gameName.slice(-6 , 4) // ye reverse start karega 

 console.log(anotherString)


 const newStringOne = '       AbhayP      ' // itni saari space mujhe nahi chaiye oth maii trim function use karunga toh jo print hoga wo without itni sari unnecessary space ke hoga 

 console.log(newStringOne)
 console.log(newStringOne.trim())


 