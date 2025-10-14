import { motion } from 'framer-motion'

interface SuccessModalProps {
  onClose: () => void
  onAuditClick: () => void
}

export default function SuccessModal({ onClose, onAuditClick }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8"
      >
        <div className="p-6 sm:p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">
            Success! Check Your Email
          </h2>
          <p className="text-base sm:text-lg text-dark/70 mb-6 sm:mb-8 leading-relaxed">
            We've sent the AI Safety Starter Pack to your email. You'll receive all 8 documents
            plus additional resources within the next few minutes.
          </p>

          <div className="bg-gradient-subtle rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-dark mb-3 sm:mb-4">What's Next?</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold text-dark text-sm sm:text-base">Check your inbox</span>
                  <p className="text-xs sm:text-sm text-dark/60">Download all 8 documents and save them for your team</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold text-dark text-sm sm:text-base">Start with the Quick Check</span>
                  <p className="text-xs sm:text-sm text-dark/60">Document 04 takes 5 minutes and shows your biggest gaps</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-semibold text-dark text-sm sm:text-base">Follow the 30-Day Plan</span>
                  <p className="text-xs sm:text-sm text-dark/60">Document 06 breaks everything into weekly sprints</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-dark rounded-xl p-4 sm:p-6 text-light mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Want Personalized Guidance?</h3>
            <p className="text-sm sm:text-base text-light/80 mb-3 sm:mb-4">
              Book a free 30-minute audit call with Tim Cakir to discuss your specific situation
              and get a customized action plan.
            </p>
            <button
              onClick={() => {
                onAuditClick()
                onClose()
              }}
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
            >
              Book Free Audit Call
            </button>
          </div>

          <button
            onClick={onClose}
            className="text-dark/60 hover:text-dark font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}
