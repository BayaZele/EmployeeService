const express = require("express");
const Employee = require("../Models/employee.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  next(new Error("Unable to get employees"));
  //   res.send("getting list of all products");
});
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const employee = new Employee(req.body);
    const result = await employee.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }

  // const employee = new Employee({
  //   firstname: req.body.firstname, // ✅ Fixed
  //   middlename: req.body.middlename,
  //   lastname: req.body.lastname,
  //   hireDate: req.body.hireDate,
  //   Position: req.body.Position,
  //   Grade: req.body.Grade,
  //   step: req.body.step,
  //   basicSalary: req.body.basicSalary,
  // });
  // employee
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
router.get("/:id", (req, res, next) => {
  res.send("product by Id found");
});
router.patch("/:id", (req, res, next) => {
  res.send("product updated");
});
router.delete("/:id", (req, res, next) => {
  res.send("product deleted");
});

module.exports = router;
