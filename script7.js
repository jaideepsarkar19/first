 //DAY-7 Q.o-1
 //Get all the countries from the Asia continent /region using the Filter function

 //XMLHTTP request to extract JSON object from API countries 

//create object for xhr method
let xhr=new XMLHttpRequest();
//object with request 
  xhr.open("GET","https://restcountries.com/v3/all");

  // listerners to complete the request
  xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){   
    let jsonobj=JSON.parse(this.response);
    for(let i=0;i<jsonobj.length;i++)
   let jsondata=jsonobj[i].name.common+jsonobj[i].region//collect lisof countries with regions
       let jsoncountry=jsondata.filter( coun=> {if (coun.region==`ASIA`)
   return coun.name.common})// filered the list of countries in ASAI
   console.log( jsoncountry);
    }
    
  else{
    console.log(`Not available`)
   }}
  //to make a reqest
  xhr.send();
 
 
 //Q.no-2
 //Get all the countries with a population of less than 2 lakhs using Filter function
 let xhr=new XMLHttpRequest();
//object with request 
  xhr.open("GET","https://restcountries.com/v3/all");

  // listerners to complete the request
  xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){   
    let jsonobj=JSON.parse(this.response);
    for(let i=0;i<jsonobj.length;i++)
   {let jsondata=jsonobj[i].name.common+jsonobj[i].population ;}//collect lisof countries with population
       let jsoncountry=jsondata.filter( coun=> {if (coun.population<200000)
   return coun.name.common})// filered the list of countries  with polpulation <200000
     console.log( jsoncountry)

    }
    
  else{
    console.log(`Not available`)
   }}
  //to make a reqest
  xhr.send();

  //Q,no-c
  //Print the following details name, capital, flag using forEach function
  let xhr=new XMLHttpRequest();
//object with request 
  xhr.open("GET","https://restcountries.com/v3/all");

  // listerners to complete the request
  xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){   
    let jsonobj=JSON.parse(this.response);

    jsonobj.forEach( function filterdata (name,capital,flags) {
     console.log(`${ name.common}`,${capital}, ${flags})
    }
  
      
    }
    
  else{
    console.log(`Not available`)
   }}
  //to make a reqest
  xhr.send(); 
 
 //A.no-e
 //Print the total population of countries using reduce function
 let xhr=new XMLHttpRequest();
//object with request 
  xhr.open("GET","https://restcountries.com/v3/all");

  // listerners to complete the request
  xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){   
    let jsonobj=JSON.parse(this.response);
    for(let i=0;i<jsonobj.length;i++)
   {let jsondata=jsonobj[i].name.common+jsonobj[i].population ;}//collect lisof countries with population
       let jsoncountry=jsondata.map( coun=> {
   return coun.population})
     let totalpop=jsoncountry.reduce((acc,pop)=>{
       acc+valpop.population
    ,0 })

    }
    
  else{
    console.log(`Not available`)
   }}
  //to make a reqest
  xhr.send();
  
 
 //Q.no-f
  //  rest countries site to extract json data to collect counries using USdollar
 let xhr = new XMLHttpRequest();
 xhr.open("GET", "https://restcountries.com/v3.1/all")
//  
 xhr.onload =function() {
     let jsonobj = JSON.parse(this.response)
       console.log(jsonobj) 
     let answer = jsonobj.filter((dummy) =>(dummy.currencies !== undefined))
     console.log(answer.length)
     let realanswer = answer.filter((data) =>  {
     for (let key in data.currencies) {
         if(data.currencies[key].name === "United States dollar"){
       return data
       }
     }
     })
     console.log(realanswer.length, realanswer[0].currencies)
      }
      xhr.send();