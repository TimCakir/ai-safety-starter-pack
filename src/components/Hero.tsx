import { motion } from 'framer-motion'

interface HeroProps {
  onDownloadClick: () => void
  onAuditClick: () => void
}

export default function Hero({ onDownloadClick, onAuditClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark to-accent/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Based on 500+ Enterprise AI Implementations
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight">
            Turn Unregulated AI Use Into a{' '}
            <span className="text-gradient">Safe, Compliant System</span>
            <br />
            in 30 Days
          </h1>

          <p className="text-xl sm:text-2xl text-light/80 max-w-4xl mx-auto leading-relaxed">
            Stop giving away your company secrets to AI tools. Get the complete governance framework
            trusted by enterprise organizations worldwide.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={onDownloadClick}
              className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 w-full sm:w-auto"
            >
              <span className="relative z-10">Download Free Starter Pack</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </button>
            <button
              onClick={onAuditClick}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 w-full sm:w-auto"
            >
              Book Free AI Safety Audit
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto"
          >
            {[
              { value: '81%', label: 'Lack AI Visibility' },
              { value: '€35M', label: 'Potential Fines' },
              { value: '$670K', label: 'Shadow AI Breach Premium' },
              { value: '36%', label: 'First Year ROI' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-light/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#trust" className="text-light/50 hover:text-light transition-colors">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
