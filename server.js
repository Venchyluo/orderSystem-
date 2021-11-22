require("dotenv").config(); 

const express = require('express'); //Line 1
const mongoose = require("mongoose");

//mongodb
const mongoDB = ("mongodb+srv://"+
                 process.env.USERNAME+
                 ":"
                 +process.env.PASSWORD+
                 "@"
                 +process.env.HOST+
                 "/"
                 +process.env.DATABASE);

mongoose.connect(
    mongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

const contactSchema = new mongoose.Schema({
    phoneNumber: Number,
    address: String
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const Contact = mongoose.model('Contact', contactSchema)

//   const contact = new Contact({
//     phoneNumber: 133000000000,
//     address: "Chicago Trump Tower"
// });

// contact.save().then(() => console.log("One contact added"));

// create a GET route
app.get('/', (req, res) => { //Line 9
}); //Line

app.get('/getAllContacts', function (req, res) {
    Contact.find({}, (err, found) => {
        if (! err) {
            // res.send(200, found)
            res.send(found)
        }
        console.log(err);
        res.send(406, "not found err")
    })
})