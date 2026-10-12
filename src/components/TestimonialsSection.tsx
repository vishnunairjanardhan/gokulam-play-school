import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

// Testimonials are left empty until the school provides real reviews
const testimonials: {
  id: number
  name: string
  role: string
  quote: string
  rating: number
  initial: string
  color: string
}[] = [
  // Add real testimonials here when available from the school
]

const PLACEHOLDER_MESSAGE =
  'We look forward to hearing from our Gokulam families! Testimonials from parents will be featured here once shared.'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Parent Stories"
            title="What "
            highlight="Parents Say"
            subtitle="The happiness of our children and the trust of their parents is what matters most to us."
          />
        </motion.div>

        {testimonials.length > 0 ? (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-[#FFF9E9] rounded-3xl p-8 md:p-12 text-center border border-orange-100 shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <span key={i} className="text-[#FFD43B] text-xl" aria-hidden="true">★</span>
                  ))}
                  <span className="sr-only">{testimonials[index].rating} out of 5 stars</span>
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[index].quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{ backgroundColor: testimonials[index].color }}
                    aria-hidden="true"
                  >
                    {testimonials[index].initial}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#172D63]">{testimonials[index].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-[#FFF9E9] border border-orange-200 text-[#172D63] hover:bg-orange-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] ${
                        i === index ? 'bg-[#FF7900] w-6' : 'bg-orange-200'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-[#FFF9E9] border border-orange-200 text-[#172D63] hover:bg-orange-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#FFF9E9] rounded-3xl p-10 text-center border border-orange-100"
          >
            <p className="text-4xl mb-4" aria-hidden="true">💛</p>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">{PLACEHOLDER_MESSAGE}</p>
            <p className="mt-4 text-xs text-gray-400 italic">
              Real parent testimonials will be displayed here once verified and shared.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
