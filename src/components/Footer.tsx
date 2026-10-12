import logoImg from '../assets/logo.png'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#activities', label: 'Activities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

const programs = ['Play School', 'Nursery', 'Junior KG', 'Senior KG']

const PHONE_1 = '9820733457'
const PHONE_2 = '9820733476'
const ADDRESS_LINES = [
  'Om Pushpachandra CHS Ltd.,',
  'Near Navnath Nageshwar Mandir,',
  'Opp. Aai Laundry – Old Ayaregaon,',
  'Dombivli East, Maharashtra.',
]

function RainbowDeco() {
  return (
    <svg viewBox="0 0 200 60" fill="none" className="w-40 mx-auto mb-6 opacity-80" aria-hidden="true">
      <path d="M10 50 Q100 5 190 50" stroke="#F51D2A" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M18 52 Q100 12 182 52" stroke="#FF7900" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M26 54 Q100 19 174 54" stroke="#FFD43B" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M34 56 Q100 26 166 56" stroke="#27AE60" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M42 58 Q100 33 158 58" stroke="#159BEF" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#172D63] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RainbowDeco />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl p-2.5 inline-block mb-4 shadow-sm hover:scale-105 transition-transform">
              <img
                src={logoImg}
                alt="Gokulam Nursery Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A warm, joyful early-learning environment where little minds explore,
              friendships blossom, and every day brings a new adventure.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider text-orange-300">Quick Links</h4>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-blue-200 hover:text-white transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider text-orange-300">Programs</h4>
            <ul className="space-y-2" role="list">
              {programs.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => handleNav('#programs')}
                    className="text-blue-200 hover:text-white transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider text-orange-300">Contact Us</h4>
            <div className="space-y-3 text-blue-200 text-sm">
              <div>
                {ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="space-y-1">
                <a
                  href={`tel:+91${PHONE_1}`}
                  className="block hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                >
                  📱 {PHONE_1}
                </a>
                <a
                  href={`tel:+91${PHONE_2}`}
                  className="block hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
                >
                  📱 {PHONE_2}
                </a>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <p>© {currentYear} Gokulam Nursery. All rights reserved.</p>
          <p className="text-center">
            Play School • Nursery • Junior KG • Senior KG — Dombivli East, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
