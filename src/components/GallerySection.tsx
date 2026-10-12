import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SectionHeading from './SectionHeading'

// Gallery items using playful colorful placeholder cards with SVG scenes
const galleryItems = [
  {
    id: 1,
    alt: 'Children doing art and craft activities',
    emoji: '🎨',
    label: 'Art & Craft',
    bg: 'bg-orange-100',
    accent: '#FF7900',
  },
  {
    id: 2,
    alt: 'Children during storytelling circle time',
    emoji: '📚',
    label: 'Story Time',
    bg: 'bg-blue-100',
    accent: '#159BEF',
  },
  {
    id: 3,
    alt: 'Children playing outdoors',
    emoji: '⚽',
    label: 'Outdoor Play',
    bg: 'bg-green-100',
    accent: '#27AE60',
  },
  {
    id: 4,
    alt: 'Music and movement session',
    emoji: '🎵',
    label: 'Music Time',
    bg: 'bg-purple-100',
    accent: '#7C3AED',
  },
  {
    id: 5,
    alt: 'Children building with blocks',
    emoji: '🧩',
    label: 'Block Building',
    bg: 'bg-yellow-100',
    accent: '#D97706',
  },
  {
    id: 6,
    alt: 'Children learning colours and shapes',
    emoji: '🌈',
    label: 'Colors & Shapes',
    bg: 'bg-red-100',
    accent: '#F51D2A',
  },
  {
    id: 7,
    alt: 'Garden and nature exploration',
    emoji: '🌱',
    label: 'Nature Walk',
    bg: 'bg-teal-100',
    accent: '#0D9488',
  },
  {
    id: 8,
    alt: 'Show and tell activity',
    emoji: '🎭',
    label: 'Show & Tell',
    bg: 'bg-pink-100',
    accent: '#DB2777',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState<number | null>(null)

  const selectedItem = galleryItems.find((g) => g.id === selected)

  return (
    <section id="gallery" className="py-20 bg-[#FFF9E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Gallery"
            title="Our Happy "
            highlight="Little World"
            subtitle="A glimpse into the joyful, colourful world at Gokulam Nursery. Every day is an adventure!"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryItems.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelected(item.id)}
              className={`relative ${item.bg} rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center gap-3 group cursor-pointer border-2 border-transparent hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] shadow-sm hover:shadow-lg transition-all`}
              aria-label={`View: ${item.alt}`}
            >
              <span className="text-5xl sm:text-6xl" role="img" aria-hidden="true">{item.emoji}</span>
              <span className="text-sm font-bold text-[#172D63] px-3 py-1 bg-white/70 rounded-full backdrop-blur-sm">
                {item.label}
              </span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-3xl" aria-hidden="true" />
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-3xl p-6 shadow-md border border-orange-100">
            <p className="text-[#172D63] font-bold text-lg">Want to See Our School?</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#FF7900] text-white font-bold rounded-full shadow hover:bg-orange-600 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-gray-400 italic">
          * Gallery images are illustrative. Actual photographs will be added by the school.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.alt}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative ${selectedItem.bg} rounded-3xl p-12 flex flex-col items-center gap-4 max-w-sm w-full`}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 text-[#172D63]" />
              </button>
              <span className="text-8xl" role="img" aria-label={selectedItem.alt}>{selectedItem.emoji}</span>
              <p className="text-xl font-bold text-[#172D63]">{selectedItem.label}</p>
              <p className="text-sm text-gray-600 text-center">{selectedItem.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
