import { Link } from 'react-router-dom';
import { FileText, Mic, Sparkles, Zap, Edit, Download } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF0EA] via-white to-[#FFC9B9]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-lg mb-8 backdrop-blur-sm border-2 border-[#FFC9B9]/30">
              <Sparkles className="w-4 h-4 text-[#FF9A76]" />
              <span className="text-sm font-semibold text-gray-700">
                Powered by AI
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent leading-tight">
              SlideExplain
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              Ubah Materi Apapun Menjadi Presentasi Profesional dengan Naskah Lengkap
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Upload PDF, DOCX, atau ketik langsung. AI akan membuat slide dan naskah presentasi yang natural, siap pakai dalam hitungan detik!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/generator"
                className="group px-8 py-4 bg-gradient-to-r from-[#FF9A76] to-[#ff8a5c] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Mulai Membuat Presentasi
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <a
                href="#features"
                className="px-8 py-4 bg-white/70 hover:bg-white text-gray-700 rounded-2xl font-bold text-lg border-2 border-[#FFC9B9] hover:border-[#FF9A76] transition-all flex items-center gap-2"
              >
                Pelajari Fitur
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF9A76]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC9B9]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Kenapa SlideExplain?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk membuat presentasi profesional dengan cepat dan mudah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Slide Otomatis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI menganalisis materi Anda dan membuat slide yang terstruktur dengan rapi. Pilih style: bullet points, detailed, atau mixed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Naskah Natural
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dapatkan naskah presentasi yang terdengar seperti ditulis manusia. Tidak kaku, tidak robotik, siap dibaca dengan percaya diri.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                4 Tone Pilihan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Formal untuk bisnis, Academic untuk mahasiswa/siswa, Casual untuk santai, atau Storytelling untuk lebih engaging.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Edit className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Revisi Mudah
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tidak puas? Revisi dengan 8+ quick suggestions atau custom prompt. Ubah panjang, tone, atau tambah contoh dengan 1 klik!
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Export TXT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Download presentasi lengkap dalam format TXT. Semua slide dan naskah dalam satu file, siap digunakan kapan saja.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-white to-[#FFF0EA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFC9B9]/30">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Super Cepat
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powered by AI. Generate presentasi lengkap dalam hitungan detik. Hemat waktu, fokus pada delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gradient-to-br from-[#FFF0EA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Cara Kerja
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hanya 3 langkah sederhana untuk presentasi profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Upload Materi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload file PDF atau DOCX, atau ketik/paste materi langsung. Apapun formatnya, AI siap memproses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Pilih Preferensi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tentukan jumlah slide (3-20), style konten (points/detailed/mixed), dan tone presentasi sesuai kebutuhan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9A76] to-[#ff8a5c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Presentasi Siap!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Preview slide dan naskah, revisi jika perlu, lalu download. Semuanya otomatis dalam hitungan detik!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF9A76] to-[#ff8a5c] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Coba Sekarang Gratis
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#FF9A76] to-[#ff8a5c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Membuat Presentasi Impresif?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Bergabung dengan ribuan pengguna yang sudah membuat presentasi profesional dengan SlideExplain
          </p>
          <Link
            to="/generator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF9A76] rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Mulai Sekarang - 100% Gratis
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF9A76] to-[#FFC9B9] bg-clip-text text-transparent">
              SlideExplain
            </h3>
            <p className="text-gray-400 mb-4">
              Ubah materi menjadi presentasi profesional dengan AI
            </p>
            <p className="text-sm text-gray-500">
              © 2025 SlideExplain. Created By Anjaszz.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
