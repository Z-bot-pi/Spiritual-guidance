require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex and use createIndexes in the URI
  // useCreateIndex: true,
  // Instead, include createIndexes in the URI options
  useFindAndModify: false,
  dbName: 'spiritualguidance-alx', // Replace dbName with your database name
  retryWrites: true,
  w: 'majority'
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = mongoose;












