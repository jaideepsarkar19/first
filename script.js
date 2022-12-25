//code of Array of ojects run with different LOOP statements 
let obj=[
    {"person":"Name 1","age":"2","company":"Guvi"},
  {"person":"Name 2","age":"7","company":"GuviGeek"},
  {"person":"Name 3","age":"10","company":"Guvi Geek Networks"}
   ]
   //for loop iterate over array of objects
  
    for(i=0;i<obj.length;i++)
   console.log(`Name: ${obj[i].person} of Age:${obj[i].age} works in ${obj[i].company}`)
  
  //forEach loop  over array of objects
   obj.forEach(data=>{
         console.log(`Name: ${data.person} of Age:${data.age} works in ${data.company}`)})
  
  //for of loop
   for( let arr of obj)
   {console.log(`Name: ${arr.person} of Age:${arr.age} works in ${arr.company}`)}
  
  //for in loop
  for(let arr2 in obj)
  {console.log(`Name: ${obj[arr2].person} of Age:${obj[arr2].age} works in ${obj[arr2].company}`)}
  
  //OUTPUT of above codes in nodejs terminal below shown
  
// NPS D:\JAVASCRIPT> node script.js
// Name: Name 1 of Age:2 works in Guvi
// Name: Name 3 of Age:10 works in Guvi Geek Networks
// Name: Name 1 of Age:2 works in Guvi
// Name: Name 2 of Age:7 works in GuviGeek
// Name: Name 3 of Age:10 works in Guvi Geek Networks
// Name: Name 1 of Age:2 works in Guvi
// Name: Name 2 of Age:7 works in GuviGeek
// Name: Name 3 of Age:10 works in Guvi Geek Networks
// Name: Name 1 of Age:2 works in Guvi
// Name: Name 2 of Age:7 works in GuviGeek
// // Name: Name 3 of Age:10 works in Guvi Geek Networks