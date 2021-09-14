const mongoose = require("mongoose");
const connectMongo = () => {
  return mongoose.connect("mongodb://localhost:27017/test");
};

const Cat = mongoose.model("Cat", { name: String, age: Number });

module.exports = { connectMongo, Cat };
