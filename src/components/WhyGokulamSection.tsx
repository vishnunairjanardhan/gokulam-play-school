import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: '🏡',
    title: 'A Warm, Welcoming Environment',
    description:
      'Our cheerful, child-friendly spaces are designed to help little ones feel comfortable, safe, and excited to learn from the very first day.',
    color: 'from-orange-400 to-orange-500',
    lightBg: 'bg-orange-50',
  },
  {
    icon: '🔍',
    title: 'Learning Through Exploration',
    description:
      'We encourage children to ask questions, try new things, and discover the world around them through guided, hands-on experiences.',
    color: 'from-blue-400 to-blue-500',
    lightBg: 'bg-blue-50',
  },
  {
    icon: '🎭',
    title: 'Opportunities for Creativity',
    description:
      'From art and music to storytelling and play, we give children every opportunity to express themselves and develop their creative voice.',
    color: 'from-purple-400 to-purple-500',
    lightBg: 'bg-purple-50',
  },
  {
    icon: '🤝',
    title: 'Encouraging Confidence & Friendship',
    description:
      'Building meaningful friendships and celebrating small wins helps children grow in confidence and develop healthy social skills.',
    color: 'from-green-400 to-green-500',
    lightBg: 'bg-green-50',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function WhyGokulamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-20 overflow-hidden bg-[#172D63]">
      {/* Background deco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Why Gokulam"
            title="Small Steps. Happy Hearts. "
            highlight="Bright Futures."
            subtitle="Every aspect of Gokulam is thoughtfully designed to give your child the best possible start to their learning journey."
            badgeColor="bg-orange-500/20 text-orange-300"
            titleClassName="text-white"
            subtitleClassName="text-slate-200"
          />
        </motion.div>

        {/* We need white text here, so override via inline styles */}
        <div className="mt-[-3rem]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex gap-6 group"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} aria-hidden="true" />

              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`} aria-hidden="true">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA inside section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF7900] text-white font-bold text-lg rounded-full shadow-xl hover:bg-orange-500 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#172D63]"
          >
            Enquire for Admission
            <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
