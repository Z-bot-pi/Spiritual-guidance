const mongoose = require("mangoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoBD is connected");
});

connection.on("error", (error) => {
    console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;