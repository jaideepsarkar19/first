//OPPS DAY6- Q.no-1
//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// Ccontructing Class Movie 
class Movie{ 
         constructor (title,studio,rating=`PG`,list){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        this.list=list;
    }

        getPG(){  //Method to get names of movies with rating PG
 this.list.filter( array=>{ if (array.this.ratings==`PG`)
 console.log(`Movie title of ${array.this.title} in Studio ${array.this.studio} with rating${array.this.rating} `) ]}
        }
        
let movie1=new Movie (“Casino Royale”,“Eon Productions”,“PG­13”)
let movie1=new Movie({" Title1","Studio1","PG10")
let movie3=new Movie({" Title2","Studio2","PG")
let movie3=new Movie({" Title3","Studio3")
let movie3=new Movie({" Title4","Studio4","PG10")
let movie3=new Movie({" Title5","Studio5","PG18")
let movielist= new Movie( ['Casino Royale',`Title2`,`Title3`,`Title4`,`Title5`])
console.log(movie1ist.getPG())



//OPPS DAY6- Q.no-2
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
    constructor(radius,color){
this.radius=1.0;
this.color=`red`;}

getRadius(){
  return   this.radius}
setRadius(radius){
    this.radius=parseFloat(radius)}

getCplor(){
    return TimeRanges.color
}
setColot(color){   
  this.color=`color`}
  getArea(){
    return (  Math.pow(this.radius)*Math.Pi*2)
  }
getCircumference(){
    return  this.radius*Math.Pi*2
}
 toString( radius,color){
    this.radius=`radius`;
    this.color=`color`
 }
    
    }

let obj1=new Circle(10,'blue')
let obj2= new Circle()
console.log(obj1.toString)
console.log(obj2.getArea())


//Q.no-1c
//Write a “person” class to hold all the details.
class Person{        
constructor(fullname,gender,birthyear,address,country){
    this.fullname=fullname;
    this.gender=gender;
    this.birthyear=birthyear;
    this.address=address;
    this.country=country;
}
set fullname(name){
    if( name.includes(` `)) this.fullname=name;)
    else 
    console.log(`${name} is not fullname`)
})

get fullname (){
    return this.fullname;
}
get age(){
    return 2022-this.birthyear
    console.log(`${this.fullname} is of age: `)
}
get gender({
   return  this.gender;
})
set gender(gen){
    if (gen=`Male`||gen=`Female`)
   { throw new Error (`Invalid gender`)}
    this.gender=gen;
}
  get country(){
    return this.country
  }
  get address(){
    return this.address
  }

}

let pers1=new Person(`John Smith`,1960,`Male`,`123 New York `,`USA`);
let pers2=new Person(`Sita Singh`,1958,`Female`,`999 Road New Delhi`,`India`)
pers1.age();


//Q.mo-4
//write a class to calculate the uber price
class Uber{
constructor(rate,distance){
    this.rate=10;
    this.totalPrice=totalPrice;
    this.distance=distance
}
get rate(){
    this.rate
}
totalPrice(distance){
    let totalPrice;
    if (totalPrice >49)
 {   totalPrice=this.distance+this.rate;
console.log( " The total price for ${this.distance}kms travelled is ${totalPrice}"}
 else 
 console.log(`the minimum charge is Rs.50 `)
}
}  
}


let obj1=new Uber( 10,20);