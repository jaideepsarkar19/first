//code for resume in json object format
let  cvobj ={
    "fname": "jaideep",
    "lname":"sarkar",
    "location":{   
                 "sub district":"behala",
                 " district":"kolkata",
                 " city":"kolkata",
                 "state":"west bengal",
                 "pincode":700060
           } ,
      " designation ":"Systems Administrator",
      "department":"Information Technology",
      "skills":[  
                "vMware","c","Linux"
      ],
      "hobbies":[
               "Football","reading","cooking"
      ]
   }

   //To stringifying the above json object
   let jsoncv=cvobj;
   let strngcv=JSON.stringify(jsoncv);
   console.log(strngcv);

//PUTPUT JSON object stringified 
//{"fname":"jaideep","lname":"sarkar","location":{"sub district":"behala"," district":"kolkata"," city":"kolkata","state":"west bengal","pincode":700060}," designation ":"Systems Administrator","department":"Information Technology","skills":["vMware","c","Linux"],"hobbies":["Football","reading","cooking"]}