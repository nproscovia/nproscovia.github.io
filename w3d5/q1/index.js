const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "15";
    }
    res.send(`Welcome ${name}. your age is ${age} `);
});
app.listen(3000, ()=> {
    console.log("Server is running on PORT 3000");
});


// we are just adding the age file.