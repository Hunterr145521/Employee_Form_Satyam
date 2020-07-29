const express = require('express');
const employeesModel = require('../models/employee');
const employeeOperations = require('../Controller/employeeController');
const router = express.Router();

router.post('/create', (req, res) => {
    const regEmployee = req.body
    employeeOperations.add(regEmployee, res);
})

router.post('/viewEmp/:id', (req, res) => {
    const id = req.params.id
    employeeOperations.view(id, res);
})

router.delete('/deleteEmp/:id', (req, res) => {
    const id = req.params.id
    employeeOperations.delete(id, res);
})

router.get('/listAll', (req, res) => {
    employeeOperations.get_all(req, res)
})



module.exports = router;