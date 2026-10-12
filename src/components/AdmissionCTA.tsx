import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AdmissionCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const handleEnquire = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#FF7900] to-[#FFD43B]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute bottom-4 right-1/3 w-16 h-16 bg-white/10 rounded-full" />
      </div>

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-8 text-4xl pointer-events-none"
        aria-hidden="true"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-8 right-12 text-4xl pointer-events-none"
        aria-hidden="true"
      >
        🌟
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-12 right-24 text-3xl pointer-events-none"
        aria-hidden="true"
      >
        📚
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Begin Your Child's{' '}
            <span className="text-[#172D63]">Learning Journey!</span>
          </h2>

          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Have questions about our programs or admissions? Get in touch with us —
            we'd be happy to help you take the next little step.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnquire}
              className="px-8 py-4 bg-white text-[#FF7900] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF7900]"
            >
              Enquire Now
            </motion.button>

            <motion.a
              href="tel:+919820733457"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-[#172D63] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#172D63] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF7900] inline-flex items-center gap-2"
            >
              <span aria-hidden="true">📞</span> Call Us
            </motion.a>
          </div>

          {/* Contact info */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-medium">
            <a href="tel:+919820733457" className="hover:text-white transition-colors hover:underline">
              📱 9820733457
            </a>
            <a href="tel:+919820733476" className="hover:text-white transition-colors hover:underline">
              📱 9820733476
            </a>
            <span>📍 Dombivli East, Maharashtra</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
