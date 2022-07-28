const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller')

//let's get all the employees
router.get('/',employeeController.getEmployeeList);


//get employee by id

router.get ('/:id',employeeController.getEmployeeById);

//create new employee

router.post('/', employeeController.createNewEmployee);

//update employees
router.put('/:id',employeeController.updateEmployee);

//delete employee
router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;