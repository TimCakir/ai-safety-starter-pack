import { motion } from 'framer-motion'

interface SolutionSectionProps {
  onDownloadClick: () => void
}

export default function SolutionSection({ onDownloadClick }: SolutionSectionProps) {
  const documents = [
    {
      number: '01',
      title: 'The Safe AI Stack',
      description: 'Enterprise-approved AI tools categorized by risk level. Stop gambling with ChatGPT.',
      pages: '12 pages',
      time: '15 min read'
    },
    {
      number: '02',
      title: 'ChatGPT DPA Guide',
      description: 'Step-by-step instructions for GDPR-compliant ChatGPT usage with proper data processing agreements.',
      pages: '8 pages',
      time: '10 min read'
    },
    {
      number: '03',
      title: 'Governance Blueprint',
      description: 'Complete organizational structure for AI oversight. Roles, responsibilities, and decision frameworks.',
      pages: '16 pages',
      time: '20 min read'
    },
    {
      number: '04',
      title: 'Compliance Quick Check',
      description: 'Self-assessment tool to identify your compliance gaps before regulators do.',
      pages: '6 pages',
      time: '5 min read'
    },
    {
      number: '05',
      title: 'Risk Zone Map',
      description: 'Visual guide to high-risk AI use cases and how to mitigate them in your industry.',
      pages: '10 pages',
      time: '12 min read'
    },
    {
      number: '06',
      title: '30-Day Rollout Plan',
      description: 'Week-by-week implementation roadmap from chaos to compliance in one month.',
      pages: '14 pages',
      time: '18 min read'
    },
    {
      number: '07',
      title: 'Communication Templates',
      description: 'Ready-to-use emails, policies, and announcements for rolling out AI governance.',
      pages: '20 pages',
      time: '25 min read'
    },
    {
      number: '08',
      title: 'Leadership Checklist',
      description: 'Executive briefing and board-level talking points for securing buy-in.',
      pages: '7 pages',
      time: '8 min read'
    }
  ]

  return (
    <section id="solution" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6">
            The Solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
            AI Safety Starter Pack
          </h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto mb-4">
            Everything you need to implement enterprise-grade AI governance in 30 days.
            Based on real implementations across 500+ organizations.
          </p>
          <p className="text-2xl font-bold text-gradient">
            Value: $25,000-50,000 Consulting Equivalent - FREE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-dark/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-subtle rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform" />

              <div className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-3">{doc.number}</div>
                <h3 className="text-xl font-bold text-dark mb-3 leading-tight">{doc.title}</h3>
                <p className="text-dark/60 text-sm mb-4 leading-relaxed">{doc.description}</p>
                <div className="flex items-center justify-between text-xs text-dark/50">
                  <span>{doc.pages}</span>
                  <span>{doc.time}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-dark/10">
                  <div className="flex items-center text-accent text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Unlock to download
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark rounded-2xl p-8 md:p-12 text-center text-light"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Turn Chaos into Compliance?</h3>
          <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
            Get instant access to all 8 comprehensive documents. No credit card required.
            Just enter your details and download immediately.
          </p>
          <button
            onClick={onDownloadClick}
            className="group relative px-10 py-5 bg-primary hover:bg-primary/90 text-white font-bold text-xl rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 inline-flex items-center"
          >
            <span className="relative z-10">Download Free Starter Pack</span>
            <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
          </button>
          <p className="text-sm text-light/60 mt-4">
            Qualified for companies with 50+ employees
          </p>
        </motion.div>
      </div>
    </section>
  )
}
