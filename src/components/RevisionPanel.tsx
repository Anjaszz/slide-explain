import { useState } from 'react';
import { FileText, Mic, Send, Sparkles } from 'lucide-react';

interface RevisionSuggestion {
  id: string;
  label: string;
  description: string;
  prompt: string;
  targetType: 'slides' | 'scripts' | 'both';
  icon: React.ReactNode;
}

interface RevisionPanelProps {
  onRevise: (prompt: string, targetType: 'slides' | 'scripts' | 'both') => void;
  isRevising: boolean;
}

const revisionSuggestions: RevisionSuggestion[] = [
  {
    id: 'script-longer',
    label: 'Panjangkan Naskah',
    description: 'Tambah detail dan elaborasi di naskah presentasi',
    prompt: 'Buatlah naskah presentasi menjadi lebih panjang dengan menambahkan detail, elaborasi, dan contoh konkret. Pastikan tetap natural dan tidak bertele-tele.',
    targetType: 'scripts',
    icon: <Mic className="w-4 h-4" />,
  },
  {
    id: 'script-shorter',
    label: 'Persingkat Naskah',
    description: 'Ringkas naskah agar lebih to-the-point',
    prompt: 'Persingkat naskah presentasi menjadi lebih ringkas dan to-the-point, hilangkan bagian yang kurang penting sambil tetap menjaga informasi inti dan flow yang natural.',
    targetType: 'scripts',
    icon: <Mic className="w-4 h-4" />,
  },
  {
    id: 'slide-longer',
    label: 'Perluas Konten Slide',
    description: 'Tambah poin dan detail di slide',
    prompt: 'Perluas konten slide dengan menambahkan lebih banyak poin dan detail yang relevan. Pastikan slide tetap readable dan tidak terlalu padat.',
    targetType: 'slides',
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: 'slide-shorter',
    label: 'Simplifikasi Slide',
    description: 'Kurangi poin-poin di slide agar lebih fokus',
    prompt: 'Simplifikasi konten slide dengan fokus hanya pada poin-poin terpenting. Hilangkan detail yang kurang krusial agar slide lebih clean dan mudah dipahami.',
    targetType: 'slides',
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: 'more-professional',
    label: 'Lebih Profesional',
    description: 'Tingkatkan formalitas bahasa',
    prompt: 'Ubah bahasa di slide dan naskah menjadi lebih profesional dan formal, gunakan terminologi yang lebih akademis dan struktur yang lebih terstruktur.',
    targetType: 'both',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'more-engaging',
    label: 'Lebih Menarik',
    description: 'Buat presentasi lebih engaging',
    prompt: 'Buat slide dan naskah lebih menarik dan engaging dengan menambahkan hooks, pertanyaan retoris, dan penyampaian yang lebih dinamis sambil tetap menjaga substansi.',
    targetType: 'both',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'add-examples',
    label: 'Tambah Contoh',
    description: 'Sertakan lebih banyak contoh konkret',
    prompt: 'Tambahkan contoh-contoh konkret, analogi, atau studi kasus di slide dan naskah untuk membuat materi lebih mudah dipahami dan relatable.',
    targetType: 'both',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'improve-flow',
    label: 'Perbaiki Alur',
    description: 'Tingkatkan transisi antar slide',
    prompt: 'Perbaiki alur dan transisi antar slide agar lebih smooth dan logis. Pastikan setiap slide terhubung dengan baik dan ada progression yang jelas dari awal hingga akhir.',
    targetType: 'both',
    icon: <Sparkles className="w-4 h-4" />,
  },
];

export function RevisionPanel({ onRevise, isRevising }: RevisionPanelProps) {
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedTargetType, setSelectedTargetType] = useState<'slides' | 'scripts' | 'both'>('both');

  const handleSuggestionClick = (suggestion: RevisionSuggestion) => {
    onRevise(suggestion.prompt, suggestion.targetType);
  };

  const handleCustomRevise = () => {
    if (customPrompt.trim()) {
      onRevise(customPrompt, selectedTargetType);
      setCustomPrompt('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Revisi Presentasi
        </h3>
        <p className="text-sm text-gray-600">
          Pilih saran revisi atau masukkan permintaan custom Anda
        </p>
      </div>

      {/* Quick Suggestions */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Saran Revisi Cepat
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {revisionSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={isRevising}
              className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {suggestion.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 text-sm mb-1">
                  {suggestion.label}
                </div>
                <div className="text-xs text-gray-600">
                  {suggestion.description}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Target:{' '}
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">
                    {suggestion.targetType === 'both' ? 'Slide & Naskah' :
                     suggestion.targetType === 'slides' ? 'Slide' : 'Naskah'}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Revision */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Revisi Custom
        </h4>
        <div className="space-y-3">
          {/* Target Type Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTargetType('slides')}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTargetType === 'slides'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Slide Saja
            </button>
            <button
              onClick={() => setSelectedTargetType('scripts')}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTargetType === 'scripts'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Mic className="w-4 h-4 inline mr-2" />
              Naskah Saja
            </button>
            <button
              onClick={() => setSelectedTargetType('both')}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTargetType === 'both'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Keduanya
            </button>
          </div>

          {/* Custom Prompt Input */}
          <div className="relative">
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Contoh: Ubah tone menjadi lebih kasual, tambahkan humor, fokus lebih ke manfaat praktis..."
              disabled={isRevising}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              rows={3}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                  handleCustomRevise();
                }
              }}
            />
            <button
              onClick={handleCustomRevise}
              disabled={!customPrompt.trim() || isRevising}
              className="absolute bottom-3 right-3 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Kirim (Ctrl+Enter)"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500">
            💡 Tip: Tekan <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+Enter</kbd> untuk mengirim
          </p>
        </div>
      </div>

      {/* Loading State */}
      {isRevising && (
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4 flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-600 border-t-transparent"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-900">
              Sedang merevisi presentasi...
            </p>
            <p className="text-xs text-indigo-700">
              Harap tunggu, proses ini mungkin memakan waktu beberapa detik
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
