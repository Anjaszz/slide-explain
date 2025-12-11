# 🔧 PDF Worker Fix

## Problem
Error saat upload PDF:
```
Error processing PDF: Error: Setting up fake worker failed:
"Failed to fetch dynamically imported module:
http://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.449/pdf.worker.min.js?import".
```

## Root Cause
PDF.js membutuhkan worker file untuk memproses PDF. Sebelumnya menggunakan CDN yang:
- Tidak reliable (network dependency)
- Blocked oleh CORS policy
- Tidak kompatibel dengan Vite's module system

## Solution ✅

### 1. Install vite-plugin-static-copy
```bash
npm install vite-plugin-static-copy --save-dev
```

### 2. Update vite.config.ts
Copy worker file dari node_modules ke public assets saat build:

```typescript
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
          dest: 'assets',
        },
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ['pdfjs-dist'], // Don't pre-bundle pdfjs-dist
  },
})
```

### 3. Update fileProcessors.ts
Gunakan local worker file:

```typescript
// Before (CDN - ERROR)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// After (Local - WORKS)
pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.min.mjs';
```

## How It Works

1. **Build Time:**
   - `vite-plugin-static-copy` copies `pdf.worker.min.mjs` from `node_modules/pdfjs-dist/build/`
   - File placed in `dist/assets/` (production) or served from memory (dev)

2. **Runtime:**
   - PDF.js loads worker from `/assets/pdf.worker.min.mjs`
   - Worker runs in separate thread
   - No network dependency, no CORS issues

## Benefits

✅ **No CDN Dependency** - Works offline
✅ **No CORS Issues** - Same origin
✅ **Faster** - Local file loading
✅ **Reliable** - No network failures
✅ **Version Locked** - Worker version matches pdfjs-dist version

## Files Modified

- [vite.config.ts](vite.config.ts) - Added static copy plugin
- [src/utils/fileProcessors.ts](src/utils/fileProcessors.ts) - Updated worker path
- [package.json](package.json) - Added vite-plugin-static-copy

## Testing

1. Run dev server:
   ```bash
   npm run dev
   ```

2. Check console for plugin output:
   ```
   [vite-plugin-static-copy] Collected 1 items.
   ```

3. Upload a PDF file - should work without errors!

## Production Build

The worker file will be automatically copied to `dist/assets/` during build:

```bash
npm run build
```

Output structure:
```
dist/
├── assets/
│   ├── pdf.worker.min.mjs  ← Copied by plugin
│   ├── index-[hash].js
│   └── index-[hash].css
└── index.html
```

## Troubleshooting

### Worker still not loading?
Check browser console for exact path. If worker path is wrong:

1. Verify plugin config in vite.config.ts
2. Check if file exists in dist/assets/ after build
3. Ensure workerSrc path matches: `/assets/pdf.worker.min.mjs`

### Different error?
Make sure:
- pdfjs-dist is installed: `npm install pdfjs-dist`
- vite-plugin-static-copy is installed: `npm install vite-plugin-static-copy --save-dev`
- Dev server restarted after config change

## Alternative Solutions (Not Used)

1. ❌ **CDN with version** - Still has network dependency
2. ❌ **Inline worker** - Increases bundle size significantly
3. ❌ **Dynamic import.meta.url** - Doesn't work reliably with Vite
4. ✅ **Static copy plugin** - Clean, reliable, production-ready

## References

- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy)
- [Vite Worker Options](https://vitejs.dev/config/worker-options.html)
