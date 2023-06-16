require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.mongoURL)
const connection = mongoose.connect(process.env.mongoURL);
connection.then(() => {
    console.log("Connected to the MongoDB database");
}).catch((error) => {
    console.log("Error connecting to the database:", error.message);
});

module.exports = {
    connection
};
