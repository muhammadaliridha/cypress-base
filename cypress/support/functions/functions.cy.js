// functions.cy.js - File yang berisi fungsi fungsi yang dibutuhkan

// fungsi untuk generate email yang unik
export function generateUniqueEmail() {
    const timestamp = new Date().getTime() // Mendapatkan waktu saat ini dalam bentuk timestamp
    return `user${timestamp}@mail7.io` // Menggabungkan string 'user' dengan timestamp dan domain email
  }

  // fungsi untuk generate username unik
  export function generateUniqueUsername() {
    const timestamp = new Date().getTime() // Mendapatkan waktu saat ini dalam bentuk timestamp
    return `user_${timestamp}` // Menggabungkan string 'user' dengan timestamp dan domain email
  }