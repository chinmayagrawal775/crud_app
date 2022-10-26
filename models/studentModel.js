import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {type: String, require:true, trim:true},
    age: {type: Number, require:true, min:18, max:30},
    fees: {type: mongoose.Decimal128, require:true, validate: (v) => v >= 5000.5}
})

const studentModel = new mongoose.model('student', studentSchema);

export default studentModel;