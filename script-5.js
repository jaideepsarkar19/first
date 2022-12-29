
//Q. no 1a
// Anonymous function  to return array of odd nos
let arr=[1,2,3,4,5,6,7,8,9]
let odd=function(nos){    //varible for function return
    let oddnos=[]        //declare empty array to hold odd nos
   for(let i of nos)
      if( nos[i]%2!=0)
       oddnos.push(nos[i]); //push odd elements to oddnos array
    return (oddnos);
   }
 console.log(odd(arr));
 //OUTPUT
 //[1,3,5,7,9]
 
//Q,no-3a
//Arrpw function to get odd nos in array
let arr=[1,2,3,4,5,6,7,8,9]
let odd=(nos)=>{
    let oddnos=[]
   for(let i of nos)
      if( nos[i]%2!=0)
       oddnos.push(nos[i-1]);
    return (oddnos);
   }
 console.log(odd(arr));row function to return array of odd nos 

 //PPOTPUT -  1,3,4,7,9]

 //Q no-1c
  //Sum of all numbers in an array
  let arr=[1,2,3,4,5];
  let total=function(arr){
  let sum=0;                   // sum variable initialize to 0
  for(let i=0;i<arr.length;i++) //for loop
  { sum=sum+arr[i];}       //adding each array elements to sum after iteration
  return (sum);}
  console.log(total(arr))

  //PUTPUT -> 15

  //Q no- 3c
  //ARROW function for sum of arrays ellemnts 
  let arr=[1,2,3,4,5];
let totalSum=(arr)=>{
let sum=0;        //sum variable initialize to 0
for(let i=0;i<arr.length;i++)  //for loop
{ sum=sum+arr[i];}             // adding each array elemets to sum variable on each  iteration
return (sum);}
console.log(totalSum(arr))

//PUTPIT -> 15

//Q no-1e
//Return all the palindromes in an arra
let str=`malayalam`

let palindrome=function(strng){
    let temp=``;                   //declare blank 
    for(let i=strng.length-1;i>=0;i--) // inverse loop for reversing
    {temp=temp+strng.charAt(i);}  /// shifting to temp after reversing
    if( strng==temp)
    console.log(`${strng} is palindrome`);
}
palindrome(str)
//OUTPUT-->  malayalam is palindrome

//Q no-3e
//Return all the palindromes in an arra using array-ARROW FUNCTION
let arr=[`n`,`a`,`y`,`a`,`n`]
let palinArr=(str)=>{
let temp=[]                        //blank array
for (let i=str.length-1;i>=0 ;i--)// reversing loop 
{temp+=str[i]}                     //transfering array elements to temp array
console.log(temp);}
palinArr(arr);
//OUTPUT==> nayan

//Q,no- 1d
//Return median of two sorted arrays of the same size. -Anonymous function
let array = [2,3,3,4,6,29,7,23,11,15,17,18,19]; 
let Primeno=function (num) {   //function for Primeno declared
  for (let lt = 2; num > lt; lt++) {  //looping from 2 thru 
    if (num % lt == 0) {
      return false;  // return boolean value if not prime no
    }
  }
  return num > 1; //reyrn value true if num is prime
}
console.log(array.filter(Primeno)); // filetr method used on array
//OUTPUT==> [ 2, 3, 3, 29, 7, 23, 11, 17, 19 ]

//Q,no- 3d
//Return median of two sorted arrays of the same size. -Arrow function
let array = [2,3,3,4,6,29,7,23,11,15,17,18,19]; 
let Primeno= (num)=> {   // arrow function for Primeno declared
  for (let lt = 2; num > lt; lt++) {  //looping from 2 thru 
    if (num % lt == 0) {
      return false;  // return boolean value if not prime no
    }
  }
  return num > 1; //reyrn value true if num is prime
}
console.log(array.filter(Primeno)); // filetr method used on array
//OUTPUT==> [ 2, 3, 3, 29, 7, 23, 11, 17, 19 ]



//Q,no-1g
//Remove duplicates from an array
let arr = [1,2,7,2,8,1,9];
function removeDuplicates(arr) {
    let duplicates = [];             //declare empty array to contain unique elemets 
    for( let i=0; i < arr.length; i++){  
        if(duplicates.indexOf(arr[i]) === -1) {  // indexOf method used to find existing elemets 
            duplicates.push(arr[i]);  }   // push duplicate elemtes to to filter given array
    }
    return duplicates;}
console.log(removeDuplicates(arr));
//OUTPUT===> [1,2,7,8,9]

//Q,no-1h
// Rotate an array by k times Anonymous function 
let  arr = [1,2,3,4,5,6,7,8,9,10];
let k=5
  let rotateArr=function(k,arr){ 
  let shiftedArr=[]; //no of rotations of Array no of elements shifted in empty array
for (let i=0;i<k;i++)
   { shiftedArr+=arr.shift();}//on each iteration k rotations to be added to shiftedArr array
console.log( arr);}
rotateArr(3,arr);
//OUTPUT===> [6,7,8,9,10] 



//Q,no-1b
//Convert all the strings to title caps in a string array -Anonymous function
let string = "this is guvi geeks";
  let str=string.split(` `)
   let strTitleCap=function(string){
       let str=string.split(` `)
       let newstring=[]
   newstring = str.map(words => words[0].toUpperCase() + words.substring(1).toLowerCase()).join(' ');
  console.log(newstring);}
    strTitleCap(string)
  //OUTPUT===> This Is Guvi Geeks

  //Q.no-3b
  //Convert all the strings to title caps in a string array -Anonymous function-Arrow function
  let string = "this is guvi geeks";
  let str=string.split(` `)
   let strTitleCap=(string)=>{
       let str=string.split(` `)
       let newstring=[]
   newstring = str.map(words => words[0].toUpperCase() + words.substring(1).toLowerCase()).join(' ');
  console.log(newstring);}
    strTitleCap(string)
    //OUTPUT===> This Is Guvi Geeks

    //Q.no-f
    //Return median of two sorted arrays of the same size.  IIFE function
    let arr1=[ 1,2,3,4,5,6,7,9,10]
    let arr2=[2,3,5,7,8,9,10,11,12]
 let median=function(arr1,arr2){
     let l=arr1.length+arr2.length
     let midterm=Math.round(l/2)
     let  val1=arr1[midterm-1]
     let val2=arr2[midterm-1]
       let medianval=Math.floor((val1+val2)/2)
              console.log(medianval) }
        median(arr1,arr2);
        //OUPUT==>7