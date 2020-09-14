const Employee = require("../models/employee");

exports.employeeById = (req,res,next,id) =>{
    Employee.findById(id).exec((err,employee)=>{
        if(err || !employee){
            return res.status(400).json({
                error:"Employee not found."
            });
        }
        req.body = employee; 
        next();
    });
};

exports.allEmployees = (req,res) => {
    Employee.find((err,employees) => {
        if (err) {
            return res.status(400).json({
                error:err
            });
        }
        res.json(employees);
    }).select("id project employee date loggedTime ");
};

exports.getEmployee = (req,res) => {
    return res.json(req.body);
};


exports.createEmployee = (req,res) => {
const employee = new Employee(req.body);
    employee.save((error,result)=>{
        if (error){
    res.status (400).json(
    {error:error}
              )
 }
res.status(200).json({
    employee:result
})
  })

 }
  
  