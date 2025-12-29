const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Employee = require('./model/emp-model')

const app = express()

app.use(express.json())
app.use(cors())



const mongodbURL = "mongodb://localhost:27017/empDatabase"

// connect to database

mongoose.connect(mongodbURL)
    .then(() => console.log("Mongoose connected successfully"))
     .catch((err) => console.log("Error : ",err))



// fetch employee data
app.get('/employee/getEmp', async (req, res) => {
    
    try {
        const emp = await Employee.find()
        res.status(200).json(emp)
     
    } catch (error) {
        res.status(500).json({error: error.message});

    }

})

// insert new employee
app.post('/employee/newEmp', async (req, res) => {
    try {
        const newEmp = await Employee.create(req.body)
        res.status(200).json(newEmp)
    } catch (error) {
        res.status(500).json({error: error.message});
    }

})

app.listen(3000, ()=>{
    console.log("server is running on http://localhost:3000/employee");
    
})
