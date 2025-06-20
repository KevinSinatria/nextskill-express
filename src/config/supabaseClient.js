// const { createClient } = require("@supabase/supabase-js");

// // Ganti dengan URL dan Key dari proyek Supabase-mu
// const supabaseUrl = "https://rzjulbytwfebmwdutcxl.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6anVsYnl0d2ZlYm13ZHV0Y3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzODUyNjMsImV4cCI6MjA2NTk2MTI2M30.aYYYLd-OOOtugVu2F3pc5Rwjq-lZUQX7fs8EgQ7sh3E";

// // Membuat koneksi ke Supabase
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Export koneksi agar bisa digunakan di file lain
// module.exports = supabase;


// src/config/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');
// Ganti dengan URL dan Key dari proyek Supabase-mu
const supabaseUrl = 'URL_PROYEK_SUPABASE_ANDA';
const supabaseKey = 'KUNCI_ANON_PUBLIC_ANDA';
// Membuat koneksi ke Supabase
const supabase = createClient(supabaseUrl, supabaseKey);
// Export koneksi agar bisa digunakan di file lain
module.exports = supabase;
