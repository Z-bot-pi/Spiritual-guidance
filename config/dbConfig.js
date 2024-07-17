require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,        // Use new URL parser
    useUnifiedTopology: true,     // Use new server discovery and monitoring engine
    useCreateIndex: true          // Ensure indexes are created in MongoDB for unique fields
})
.then(() => console.log("MongoDB is connected"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoDB connected");
});

connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

module.exports = mongoose;

