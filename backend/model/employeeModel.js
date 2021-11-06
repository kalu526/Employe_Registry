import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
     name:{
         type:String,
         required:[true,'Employee Name Is Required']
     },
     dateOfBirth:{
         type:String,
         required:[true,'Employee Birth Date Is Required']
     },
     gender:{
         type:String,
         required:[true,'Employee Gender Is Required']
     },
     salary:{
         type:Number,
         required:[true,'The Employee Salary Information Is Required']
     }

})

const Employees=mongoose.model('Employees',employeeSchema)

export default Employees;