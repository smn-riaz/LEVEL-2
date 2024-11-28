db.test.find({gender:"Female"},{name:1, gender:1})


db.test.find({gender: {$eq:"Male"}}).project({name:1, gender:1})

db.test.find({age:{$eq:23}})

db.test.find({age:{$ne:23}})


db.test.find({age: {$gt: 58}}).sort({age:1})

db.test.find({age: {$gte: 58}}).sort({age:-1})


// inplicit and
db.test.find({age:{$gt:18, $lte: 30}},{age:1}).sort({age:1})


db.test.find({gender:{$eq:"Male"}, age:{$gt:18, $lte: 30}},{age:1, gender:1})


db.test.find({gender:{$eq:"Male"}, age:{$in:[20,22,24,26,28,30]}}, {age:1, gender:1})


db.test.find({gender:{$eq:"Female"}, age:{$nin:[20,22,24,26,28,30]}}, {age:1, gender:1})


db.test.find({gender:{$eq:"Female"}, age:{$nin:[20,22,24,26,28,30]}, interests:{$in:['Cooking','Gaming']}}, {age:1,interests:1, gender:1})


// Explicit and
db.test.find({$and : [{age: {$ne:15}},{age:{$lte:30}}]})


db.test.find({$or : [{age: {$ne:15}},{age:{$lte:30}},{gender:"Female"}]}).project({age:1, gender:1})


db.test.find({$or : [{interests:"Travelling"},{interests:"Cooking"}]}).project({age:1, gender:1})


// Explicit OR
db.test.find({$or:[{"skills.name":"JAVASCRIPT"}, {"skills.name":"PYTHON"}]}).project({skills:1})



db.test.find({"skills.name":{$in:["JAVASCRIPT","PYTHON"]}}).project({skills:1})



db.test.find({phone:{$exists: true}})



db.test.find({age:{$type:"string"}})



// DETERMINING ARRAY SIZE
db.test.find({friends:{$size:4}}).project({friends:1})


// no element in array
db.test.find({friends:{$size:0}}).project({friends:1})




// Finding null type data
db.test.find({phone:{$type: "null"}})




db.test.find({interests:{$all: ["Travelling", "Gaming", "Reading"]}}).project({interests:1})



db.test.find({skills:{$elemMatch: {name:'JAVASCRIPT',level:"Intermidiate"}}})


// entirely replaced the data . Not use in array, object
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$set:{age:100}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$addToSet:{interests:"Faming"}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$addToSet:{interests:{$each: ["Reading","Swimming","Writing"]} }})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$push:{interests:{$each: ["Reading","Swimming","Writing"]} }})



db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$unset:{birthday:""}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$pop:{friends:1}})

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$pop:{friends:-1}})



db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$pull:{friends:"Abdur Rakib"}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$pullAll: {friends:[ "Mizanur Rahman", "Najmus Sakib" ]}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069")},{$set:{"address.city":"Dhaka","address.country":"Bangladesh"}})


db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000069"), "skills.name" : "RUBY"},{$set:{"skills.$.level":"2024"}})
