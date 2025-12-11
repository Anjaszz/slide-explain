# Quick Start Guide - SlideExplain

## Setup dalam 5 Menit

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup API Key

Buat file `.env` di root project:
```bash
cp .env.example .env
```

Edit `.env` dan tambahkan Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

**Cara Mendapatkan API Key:**
1. Kunjungi https://makersuite.google.com/app/apikey
2. Login dengan Google account
3. Klik "Create API Key"
4. Copy dan paste ke file `.env`

### 3. Run Development Server
```bash
npm run dev
```

Aplikasi akan running di http://localhost:5173

## Testing the App

### Test 1: Upload Text
1. Klik tab "Paste Teks"
2. Paste contoh materi ini:
```
Artificial Intelligence dan Machine Learning

Artificial Intelligence (AI) adalah cabang ilmu komputer yang berfokus pada pembuatan mesin yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia. Machine Learning (ML) adalah subset dari AI yang memungkinkan sistem belajar dari data tanpa diprogram secara eksplisit.

Dalam dunia modern, AI dan ML telah mengubah berbagai industri. Dari healthcare yang menggunakan AI untuk diagnosis penyakit, hingga finance yang memanfaatkan ML untuk deteksi fraud. Aplikasi AI juga terlihat dalam natural language processing, computer vision, dan autonomous vehicles.

Untuk mengimplementasikan ML, kita memerlukan data yang berkualitas, algoritma yang tepat, dan computational power yang memadai. Proses ML dimulai dari data collection, preprocessing, training, validation, hingga deployment.
```
3. Klik "Lanjutkan"

### Test 2: Configure Preferences
1. Set jumlah slide: 8
2. Pilih style: Mixed
3. Pilih tone: Academic
4. Klik "Generate Presentasi"

### Test 3: Review & Export
1. Tunggu 30-60 detik untuk generation
2. Navigate antar slide menggunakan prev/next
3. Baca naskah presentasi di panel kanan
4. Klik "Copy" untuk copy satu naskah
5. Klik "Copy All" untuk copy semua naskah
6. Klik "Export" untuk download JSON dan TXT

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## File Upload Test

### Test with PDF
1. Buat file PDF sederhana dengan Google Docs
2. Upload via drag & drop atau file picker
3. System akan extract text otomatis

### Test with Word
1. Buat file .docx dengan Microsoft Word
2. Upload file
3. System akan process dengan Mammoth.js

### Test with Text
1. Buat file .txt dengan notepad
2. Upload file
3. System akan langsung baca content

## Troubleshooting

### Error: "Gagal membuat slide"
**Solusi:**
- Check apakah API key sudah benar di `.env`
- Pastikan internet connection stabil
- Coba lagi dengan materi yang lebih panjang

### Error: Build failed
**Solusi:**
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
**Solusi:**
```bash
# Kill process di port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

## Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| VITE_GEMINI_API_KEY | Yes | Google Gemini API Key | AIzaSyD... |

## Build for Production

```bash
# Build
npm run build

# Test build locally
npm run preview
```

Build output akan ada di folder `dist/`

Deploy ke:
- Vercel: `vercel deploy`
- Netlify: Drag & drop folder `dist`
- GitHub Pages: Configure GitHub Actions

## Tips untuk Hasil Terbaik

1. **Materi yang Baik:**
   - Minimal 500 kata untuk presentasi yang comprehensive
   - Struktur yang jelas (intro, body, conclusion)
   - Topik yang spesifik

2. **Pengaturan Slide:**
   - 8-12 slide optimal untuk presentasi 10-15 menit
   - Gunakan "Mixed" style untuk balance antara detail dan readability
   - Pilih tone sesuai audience

3. **Naskah Presentasi:**
   - Jangan hafal word-by-word
   - Gunakan sebagai panduan
   - Sesuaikan dengan gaya bicara kamu
   - Practice dulu sebelum presentasi

## Next Steps

Setelah aplikasi running:
1. Explore semua fitur
2. Test dengan materi real
3. Customize sesuai kebutuhan
4. Share dengan teman!

## Support

Ada masalah? Check:
- [README.md](README.md) - Full documentation
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Technical details
- GitHub Issues - Report bugs

Happy presenting! 🎉
