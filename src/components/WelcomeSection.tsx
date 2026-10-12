import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

const cards = [
  {
    icon: '🎮',
    title: 'Learn Through Play',
    description:
      'We believe the best learning happens through joyful exploration. Every activity is designed to spark curiosity and make discovery exciting.',
    color: 'bg-orange-50',
    iconBg: 'bg-[#FF7900]',
    border: 'border-orange-200',
  },
  {
    icon: '🌱',
    title: 'Grow with Confidence',
    description:
      "We nurture each child's unique personality, encouraging self-expression, independence, and a love for learning at their own pace.",
    color: 'bg-green-50',
    iconBg: 'bg-[#27AE60]',
    border: 'border-green-200',
  },
  {
    icon: '🔭',
    title: 'Discover Every Day',
    description:
      'From art and music to stories and games, every day at Gokulam is filled with new opportunities for creativity and social interaction.',
    color: 'bg-blue-50',
    iconBg: 'bg-[#159BEF]',
    border: 'border-blue-200',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function WelcomeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD43B]/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#159BEF]/10 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Welcome"
            title="A Happy Place to "
            highlight="Learn, Play & Grow"
            subtitle="At Gokulam Play School, we believe the early years are the most magical. We create a warm, nurturing environment where children feel safe to explore, express themselves, and build the foundations for a lifetime of learning."
          />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-8 border ${card.color} ${card.border} flex flex-col items-start gap-4 cursor-default`}
            >
              <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-md`} aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#172D63]">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#172D63] to-[#1e3a7e] rounded-3xl p-8 text-white text-center"
        >
          <p className="text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            "Every child is naturally curious and full of potential. At Gokulam, we simply create the right
            space for that spark to grow into a lifelong love of learning."
          </p>
          <p className="mt-4 text-orange-300 font-semibold text-sm">— Gokulam Play School Team</p>
        </motion.div>
      </div>
    </section>
  )
}
