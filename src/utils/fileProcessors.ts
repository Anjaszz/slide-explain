import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

// Set up PDF.js worker - using copied worker file from public assets
pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.min.mjs';

export interface FileProcessResult {
  text: string;
  fileName: string;
}

export class FileProcessor {
  static async processPDF(file: File): Promise<FileProcessResult> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        fullText += pageText + '\n\n';
      }

      return {
        text: fullText.trim(),
        fileName: file.name,
      };
    } catch (error) {
      console.error('Error processing PDF:', error);
      throw new Error('Gagal membaca file PDF. Pastikan file tidak corrupt.');
    }
  }

  static async processWord(file: File): Promise<FileProcessResult> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });

      return {
        text: result.value.trim(),
        fileName: file.name,
      };
    } catch (error) {
      console.error('Error processing Word document:', error);
      throw new Error('Gagal membaca file Word. Pastikan file tidak corrupt.');
    }
  }

  static async processText(file: File): Promise<FileProcessResult> {
    try {
      const text = await file.text();

      return {
        text: text.trim(),
        fileName: file.name,
      };
    } catch (error) {
      console.error('Error processing text file:', error);
      throw new Error('Gagal membaca file teks.');
    }
  }

  static async processFile(file: File): Promise<FileProcessResult> {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    switch (fileExtension) {
      case 'pdf':
        return this.processPDF(file);
      case 'doc':
      case 'docx':
        return this.processWord(file);
      case 'txt':
        return this.processText(file);
      default:
        throw new Error(
          'Format file tidak didukung. Gunakan PDF, Word (.doc/.docx), atau Text (.txt)'
        );
    }
  }

  static validateFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedExtensions = ['pdf', 'doc', 'docx', 'txt'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      return {
        valid: false,
        error: 'Format file tidak didukung. Gunakan PDF, Word, atau Text.',
      };
    }

    if (file.size > maxSize) {
      return {
        valid: false,
        error: 'File terlalu besar. Maksimal 10MB.',
      };
    }

    if (file.size === 0) {
      return {
        valid: false,
        error: 'File kosong.',
      };
    }

    return { valid: true };
  }
}
