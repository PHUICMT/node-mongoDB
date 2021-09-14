const express = require("express");
const { connectMongo, User } = require("./mongo");

const app = express();
app.use(express.json());

const port = 3000;

app.post("/cats", async (req, res) => {
  console.log("POST !! " + req.body);
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    mobilephone: req.body.mobilephone,
    address: {
      address_number: req.body.address.address_number,
      tambon: req.body.address.tambon,
      district: req.body.address.district,
      province: req.body.address.province,
      postcode: req.body.address.postcode,
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
