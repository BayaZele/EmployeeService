const mongoose = require("mongoose");
const schema = mongoose.Schema;
const employeeSchema = new schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  middlename: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  hireDate: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  Grade: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
