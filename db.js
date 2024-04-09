const mongoose = require("mongoose");
require("dotenv").config();
//const mongoURL = "mongodb://localhost:27017/mydb";
//const mongoURL='mongodb+srv://kundan:kundanc8545@cluster0.evhcv0z.mongodb.net/'
//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true, // Use new URL parser (deprecated but still required)
  useUnifiedTopology: true // Use new Server Discovery and Monitoring engine
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
  console.error("Mongodb connection error:", err);
});

db.on('disconnected', () => {
  console.log("Mongodb disconnected");
});

module.exports = db;
