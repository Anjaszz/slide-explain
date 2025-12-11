import { Link } from 'react-router-dom';
import { FileText, Mic, Sparkles, Zap, Edit, Download, ExternalLink } from 'lucide-react';
import logoWithText from '../assets/icon-with-text.png';
import logoOnly from '../assets/icon-only-removebg-preview.png';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF0EA] via-white to-[#FFC9B9]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src={logoWithText}
                alt="SlideExplain - Generator Presentasi AI Otomatis untuk Mahasiswa dan Profesional"
                className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-lg mb-8 backdrop-blur-sm border-2 border-[#FFC9B9]/30">
              <Sparkles className="w-4 h-4 text-[#FF9A76]" />
              <span className="text-sm font-semibold text-gray-700">
                Powered by AI
              </span>
            </div>

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
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <img
                  src={logoOnly}
                  alt="SlideExplain - Pembuat Slide Presentasi dengan AI"
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#FF9A76] to-[#FFC9B9] bg-clip-text text-transparent">
                SlideExplain
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ubah materi menjadi presentasi profesional dengan AI
              </p>
            </div>

            {/* Social Media Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-white">Social Media</h4>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/AnjasRanii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 group-hover:bg-[#FF9A76]/10 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Facebook</span>
                </a>

                <a
                  href="https://instagram.com/anjaszz_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 group-hover:bg-[#FF9A76]/10 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/anjas-rani-562396212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 group-hover:bg-[#FF9A76]/10 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://medium.com/@anjasrani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 group-hover:bg-[#FF9A76]/10 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Medium</span>
                </a>
              </div>
            </div>

            {/* Other Projects */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-white">Projects Lainnya</h4>
              <div className="space-y-3">
                <a
                  href="https://qris-payvoicely.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">PayVoicely</span>
                </a>
                <a
                  href="https://groupsplit.web.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">GroupSplit AI</span>
                </a>
                <a
                  href="https://generate-sertif.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Certificate Generator</span>
                </a>
                <a
                  href="https://my-quran-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">My Quran</span>
                </a>
                <a
                  href="https://pdf-magic-olive.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#FF9A76] transition-colors group"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">PDF Magic</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 SlideExplain. Created with ❤️ by <a href="https://anjasrani.my.id/" target="_blank" rel="noopener noreferrer" className="text-[#FF9A76] hover:text-[#ff8a5c] font-semibold transition-colors">Anjaszz</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
