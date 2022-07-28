// const Employee = require('../models/employee.model');
const EmployeeModel1 = require('../models/employee.model')


// get employee list
exports.getEmployeeList = (req, res) => {
    // console.log('here all employees list');
    EmployeeModel1.getAllEmployees((err, employees) => {
        console.log('We are here')
        if (err)
            res.send(err);
        console.log('Employees', employees);
        res.send(employees);
    })
}

//get Employe by id

exports.getEmployeeById = (req, res) => {
    // console.log('Get Employe by Id');
    EmployeeModel1.getEmployeeById(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        console.log('single employee data', employee);
        if (employee.length > 0) {
            res.send(employee)
        }
        else {
            res.send({ "message": `Data not available` })
        }

    })
}

// create new employee
exports.createNewEmployee = (req, res) => {
     const employeeReqData = new EmployeeModel1(req.body)
     console.log('employeeReqData',employeeReqData)
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Something went wrong' });
    } else {
        console.log('valid data')
         EmployeeModel1.createEmployee(employeeReqData, (err, employee) => {
            if (err) {
                res.send(err);
                res.json({ status: true, message: 'Employee Created Succesfully', data:employee })
            }
            res.send({status: true, message: 'Employee Created Succesfully', id:employee.insertId, data: employeeReqData})
        })
    }

}


//update employee
exports.updateEmployee = (req,res) => {
    const employeeReqData = new EmployeeModel1(req.body)
    console.log('employeeReqData update ',employeeReqData)
   //check null
   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.send(400).send({ success: false, message: 'Something went wrong' });
   } else {
       console.log('valid data')
        EmployeeModel1.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
           if (err) {
               res.send(err);
               res.json({ status: true, message: 'Employee Created Succesfully', data:employee })
           }
           res.send({status: true, message: 'Employee Updated Succesfully', id:employee.insertId, data: employeeReqData})
       })
   }
}


//delete employee
exports.deleteEmployee =(req,res) =>{

    EmployeeModel1.deleteEmployee(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        res.json({success: true, message:'Employee deleted successfully!'});
    })
}
