import { useState, useRef, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

interface FormData {
  parentName: string
  phone: string
  childName: string
  program: string
  message: string
}

interface FormErrors {
  parentName?: string
  phone?: string
}

const WHATSAPP_NUMBER = '919820733457' // Update if different WhatsApp number
const PHONE_1 = '9820733457'
const PHONE_2 = '9820733476'
const ADDRESS_LINES = [
  'Om Pushpachandra CHS Ltd.,',
  'Near Navnath Nageshwar Mandir,',
  'Opp. Aai Laundry – Old Ayaregaon,',
  'Dombivli East, Maharashtra.',
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState<FormData>({
    parentName: '',
    phone: '',
    childName: '',
    program: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.parentName.trim()) newErrors.parentName = 'Please enter your name.'
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.'
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    // Build a WhatsApp message as the enquiry channel
    const msg = [
      `*New Admission Enquiry — Gokulam Nursery*`,
      ``,
      `👤 Parent: ${form.parentName}`,
      `📱 Phone: ${form.phone}`,
      form.childName ? `🧒 Child: ${form.childName}` : '',
      form.program ? `📚 Program: ${form.program}` : '',
      form.message ? `💬 Message: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

    // Simulate brief delay then open WhatsApp
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    }, 600)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to know more about Gokulam Nursery admissions.')}`

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <SectionHeading
            badge="Contact Us"
            title="Let's Connect — "
            highlight="We're Here to Help"
            subtitle="Reach out to us for any questions about programs, admissions, or a visit to the school."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Call card */}
            <div className="bg-[#FFF9E9] rounded-3xl p-6 border border-orange-100 flex items-start gap-5">
              <div className="w-14 h-14 bg-[#FF7900] rounded-2xl flex items-center justify-center shadow-md flex-shrink-0" aria-hidden="true">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#172D63] mb-2">Call the School</h3>
                <a
                  href={`tel:+91${PHONE_1}`}
                  className="block text-[#FF7900] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] rounded"
                >
                  {PHONE_1}
                </a>
                <a
                  href={`tel:+91${PHONE_2}`}
                  className="block text-[#FF7900] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] rounded mt-1"
                >
                  {PHONE_2}
                </a>
              </div>
            </div>

            {/* WhatsApp card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 bg-green-50 rounded-3xl p-6 border border-green-200 hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 group"
            >
              <div className="w-14 h-14 bg-[#27AE60] rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#172D63] mb-1">WhatsApp Enquiry</h3>
                <p className="text-sm text-gray-600">Tap to send us a message directly on WhatsApp</p>
                <span className="mt-2 inline-block text-sm font-bold text-[#27AE60]">Chat with us →</span>
              </div>
            </a>

            {/* Address card */}
            <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 flex items-start gap-5">
              <div className="w-14 h-14 bg-[#159BEF] rounded-2xl flex items-center justify-center shadow-md flex-shrink-0" aria-hidden="true">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#172D63] mb-2">Find Our Location</h3>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
                <p className="mt-3 text-xs text-gray-400 italic">
                  * An embedded map will be added after verifying the exact location on Google Maps.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#FFF9E9] rounded-3xl p-8 border border-orange-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#172D63] mb-6 flex items-center gap-2">
                <span aria-hidden="true">✉️</span> Send an Enquiry
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-[#172D63]">Message Sent via WhatsApp!</h4>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Your enquiry has been opened in WhatsApp. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ parentName: '', phone: '', childName: '', program: '', message: '' }) }}
                    className="mt-4 px-6 py-2.5 border-2 border-[#FF7900] text-[#FF7900] font-bold rounded-full hover:bg-[#FF7900] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Admission enquiry form">
                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-semibold text-[#172D63] mb-1.5">
                      Parent's Name <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      autoComplete="name"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-invalid={!!errors.parentName}
                      aria-describedby={errors.parentName ? 'parentName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-2xl border-2 bg-white text-[#172D63] placeholder-gray-400 transition-colors focus:outline-none focus:border-[#FF7900] ${
                        errors.parentName ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.parentName && (
                      <p id="parentName-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#172D63] mb-1.5">
                      Phone Number <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3 rounded-2xl border-2 bg-white text-[#172D63] placeholder-gray-400 transition-colors focus:outline-none focus:border-[#FF7900] ${
                        errors.phone ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Child Name (optional) */}
                  <div>
                    <label htmlFor="childName" className="block text-sm font-semibold text-[#172D63] mb-1.5">
                      Child's Name <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="childName"
                      name="childName"
                      type="text"
                      autoComplete="off"
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="Your child's name"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-white text-[#172D63] placeholder-gray-400 transition-colors focus:outline-none focus:border-[#FF7900]"
                    />
                  </div>

                  {/* Program */}
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold text-[#172D63] mb-1.5">
                      Interested Program <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-white text-[#172D63] transition-colors focus:outline-none focus:border-[#FF7900] appearance-none"
                    >
                      <option value="">Select a program</option>
                      <option value="Play School">Play School</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Junior KG">Junior KG</option>
                      <option value="Senior KG">Senior KG</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#172D63] mb-1.5">
                      Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific questions or information you'd like to share..."
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 bg-white text-[#172D63] placeholder-gray-400 transition-colors focus:outline-none focus:border-[#FF7900] resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400 italic">
                    Submitting this form will open WhatsApp with your enquiry details pre-filled.
                    Your information will not be stored or shared.
                  </p>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={submitting}
                    className="w-full py-4 bg-[#FF7900] text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {submitting ? (
                      'Preparing...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Enquiry via WhatsApp
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
