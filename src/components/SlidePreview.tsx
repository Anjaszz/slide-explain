import { useState } from 'react';
import type { PresentationData } from '../types/index';
import { RevisionPanel } from './RevisionPanel';
import { useToast } from '../hooks/useToast';
import { Toast } from './Toast';

interface SlidePreviewProps {
  presentation: PresentationData;
  onExport: () => void;
  onStartOver: () => void;
  onRevise?: (prompt: string, targetType: 'slides' | 'scripts' | 'both') => void;
  isRevising?: boolean;
}

export function SlidePreview({ presentation, onExport, onStartOver, onRevise, isRevising = false }: SlidePreviewProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showRevisionPanel, setShowRevisionPanel] = useState(false);
  const { toasts, hideToast, success } = useToast();
  const currentSlide = presentation.slides[currentSlideIndex];

  const goToNextSlide = () => {
    if (currentSlideIndex < presentation.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const copyScript = () => {
    navigator.clipboard.writeText(currentSlide.script);
    success('Naskah berhasil disalin!');
  };

  const copyAllScripts = () => {
    const allScripts = presentation.slides
      .map((slide, index) => `SLIDE ${index + 1}: ${slide.title}\n\n${slide.script}\n\n${'='.repeat(50)}\n`)
      .join('\n');
    navigator.clipboard.writeText(allScripts);
    success('Semua naskah berhasil disalin!');
  };

  return (
    <div className="max-w-7xl mx-auto fade-in">
      {/* Header */}
      <div className="clay-card p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-5 md:mb-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent">
              {presentation.title}
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#FFF0EA] text-[#FF9A76] rounded-full text-xs sm:text-sm font-semibold">
                📊 {presentation.slides.length} slides
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#FFF0EA] text-[#FF9A76] rounded-full text-xs sm:text-sm font-semibold">
                🎭 {presentation.metadata.preferences.tone}
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#FFF0EA] text-[#FF9A76] rounded-full text-xs sm:text-sm font-semibold">
                📝 {presentation.metadata.preferences.slideStyle}
              </span>

              {/* Action Buttons */}
              <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
                {onRevise && (
                  <button
                    onClick={() => setShowRevisionPanel(!showRevisionPanel)}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1 sm:gap-1.5 ${
                      showRevisionPanel
                        ? 'bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] text-white shadow-lg'
                        : 'bg-white/70 hover:bg-white text-gray-700 border-2 border-[#FFC9B9] hover:border-[#FF9A76]'
                    }`}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Revisi
                  </button>
                )}
                <button
                  onClick={onExport}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 hover:bg-white text-xs sm:text-sm font-semibold text-gray-700 transition-all border-2 border-[#FFC9B9] hover:border-[#FF9A76] flex items-center justify-center gap-1 sm:gap-1.5"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export
                </button>
                <button
                  onClick={onStartOver}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 hover:bg-white text-xs sm:text-sm font-semibold text-gray-700 transition-all hover:shadow-lg flex items-center justify-center gap-1"
                >
                  🔄 <span className="hidden xs:inline">Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revision Panel */}
      {showRevisionPanel && onRevise && (
        <div className="mb-6 fade-in">
          <RevisionPanel onRevise={onRevise} isRevising={isRevising} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Slide Preview */}
        <div className="space-y-3 sm:space-y-4">
          <div className="slide-preview p-4 sm:p-6 md:p-8 lg:p-10 min-h-[400px] sm:min-h-[450px] lg:aspect-16/10 flex flex-col">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">
                {currentSlide.title}
              </h2>
              <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-24 bg-linear-to-r from-[#FF9A76] to-[#FFC9B9] rounded-full shadow-sm"></div>
            </div>

            <div className="flex-1 overflow-auto pr-1 sm:pr-2 custom-scrollbar">
              {currentSlide.content.map((item, index) => (
                <div key={index} className="mb-3 sm:mb-4 fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {presentation.metadata.preferences.slideStyle === 'points' ? (
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] mt-1.5 sm:mt-2 shrink-0 shadow-sm"></div>
                      <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">{item}</p>
                    </div>
                  ) : presentation.metadata.preferences.slideStyle === 'detailed' ? (
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 text-justify">{item}</p>
                  ) : (
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] mt-1.5 sm:mt-2 shrink-0 shadow-sm"></div>
                      <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t-2 border-[#FFC9B9]/30">
              <div className="text-xs sm:text-sm font-semibold text-gray-500">
                Slide {currentSlideIndex + 1} / {presentation.slides.length}
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                {presentation.slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 sm:h-1.5 rounded-full transition-all ${
                      index === currentSlideIndex
                        ? 'w-6 sm:w-8 bg-[#FF9A76]'
                        : 'w-1 sm:w-1.5 bg-[#FFC9B9]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="clay-card p-3 sm:p-4 flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlideIndex === 0}
              className="clay-button px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden xs:inline">Prev</span>
            </button>

            <div className="flex gap-1.5 sm:gap-2 flex-1 justify-center overflow-x-auto py-1 scrollbar-hide">
              {presentation.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`h-8 sm:h-9 md:h-10 rounded-lg sm:rounded-xl transition-all font-semibold text-xs sm:text-sm shrink-0 ${
                    index === currentSlideIndex
                      ? 'bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] text-white px-3 sm:px-4 shadow-lg'
                      : 'bg-white/60 text-gray-600 hover:bg-white px-2 sm:px-3 hover:shadow'
                  }`}
                  title={`Slide ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={goToNextSlide}
              disabled={currentSlideIndex === presentation.slides.length - 1}
              className="clay-button px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2"
            >
              <span className="hidden xs:inline">Next</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Script Panel */}
        <div className="space-y-3 sm:space-y-4">
          <div className="clay-card p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#FFC9B9] to-[#FF9A76] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-base sm:text-xl">📝</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Naskah Presentasi</h3>
              </div>
              <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
                <button
                  onClick={copyScript}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/70 hover:bg-white text-xs sm:text-sm font-semibold transition-all border-2 border-[#FFC9B9] hover:border-[#FF9A76] flex items-center justify-center gap-1.5 sm:gap-2"
                  title="Copy naskah slide ini"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
                <button
                  onClick={copyAllScripts}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] hover:shadow-lg text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2"
                  title="Copy semua naskah"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="hidden xs:inline">All Scripts</span>
                  <span className="xs:hidden">All</span>
                </button>
              </div>
            </div>

            <div className="bg-white/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] max-h-[400px] sm:max-h-[450px] md:max-h-[500px] overflow-auto custom-scrollbar border-2 border-[#FFC9B9]/30">
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                  {currentSlide.script}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 md:p-5 bg-linear-to-r from-[#FFF0EA] to-[#FFC9B9]/30 rounded-xl sm:rounded-2xl border-2 border-[#FFC9B9]/40">
              <div className="flex gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl shrink-0">💡</div>
                <div>
                  <p className="font-bold text-gray-800 mb-1 text-sm sm:text-base">Tips Presentasi:</p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Baca naskah ini dengan natural, jangan terlalu kaku. Gunakan sebagai panduan, bukan hafalan. Sesuaikan dengan gaya dan kepribadianmu sendiri!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="clay-card p-4 sm:p-5 md:p-6">
            <h4 className="text-xs sm:text-sm font-bold text-gray-600 mb-3 sm:mb-4 text-center">Statistik Slide</h4>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
              <div className="p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF9A76] mb-0.5 sm:mb-1">
                  {currentSlide.script.split(' ').length}
                </div>
                <div className="text-xs font-semibold text-gray-600">Kata</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">Naskah</div>
              </div>
              <div className="p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF9A76] mb-0.5 sm:mb-1">
                  ~{Math.ceil(currentSlide.script.split(' ').length / 150)}
                </div>
                <div className="text-xs font-semibold text-gray-600">Menit</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">Durasi</div>
              </div>
              <div className="p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF9A76] mb-0.5 sm:mb-1">
                  {currentSlide.content.length}
                </div>
                <div className="text-xs font-semibold text-gray-600">Poin</div>
                <div className="text-xs text-gray-500 mt-0.5 sm:mt-1">Konten</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => hideToast(toast.id)}
        />
      ))}
    </div>
  );
}
