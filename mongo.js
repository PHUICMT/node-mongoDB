const mongoose = require("mongoose");
const connectMongo = () => {
  return mongoose.connect("mongodb://localhost:27017/test");
};

const User = mongoose.model("User", {
  first_name: String,
  last_name: String,
  birthday: Date,
  mobilephone: String,
  address: {
    address_number: String,
    tambon: String,
    district: String,
    province: String,
    postcode: String,
  },
  ID_document: {
    ID_number: String,
    ID_picture: String,
  },
  bank_document: {
    bank_account_name: String,
    bank_account_number: String,
    bank_account_picture: String,
    bank_provider_name: String,
    bank_provider_brunch: String,
  },
  site_section: {
    site_name: String,
    team_name: String,
    advisor_name: String,
  },
  salary: {
    salary_per_day: Number,
    salary_part_time: Number,
  },
  discord_account: String,
});

module.exports = { connectMongo, User };
