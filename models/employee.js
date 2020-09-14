const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    employee: {
        type: String,
        required: true
    },
    date: {
        type: String
    
    },
    loggedTime: {
        type: String
    
    }
});

module.exports = mongoose.model("Employee", employeeSchema); 