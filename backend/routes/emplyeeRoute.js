import {getAllEmployees,addNewEmployee,updateEmployee,deleteEmployee} from "../controller/employeeController.js";
import express from 'express'

const router=express.Router();

router.route('/')
      .get(getAllEmployees)
      .post(addNewEmployee)

router.route('/:id')
      .patch(updateEmployee)
      .delete(deleteEmployee)

export default router;