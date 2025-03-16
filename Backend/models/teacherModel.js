const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, minlength: 3, maxlength: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    bloodType: { type: String, required: true },
    birthday: { type: Date, required: true },
    sex: { type: String, enum: ["male", "female"], required: true },
    img: { type: String }, // Image ka URL store karne ke liye
  },
  { timestamps: true }
);

const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
