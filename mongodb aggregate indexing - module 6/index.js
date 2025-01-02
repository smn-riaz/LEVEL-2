db.test.aggregate([
  // stage - 1
  { $match: { gender: "Male" } },

  // stage - 2
  { $match: { age: { $lt: 30 } } },

  // stage - 3
  { $project: { name: 1, age: 1, gender: 1 } },
]);

db.test.aggregate([
  // stage - 1
  { $match: { gender: "Male" } },

  // stage - 2
  { $addFields: { course: "level-2", eduTech: "PH" } },

  // stage - 3
  { $project: { course: 1, eduTech: 1 } },
]);

// MOVE DATA TO A NEW COLLECTION
db.test.aggregate([
  // stage - 1
  { $match: { gender: "Male" } },

  // stage - 2
  { $addFields: { course: "level-2", eduTech: "PH" } },

  // stage - 3
  { $project: { course: 1, eduTech: 1 } },

  // stage - 4
  { $out: "course-students" },
]);

// can merge data from another collection
db.test.aggregate([
  // stage - 4
  { $merge: "course-students" },
]);

// MAKE GROUP
db.test.aggregate([
  // stage - 1
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);

// get only grouped data name
db.test.aggregate([
  // stage - 1
  { $group: { _id: "$address.country", amakeDakhaoName: { $push: "$name" } } },
]);

// get only grouped data's full document by naming amakeDakhaoName'
db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      amakeDakhaoName: { $push: "$$ROOT" },
    },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      fullDoc: { $push: "$$ROOT" },
    },
  },

  // stage - 2
  {
    $project: {
      "fullDoc.email": 1,
      "fullDoct._id": 1,
      "fullDoc.name": 1,
      "fullDoc.phone": 1,
    },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
    },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
    },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },

  // stage - 2
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      averageSalary: "$avgSalary",
    },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },

  // stage - 2
  {
    $project: {
      totalSalary: 1,
      maxSalary: 1,
      minSalary: 1,
      averageSalary: "$avgSalary",
      rangeBetweenMaxandMin: { $subtract: ["$maxSalary", "$minSalary"] },
    },
  },
]);

db.test.aggregate([
  // stage - 1
  { $unwind: "$friends" },

  // stage - 2
  {
    $group: { _id: "$friends", count: { $sum: 1 } },
  },
]);

db.test.aggregate([
  // stage - 1
  {
    $unwind: "$interests",
  },
  // stage - 2
  {
    $group: { _id: "$age", interestsPerAge: { $push: "$interests" } },
  },
]);

db.test.aggregate([
  // stage -1
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [20, 40, 60, 80],
      default: "80 ar uporar gula",
      output: {
        count: { $sum: 1 },
        karakaraache: { $push: "$$ROOT" },
      },
    },
  },
]);

db.test.aggregate([
  // stage -1
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [20, 40, 60, 80],
      default: "80 ar uporar gula",
      output: {
        count: { $sum: 1 },
        karakaraache: { $push: "$$ROOT" },
      },
    },
  },

  // stage - 2
  {
    $sort: { count: 1 },
  },

  // stage - 3
  {
    $limit: 2,
  },

  // stage - 4

  {
    $project: { count: -1 },
  },
]);



db.test.aggregate([
  {
    $facet: {
      // pipeline - 1
      friendsCount: [
        // stage - 1
        { $unwind: "$friends" },
        // stage - 2
        { $group: { _id: "$friends", count: { $sum: 1 } } },
      ],

      // pipeline - 2
      educationCount: [
        // stage - 1
        { $unwind: "$education" },
        // stage - 2
        { $group: { _id: "$education", count: { $sum: 1 } } },
      ],

      // pipeline - 3
      skillsCount: [
        // stage - 1
        { $unwind: "$skills" },

        // stage - 2
        { $group: { _id: "$skills", count: { $sum: 1 } } },
      ],
    },
  },
]);





db.orders.aggregate([
  {$lookup: {
         from: "test",
         localField: "userId",
         foreignField: "_id",
         as: "user"
       }}
  ])





  db.test.find({email: "omirfin2@i2i.jp"}).explain("executionStats")


  db.getCollection("massive-data").createIndex( {"email": 1})


  db.getCollection("massive-data").dropIndex( {"email": 1})




  db.orders.aggregate([
    {
      $match:{
        status:"Shipped"
      }
    },
    {
      $facet: {
        totalSale: [
          {
            $project:{
              orderTotal: {
                $sum : {$map:{
                  input:"$products",
                  as :"product",
                  in: {$multiply:["$$product.quantity", "$$product.price_per_unit"]}
                }}
              }
            }
          },


          {
            $group:{_id:null, totalSale: {$sum:"$orderTotal"}}
          }, {
            $project:{_id:0, totalSale:1}
          }
        ],



        averageOrderTotal:[
          {
            $project:{
              orderTotal: {
                $sum:{
                  $map:{
                    input:"$products",
                    as :"product",
                    in: {$multiply:["$$product.quantity", "$$product.price_per_unit"]}
                  }
                }
              }
            }
          },

          {
            $group:{_id:"null",
              avgOrderTotal:{$avg: "$orderTotal"}
            }
          },

          {
            $project: {_id:0, avgOrderTotal:1}
          }
        ]



      }
    }
  ])






