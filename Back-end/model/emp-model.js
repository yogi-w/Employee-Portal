const mongoose = require("mongoose")


const empSchema = new mongoose.Schema({
    empId : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    project : {
        type : String,
        required : true
    }
})

const Employee = mongoose.model('Employee', empSchema)

module.exports = Employee