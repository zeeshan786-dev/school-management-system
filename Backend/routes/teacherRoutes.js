const  express=require("express");
const  { addTeacher, getTeachers ,updateTeacher,deleteTeacher}=require("../controllers/teacherController.js");

const router = express.Router();

// Route to create a teacher
router.post("/add", addTeacher);

// Route to get all teachers
router.get("/all", getTeachers);

router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);
module.exports = router;