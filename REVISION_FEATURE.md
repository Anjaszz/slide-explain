# 📝 Fitur Revisi Presentasi

Fitur revisi memungkinkan user untuk merevisi presentasi yang sudah dibuat dengan mudah menggunakan suggestions atau custom prompt.

## ✨ Fitur Utama

### 1. **Quick Revision Suggestions**
User dapat memilih dari 8 saran revisi cepat yang sudah disediakan:

#### 📜 Revisi Naskah (Scripts Only)
- **Panjangkan Naskah** - Tambah detail dan elaborasi
- **Persingkat Naskah** - Ringkas agar lebih to-the-point

#### 📊 Revisi Slide (Slides Only)
- **Perluas Konten Slide** - Tambah poin dan detail
- **Simplifikasi Slide** - Fokus pada poin terpenting

#### 🎨 Revisi Keduanya (Both)
- **Lebih Profesional** - Tingkatkan formalitas bahasa
- **Lebih Menarik** - Buat lebih engaging
- **Tambah Contoh** - Sertakan contoh konkret
- **Perbaiki Alur** - Tingkatkan transisi antar slide

### 2. **Custom Revision Prompt**
User dapat menulis permintaan revisi custom mereka sendiri dengan memilih target:
- **Slide Saja** - Hanya revisi konten slide
- **Naskah Saja** - Hanya revisi script presentasi
- **Keduanya** - Revisi slide dan naskah

**Contoh custom prompt:**
- "Ubah tone menjadi lebih kasual dan friendly"
- "Tambahkan humor di beberapa bagian"
- "Fokus lebih ke manfaat praktis daripada teori"
- "Gunakan bahasa yang lebih mudah dipahami pemula"
- "Tambahkan analogi dan perumpamaan"

### 3. **Revision History Tracking**
Setiap revisi dicatat dengan:
- Timestamp
- Permintaan revisi
- Target type (slides/scripts/both)

## 🎯 Cara Menggunakan

1. **Setelah presentasi dibuat**, klik tombol **"Revisi"** di header
2. Panel revisi akan muncul dengan pilihan:
   - Quick suggestions yang siap pakai
   - Custom prompt untuk revisi spesifik
3. **Pilih target revisi**: Slide, Naskah, atau Keduanya
4. **Klik suggestion** atau **tulis custom prompt** lalu tekan Enter atau klik tombol kirim
5. Tunggu beberapa detik, presentasi akan otomatis diupdate

## 💡 Tips Penggunaan

### Untuk Hasil Revisi Terbaik:
- Gunakan prompt yang **spesifik dan jelas**
- Sebutkan **apa yang ingin diubah** dan **bagaimana hasilnya**
- Jika tidak puas, bisa revisi lagi dengan permintaan yang lebih spesifik

### Contoh Prompt yang Baik:
✅ "Ubah slide 1-3 agar lebih ringkas, fokus hanya pada 3 poin utama"
✅ "Tambahkan contoh real-world di setiap bagian naskah"
✅ "Buat opening naskah lebih catchy dengan pertanyaan atau fakta menarik"

### Contoh Prompt yang Kurang Efektif:
❌ "Perbaiki"
❌ "Buat lebih bagus"
❌ "Ubah sedikit"

## 🔧 Implementasi Teknis

### Files yang Terlibat:
1. **[gemini.ts](src/services/gemini.ts)** - Service untuk revisi menggunakan Gemini API
   - `revisePresentation()` - Method utama untuk revisi
   - `buildRevisionPrompt()` - Prompt builder untuk revisi

2. **[RevisionPanel.tsx](src/components/RevisionPanel.tsx)** - UI component untuk panel revisi
   - Quick suggestions
   - Custom prompt input
   - Target type selector

3. **[SlidePreview.tsx](src/components/SlidePreview.tsx)** - Integrasi panel revisi ke preview
   - Toggle button untuk show/hide panel
   - Pass handlers ke RevisionPanel

4. **[App.tsx](src/App.tsx)** - State management untuk revisi
   - `handleRevise()` - Handler untuk proses revisi
   - `isRevising` state untuk loading indicator

5. **[types/index.ts](src/types/index.ts)** - Type definitions
   - `RevisionHistoryItem` - Type untuk revision history
   - Extended `PresentationData` metadata

## 📊 Flow Diagram

```
User clicks suggestion/submits custom prompt
         ↓
App.tsx handleRevise()
         ↓
geminiService.revisePresentation()
         ↓
Build revision prompt with current data
         ↓
Send to Gemini API
         ↓
Parse response
         ↓
Update presentation state
         ↓
Add to revision history
         ↓
UI updates automatically
```

## 🎨 UI/UX Features

- **Toggle button** di header untuk show/hide panel revisi
- **Loading state** saat proses revisi berlangsung
- **Error handling** dengan alert jika revisi gagal
- **Success notification** setelah revisi berhasil
- **Keyboard shortcut**: Ctrl+Enter untuk submit custom prompt
- **Responsive design** untuk mobile dan desktop

## 🚀 Future Improvements

Beberapa ide untuk pengembangan lebih lanjut:
- [ ] Undo/Redo revisi
- [ ] Compare before/after revisi
- [ ] Save multiple versions
- [ ] AI suggestions based on content analysis
- [ ] Bulk revisi untuk multiple slides sekaligus
- [ ] Voice input untuk custom prompt
- [ ] Template revisi yang bisa disimpan user
