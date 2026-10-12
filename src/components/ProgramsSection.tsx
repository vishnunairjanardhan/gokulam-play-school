import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const programs = [
  {
    id: 'playschool',
    label: 'Play School',
    labelColor: 'bg-orange-100 text-orange-700',
    accentColor: '#FF7900',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    icon: '🎈',
    iconBg: 'bg-[#FF7900]',
    description:
      'A gentle introduction to the world of learning through play, colours, sounds, and joyful exploration.',
    highlights: [
      'Explore colours, shapes, and everyday objects',
      'Interactive play and age-appropriate activities',
      'Building confidence and social awareness',
    ],
    svgFill: '#FF7900',
    IllustrationEl: PlaySchoolIllustration,
  },
  {
    id: 'nursery',
    label: 'Nursery',
    labelColor: 'bg-green-100 text-green-700',
    accentColor: '#27AE60',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: '🌿',
    iconBg: 'bg-[#27AE60]',
    description:
      'Building early communication, creativity, and social skills through activities and guided exploration.',
    highlights: [
      'Early communication and social skills',
      'Foundational concepts through fun activities',
      'Creativity, movement, and exploration',
    ],
    IllustrationEl: NurseryIllustration,
  },
  {
    id: 'jkg',
    label: 'Junior KG',
    labelColor: 'bg-blue-100 text-blue-700',
    accentColor: '#159BEF',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: '📖',
    iconBg: 'bg-[#159BEF]',
    description:
      'Strengthening early literacy and numeracy while encouraging problem-solving and creative thinking.',
    highlights: [
      'Early literacy and numeracy foundations',
      'Problem-solving and creative thinking',
      'Confidence for the next stage of schooling',
    ],
    IllustrationEl: JuniorKGIllustration,
  },
  {
    id: 'skg',
    label: 'Senior KG',
    labelColor: 'bg-purple-100 text-purple-700',
    accentColor: '#8B5CF6',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: '🚀',
    iconBg: 'bg-[#8B5CF6]',
    description:
      'Preparing confident learners with advanced phonics, early math concepts, reading, and primary school readiness.',
    highlights: [
      'Advanced phonics, reading & writing',
      'Numeracy, logic & problem-solving',
      'School readiness & independent confidence',
    ],
    IllustrationEl: SeniorKGIllustration,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleEnquire = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="programs"
      className="relative py-20 bg-[#FFF9E9] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 0 Q360 60 720 0 Q1080 -60 1440 0 L1440 0 L0 0 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Our Programs"
            title="The Perfect Beginning for "
            highlight="Every Little Learner"
            subtitle="We offer thoughtfully designed programs for each stage of early childhood, ensuring every child gets the right start."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {programs.map((program) => (
            <motion.article
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`rounded-3xl border ${program.bgColor} ${program.borderColor} overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow`}
              aria-label={`${program.label} program`}
            >
              {/* Illustration area */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/60 to-transparent p-4 flex items-center justify-center">
                <program.IllustrationEl />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${program.iconBg} rounded-xl flex items-center justify-center text-lg shadow-sm`} aria-hidden="true">
                    {program.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${program.labelColor}`}>
                    {program.label}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>

                <ul className="space-y-2 flex-1" aria-label={`${program.label} highlights`}>
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[#172D63] font-medium">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                        style={{ backgroundColor: program.accentColor }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleEnquire}
                  className="mt-2 w-full py-3 rounded-2xl font-bold text-sm border-2 transition-all hover:text-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    borderColor: program.accentColor,
                    color: program.accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = program.accentColor
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = program.accentColor
                  }}
                  aria-label={`Enquire now about ${program.label}`}
                >
                  Enquire Now →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60 Q360 0 720 60 Q1080 120 1440 60 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function PlaySchoolIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-40 h-32" aria-hidden="true">
      <circle cx="100" cy="80" r="70" fill="#FF7900" opacity="0.1" />
      {/* Toy blocks */}
      <rect x="50" y="100" width="35" height="35" rx="6" fill="#FF7900" opacity="0.8" />
      <rect x="90" y="85" width="35" height="50" rx="6" fill="#FFD43B" opacity="0.8" />
      <rect x="130" y="95" width="35" height="40" rx="6" fill="#F51D2A" opacity="0.8" />
      {/* Letters on blocks */}
      <text x="63" y="122" fontFamily="Baloo 2" fontSize="14" fill="white" fontWeight="bold">A</text>
      <text x="103" y="115" fontFamily="Baloo 2" fontSize="14" fill="#172D63" fontWeight="bold">B</text>
      <text x="143" y="119" fontFamily="Baloo 2" fontSize="14" fill="white" fontWeight="bold">C</text>
      {/* Stars */}
      <circle cx="60" cy="50" r="6" fill="#FFD43B" />
      <circle cx="140" cy="45" r="5" fill="#FF7900" />
      <circle cx="100" cy="35" r="4" fill="#F51D2A" />
    </svg>
  )
}

function NurseryIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-40 h-32" aria-hidden="true">
      <circle cx="100" cy="80" r="70" fill="#27AE60" opacity="0.1" />
      {/* Flower */}
      <circle cx="100" cy="80" r="14" fill="#FFD43B" />
      <circle cx="100" cy="55" r="12" fill="#27AE60" opacity="0.8" />
      <circle cx="100" cy="105" r="12" fill="#27AE60" opacity="0.8" />
      <circle cx="75" cy="80" r="12" fill="#27AE60" opacity="0.8" />
      <circle cx="125" cy="80" r="12" fill="#27AE60" opacity="0.8" />
      <circle cx="82" cy="62" r="10" fill="#27AE60" opacity="0.6" />
      <circle cx="118" cy="62" r="10" fill="#27AE60" opacity="0.6" />
      <circle cx="82" cy="98" r="10" fill="#27AE60" opacity="0.6" />
      <circle cx="118" cy="98" r="10" fill="#27AE60" opacity="0.6" />
      {/* Face on flower center */}
      <circle cx="95" cy="77" r="2" fill="#172D63" />
      <circle cx="105" cy="77" r="2" fill="#172D63" />
      <path d="M95 83 Q100 88 105 83" stroke="#172D63" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Stem */}
      <rect x="97" y="94" width="6" height="40" rx="3" fill="#27AE60" />
      {/* Leaves */}
      <ellipse cx="85" cy="115" rx="12" ry="7" fill="#27AE60" opacity="0.7" transform="rotate(-30 85 115)" />
      <ellipse cx="115" cy="120" rx="12" ry="7" fill="#27AE60" opacity="0.7" transform="rotate(30 115 120)" />
    </svg>
  )
}

function JuniorKGIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-40 h-32" aria-hidden="true">
      <circle cx="100" cy="80" r="70" fill="#159BEF" opacity="0.1" />
      {/* Open book */}
      <path d="M55 120 L55 60 Q100 50 100 60 L100 120 Z" fill="#159BEF" opacity="0.7" />
      <path d="M145 120 L145 60 Q100 50 100 60 L100 120 Z" fill="#172D63" opacity="0.7" />
      {/* Page lines */}
      <line x1="65" y1="75" x2="90" y2="75" stroke="white" strokeWidth="2" opacity="0.7" />
      <line x1="65" y1="85" x2="90" y2="85" stroke="white" strokeWidth="2" opacity="0.7" />
      <line x1="65" y1="95" x2="90" y2="95" stroke="white" strokeWidth="2" opacity="0.7" />
      <line x1="65" y1="105" x2="90" y2="105" stroke="white" strokeWidth="2" opacity="0.7" />
      {/* Numbers on right page */}
      <text x="108" y="82" fontFamily="Baloo 2" fontSize="13" fill="white" fontWeight="bold">1+2</text>
      <text x="108" y="100" fontFamily="Baloo 2" fontSize="13" fill="white" fontWeight="bold">=3</text>
      {/* Star above */}
      <polygon points="100,30 103,40 114,40 105,46 108,56 100,50 92,56 95,46 86,40 97,40" fill="#FFD43B" />
    </svg>
  )
}

function SeniorKGIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-40 h-32" aria-hidden="true">
      <circle cx="100" cy="80" r="70" fill="#8B5CF6" opacity="0.1" />
      {/* Graduation cap */}
      <polygon points="100,48 145,66 100,84 55,66" fill="#172D63" />
      <polygon points="100,78 135,66 100,56 65,66" fill="#8B5CF6" opacity="0.3" />
      <rect x="75" y="78" width="50" height="22" rx="6" fill="#172D63" />
      {/* Tassel */}
      <circle cx="100" cy="66" r="3" fill="#FFD43B" />
      <path d="M100 66 L138 82 L138 98" stroke="#FFD43B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <polygon points="135,98 141,98 138,106" fill="#FFD43B" />
      {/* Rocket / Pencil for next big step */}
      <g transform="translate(42, 92) rotate(-30)">
        <polygon points="12,0 24,12 0,12" fill="#FFD43B" />
        <rect x="0" y="12" width="24" height="32" rx="3" fill="#8B5CF6" />
        <rect x="0" y="44" width="24" height="8" rx="2" fill="#F51D2A" />
      </g>
      {/* Stars */}
      <polygon points="160,38 162,44 168,44 163,48 165,54 160,50 155,54 157,48 152,44 158,44" fill="#FFD43B" />
      <polygon points="38,50 40,55 45,55 41,58 43,63 38,60 33,63 35,58 31,55 36,55" fill="#8B5CF6" />
    </svg>
  )
}
