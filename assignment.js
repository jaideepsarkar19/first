Find all the information about each products
db.prod.find()
Find the product price which are between 400 to 800
db.prod.find({$and:[{product_price:{$gt:400}},{product_price:{$lt:800}}]})
Find the product price which are not between 400 to 600
db.prod.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:800}}]})
List the four product which are grater than 500 in price 
db.prod.find({ product_price:{$gt:500} }).limit(4)
Find the product name and product material of each products
db.prod.find( {},{_id:0, "product_name":1,"product_material":1} )
Find the product with a row id of 10
db.prod.find({"id": { $eq: "10"}})
Find only the product name and product material
db.prod.find( {},{_id:0, product_name:1,product_material:1} )
Find all products which contain the value of soft in product material 
db.prod.find({product_material: "Soft"})
Find products which contain product color indigo  and product price 492.00
db.prod.find({ product_price:492,product_color:"indigo"})
Delete the products which product price value are same
db.prod.aggregate([
   db.prod.delete({ "$match": { "$product_price": { "$eq": ["$start", "$end"] }}}
  ])

     
    

 

   







