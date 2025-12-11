import { useState } from 'react';
import type { SlidePreferences, SlideStyle, PresentationTone } from '../types/index';

interface PreferenceSelectionProps {
  onSubmit: (preferences: SlidePreferences) => void;
  onBack: () => void;
}

export function PreferenceSelection({ onSubmit, onBack }: PreferenceSelectionProps) {
  const [slideCount, setSlideCount] = useState(8);
  const [slideStyle, setSlideStyle] = useState<SlideStyle>('mixed');
  const [tone, setTone] = useState<PresentationTone>('formal');

  const handleSubmit = () => {
    onSubmit({ slideCount, slideStyle, tone });
  };

  return (
    <div className="clay-card p-8 md:p-12 max-w-4xl mx-auto fade-in">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] rounded-2xl mb-4 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent">
          Atur Preferensi
        </h2>
        <p className="text-gray-600 text-lg">
          Sesuaikan presentasi sesuai kebutuhanmu
        </p>
      </div>

      <div className="space-y-10">
        {/* Slide Count */}
        <div className="bg-white/40 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-xl flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-800">
                Jumlah Slide
              </label>
              <p className="text-sm text-gray-600">Tentukan berapa banyak slide yang kamu butuhkan</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <input
              type="range"
              min="5"
              max="20"
              value={slideCount}
              onChange={(e) => setSlideCount(Number(e.target.value))}
              className="flex-1 h-3 bg-linear-to-r from-[#FFC9B9] to-[#FF9A76] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #FF9A76 0%, #FF9A76 ${
                  ((slideCount - 5) / 15) * 100
                }%, #FFC9B9 ${((slideCount - 5) / 15) * 100}%, #FFC9B9 100%)`,
              }}
            />
            <div className="bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] px-8 py-4 min-w-[100px] text-center rounded-2xl shadow-lg">
              <span className="text-3xl font-extrabold text-white">{slideCount}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-[#FF9A76]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium">
              💡 Disarankan 8-12 slide untuk presentasi efektif
            </span>
          </div>
        </div>

        {/* Slide Style */}
        <div className="bg-white/40 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-xl flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-800">
                Gaya Isi Slide
              </label>
              <p className="text-sm text-gray-600">Pilih format konten yang sesuai dengan kebutuhanmu</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSlideStyle('points')}
              className={`p-6 rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'points'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-bold text-lg mb-2">Bullet Points</h3>
              <p className={`text-sm leading-relaxed ${slideStyle === 'points' ? 'text-white/90' : 'text-gray-600'}`}>
                Poin-poin singkat dan padat, mudah dibaca
              </p>
            </button>

            <button
              onClick={() => setSlideStyle('mixed')}
              className={`p-6 rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'mixed'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Kombinasi</h3>
              <p className={`text-sm leading-relaxed ${slideStyle === 'mixed' ? 'text-white/90' : 'text-gray-600'}`}>
                Mix bullet points dengan penjelasan singkat
              </p>
            </button>

            <button
              onClick={() => setSlideStyle('detailed')}
              className={`p-6 rounded-2xl border-3 transition-all duration-300 ${
                slideStyle === 'detailed'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-2xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-bold text-lg mb-2">Detail</h3>
              <p className={`text-sm leading-relaxed ${slideStyle === 'detailed' ? 'text-white/90' : 'text-gray-600'}`}>
                Penjelasan lengkap dalam paragraf
              </p>
            </button>
          </div>
        </div>

        {/* Presentation Tone */}
        <div className="bg-white/40 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-xl flex items-center justify-center">
              <span className="text-xl">🎭</span>
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-800">
                Tone Presentasi
              </label>
              <p className="text-sm text-gray-600">Pilih gaya bahasa yang ingin digunakan</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => setTone('formal')}
              className={`p-5 rounded-2xl border-3 transition-all duration-300 ${
                tone === 'formal'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-3xl mb-2">👔</div>
              <div className="font-bold text-sm">Formal</div>
            </button>

            <button
              onClick={() => setTone('academic')}
              className={`p-5 rounded-2xl border-3 transition-all duration-300 ${
                tone === 'academic'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-3xl mb-2">🎓</div>
              <div className="font-bold text-sm">Akademik</div>
            </button>

            <button
              onClick={() => setTone('casual')}
              className={`p-5 rounded-2xl border-3 transition-all duration-300 ${
                tone === 'casual'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-3xl mb-2">😊</div>
              <div className="font-bold text-sm">Santai</div>
            </button>

            <button
              onClick={() => setTone('storytelling')}
              className={`p-5 rounded-2xl border-3 transition-all duration-300 ${
                tone === 'storytelling'
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] text-white border-[#FF9A76] shadow-xl transform scale-105'
                  : 'bg-white/60 border-[#FFC9B9] hover:border-[#FF9A76] hover:bg-white/80 text-gray-800'
              }`}
            >
              <div className="text-3xl mb-2">📚</div>
              <div className="font-bold text-sm">Storytelling</div>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-12">
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-2xl bg-white/70 hover:bg-white font-semibold text-gray-700 transition-all border-2 border-[#FFC9B9] hover:border-[#FF9A76]"
        >
          ← Kembali
        </button>
        <button
          onClick={handleSubmit}
          className="clay-button flex-1 py-4 text-lg font-bold flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Presentasi
        </button>
      </div>
    </div>
  );
}
