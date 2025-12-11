import { useState } from 'react';
import type { SlidePreferences, SlideStyle, PresentationTone, TargetAudience } from '../types/index';

interface PreferenceSelectionProps {
  onSubmit: (preferences: SlidePreferences) => void;
  onBack: () => void;
}

export function PreferenceSelection({ onSubmit, onBack }: PreferenceSelectionProps) {
  const [slideCount, setSlideCount] = useState(8);
  const [slideStyle, setSlideStyle] = useState<SlideStyle>('mixed');
  const [tone, setTone] = useState<PresentationTone>('formal');
  const [targetAudience, setTargetAudience] = useState<TargetAudience | undefined>(undefined);
  const [includeInteraction, setIncludeInteraction] = useState<boolean>(false);

  const handleSubmit = () => {
    onSubmit({
      slideCount,
      slideStyle,
      tone,
      targetAudience,
      includeInteraction
    });
  };

  return (
    <div className="clay-card p-4 sm:p-6 md:p-12 max-w-4xl mx-auto fade-in">
      {/* Header */}
      <div className="mb-6 sm:mb-8 md:mb-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3 bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent">
          Atur Preferensi
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">
          Sesuaikan presentasi sesuai kebutuhanmu
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* Slide Count */}
        <div className="bg-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
              <span className="text-base sm:text-xl">📊</span>
            </div>
            <div>
              <label className="block text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Jumlah Slide
              </label>
              <p className="text-xs sm:text-sm text-gray-600">Tentukan berapa banyak slide yang kamu butuhkan</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <input
              type="range"
              min="5"
              max="20"
              value={slideCount}
              onChange={(e) => setSlideCount(Number(e.target.value))}
              className="flex-1 h-2 sm:h-3 bg-linear-to-r from-[#FFC9B9] to-[#FF9A76] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #FF9A76 0%, #FF9A76 ${
                  ((slideCount - 5) / 15) * 100
                }%, #FFC9B9 ${((slideCount - 5) / 15) * 100}%, #FFC9B9 100%)`,
              }}
            />
            <div className="bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-center rounded-xl sm:rounded-2xl shadow-lg">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{slideCount}</span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9A76] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium">
              💡 Disarankan 8-12 slide untuk presentasi efektif
            </span>
          </div>
        </div>

        {/* Slide Style */}
        <div className="bg-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
              <span className="text-base sm:text-xl">🎨</span>
            </div>
            <div>
              <label className="block text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Gaya Isi Slide
              </label>
              <p className="text-xs sm:text-sm text-gray-600">Pilih format konten yang sesuai dengan kebutuhanmu</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <button
              onClick={() => setSlideStyle('points')}
              className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'points'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">📝</div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Bullet Points</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${slideStyle === 'points' ? 'text-white/90' : 'text-gray-600'}`}>
                Poin-poin singkat dan padat, mudah dibaca
              </p>
            </button>

            <button
              onClick={() => setSlideStyle('mixed')}
              className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'mixed'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">🎯</div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Kombinasi</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${slideStyle === 'mixed' ? 'text-white/90' : 'text-gray-600'}`}>
                Mix bullet points dengan penjelasan singkat
              </p>
            </button>

            <button
              onClick={() => setSlideStyle('detailed')}
              className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'detailed'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">📄</div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Detail</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${slideStyle === 'detailed' ? 'text-white/90' : 'text-gray-600'}`}>
                Penjelasan lengkap dalam paragraf
              </p>
            </button>
          </div>
        </div>

        {/* Presentation Tone */}
        <div className="bg-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
              <span className="text-base sm:text-xl">🎭</span>
            </div>
            <div>
              <label className="block text-base sm:text-lg md:text-xl font-bold text-gray-800">
                Tone Presentasi
              </label>
              <p className="text-xs sm:text-sm text-gray-600">Pilih gaya bahasa yang ingin digunakan</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <button
              onClick={() => setTone('formal')}
              className={`p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                tone === 'formal'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">👔</div>
              <div className="font-bold text-xs sm:text-sm">Formal</div>
            </button>

            <button
              onClick={() => setTone('academic')}
              className={`p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                tone === 'academic'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">🎓</div>
              <div className="font-bold text-xs sm:text-sm">Akademik</div>
            </button>

            <button
              onClick={() => setTone('casual')}
              className={`p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                tone === 'casual'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">😊</div>
              <div className="font-bold text-xs sm:text-sm">Santai</div>
            </button>

            <button
              onClick={() => setTone('storytelling')}
              className={`p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                tone === 'storytelling'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">📚</div>
              <div className="font-bold text-xs sm:text-sm">Storytelling</div>
            </button>
          </div>
        </div>

        {/* Target Audience (Optional) */}
        <div className="bg-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
              <span className="text-base sm:text-xl">👥</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <label className="block text-base sm:text-lg md:text-xl font-bold text-gray-800">
                  Target Audiens
                </label>
                <span className="px-2 py-0.5 bg-[#FFF0EA] text-[#FF9A76] rounded-full text-xs font-bold">
                  Opsional
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Sesuaikan bahasa dengan target pendengarmu</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            <button
              onClick={() => setTargetAudience(targetAudience === 'sd' ? undefined : 'sd')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'sd'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">🎒</div>
              <div className="font-bold text-xs sm:text-sm">SD</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'smp' ? undefined : 'smp')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'smp'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">📚</div>
              <div className="font-bold text-xs sm:text-sm">SMP</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'sma' ? undefined : 'sma')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'sma'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">🎓</div>
              <div className="font-bold text-xs sm:text-sm">SMA</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'mahasiswa' ? undefined : 'mahasiswa')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'mahasiswa'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">🎯</div>
              <div className="font-bold text-xs sm:text-sm">Mahasiswa</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'umum' ? undefined : 'umum')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'umum'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">👔</div>
              <div className="font-bold text-xs sm:text-sm">Umum</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'gen-z' ? undefined : 'gen-z')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'gen-z'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">✨</div>
              <div className="font-bold text-xs sm:text-sm">Gen Z</div>
            </button>

            <button
              onClick={() => setTargetAudience(targetAudience === 'masyarakat' ? undefined : 'masyarakat')}
              className={`p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-3 transition-all duration-300 ${
                targetAudience === 'masyarakat'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">🌍</div>
              <div className="font-bold text-xs sm:text-sm">Masyarakat</div>
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-[#FF9A76]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium">
              💡 Pilih target audiens untuk menyesuaikan tingkat bahasa dan kompleksitas
            </span>
          </div>
        </div>

        {/* Audience Interaction (Optional) */}
        <div className="bg-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                <span className="text-base sm:text-xl">💬</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <label className="block text-sm sm:text-base md:text-xl font-bold text-gray-800">
                    Interaksi dengan Audiens
                  </label>
                  <span className="px-2 py-0.5 bg-[#FFF0EA] text-[#FF9A76] rounded-full text-xs font-bold">
                    Opsional
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Tambahkan pertanyaan atau ajakan untuk audiens dalam naskah</p>
              </div>
            </div>
            <button
              onClick={() => setIncludeInteraction(!includeInteraction)}
              className={`relative inline-flex h-9 w-16 sm:h-10 sm:w-20 md:h-12 md:w-24 items-center rounded-full transition-all duration-300 shrink-0 ${
                includeInteraction
                  ? 'bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] shadow-lg'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  includeInteraction ? 'translate-x-8 sm:translate-x-10 md:translate-x-12' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {includeInteraction && (
            <div className="mt-4 p-4 bg-[#FFF0EA] rounded-xl border-2 border-[#FFC9B9]/40 fade-in">
              <div className="flex gap-3">
                <div className="text-xl">✨</div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Naskah presentasi akan mencakup pertanyaan retoris, ajakan berpikir, dan momen interaksi dengan audiens untuk membuat presentasi lebih engaging.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
        <button
          onClick={onBack}
          className="px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl bg-white/70 hover:bg-white text-sm sm:text-base font-semibold text-gray-700 transition-all border-2 border-[#FFC9B9] hover:border-[#FF9A76]"
        >
          ← Kembali
        </button>
        <button
          onClick={handleSubmit}
          className="clay-button flex-1 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-1.5 sm:gap-2"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="hidden xs:inline">Generate Presentasi</span>
          <span className="xs:hidden">Generate</span>
        </button>
      </div>
    </div>
  );
}
