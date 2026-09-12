# Landing page JajanSaldo

Revisi 12 September 2026. Halaman statis untuk jajansaldo.com, disesuaikan dengan kode bot Jajan Saldo v4.1.0 yang disertakan dalam permintaan. Promosi Jajan Kripto mengacu pada https://jajankripto.com/ yang diperiksa pada tanggal yang sama.

## Memasang revisi

1. Ekstrak ZIP ini.
2. Unggah **isi folder `jajansaldo-main`** ke direktori atau branch yang menjadi sumber website lama. Pastikan `index.html` berada pada lokasi yang sama dengan `index.html` sebelumnya.
3. Sertakan folder `assets` beserta seluruh isinya. Halaman memuat gaya, script menu, dan logo dari folder ini.
4. Pertahankan `CNAME` berisi `jajansaldo.com` jika website memakai GitHub Pages. Gunakan pengaturan branch dan direktori publikasi yang sudah dipakai.
5. Setelah publikasi selesai, buka website dan periksa menu ponsel, FAQ, tombol Telegram, serta tautan Jajan Kripto.

Tidak memerlukan npm, proses build, database, atau konfigurasi bot. Revisi ini belum dipublikasikan ke domain aktif.

Untuk melihat halaman sebelum mengunggah, buka `index.html` dengan browser. Logo, gaya, dan script tersedia secara lokal. Font Google memerlukan koneksi internet; jika tidak termuat, halaman menggunakan font sistem.

## Perubahan utama

| Bagian | Penyesuaian |
| --- | --- |
| Layanan | Mobile Legends, Free Fire, DANA, dan GoPay, sesuai layanan yang didukung kode bot. Ketersediaan produk dan nominal tetap mengikuti katalog aktif. |
| Hero | Pesan utama berfokus pada top up melalui Telegram. Pratinjau menggunakan teks dan empat menu utama bot, dengan label ilustrasi. |
| Cara top up | Pilih produk, isi dan periksa tujuan, bayar sesuai invoice, lalu pantau pengisian. |
| Pembayaran | QRIS dan opsi kripto yang tersedia di bot. Total akhir mengikuti invoice; tidak menjanjikan harga atau koin pembayaran yang belum dipastikan aktif. |
| Pesanan | Menjelaskan Pesanan saya, Perbarui status, penayangan invoice, dan bantuan menggunakan referensi pesanan. |
| Pembatalan | Menjelaskan bahwa `/cancel` dan kembali ke menu tidak membatalkan invoice yang sudah terbit. |
| Promosi | Bagian khusus Jajan Kripto, navigasi menuju bagian tersebut, tautan ke situs, penjelasan perbedaan layanan pada FAQ, serta tautan footer. |
| Tampilan | Mempertahankan logo dan identitas biru. Tata letak menyesuaikan lebar layar; menu ponsel dan FAQ mendukung keyboard. |
| Metadata | Judul, deskripsi, canonical, Open Graph, data terstruktur WebSite, sitemap, dan robots.txt. |

Penawaran PUBG Mobile, Valorant, OVO, ShopeePay, dan voucher digital dihapus karena tidak didukung oleh kode bot yang diberikan. Penanda USDT pada ilustrasi lama juga dihapus karena USDT tidak tercantum sebagai mata uang pembayaran yang didukung versi kode ini.

## Berkas

| Berkas | Fungsi |
| --- | --- |
| `index.html` | Konten landing page dan metadata. |
| `assets/styles.css` | Gaya desktop dan layar kecil. |
| `assets/main.js` | Menu navigasi pada layar kecil. |
| `assets/logo.jpg` | Logo asli yang diekstrak dari HTML lama. |
| `favicon.ico` | Favicon asli. |
| `CNAME` | Domain asli untuk GitHub Pages. |
| `sitemap.xml`, `robots.txt` | Petunjuk pengindeksan website. |

## Dasar kesesuaian dengan bot

Rujukan di arsip bot yang diberikan:

- `src/config/constants.js`: daftar layanan dan mata uang kripto yang didukung.
- `src/telegram/views/menus.js`: label menu, pilihan layanan, menu pembayaran, dan pesanan.
- `src/telegram/views/messages.js`: pesan pembuka, pengisian tujuan, konfirmasi, serta status transaksi.
- `src/telegram/views/invoice.js`: nominal invoice, jaringan pembayaran, dan penayangan invoice.
- `src/telegram/handlers/start.js`: bantuan dan perilaku `/cancel`.
- `src/telegram/handlers/orders.js`: rincian dan pembaruan status pesanan.
- `src/domain/catalog/targets.js`: format Player ID, Zone ID, dan nomor HP.

Tautan bot tetap `https://t.me/JajanSaldo_bot`, sesuai landing page asal. Kode bot dan konfigurasi produksinya tidak diubah.

## Validasi dan batas pemeriksaan

Pemeriksaan lokal mencakup sintaks JavaScript, struktur HTML, satu judul H1, ID unik, tujuan tautan internal, keberadaan aset, atribut tautan eksternal, cakupan layanan, serta XML sitemap. Navigasi tetap tersedia jika JavaScript dinonaktifkan; FAQ memakai elemen HTML `details` dan `summary`.

Pratinjau visual desktop/ponsel serta pengujian klik langsung belum dapat dilakukan karena kebijakan browser sesi ini memblokir akses pratinjau lokal. Aturan responsif sudah disertakan, tetapi belum diverifikasi melalui rendering browser. Tidak ada transaksi Telegram, QRIS, atau kripto yang dijalankan. Harga, stok, konfigurasi pembayaran, dan kontak admin produksi mengikuti bot yang dioperasikan pemilik.
