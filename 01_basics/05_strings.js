const gameName = new String('Abhay P')

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


 const url = "https//abhay.com/abhay%20pandit"  // browser jo hai wo spaces ko nahi samjhta hai isliye abhay pandit ke beech me jo space hai udhar usne aapne hisab se %20 add kar diya

 // to remove %20 ya puri url ko hi change karna hai toh we use 

 url.replace('%20' , '-' ) // %20 ko replace kar diya dash(-) kar diya 

 url.includes('Abhay') // is function se hum ye pata laga sakte hai ki url me Abhay hai ki nahi 

 console.log(gameName.split(' '))  // split is a function which can be used to convert your string into an array or break it on basis of something , say (- dash) or ( space ) split does that for you.
