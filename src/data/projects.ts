export type Project = {
  id: string
  title: string
  posterImage: string
  description: string
  tracklist: string[]
  techStack: string[]
  githubUrl: string
  demoUrl?: string,
  releaseDate: number
}

export const projects: Project[] = [
  {
    id: 'word-radeye',
    title: 'Word Radeye',
    posterImage: '/images/posters/Radeye.webp',
    description: 'ML project predicting typing speed from webcam-based eye movement tracking.',
    tracklist: [
      '01. Real-time iris tracking with MediaPipe and OpenCV',
      '02. 18-session typing dataset with manual time isolation',
      '03. PyTorch regression model, RMSE 36 WPM',
      '04. Found r=0.469 between gaze velocity and WPM',
      '05. Custom CSV pipeline with timestamped gaze coordinates',
      '06. Velocity feature engineering: avg, max, std deviation',
      '07. Hypothesis-driven correlation analysis with MonkeyType data',
      '08. Tracked overfitting through train/test loss divergence',
    ],
    techStack: ['Python', 'PyTorch', 'MediaPipe', 'OpenCV', 'pandas', 'scikit-learn'],
    githubUrl: 'https://github.com/Karandeep-Singhhh/word-radeye',
    releaseDate: 2026
  },
  {
    id: 'stock-predictor',
    title: 'Stock Market Predictor',
    posterImage: '/images/posters/StockPredictor.webp',
    description: 'ML pipeline for next-day AAPL price movement using technical indicators and tree-based models.',
    tracklist: [
      '01. yfinance data pipeline with 1200+ AAPL data points',
      '02. Feature engineering: moving averages, RSI, volatility',
      '03. Model comparison: Random Forest, XGBoost, Linear Regression',
      '04. Honest negative result on short-term predictability',
      '05. Custom RSI calculation from rolling gain/loss windows',
      '06. Target engineering with next-day return shift',
      '07. Feature scaling with StandardScaler',
      '08. Documented limitations of technical-indicator-only models',
    ],
    techStack: ['Python', 'scikit-learn', 'XGBoost', 'pandas', 'NumPy', 'yfinance'],
    githubUrl: 'https://github.com/Karandeep-Singhhh/Stock-Predictor',
    releaseDate: 2025
  },
  {
    id: 'language-api',
    title: 'Language Feedback API',
    posterImage: '/images/posters/LanguageFeedbackLLMAPI.webp',
    description: 'LLM-powered API that returns structured grammar feedback on learner-written sentences across any language.',
    tracklist: [
      '01. Iterative prompt engineering across 5+ languages',
      '02. Anthropic Claude Sonnet integration with JSON-schema validation',
      '03. Defensive parsing layer for unreliable LLM output',
      '04. Test-driven prompt refinement (Japanese, Portuguese case studies)',
      '05. Dockerized FastAPI deployment with health-check endpoint',
      '06. Schema-validated structured outputs for downstream parsing',
      '07. Encoding workaround for non-ASCII shell input',
      '08. Cost-conscious model selection for production scaling',
    ],
    techStack: ['Python', 'FastAPI', 'Anthropic API', 'Docker', 'pytest'],
    githubUrl: 'https://github.com/Karandeep-Singhhh/intern-task-2026',
    releaseDate: 2026
  },
  {
    id: 'lofi-portfolio',
    title: 'Lofi Portfolio',
    posterImage: '/images/posters/LofiPoster.webp',
    description: 'A self-referential portfolio site built as an explorable lofi room, with interactive project posters and modal-based deep dives.',
    tracklist: [
      '01. Interactive room scene with click-to-reveal project posters',
      '02. Custom 2D scene composition over AI-generated background art',
      '03. Framer Motion modal transitions and scene-to-poster zoom',
      '04. Persistent room atmosphere with ambient audio and mode-switching design',
      '05. Album-poster format with tech stack as color palette',
      '06. CSS-rendered neon signage matching room lighting',
      '07. Type-safe project schema with co-located content data',
      '08. Built in Next.js 16 with React Compiler enabled',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/Karandeep-Singhhh/LofiRoom',
    releaseDate: 2026
  },
]
