const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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









