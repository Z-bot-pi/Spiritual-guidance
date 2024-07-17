const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log("Error in MongoDB connection", error));

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoDB is connected");
});

connection.on("error", (error) => {
    console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
