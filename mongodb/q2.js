db.employees.insertOne({
    name:"Mani",
    email:"xxx@gamil.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})

db.employees.insertMany([
    {
    name:"Mike Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date:Date(),
    },

    {
    name:"Catty 6",
    email:"Cathy@gmail.com",
    department:"IT",
    salary:3456,
    location:["AZ","TX"],
    date:Date(),
    }
]);


db.employees.find()
db.users.find({},{_id:0,name:1,age:1})

// show collections
