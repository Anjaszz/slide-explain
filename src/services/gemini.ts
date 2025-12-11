import { GoogleGenerativeAI } from '@google/generative-ai';
import type { SlidePreferences, Slide, PresentationData } from '../types/index';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model;

  constructor() {
    if (!API_KEY) {
      throw new Error('VITE_GEMINI_API_KEY is not set in environment variables');
    }
    this.genAI = new GoogleGenerativeAI(API_KEY);
    // Update to latest stable model (2025)
    this.model = this.genAI.getGenerativeModel({
      model: 'gemini-2.5-flash-lite',
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });
  }

  private buildSlideGenerationPrompt(
    content: string,
    preferences: SlidePreferences
  ): string {
    const styleInstructions = {
      points: 'gunakan bullet points singkat dan padat (maksimal 5-7 kata per point)',
      detailed: 'berikan penjelasan lengkap dalam paragraf untuk setiap bagian',
      mixed: 'kombinasikan judul dengan bullet points dan sedikit penjelasan singkat',
    };

    const toneInstructions = {
      formal: 'gunakan bahasa formal dan profesional, hindari kontraksi',
      academic: 'gunakan bahasa akademis seperti mahasiswa yang mempresentasikan riset/tugas kepada dosen, tunjukkan pemahaman mendalam dengan argumen yang terstruktur dan data yang jelas',
      casual: 'gunakan bahasa santai namun tetap informatif, seperti berbicara dengan teman',
      storytelling: 'gunakan pendekatan naratif, mulai dengan konteks atau cerita relevan',
    };

    const audienceInstructions = {
      sd: 'sesuaikan dengan anak SD: gunakan bahasa yang sangat sederhana, contoh yang dekat dengan kehidupan sehari-hari mereka, hindari istilah teknis',
      smp: 'sesuaikan dengan siswa SMP: gunakan bahasa yang mudah dipahami, berikan contoh yang relatable, gunakan istilah teknis dengan penjelasan',
      sma: 'sesuaikan dengan siswa SMA: gunakan bahasa yang cukup formal namun tetap mudah dipahami, boleh gunakan istilah teknis dengan konteks',
      mahasiswa: 'sesuaikan dengan mahasiswa: gunakan bahasa akademis, istilah teknis diperbolehkan, fokus pada analisis dan pemahaman mendalam',
      umum: 'sesuaikan dengan audiens umum/profesional: gunakan bahasa yang jelas dan profesional, hindari jargon berlebihan',
      'gen-z': 'sesuaikan dengan Gen Z: gunakan bahasa yang fresh, relatable, dan engaging tanpa kehilangan substansi',
      masyarakat: 'sesuaikan dengan masyarakat umum: gunakan bahasa yang mudah dipahami semua kalangan, hindari istilah teknis yang rumit',
    };

    const audienceSection = preferences.targetAudience
      ? `\n5. Target Audiens: ${audienceInstructions[preferences.targetAudience]}`
      : '';

    return `Kamu adalah seorang ahli presentasi yang sangat berpengalaman. Tugasmu adalah mengubah materi berikut menjadi ${preferences.slideCount} slide presentasi yang menarik dan efektif.

MATERI ORIGINAL:
${content}

INSTRUKSI PEMBUATAN SLIDE:
1. Buat TEPAT ${preferences.slideCount} slide (tidak kurang, tidak lebih)
2. Setiap slide harus memiliki:
   - Judul yang menarik dan deskriptif
   - Konten yang terstruktur dengan baik

3. Gaya konten: ${styleInstructions[preferences.slideStyle]}
4. Tone presentasi: ${toneInstructions[preferences.tone]}${audienceSection}

PENTING - AGAR TIDAK TERLIHAT SEPERTI AI:
- Gunakan bahasa natural dan mengalir, bukan kaku atau robotik
- Variasikan struktur kalimat, jangan monoton
- Tambahkan transisi yang smooth antar konsep
- Gunakan contoh konkret atau analogi jika membantu
- Hindari pola repetitif yang terlihat generated
- Pastikan flow logis dari slide ke slide

KHUSUS UNTUK TONE ACADEMIC (presentasi mahasiswa/siswa):
- Tunjukkan bahwa Anda memahami materi, bukan sedang mengajarkannya
- Gunakan frasa seperti "Berdasarkan analisis kami...", "Temuan menunjukkan...", "Dari hasil studi..."
- Sertakan argumentasi yang kuat dengan data atau fakta pendukung
- Gunakan struktur: Latar Belakang → Rumusan Masalah → Analisis → Temuan → Kesimpulan
- Hindari frasa yang terdengar seperti mengajar (misal: "Mari kita pelajari...", "Saya akan mengajarkan...")

STRUKTUR SLIDE:
- Slide 1: Judul utama dengan hook yang menarik perhatian
- Slide 2-${preferences.slideCount - 1}: Konten inti dengan pembagian yang logis
- Slide ${preferences.slideCount}: Kesimpulan atau ringkasan key points

FORMAT OUTPUT (STRICT JSON):
Berikan response dalam format JSON dengan struktur berikut:
{
  "title": "Judul Presentasi Utama",
  "slides": [
    {
      "title": "Judul Slide",
      "content": ["Point 1", "Point 2", "Point 3"]
    }
  ]
}

CATATAN:
- Untuk style 'points': setiap item di array content adalah bullet point
- Untuk style 'detailed': setiap item adalah paragraf
- Untuk style 'mixed': kombinasi keduanya
- Pastikan JSON valid dan bisa di-parse
- Jangan tambahkan markdown formatting atau backticks di output`;
  }

  private buildScriptGenerationPrompt(
    slides: Slide[],
    tone: string,
    targetAudience?: string,
    includeInteraction?: boolean
  ): string {
    const toneGuidance = {
      formal: 'profesional dan terstruktur, seperti presenter konferensi',
      academic: 'seperti mahasiswa/siswa yang mempresentasikan hasil riset atau tugas kepada dosen/guru dengan penuh percaya diri dan pemahaman yang matang, bukan seperti yang sedang mengajar',
      casual: 'seperti teman yang menjelaskan dengan antusias tapi tetap informatif',
      storytelling: 'seperti storyteller yang membangun narasi engaging',
    };

    const audienceGuidance = {
      sd: 'Gunakan bahasa yang sangat sederhana dan penuh semangat. Ajak mereka berimajinasi dan gunakan perumpamaan yang mereka kenal dari kehidupan sehari-hari.',
      smp: 'Gunakan bahasa yang mudah dipahami tapi tidak terlalu kekanak-kanakan. Berikan contoh yang relevan dengan usia mereka.',
      sma: 'Gunakan bahasa yang cukup dewasa namun tetap engaging. Boleh gunakan istilah teknis dengan penjelasan singkat.',
      mahasiswa: 'Gunakan bahasa akademis yang cerdas. Fokus pada analisis, data, dan pemahaman konseptual yang mendalam.',
      umum: 'Gunakan bahasa yang profesional namun tetap accessible untuk berbagai latar belakang.',
      'gen-z': 'Gunakan bahasa yang modern, relatable, dan engaging. Boleh sedikit casual tapi tetap substansial.',
      masyarakat: 'Gunakan bahasa yang sangat jelas dan mudah dipahami oleh semua kalangan tanpa memandang latar belakang pendidikan.',
    };

    const audienceSection = targetAudience && targetAudience in audienceGuidance
      ? `\n\nTARGET AUDIENS: ${audienceGuidance[targetAudience as keyof typeof audienceGuidance]}`
      : '';

    const interactionSection = includeInteraction
      ? `\n\nINTERAKSI DENGAN AUDIENS:
- Tambahkan pertanyaan retoris yang mengajak audiens berpikir
- Sesekali gunakan frasa seperti "Coba bayangkan...", "Pernahkah kalian...", "Mari kita pikirkan bersama..."
- Buat momen-momen di mana presenter "berbicara" langsung kepada audiens
- Ajak audiens untuk relate dengan topik melalui pengalaman mereka
- JANGAN berlebihan - 2-3 momen interaksi per presentasi sudah cukup
- Pastikan interaksi terasa natural, bukan dipaksakan`
      : '';

    return `Kamu adalah seorang public speaker profesional. Tugasmu adalah membuat naskah presentasi yang NATURAL dan TIDAK terdengar seperti dibuat AI.

SLIDES YANG AKAN DIPRESENTASIKAN:
${JSON.stringify(slides, null, 2)}

TONE: ${toneGuidance[tone as keyof typeof toneGuidance]}${audienceSection}${interactionSection}

INSTRUKSI PEMBUATAN NASKAH:
1. Buat naskah untuk SETIAP slide yang terdengar seperti manusia berbicara
2. Presenter TIDAK boleh hanya membaca slide - mereka harus MENJELASKAN
3. Tambahkan:
   - Transisi natural antar topik
   - Elaborasi yang tidak ada di slide
   - Pertanyaan retoris sesekali untuk engagement
   - Contoh atau analogi jika membantu
   - Variasi dalam pacing (kadang detail, kadang ringkas)

AGAR TERDENGAR NATURAL:
- Gunakan kalimat percakapan, bukan kalimat buku
- Variasikan panjang kalimat
- Tambahkan filler words natural seperti "nah", "jadi", "sekarang" (jangan berlebihan)
- Gunakan kontraksi jika tone casual
- Sesekali gunakan pertanyaan retoris
- Hindari pola repetitif antar slide
- Buat seolah presenter benar-benar memahami dan antusias dengan topik

KHUSUS UNTUK TONE ACADEMIC (presentasi mahasiswa/siswa):
- Mulai dengan konteks: "Selamat pagi/siang Bapak/Ibu [Dosen/Guru], kami akan mempresentasikan..."
- Gunakan "kami" atau "saya" untuk menunjukkan ownership terhadap riset/tugas
- Tunjukkan proses berpikir: "Kami menganalisis...", "Berdasarkan temuan kami..."
- Antisipasi pertanyaan dengan menjelaskan metodologi atau alasan di balik kesimpulan
- Akhiri dengan pembukaan untuk diskusi: "Demikian presentasi kami, kami terbuka untuk pertanyaan dan masukan"
- Hindari nada menggurui, fokus pada menyampaikan hasil kerja dengan percaya diri
- Sesekali rujuk sumber atau data: "Menurut studi/data yang kami kumpulkan..."

STRUKTUR NASKAH:
- Opening: Hook yang menarik perhatian
- Setiap slide: Penjelasan yang expand konten, bukan repeat
- Transisi: Smooth connection antar slide
- Closing: Strong conclusion dengan call-to-action atau takeaway

FORMAT OUTPUT (STRICT JSON):
{
  "scripts": [
    {
      "slideId": "id-slide",
      "script": "Naskah lengkap untuk slide ini..."
    }
  ]
}

PENTING:
- Naskah harus berbeda dari konten slide (jangan copy-paste)
- Presenter menjelaskan MENGAPA dan BAGAIMANA, slide hanya WHAT
- Total durasi ideal per slide: 1-2 menit berbicara
- Output harus valid JSON tanpa markdown formatting`;
  }

  async generateSlides(
    content: string,
    preferences: SlidePreferences
  ): Promise<{ title: string; slides: Omit<Slide, 'script'>[] }> {
    try {
      const prompt = this.buildSlideGenerationPrompt(content, preferences);
      const result = await this.model.generateContent(prompt);

      // Better error handling for empty or blocked responses
      if (!result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = result.response;

      // Check if response was blocked
      if (response.promptFeedback?.blockReason) {
        throw new Error(`Content blocked: ${response.promptFeedback.blockReason}`);
      }

      const text = response.text();

      if (!text) {
        throw new Error('Empty response from Gemini API');
      }

      // Clean the response - remove markdown code blocks if present
      const cleanedText = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      const parsed = JSON.parse(cleanedText);

      if (!parsed.title || !Array.isArray(parsed.slides)) {
        throw new Error('Invalid response format from Gemini API');
      }

      // Transform to our format with unique IDs
      return {
        title: parsed.title,
        slides: parsed.slides.map((slide: any, index: number) => ({
          id: `slide-${index + 1}`,
          title: slide.title,
          content: Array.isArray(slide.content) ? slide.content : [slide.content],
          script: '', // Will be filled later
        })),
      };
    } catch (error) {
      console.error('Error generating slides:', error);
      if (error instanceof Error) {
        throw new Error(`Gagal membuat slide: ${error.message}`);
      }
      throw new Error('Gagal membuat slide. Pastikan API key valid dan coba lagi.');
    }
  }

  async generateScripts(
    slides: Slide[],
    tone: string,
    targetAudience?: string,
    includeInteraction?: boolean
  ): Promise<{ slideId: string; script: string }[]> {
    try {
      const prompt = this.buildScriptGenerationPrompt(slides, tone, targetAudience, includeInteraction);
      const result = await this.model.generateContent(prompt);

      // Better error handling for empty or blocked responses
      if (!result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = result.response;

      // Check if response was blocked
      if (response.promptFeedback?.blockReason) {
        throw new Error(`Content blocked: ${response.promptFeedback.blockReason}`);
      }

      const text = response.text();

      if (!text) {
        throw new Error('Empty response from Gemini API');
      }

      // Clean the response
      const cleanedText = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      const parsed = JSON.parse(cleanedText);

      if (!Array.isArray(parsed.scripts)) {
        throw new Error('Invalid scripts format from Gemini API');
      }

      return parsed.scripts;
    } catch (error) {
      console.error('Error generating scripts:', error);
      if (error instanceof Error) {
        throw new Error(`Gagal membuat naskah: ${error.message}`);
      }
      throw new Error('Gagal membuat naskah. Pastikan API key valid dan coba lagi.');
    }
  }

  async generateComplete(
    content: string,
    preferences: SlidePreferences
  ): Promise<PresentationData> {
    // Step 1: Generate slides
    const { title, slides } = await this.generateSlides(content, preferences);

    // Step 2: Generate scripts for each slide
    const scripts = await this.generateScripts(
      slides as Slide[],
      preferences.tone,
      preferences.targetAudience,
      preferences.includeInteraction
    );

    // Step 3: Merge scripts with slides
    const slidesWithScripts: Slide[] = slides.map((slide) => {
      const scriptData = scripts.find((s) => s.slideId === slide.id);
      return {
        ...slide,
        script: scriptData?.script || '',
      };
    });

    return {
      title,
      slides: slidesWithScripts,
      metadata: {
        generatedAt: new Date().toISOString(),
        preferences,
      },
    };
  }

  private buildRevisionPrompt(
    currentData: PresentationData,
    revisionRequest: string,
    targetType: 'slides' | 'scripts' | 'both'
  ): string {
    const currentContent = JSON.stringify({
      title: currentData.title,
      slides: currentData.slides,
    }, null, 2);

    const targetInstructions = {
      slides: 'Fokus pada KONTEN SLIDE (judul dan content array). Script tetap sama.',
      scripts: 'Fokus pada SCRIPT presentasi. Konten slide tetap sama.',
      both: 'Revisi KEDUANYA (slide dan script) sesuai permintaan.',
    };

    return `Kamu adalah seorang ahli revisi presentasi. Tugasmu adalah merevisi presentasi yang sudah ada berdasarkan feedback dari user.

PRESENTASI SAAT INI:
${currentContent}

PERMINTAAN REVISI USER:
${revisionRequest}

TARGET REVISI: ${targetInstructions[targetType]}

INSTRUKSI REVISI:
1. Pahami permintaan user dengan baik
2. Pertahankan struktur dan jumlah slide yang sama kecuali diminta berbeda
3. ${targetType === 'slides' || targetType === 'both' ? 'Jika merevisi slide: pastikan perubahan konsisten dengan gaya yang ada' : ''}
4. ${targetType === 'scripts' || targetType === 'both' ? 'Jika merevisi script: pastikan tetap natural dan tidak terdengar AI-generated' : ''}
5. Jangan ubah bagian yang tidak diminta untuk direvisi
6. Pastikan revisi meningkatkan kualitas, bukan malah menurunkan

PENTING:
- Jika user minta "lebih panjang", tambahkan detail yang relevan dan berguna
- Jika user minta "lebih pendek", ringkas tanpa kehilangan informasi penting
- Jika user minta perubahan tone, sesuaikan bahasa dan gaya penyampaian
- Pertahankan format JSON yang sama persis

FORMAT OUTPUT (STRICT JSON):
{
  "title": "Judul Presentasi (bisa direvisi atau tetap sama)",
  "slides": [
    {
      "id": "slide-1",
      "title": "Judul Slide",
      "content": ["Point 1", "Point 2", "Point 3"],
      "script": "Script untuk slide ini..."
    }
  ]
}

CATATAN:
- Pastikan semua slide memiliki ID yang sama dengan sebelumnya
- Output harus valid JSON tanpa markdown formatting
- Jangan tambahkan komentar atau penjelasan di luar JSON`;
  }

  async revisePresentation(
    currentData: PresentationData,
    revisionRequest: string,
    targetType: 'slides' | 'scripts' | 'both' = 'both'
  ): Promise<PresentationData> {
    try {
      const prompt = this.buildRevisionPrompt(currentData, revisionRequest, targetType);
      const result = await this.model.generateContent(prompt);

      if (!result.response) {
        throw new Error('No response from Gemini API');
      }

      const response = result.response;

      if (response.promptFeedback?.blockReason) {
        throw new Error(`Content blocked: ${response.promptFeedback.blockReason}`);
      }

      const text = response.text();

      if (!text) {
        throw new Error('Empty response from Gemini API');
      }

      // Clean the response
      const cleanedText = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      const parsed = JSON.parse(cleanedText);

      if (!parsed.title || !Array.isArray(parsed.slides)) {
        throw new Error('Invalid response format from Gemini API');
      }

      return {
        title: parsed.title,
        slides: parsed.slides,
        metadata: {
          ...currentData.metadata,
          lastRevisedAt: new Date().toISOString(),
          revisionHistory: [
            ...(currentData.metadata.revisionHistory || []),
            {
              timestamp: new Date().toISOString(),
              request: revisionRequest,
              targetType,
            },
          ],
        },
      };
    } catch (error) {
      console.error('Error revising presentation:', error);
      if (error instanceof Error) {
        throw new Error(`Gagal merevisi presentasi: ${error.message}`);
      }
      throw new Error('Gagal merevisi presentasi. Silakan coba lagi.');
    }
  }
}

export const geminiService = new GeminiService();
