import { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { PreferenceSelection } from '../components/PreferenceSelection';
import { SlidePreview } from '../components/SlidePreview';
import { Loading } from '../components/Loading';
import { Toast } from '../components/Toast';
import { geminiService } from '../services/gemini';
import { useToast } from '../hooks/useToast';
import type { AppStep, SlidePreferences, PresentationData } from '../types/index';

export function GeneratorPage() {
  const [step, setStep] = useState<AppStep>('upload');
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('');
  const [presentation, setPresentation] = useState<PresentationData | null>(null);
  const [isRevising, setIsRevising] = useState(false);
  const { toasts, hideToast, success, error } = useToast();

  const handleFileProcessed = (text: string, name: string) => {
    setContent(text);
    setFileName(name);
    setStep('preferences');
  };

  const handleTextSubmit = (text: string) => {
    setContent(text);
    setFileName('Teks Manual');
    setStep('preferences');
  };

  const handlePreferencesSubmit = async (preferences: SlidePreferences) => {
    setStep('generating');

    try {
      const result = await geminiService.generateComplete(content, preferences);
      setPresentation({
        ...result,
        metadata: {
          ...result.metadata,
          originalFileName: fileName,
        },
      });
      setStep('preview');
    } catch (err) {
      error(err instanceof Error ? err.message : 'Terjadi kesalahan');
      setStep('preferences');
    }
  };

  const handleExport = () => {
    if (!presentation) return;

    // Create a text version with all scripts
    const textContent = presentation.slides
      .map(
        (slide, index) =>
          `SLIDE ${index + 1}: ${slide.title}\n\nKONTEN:\n${slide.content.join('\n')}\n\nNASKAH:\n${slide.script}\n\n${'='.repeat(80)}\n`
      )
      .join('\n');

    const textBlob = new Blob([`${presentation.title}\n${'='.repeat(80)}\n\n${textContent}`], {
      type: 'text/plain',
    });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `${presentation.title.replace(/[^a-z0-9]/gi, '_')}_presentation.txt`;
    document.body.appendChild(textLink);
    textLink.click();
    document.body.removeChild(textLink);
    URL.revokeObjectURL(textUrl);

    success('Presentasi berhasil di-export sebagai file TXT! 📄');
  };

  const handleStartOver = () => {
    setStep('upload');
    setContent('');
    setFileName('');
    setPresentation(null);
  };

  const handleBack = () => {
    setStep('upload');
  };

  const handleRevise = async (
    revisionPrompt: string,
    targetType: 'slides' | 'scripts' | 'both'
  ) => {
    if (!presentation) return;

    setIsRevising(true);

    try {
      const revisedPresentation = await geminiService.revisePresentation(
        presentation,
        revisionPrompt,
        targetType
      );
      setPresentation(revisedPresentation);
      success('Presentasi berhasil direvisi! ✨');
    } catch (err) {
      error(err instanceof Error ? err.message : 'Terjadi kesalahan saat revisi');
    } finally {
      setIsRevising(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {step === 'upload' && (
          <div key="upload" className="fade-in">
            <FileUpload onFileProcessed={handleFileProcessed} onTextSubmit={handleTextSubmit} />
          </div>
        )}

        {step === 'preferences' && (
          <div key="preferences" className="fade-in">
            <PreferenceSelection onSubmit={handlePreferencesSubmit} onBack={handleBack} />
          </div>
        )}

        {step === 'generating' && (
          <div key="generating" className="fade-in">
            <Loading />
          </div>
        )}

        {step === 'preview' && presentation && (
          <div key="preview" className="fade-in">
            <SlidePreview
              presentation={presentation}
              onExport={handleExport}
              onStartOver={handleStartOver}
              onRevise={handleRevise}
              isRevising={isRevising}
            />
          </div>
        )}
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
