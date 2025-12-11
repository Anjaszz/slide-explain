import { useState, useRef, type ChangeEvent } from 'react';
import { FileProcessor } from '../utils/fileProcessors';

interface FileUploadProps {
  onFileProcessed: (text: string, fileName: string) => void;
  onTextSubmit: (text: string) => void;
}

export function FileUpload({ onFileProcessed, onTextSubmit }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const [useTextInput, setUseTextInput] = useState(false);
  const [textContent, setTextContent] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError('');
    setUploading(true);

    try {
      const validation = FileProcessor.validateFile(file);
      if (!validation.valid) {
        setError(validation.error || 'File tidak valid');
        setUploading(false);
        return;
      }

      const result = await FileProcessor.processFile(file);
      onFileProcessed(result.text, result.fileName);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleTextSubmit = () => {
    if (textContent.trim().length < 100) {
      setError('Teks terlalu pendek. Minimal 100 karakter untuk membuat presentasi yang baik.');
      return;
    }
    onTextSubmit(textContent.trim());
  };

  return (
    <div className="clay-card p-8 md:p-12 max-w-3xl mx-auto fade-in">
      {/* Logo & Header */}
      <div className="text-center mb-10">
        <div className="inline-block mb-4">
          <div className="w-20 h-20 mx-auto bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] bg-clip-text text-transparent">
          SlideExplain
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Ubah materi laporan atau makalahmu menjadi slide presentasi profesional dengan AI
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-3 mb-8 p-1.5 bg-white/40 rounded-2xl backdrop-blur-sm">
        <button
          onClick={() => setUseTextInput(false)}
          className={`flex-1 py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            !useTextInput
              ? 'bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/30'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Upload File
        </button>
        <button
          onClick={() => setUseTextInput(true)}
          className={`flex-1 py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            useTextInput
              ? 'bg-linear-to-r from-[#FF9A76] to-[#ff8a5c] text-white shadow-lg transform scale-105'
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/30'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Paste Teks
        </button>
      </div>

      {!useTextInput ? (
        <div>
          <div
            className={`border-3 border-dashed rounded-3xl p-12 md:p-16 text-center transition-all duration-300 ${
              dragActive
                ? 'border-[#FF9A76] bg-[#FFF0EA]/60 scale-105 shadow-xl'
                : 'border-[#FFC9B9] bg-white/40 hover:bg-white/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
              disabled={uploading}
            />

            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-all ${
                uploading
                  ? 'bg-linear-to-br from-[#FF9A76] to-[#ff8a5c] animate-pulse'
                  : 'bg-linear-to-br from-[#FFC9B9] to-[#FF9A76]'
              }`}>
                <svg
                  className={`w-12 h-12 text-white ${uploading ? 'animate-bounce' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              {uploading ? 'Memproses file...' : 'Drop file kamu di sini'}
            </h3>
            <p className="text-gray-600 mb-6 text-lg">atau klik tombol di bawah</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="clay-button px-10 py-4 text-lg font-semibold"
            >
              {uploading ? 'Mohon tunggu...' : '📁 Pilih File'}
            </button>

            <div className="mt-8 pt-6 border-t-2 border-[#FFC9B9]/30">
              <p className="text-sm text-gray-600 mb-3 font-medium">Format yang didukung:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/60 rounded-lg text-sm font-semibold text-gray-700">📄 PDF</span>
                <span className="px-4 py-2 bg-white/60 rounded-lg text-sm font-semibold text-gray-700">📝 Word</span>
                <span className="px-4 py-2 bg-white/60 rounded-lg text-sm font-semibold text-gray-700">📃 Text</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">Maksimal ukuran file: 10MB</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              placeholder="Paste materi laporan atau makalah kamu di sini...&#10;&#10;💡 Tips: Semakin detail materimu, semakin baik hasil presentasinya!&#10;&#10;Minimal 100 karakter untuk hasil terbaik."
              className="clay-input w-full p-6 text-base min-h-[350px] resize-y focus:min-h-[400px] transition-all"
            />
            {textContent.length > 0 && (
              <div className="absolute top-4 right-4">
                <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                  textContent.length >= 100
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {textContent.length >= 100 ? '✓ Siap!' : `${100 - textContent.length} lagi`}
                </div>
              </div>
            )}
          </div>

          {/* Character Counter & Progress Bar */}
          <div className="bg-white/50 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-700">Progress</span>
              <span className="text-sm font-bold text-[#FF9A76]">
                {textContent.length} / 100 karakter minimum
              </span>
            </div>
            <div className="h-3 bg-white/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#FFC9B9] to-[#FF9A76] transition-all duration-300 rounded-full"
                style={{ width: `${Math.min((textContent.length / 100) * 100, 100)}%` }}
              />
            </div>
            {textContent.length < 100 && textContent.length > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Tambahkan {100 - textContent.length} karakter lagi untuk melanjutkan
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleTextSubmit}
              disabled={textContent.trim().length < 100}
              className="clay-button flex-1 py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Lanjutkan ke Preferensi
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 p-5 bg-red-50 border-2 border-red-200 rounded-2xl flex items-start gap-3 fade-in">
          <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-red-800 font-semibold mb-1">Oops! Ada yang salah</p>
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}
