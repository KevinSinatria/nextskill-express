// 1. Import koneksi supabase yang sudah kita buat
const supabase = require("../config/supabaseClient");

// 2. Implementasi fungsi READ (GET all students)
const getAllStudents = async (request, response) => {
  const { data, error } = await supabase
    .from("students") // dari tabel 'students'
    .select("*"); // pilih semua kolom

  if (error) {
    response.status(500).json({ error: error.message });
  } else {
    response.json(data);
  }
};

// 3. Implementasi fungsi CREATE (POST a new student)
const createNewStudent = async (request, response) => {
  const { data, error } = await supabase
    .from("students")
    .insert([request.body]); // masukkan data dari body request

  if (error) {
    response.status(500).json({ error: error.message });
  } else {
    response.send("Siswa baru berhasil ditambahkan!");
  }
};

// 4. Implementasi fungsi UPDATE (PUT a student by ID)
const updateStudentById = async (request, response) => {
  const studentId = request.params.id;
  const { name } = request.body;

  const { data, error } = await supabase
    .from("students")
    .update({ name: name }) // update kolom 'nama'
    .eq("id", studentId); // di mana 'id' sama dengan studentId

  if (error) {
    response.status(500).json({ error: error.message });
  } else {
    response.send(`Data siswa dengan ID ${studentId} berhasil diupdate.`);
  }
};

// 5. Implementasi fungsi DELETE (DELETE a student by ID)
const deleteStudentById = async (request, response) => {
  const studentId = request.params.id;

  const { data, error } = await supabase
    .from("students")
    .delete()
    .eq("id", studentId); // hapus baris di mana 'id' sama dengan studentId

  if (error) {
    response.status(500).json({ error: error.message });
  } else {
    response.send(`Data siswa dengan ID ${studentId} berhasil dihapus.`);
  }
};

// 6. Export semua fungsi agar bisa digunakan oleh router
module.exports = {
  getAllStudents,
  createNewStudent,
  updateStudentById,
  deleteStudentById,
};
