import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const activities = [
  {
    id: 'art',
    icon: '🎨',
    title: 'Art & Craft',
    description: 'Unleash creativity through painting, drawing, and making things with their hands.',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-[#FF7900]',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'music',
    icon: '🎵',
    title: 'Music & Movement',
    description: 'Rhythm, songs, and dance help children develop coordination and joyful expression.',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-[#159BEF]',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'story',
    icon: '📖',
    title: 'Storytelling',
    description: 'Stories spark imagination, expand vocabulary, and build a love for language.',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-500',
    size: 'col-span-1 row-span-1 sm:col-span-2 lg:col-span-1',
  },
  {
    id: 'colors',
    icon: '🌈',
    title: 'Colors & Shapes',
    description: 'Learning through vibrant colors and fun shapes builds early cognitive skills.',
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-[#FFD43B]',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'build',
    icon: '🧩',
    title: 'Building & Puzzles',
    description: 'Hands-on building and puzzles develop problem-solving and fine motor skills.',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-[#27AE60]',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'play',
    icon: '⚽',
    title: 'Creative Play',
    description: 'Outdoor play and imaginative games build teamwork, confidence, and healthy habits.',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-[#F51D2A]',
    size: 'col-span-1 row-span-1 sm:col-span-2 lg:col-span-1',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ActivitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Learning Activities"
            title="Learning Through "
            highlight="Play & Discovery"
            subtitle="Every activity at Gokulam is designed to be hands-on, age-appropriate, and full of fun — because the best learning happens when children are having a great time."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className={`rounded-3xl border p-6 flex flex-col gap-4 ${activity.color} ${activity.size} cursor-default`}
            >
              <div className={`w-14 h-14 ${activity.iconBg} rounded-2xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}
                aria-hidden="true"
              >
                {activity.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#172D63] mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-400 italic"
        >
          * Activities are representative of our approach and may vary by program level.
        </motion.p>
      </div>
    </section>
  )
}
