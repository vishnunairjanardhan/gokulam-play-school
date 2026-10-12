import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/logo.png'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#activities', label: 'Activities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] rounded-lg"
            aria-label="Gokulam Nursery — Go to top"
          >
            <img
              src={logoImg}
              alt="Gokulam Nursery — Play School | Nursery | Junior KG | Senior KG"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-semibold text-[#172D63] rounded-full hover:bg-orange-50 hover:text-[#FF7900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#FF7900] text-white text-sm font-bold rounded-full shadow hover:bg-orange-600 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] focus-visible:ring-offset-2"
            >
              Enquire for Admission
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-[#172D63] hover:bg-orange-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' as const }}
              className="overflow-hidden md:hidden border-t border-orange-100"
            >
              <ul className="py-4 space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-base font-semibold text-[#172D63] rounded-xl hover:bg-orange-50 hover:text-[#FF7900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2 px-4">
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full py-3 bg-[#FF7900] text-white font-bold rounded-full shadow hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
                  >
                    Enquire for Admission
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
