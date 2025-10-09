import { useState, useEffect } from 'react'

interface NavigationProps {
  onDownloadClick: () => void
  onAuditClick: () => void
}

export default function Navigation({ onDownloadClick, onAuditClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="/AIO_hor_light_color.png"
              alt="AI Operator"
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#problem" className="text-light hover:text-primary transition-colors px-3 py-2">
              The Risk
            </a>
            <a href="#solution" className="text-light hover:text-primary transition-colors px-3 py-2">
              The Solution
            </a>
            <a href="#roi" className="text-light hover:text-primary transition-colors px-3 py-2">
              ROI
            </a>
            <a href="#faq" className="text-light hover:text-primary transition-colors px-3 py-2">
              FAQ
            </a>
            <button
              onClick={onDownloadClick}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg transition-all hover:scale-105"
            >
              Get Free Pack
            </button>
            <button
              onClick={onAuditClick}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-lg transition-all hover:scale-105"
            >
              Book Audit
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-light hover:text-primary transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-lg border-t border-light/10">
          <div className="px-4 py-6 space-y-3">
            <a
              href="#problem"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-light hover:text-primary transition-colors py-2"
            >
              The Risk
            </a>
            <a
              href="#solution"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-light hover:text-primary transition-colors py-2"
            >
              The Solution
            </a>
            <a
              href="#roi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-light hover:text-primary transition-colors py-2"
            >
              ROI
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-light hover:text-primary transition-colors py-2"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                onDownloadClick()
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Get Free Pack
            </button>
            <button
              onClick={() => {
                onAuditClick()
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Book Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
