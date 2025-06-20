const express = require("express");
const router = express.Router();

// Import fungsi controller yang sudah kita buat
const studentController = require("../controllers/student.controller.js");

// Definisikan route GET dan POST
// Ketika ada request GET ke '/', panggil fungsi getAllStudents
router.get("/", studentController.getAllStudents);

// Ketika ada request POST ke '/', panggil fungsi createNewStudent
router.post("/", studentController.createNewStudent);

// Definisikan route PUT dan DELETE
// :id adalah parameter dinamis
router.put('/:id', studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);

// Export router agar bisa digunakan di index.js
module.exports = router;
