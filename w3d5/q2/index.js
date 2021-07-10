const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<form action="/result" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="age">Age</label>
        <input type="text" name="age" id="age">
        <input type="submit" value="Submit Query">
    </form>`);
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "Person";
    }
    if (!age) {
        age = "15";
    }
    res.send(`Welcome ${name}. your age is ${age} `);
});


app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});