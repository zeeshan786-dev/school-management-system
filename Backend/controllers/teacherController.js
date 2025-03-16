const { NextResponse } = require("next/server");
const bcrypt = require("bcryptjs");
const Teacher = require("../models/teacherModel");

// **1. Add a New Teacher**
const addTeacher = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, phone, address, bloodType, birthday, sex, img } = req.body;

    // Hashing Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = new Teacher({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      address,
      bloodType,
      birthday,
      sex,
      img,
    });

    await newTeacher.save();
    res.status(201).json({ message: "Teacher Added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// **2. Retrieve All Teachers**
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ teachers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// **3. Update a Teacher by ID**
const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher Updated Successfully", teacher: updatedTeacher });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// **4. Delete a Teacher by ID**
const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeacher = await Teacher.findByIdAndDelete(id);

    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Exporting using module.exports
module.exports = { addTeacher, getTeachers, updateTeacher, deleteTeacher };
