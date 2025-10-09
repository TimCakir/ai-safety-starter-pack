import { motion } from 'framer-motion'

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
            Trusted by Enterprise Organizations
          </h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Data-driven insights from auditing 500+ enterprise AI implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🔍',
              stat: '81%',
              label: 'Lack AI Visibility',
              description: 'Organizations have no centralized view of AI tool usage'
            },
            {
              icon: '⚖️',
              stat: '€35M',
              label: 'Maximum GDPR Fine',
              description: 'Potential penalty for non-compliant AI data processing'
            },
            {
              icon: '💰',
              stat: '$670K',
              label: 'Shadow AI Breach Premium',
              description: 'Additional insurance cost after unmonitored AI incidents'
            },
            {
              icon: '📈',
              stat: '36%',
              label: 'Positive ROI Year 1',
              description: 'Average return from implementing proper AI governance'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-dark/5"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-4xl font-bold text-gradient mb-2">{item.stat}</div>
              <div className="text-lg font-semibold text-dark mb-3">{item.label}</div>
              <p className="text-dark/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-subtle rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                Real-World Warning: Samsung Data Leak
              </h3>
              <p className="text-dark/70 leading-relaxed mb-4">
                Engineers uploaded proprietary source code to ChatGPT, causing a major security incident.
                This wasn't malicious - they simply didn't know the risks.
              </p>
              <p className="text-dark/70 leading-relaxed">
                <strong className="text-dark">Your employees are doing the same thing right now.</strong> Without
                governance, every AI conversation is a potential data breach.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-dark mb-2">Italy's €15M Enforcement</div>
                  <p className="text-sm text-dark/60">
                    Italian Data Protection Authority issued major enforcement notice for AI violations.
                    This is just the beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
