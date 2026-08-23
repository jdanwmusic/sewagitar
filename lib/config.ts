// @ts-check

/**
 * CONFIGURASI SEWAGITAR.COM
 * 
 * CARA MENGGANTI NOMOR WHATSAPP:
 * 1. Ubah nomor di bawah ini (format internasional tanpa +)
 *    Contoh: "6287748514337" untuk WhatsApp Indonesia
 * 2. Simpan file
 * 3. Restart development server
 */

export const config = {
  // Nomor WhatsApp bisnis utama
  whatsappNumber: process.env.WHATSAPP_NUMBER || "6287748514337",
  
  // Nama bisnis
  businessName: "SEWAGITAR.COM",
  
  // Lokasi workshop/jika ada (hapus jika tidak punya)
  location: "Jakarta & Jabodetabek",
  
  // Jam operasional
  operatingHours: "Senin - Sabtu: 09.00 - 18.00 WIB",
  
  // Email kontak (opsional)
  email: "info@sewagitar.com",
  
  // Domain website
  domain: "https://sewagitar.com"
};
