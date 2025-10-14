import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import LeadForm from './components/LeadForm'
import AuditSection from './components/AuditSection'
import ROISection from './components/ROISection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import SuccessModal from './components/SuccessModal'

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleDownloadClick = () => {
    setShowLeadForm(true)
  }

  const handleAuditClick = () => {
    window.open('https://booking.akiflow.com/aio-safety', '_blank')
  }

  const handleFormSuccess = () => {
    setShowLeadForm(false)
    setShowSuccessModal(true)
  }

  return (
    <div className="min-h-screen">
      <Navigation
        onDownloadClick={handleDownloadClick}
        onAuditClick={handleAuditClick}
      />

      <Hero
        onDownloadClick={handleDownloadClick}
        onAuditClick={handleAuditClick}
      />

      <TrustSection />

      <ProblemSection />

      <SolutionSection onDownloadClick={handleDownloadClick} />

      <AuditSection onAuditClick={handleAuditClick} />

      <ROISection />

      <FAQSection onDownloadClick={handleDownloadClick} />

      <Footer
        onDownloadClick={handleDownloadClick}
        onAuditClick={handleAuditClick}
      />

      {showLeadForm && (
        <LeadForm
          onClose={() => setShowLeadForm(false)}
          onSuccess={handleFormSuccess}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          onAuditClick={handleAuditClick}
        />
      )}
    </div>
  )
}

export default App
