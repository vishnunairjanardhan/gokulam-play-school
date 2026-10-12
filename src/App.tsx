import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import ProgramsSection from './components/ProgramsSection'
import ActivitiesSection from './components/ActivitiesSection'
import WhyGokulamSection from './components/WhyGokulamSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import AdmissionCTA from './components/AdmissionCTA'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <ProgramsSection />
        <ActivitiesSection />
        <WhyGokulamSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
