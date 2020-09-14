const express = require ("express");
const {employeeById,allEmployees,getEmployee,createEmployee} = require("../controllers/employee");
const router = express.Router();
router.get ("/employees", allEmployees);
router.post("/employee", createEmployee);
router.get ("/employee/:employeeId", getEmployee);
router.param ("employeeId", employeeById);
module.exports = router;