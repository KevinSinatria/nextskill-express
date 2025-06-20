const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk membaca body request dalam format JSON
app.use(express.json());

// Import router siswa
const studentRouter = require("./routes/student.route.js");

// Gunakan router siswa untuk path yang diawali dengan /students
app.use("/students", studentRouter);

// Middleware untuk menangani 404 Not Found
// Handler ini akan menangkap semua request yang tidak cocok dengan route di atasnya
app.use((req, res, next) => {
  res.status(404).send("Maaf, halaman yang Anda cari tidak ditemukan.");
});

// Jalankan server
app.listen(port, function () {
  console.log(`Server berjalan di http://localhost:${port}`);
});
