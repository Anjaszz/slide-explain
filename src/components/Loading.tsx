export function Loading() {
  return (
    <div className="clay-card p-12 md:p-16 max-w-3xl mx-auto text-center fade-in">
      {/* Animated Icon */}
      <div className="mb-8">
        <div className="relative inline-flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute w-32 h-32 rounded-full bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] opacity-20 animate-ping"></div>
          {/* Middle Ring */}
          <div className="absolute w-28 h-28 rounded-full bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] opacity-30 animate-pulse"></div>
          {/* Inner Circle */}
          <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] flex items-center justify-center shadow-2xl">
            <svg
              className="w-12 h-12 text-white animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent">
        Sedang Membuat Presentasi...
      </h2>
      <p className="text-gray-600 mb-8">AI sedang menganalisis dan menyusun materi Anda</p>

      {/* Progress Steps */}
      <div className="space-y-4 text-left max-w-md mx-auto mb-8">
        <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border-2 border-[#FFC9B9]/50 shadow-sm">
          <div className="w-3 h-3 rounded-full bg-[#FF9A76] animate-pulse"></div>
          <div className="flex-1">
            <p className="text-gray-800 font-semibold">Menganalisis materi</p>
            <p className="text-sm text-gray-600">Memahami konten dan struktur...</p>
          </div>
          <div className="text-2xl">📖</div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border-2 border-[#FFC9B9]/50 shadow-sm" style={{ animationDelay: '200ms' }}>
          <div className="w-3 h-3 rounded-full bg-[#FFC9B9] animate-pulse"></div>
          <div className="flex-1">
            <p className="text-gray-800 font-semibold">Membuat struktur slide</p>
            <p className="text-sm text-gray-600">Menyusun poin-poin penting...</p>
          </div>
          <div className="text-2xl">🎨</div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border-2 border-[#FFC9B9]/50 shadow-sm" style={{ animationDelay: '400ms' }}>
          <div className="w-3 h-3 rounded-full bg-[#FF9A76] animate-pulse"></div>
          <div className="flex-1">
            <p className="text-gray-800 font-semibold">Menulis naskah presentasi</p>
            <p className="text-sm text-gray-600">Menyiapkan script untuk setiap slide...</p>
          </div>
          <div className="text-2xl">✍️</div>
        </div>
      </div>

      {/* Time Estimate */}
      <div className="bg-linear-to-r from-[#FFF0EA] to-[#FFC9B9]/30 rounded-2xl p-5">
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <svg className="w-5 h-5 text-[#FF9A76]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <p className="font-semibold">
            Estimasi waktu: <span className="text-[#FF9A76]">30-60 detik</span>
          </p>
        </div>
      </div>
    </div>
  );
}
