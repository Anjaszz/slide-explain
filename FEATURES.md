# SlideExplain - Features Documentation

## Core Features

### 1. Multi-Format File Upload

#### Supported Formats
- **PDF** (.pdf)
  - Uses PDF.js for text extraction
  - Supports multi-page documents
  - Preserves text structure

- **Microsoft Word** (.doc, .docx)
  - Uses Mammoth.js for processing
  - Extracts formatted text
  - Handles complex documents

- **Plain Text** (.txt)
  - Direct text reading
  - Fast processing
  - Simple and reliable

#### Upload Methods
1. **Drag & Drop**
   - Drag file anywhere in upload zone
   - Visual feedback when dragging
   - Instant validation

2. **File Picker**
   - Click to browse files
   - Filtered by supported formats
   - Standard OS file dialog

3. **Paste Text**
   - Direct text input
   - No file required
   - Great for quick tests

#### Validation
- Maximum file size: 10MB
- Minimum content: 100 characters
- Format verification
- Corruption detection

---

### 2. Intelligent Preference System

#### Slide Count Selection
- **Range**: 5-20 slides
- **Interactive Slider**: Visual feedback
- **Real-time Preview**: See selected number
- **Recommendation**: 8-12 slides for optimal presentations

**Use Cases:**
- 5-7 slides: Quick updates, brief topics
- 8-12 slides: Standard presentations, class projects
- 13-20 slides: Detailed research, comprehensive topics

#### Slide Style Options

**Bullet Points**
- Short, concise points
- 5-7 words per point
- Easy to read
- Best for: Quick presentations, executive summaries

**Detailed**
- Full paragraph explanations
- Comprehensive information
- Rich content
- Best for: Academic presentations, detailed reports

**Mixed (Recommended)**
- Combination of points and explanations
- Balanced approach
- Versatile
- Best for: Most use cases, general presentations

#### Presentation Tone

**Formal**
- Professional language
- Structured delivery
- No contractions
- Best for: Business presentations, official reports
- Example: "We shall discuss the methodology employed..."

**Academic**
- Technical terminology
- Scholarly approach
- Evidence-based
- Best for: Research presentations, thesis defense
- Example: "The empirical evidence suggests..."

**Casual**
- Friendly language
- Conversational style
- Relatable examples
- Best for: Team meetings, informal presentations
- Example: "Let's dive into how this works..."

**Storytelling**
- Narrative approach
- Engaging hooks
- Context-driven
- Best for: Pitch decks, creative presentations
- Example: "Imagine a world where..."

---

### 3. AI-Powered Content Generation

#### Slide Generation

**Process:**
1. Content Analysis
   - AI reads and understands material
   - Identifies key topics and themes
   - Structures information logically

2. Slide Creation
   - Generates exact number of slides requested
   - Applies selected style consistently
   - Creates engaging titles
   - Organizes content hierarchically

3. Quality Assurance
   - Ensures natural language
   - Avoids AI-like patterns
   - Maintains consistent tone
   - Validates completeness

**Output Quality:**
- Natural, human-like writing
- Varied sentence structure
- Smooth transitions
- Contextual examples
- Logical flow

#### Script Generation

**Process:**
1. Slide Analysis
   - Reviews all slide content
   - Understands overall narrative
   - Identifies connections

2. Script Writing
   - Expands on slide content (not just reading)
   - Adds explanations and context
   - Creates natural transitions
   - Includes engagement techniques

3. Natural Enhancement
   - Conversational language
   - Rhetorical questions
   - Varied pacing
   - Natural filler words
   - Personality injection

**Script Features:**
- 1-2 minutes speaking time per slide
- Different from slide content
- Natural delivery cues
- Transition phrases
- Engagement hooks

---

### 4. Interactive Preview System

#### Slide Navigation

**Navigation Controls:**
- Previous/Next buttons
- Keyboard shortcuts (←/→)
- Dot indicators for each slide
- Click dots to jump to specific slide

**Slide Display:**
- 16:10 aspect ratio (standard presentation)
- Professional layout
- Clear typography
- Color-coded headings
- Bullet point styling

**Features:**
- Real-time navigation
- Smooth transitions
- Current slide indicator
- Slide counter (e.g., "Slide 3 of 10")

#### Script Panel

**Display Features:**
- Full script for current slide
- Scrollable for long scripts
- Readable font and spacing
- White background for clarity

**Actions:**
- **Copy Script**: Copy current slide's script
- **Copy All**: Copy all scripts at once
- One-click clipboard operations
- Success confirmation

**Quick Stats:**
- Word count
- Estimated duration (150 words/min)
- Number of content points
- Real-time calculations

---

### 5. Export Functionality

#### JSON Export

**Content:**
- Presentation title
- All slides with content
- All scripts
- Metadata (preferences, timestamp, filename)
- Structured format

**Use Cases:**
- Import into other tools
- Data analysis
- Version control
- Backup

**Format:**
```json
{
  "title": "Presentation Title",
  "metadata": {
    "generatedAt": "2025-01-15T...",
    "originalFileName": "document.pdf",
    "preferences": { ... }
  },
  "slides": [ ... ]
}
```

#### TXT Export

**Content:**
- Presentation title
- Each slide with:
  - Slide number
  - Slide title
  - Content points
  - Full script
- Formatted for readability

**Use Cases:**
- Print scripts for practice
- Share with team members
- Easy reading on any device
- Email-friendly format

**Format:**
```
PRESENTATION TITLE
================

SLIDE 1: Introduction
CONTENT:
- Point 1
- Point 2

SCRIPT:
Full presentation script...

================
```

---

### 6. Claymorphism Design

#### Visual Style

**Clay Cards:**
- Soft, tactile appearance
- Multi-layer shadows
- Frosted glass effect
- Rounded corners (32px)
- White with transparency

**Clay Buttons:**
- Gradient backgrounds
- Depth with shadows
- Hover lift effect
- Active press effect
- Smooth transitions

**Clay Inputs:**
- Inset shadows
- Focus glow effect
- Soft borders
- Pleasant to interact with

#### Color System

**Primary Colors:**
- Soft Peach (#FFF0EA): Backgrounds, cards
- Pastel Coral (#FFC9B9): Accents, borders
- Warm Peach (#FF9A76): Primary actions, headings

**Gradients:**
- Background: Peach to Coral
- Buttons: Warm to darker warm
- Smooth, subtle transitions

**Shadows:**
- Multiple layers for depth
- Soft, diffused shadows
- Inner shadows for inset feel
- Color-tinted (peach hues)

#### Responsive Design

- Mobile-first approach
- Breakpoints for tablets and desktop
- Touch-friendly targets
- Readable on all screen sizes
- Adaptive layouts

---

### 7. User Experience Features

#### Loading States

**Visual Feedback:**
- Animated spinner
- Progress indicators
- Step-by-step status
- Estimated time display

**Steps Shown:**
1. Analyzing material
2. Creating slide structure
3. Writing presentation scripts

**Duration:**
- Typical: 30-60 seconds
- Depends on content length
- Clear time expectation

#### Error Handling

**Types:**
- File upload errors
- Processing errors
- API errors
- Network errors

**User Feedback:**
- Clear error messages
- Suggested solutions
- Retry options
- Helpful guidance

#### State Management

**App States:**
1. Upload: Initial file/text input
2. Preferences: Configure settings
3. Generating: AI processing
4. Preview: Review and export

**Navigation:**
- Back button to previous step
- Start over for new presentation
- Preserved state within session

---

### 8. Accessibility Features

#### Keyboard Navigation
- Tab through all interactive elements
- Enter to activate buttons
- Arrow keys for slide navigation
- Escape to close modals

#### Screen Reader Support
- Semantic HTML
- ARIA labels
- Alt text for icons
- Descriptive buttons

#### Visual Accessibility
- High contrast ratios
- Readable font sizes
- Clear visual hierarchy
- Color is not sole indicator

---

## Advanced Features

### Prompt Engineering

**Sophisticated Prompts:**
- Context-aware generation
- Style adaptation
- Tone consistency
- Natural language output

**Anti-AI Detection:**
- Varied sentence structure
- Natural transitions
- Contextual examples
- Human-like patterns

### File Processing

**Client-Side Processing:**
- No server required
- Privacy-friendly
- Fast processing
- No upload delays

**Smart Extraction:**
- Preserves structure
- Handles formatting
- Multi-page support
- Error recovery

---

## Coming Soon (Potential)

- Real-time collaboration
- PowerPoint export
- Image support in slides
- Custom templates
- Voice preview (TTS)
- Multi-language support
- Slide reordering
- In-app editing
- Cloud storage
- Presentation analytics

---

## Technical Specifications

**Performance:**
- File processing: < 5 seconds
- AI generation: 30-60 seconds
- UI interactions: < 100ms
- Export: Instant

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Requirements:**
- JavaScript enabled
- Modern browser
- Internet connection (for AI)
- Clipboard API (for copy)
