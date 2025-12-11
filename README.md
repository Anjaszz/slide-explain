# SlideExplain - AI Presentation Generator

**SlideExplain** adalah aplikasi web yang mengubah materi laporan atau makalahmu menjadi slide presentasi profesional beserta naskah presentasi yang natural menggunakan AI Google Gemini.

## Fitur Utama

- **Upload Materi**: Upload file PDF, Word, atau paste teks langsung
- **Kustomisasi Presentasi**:
  - Pilih jumlah slide (5-20 slide)
  - Pilih gaya isi: Bullet Points, Detail, atau Kombinasi
  - Pilih tone presentasi: Formal, Akademik, Santai, atau Storytelling
- **Generate Otomatis**: AI menghasilkan slide dan naskah presentasi yang natural
- **Naskah Presentasi**: Mendapat naskah untuk setiap slide agar tidak terkesan membaca
- **Preview & Edit**: Lihat hasil slide dan naskah sebelum export
- **Export**: Download dalam format JSON dan TXT

## Tech Stack

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling dengan Claymorphism design
- **Google Gemini AI** - AI untuk generate konten
- **Vite** - Build Tool
- **PDF.js** - PDF Processing
- **Mammoth.js** - Word Document Processing

## Design

- **Style**: Claymorphism
- **Color Palette**:
  - `#FFF0EA` - Soft Peach
  - `#FFC9B9` - Pastel Coral
  - `#FF9A76` - Warm Peach

## Instalasi

### Prerequisites

- Node.js 18+
- NPM atau Yarn
- Google Gemini API Key ([Dapatkan di sini](https://makersuite.google.com/app/apikey))

### Setup

1. Clone repository
```bash
git clone <repo-url>
cd slide-explain
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env
```

4. Edit file `.env` dan masukkan Gemini API key
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

5. Run development server
```bash
npm run dev
```

6. Buka browser di `http://localhost:5173`

## Cara Penggunaan

1. **Upload Materi**
   - Pilih "Upload File" untuk upload PDF/Word/TXT
   - Atau pilih "Paste Teks" untuk paste materi langsung
   - File maksimal 10MB

2. **Atur Preferensi**
   - Tentukan jumlah slide yang diinginkan
   - Pilih gaya isi slide (points/detail/mixed)
   - Pilih tone presentasi yang sesuai

3. **Generate**
   - Klik "Generate Presentasi"
   - Tunggu 30-60 detik proses AI

4. **Preview & Export**
   - Lihat hasil slide dengan navigasi
   - Baca naskah presentasi untuk setiap slide
   - Copy naskah per slide atau semua sekaligus
   - Export ke file JSON dan TXT

## Struktur Project

```
slide-explain/
├── src/
│   ├── components/
│   │   ├── FileUpload.tsx       # Upload file/paste teks
│   │   ├── PreferenceSelection.tsx  # Pilih preferensi
│   │   ├── SlidePreview.tsx     # Preview slide & naskah
│   │   └── Loading.tsx          # Loading state
│   ├── services/
│   │   └── gemini.ts            # Gemini AI integration
│   ├── utils/
│   │   └── fileProcessors.ts   # File processing utilities
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── .env.example                 # Environment template
├── package.json
└── README.md
```

## Prompt Engineering

Aplikasi ini menggunakan prompt engineering yang sophisticated untuk menghasilkan:

1. **Slide Content**:
   - Struktur yang jelas dan logis
   - Konten yang disesuaikan dengan preferensi (points/detail/mixed)
   - Tone yang konsisten

2. **Presentation Script**:
   - Naskah yang natural, tidak kaku
   - Berbeda dari konten slide (expand, not repeat)
   - Menggunakan bahasa conversational
   - Variasi panjang kalimat untuk kesan natural
   - Transisi smooth antar topik

## Build untuk Production

```bash
npm run build
```

File build akan ada di folder `dist/`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API Key | Yes |

## Troubleshooting

**Error: "Gagal membuat slide"**
- Pastikan API key valid
- Check koneksi internet
- Pastikan materi cukup panjang (minimal 100 karakter)

**Error saat membaca file**
- Pastikan format file didukung (PDF, DOC, DOCX, TXT)
- Pastikan file tidak corrupt
- Check ukuran file (max 10MB)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Author

Created with AI-powered workflow
