const { Mongoose} = require("mongoose")

var Schema = Mongoose.Schema

var student = new Schema ({
    fName: String,
    lName: String,
    bDate: Date,
})

var studentModel = Mongoose.model('studentModel', studentSchema)

studentModel.create({fNmae: 'Gloria', lName: 'Villasenor'})
