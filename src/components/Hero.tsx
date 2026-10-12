import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
  },
}

const floatVariants2 = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
  },
}

const floatVariants3 = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 },
  },
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FFF9E9] pt-20"
      aria-label="Hero section"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF7900]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#159BEF]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#FFD43B]/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100 mb-6">
              <span className="text-lg" role="img" aria-label="Star">⭐</span>
              <span className="text-sm font-semibold text-[#172D63]">Play School • Nursery • Junior KG • Senior KG</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#172D63] leading-tight mb-6">
              Little Steps Today,{' '}
              <span className="text-[#FF7900] relative inline-block">
                Big Dreams
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden="true"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <motion.path
                    d="M2 8 Q50 2 100 8 Q150 14 198 8"
                    stroke="#FFD43B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>{' '}
              Tomorrow!
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Welcome to Gokulam Nursery, where little minds explore, friendships blossom,
              and every day brings a new adventure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('#programs')}
                className="px-6 py-3.5 bg-[#172D63] text-white font-bold rounded-full shadow-lg hover:bg-[#1e3a7e] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#172D63] focus-visible:ring-offset-2"
              >
                Explore Our Programs
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-6 py-3.5 bg-[#FF7900] text-white font-bold rounded-full shadow-lg hover:bg-orange-600 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] focus-visible:ring-offset-2"
              >
                Enquire for Admission
              </button>
            </div>

            {/* Location pill */}
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-base" role="img" aria-label="Location">📍</span>
              <span>Dombivli East, Maharashtra</span>
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Main illustration card */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Large background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7900]/20 to-[#FFD43B]/20 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] transform -rotate-6" />

              {/* Hero SVG illustration */}
              <div className="relative z-10 p-8">
                <HeroIllustration />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -top-4 -left-4 w-14 h-14 bg-[#FFD43B] rounded-2xl shadow-lg flex items-center justify-center text-2xl rotate-12"
                aria-hidden="true"
              >
                🎨
              </motion.div>

              <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#27AE60] rounded-2xl shadow-lg flex items-center justify-center text-2xl -rotate-6"
                aria-hidden="true"
              >
                📚
              </motion.div>

              <motion.div
                variants={floatVariants3}
                animate="animate"
                className="absolute top-4 -right-8 w-12 h-12 bg-[#159BEF] rounded-2xl shadow-lg flex items-center justify-center text-xl rotate-6"
                aria-hidden="true"
              >
                🌟
              </motion.div>

              <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute bottom-8 -left-8 w-12 h-12 bg-[#F51D2A] rounded-2xl shadow-lg flex items-center justify-center text-xl -rotate-12"
                aria-hidden="true"
              >
                🎵
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-sm text-gray-400 font-medium">Discover more</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 Q180 0 360 40 Q540 80 720 40 Q900 0 1080 40 Q1260 80 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-label="Children learning illustration" role="img">
      {/* Sky */}
      <rect width="400" height="380" rx="32" fill="#E8F6FF" />

      {/* Rainbow */}
      <path d="M40 220 Q200 60 360 220" stroke="#F51D2A" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M55 225 Q200 80 345 225" stroke="#FF7900" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M70 230 Q200 100 330 230" stroke="#FFD43B" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M85 235 Q200 120 315 235" stroke="#27AE60" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M100 240 Q200 140 300 240" stroke="#159BEF" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Clouds */}
      <ellipse cx="80" cy="80" rx="40" ry="22" fill="white" opacity="0.9" />
      <ellipse cx="100" cy="70" rx="30" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="55" cy="75" rx="28" ry="18" fill="white" opacity="0.9" />

      <ellipse cx="320" cy="60" rx="38" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="345" cy="52" rx="28" ry="18" fill="white" opacity="0.9" />
      <ellipse cx="298" cy="55" rx="26" ry="17" fill="white" opacity="0.9" />

      {/* Ground */}
      <ellipse cx="200" cy="340" rx="180" ry="40" fill="#27AE60" opacity="0.3" />
      <rect x="20" y="310" width="360" height="70" rx="30" fill="#27AE60" opacity="0.2" />

      {/* Flowers */}
      <circle cx="60" cy="315" r="6" fill="#F51D2A" />
      <circle cx="60" cy="305" r="5" fill="#FFD43B" />
      <rect x="58" y="308" width="4" height="20" rx="2" fill="#27AE60" />

      <circle cx="340" cy="312" r="6" fill="#FF7900" />
      <circle cx="340" cy="302" r="5" fill="#159BEF" />
      <rect x="338" y="305" width="4" height="20" rx="2" fill="#27AE60" />

      {/* Child 1 - Sitting, reading */}
      <circle cx="150" cy="258" r="26" fill="#FDBCB4" />
      {/* Hair */}
      <path d="M126 255 Q128 232 150 230 Q172 232 174 255" fill="#172D63" />
      {/* Body */}
      <rect x="130" y="282" width="40" height="50" rx="12" fill="#FF7900" />
      {/* Book */}
      <rect x="120" y="295" width="60" height="40" rx="6" fill="white" stroke="#159BEF" strokeWidth="2" />
      <line x1="150" y1="295" x2="150" y2="335" stroke="#159BEF" strokeWidth="2" />
      {/* Lines on book */}
      <line x1="128" y1="310" x2="146" y2="310" stroke="#172D63" strokeWidth="1.5" opacity="0.5" />
      <line x1="128" y1="318" x2="146" y2="318" stroke="#172D63" strokeWidth="1.5" opacity="0.5" />
      <line x1="128" y1="326" x2="146" y2="326" stroke="#172D63" strokeWidth="1.5" opacity="0.5" />
      {/* Eyes */}
      <circle cx="143" cy="258" r="3" fill="#172D63" />
      <circle cx="157" cy="258" r="3" fill="#172D63" />
      {/* Smile */}
      <path d="M143 265 Q150 271 157 265" stroke="#172D63" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Child 2 - Standing, painting */}
      <circle cx="260" cy="250" r="26" fill="#F9C784" />
      {/* Hair */}
      <path d="M236 248 Q238 225 260 222 Q282 225 284 248" fill="#8B5E3C" />
      {/* Body */}
      <rect x="242" y="274" width="36" height="50" rx="12" fill="#27AE60" />
      {/* Arm + brush */}
      <rect x="276" y="278" width="8" height="30" rx="4" fill="#F9C784" />
      <rect x="278" y="305" width="4" height="12" rx="2" fill="#8B5E3C" />
      <circle cx="280" cy="317" r="5" fill="#F51D2A" />
      {/* Canvas */}
      <rect x="298" y="268" width="48" height="44" rx="6" fill="white" stroke="#FFD43B" strokeWidth="2" />
      <circle cx="314" cy="285" r="6" fill="#159BEF" opacity="0.6" />
      <circle cx="328" cy="295" r="5" fill="#FF7900" opacity="0.6" />
      <circle cx="320" cy="303" r="4" fill="#27AE60" opacity="0.6" />
      {/* Eyes */}
      <circle cx="253" cy="250" r="3" fill="#172D63" />
      <circle cx="267" cy="250" r="3" fill="#172D63" />
      {/* Smile */}
      <path d="M253 257 Q260 264 267 257" stroke="#172D63" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Stars scattered */}
      <polygon points="200,30 202,36 208,36 203,40 205,46 200,42 195,46 197,40 192,36 198,36" fill="#FFD43B" opacity="0.8" />
      <polygon points="370,130 371,134 375,134 372,137 373,141 370,138 367,141 368,137 365,134 369,134" fill="#FF7900" opacity="0.7" />
      <polygon points="30,150 31,154 35,154 32,157 33,161 30,158 27,161 28,157 25,154 29,154" fill="#FFD43B" opacity="0.6" />
    </svg>
  )
}
