const router = require("express").Router();
const Company = require("../models/Company");

router.get("/company/:id", async (req, res) => {
  //   let { company } = req.body;
  let company = req.params.id;
  console.log(req.params);
  let data = await Company.find({ company_name: company });
  // console.log(data);
  return res.json(data);
});

router.get("/company_date", async (Req, res) => {
  let { name, date } = req.body;

  let data = await Company.find({ company_name: name, date: date });

  return res.json(data);
});

module.exports = router;
