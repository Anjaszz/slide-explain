export type SlideStyle = 'points' | 'detailed' | 'mixed';
export type PresentationTone = 'formal' | 'academic' | 'casual' | 'storytelling';
export type TargetAudience = 'sd' | 'smp' | 'sma' | 'mahasiswa' | 'umum' | 'gen-z' | 'masyarakat';

export interface SlidePreferences {
  slideCount: number;
  slideStyle: SlideStyle;
  tone: PresentationTone;
  targetAudience?: TargetAudience;
  includeInteraction?: boolean;
}

export interface Slide {
  id: string;
  title: string;
  content: string[];
  script: string;
}

export interface RevisionHistoryItem {
  timestamp: string;
  request: string;
  targetType: 'slides' | 'scripts' | 'both';
}

export interface PresentationData {
  title: string;
  slides: Slide[];
  metadata: {
    originalFileName?: string;
    generatedAt: string;
    preferences: SlidePreferences;
    lastRevisedAt?: string;
    revisionHistory?: RevisionHistoryItem[];
  };
}

export type AppStep = 'upload' | 'preferences' | 'generating' | 'preview';
