const express = require("express");
const { connectMongo, User } = require("./mongo");

const app = express();
app.use(express.json());

const port = 3000;

app.post("/users", async (req, res) => {
  console.log("POST !! " + req.body);
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    mobilephone: req.body.mobilephone,
    address_info: {
      address_number: req.body.address_info.address_number,
      tambon: req.body.address_info.tambon,
      district: req.body.address_info.district,
      province: req.body.address_info.province,
      postcode: req.body.address_info.postcode,
    },
    id_document: {
      id_number: req.body.id_document.id_number,
      id_picture: req.body.id_document.id_picture,
    },
    bank_document: {
      bank_account_name: req.body.bank_document.bank_account_name,
      bank_account_number: req.body.bank_document.bank_account_number,
      bank_account_picture: req.body.bank_document.bank_account_picture,
      bank_provider_name: req.body.bank_document.bank_provider_name,
      bank_provider_brunch: req.body.bank_document.bank_provider_brunch,
    },
    site_section: {
      site_name: req.body.site_section.site_name,
      team_name: req.body.site_section.site_name,
      advisor_name: req.body.site_section.site_name,
    },
    salary: {
      salary_per_day: req.body.salary.salary_per_day,
      salary_part_time: req.body.salary.salary_part_time,
    },
    discord_account: req.body.discord_account,
  });
  newUser.save().then(() => res.send("posted!!"));
});

connectMongo().then(() => {
  app.listen(port, () => {
    console.log("listening on port " + port);
  });
});
