# 🛣️ Routing Structure

Aplikasi SlideExplain sekarang menggunakan React Router DOM dengan struktur routing yang terpisah untuk landing page dan generator.

## 📋 Routes

### 1. **Landing Page** (`/`)
**File:** [src/pages/LandingPage.tsx](src/pages/LandingPage.tsx)

Halaman utama yang menampilkan:
- ✨ Hero section dengan CTA
- 🎯 Feature highlights (6 fitur utama)
- 📖 Cara kerja (3 langkah)
- 🚀 CTA section
- 📄 Footer

**Navigasi:**
- Button "Mulai Membuat Presentasi" → `/generator`
- Button "Coba Sekarang Gratis" → `/generator`

### 2. **Generator Page** (`/generator`)
**File:** [src/pages/GeneratorPage.tsx](src/pages/GeneratorPage.tsx)

Halaman untuk membuat presentasi dengan 4 step:
1. **Upload** - Upload file atau ketik materi
2. **Preferences** - Pilih jumlah slide, style, dan tone
3. **Generating** - Loading state saat AI bekerja
4. **Preview** - Lihat hasil, revisi, dan export

## 🗂️ File Structure

```
src/
├── pages/
│   ├── LandingPage.tsx      # Landing page (route: /)
│   └── GeneratorPage.tsx    # Generator page (route: /generator)
├── components/
│   ├── FileUpload.tsx        # Upload component
│   ├── PreferenceSelection.tsx
│   ├── Loading.tsx
│   ├── SlidePreview.tsx
│   └── RevisionPanel.tsx
├── services/
│   └── gemini.ts             # Gemini AI service
├── types/
│   └── index.ts              # TypeScript types
└── App.tsx                   # Router setup
```

## 🔄 Navigation Flow

```
Landing Page (/)
    ↓
  [Click CTA Button]
    ↓
Generator Page (/generator)
    ↓
  Step 1: Upload
    ↓
  Step 2: Preferences
    ↓
  Step 3: Generating
    ↓
  Step 4: Preview
    ↓
  [Click Reset] → Back to Step 1
```

## 📦 Dependencies

- **react-router-dom** - Client-side routing
- **lucide-react** - Icons untuk Landing Page

## 🎨 Landing Page Features

### Hero Section
- Gradient background dengan decorative elements
- Powered by AI badge
- 2 CTA buttons (primary & secondary)

### Features Grid
6 feature cards dengan icons:
1. 📄 **Slide Otomatis** - AI-generated slides
2. 🎤 **Naskah Natural** - Human-like scripts
3. 🎭 **4 Tone Pilihan** - Formal/Academic/Casual/Storytelling
4. ✏️ **Revisi Mudah** - 8+ quick suggestions
5. 💾 **Export TXT** - Download presentasi
6. ⚡ **Super Cepat** - Gemini 2.5 Flash

### How It Works
3 langkah dengan numbered icons:
1. Upload Materi
2. Pilih Preferensi
3. Presentasi Siap!

### CTA Section
- Gradient orange background
- Final CTA untuk mulai menggunakan

### Footer
- Branding
- Copyright info

## 🚀 Development

### Run Development Server
```bash
npm run dev
```

Akses:
- Landing page: http://localhost:5173/
- Generator: http://localhost:5173/generator

### Build for Production
```bash
npm run build
```

## 📝 Notes

- Landing page menggunakan `lucide-react` icons
- Generator page mempertahankan semua fungsi yang ada
- Routing menggunakan `BrowserRouter` dari react-router-dom
- Smooth navigation dengan `Link` component
- Responsive design untuk mobile & desktop
- All states (presentation, revisions) preserved dalam GeneratorPage

## 🔧 Customization

### Menambah Route Baru
Edit [src/App.tsx](src/App.tsx):

```tsx
import { NewPage } from './pages/NewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/new-route" element={<NewPage />} />  {/* Add here */}
      </Routes>
    </BrowserRouter>
  );
}
```

### Mengubah Landing Page Content
Edit [src/pages/LandingPage.tsx](src/pages/LandingPage.tsx):
- Hero section content
- Features array
- How it works steps
- Colors & styling

## 🎯 Future Improvements

Ide untuk pengembangan lebih lanjut:
- [ ] Add About page (`/about`)
- [ ] Add FAQ page (`/faq`)
- [ ] Add Pricing page (`/pricing`) jika ada premium features
- [ ] Add 404 Not Found page
- [ ] Add loading state saat navigate
- [ ] Add scroll to top on route change
- [ ] Add meta tags untuk SEO
- [ ] Add analytics tracking
