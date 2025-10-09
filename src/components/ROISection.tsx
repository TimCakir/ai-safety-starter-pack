import { motion } from 'framer-motion'

export default function ROISection() {
  return (
    <section id="roi" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
            The Business Case for AI Governance
          </h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            This isn't a cost - it's risk mitigation that pays for itself
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-dark/5"
          >
            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
              <span className="text-3xl mr-3">📊</span>
              Cost-Benefit Analysis
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-dark">Free Starter Pack</span>
                  <span className="text-2xl font-bold text-green-600">$0</span>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-dark/70">
                    Equivalent to $25,000-50,000 in consulting fees
                  </p>
                </div>
              </div>

              <div className="h-px bg-dark/10"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-dark">Implementation Time</span>
                  <span className="text-2xl font-bold text-accent">30 Days</span>
                </div>
                <p className="text-sm text-dark/60">
                  Our rollout plan gets you from chaos to compliance in one month
                </p>
              </div>

              <div className="h-px bg-dark/10"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-dark">Average ROI Year 1</span>
                  <span className="text-2xl font-bold text-gradient">+36%</span>
                </div>
                <p className="text-sm text-dark/60">
                  Through prevented breaches, avoided fines, and productivity gains
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-subtle rounded-2xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Cost of Doing Nothing
            </h3>

            <div className="space-y-4">
              {[
                {
                  label: 'GDPR Data Breach Fine',
                  amount: '€20M',
                  description: 'Average fine for AI-related data violations',
                  color: 'primary'
                },
                {
                  label: 'Data Breach Cost',
                  amount: '$4.45M',
                  description: 'Average total cost including incident response',
                  color: 'primary'
                },
                {
                  label: 'Shadow AI Insurance Premium',
                  amount: '$670K',
                  description: 'Additional annual cost after AI incident',
                  color: 'primary'
                },
                {
                  label: 'Legal & Compliance',
                  amount: '$500K+',
                  description: 'Emergency response and regulatory defense',
                  color: 'primary'
                },
                {
                  label: 'Reputation Damage',
                  amount: 'Priceless',
                  description: 'Lost customers, talent, and partnerships',
                  color: 'accent'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-dark/10"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-dark text-sm">{item.label}</span>
                    <span className={`text-xl font-bold text-${item.color}`}>{item.amount}</span>
                  </div>
                  <p className="text-xs text-dark/60">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-sm font-semibold text-dark text-center">
                One incident can cost more than 10 years of governance investment
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-dark mb-8 text-center">
            Free Tools vs. Enterprise Investment
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-dark/20">
                  <th className="text-left py-4 px-4 font-semibold text-dark">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Free ChatGPT</th>
                  <th className="text-center py-4 px-4 font-semibold text-accent">Enterprise Setup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark/10">
                {[
                  {
                    feature: 'Data Processing Agreement',
                    free: '✗',
                    enterprise: '✓'
                  },
                  {
                    feature: 'Data Retention Control',
                    free: '✗',
                    enterprise: '✓'
                  },
                  {
                    feature: 'GDPR Compliance',
                    free: '⚠️',
                    enterprise: '✓'
                  },
                  {
                    feature: 'Audit Trail',
                    free: '✗',
                    enterprise: '✓'
                  },
                  {
                    feature: 'Usage Monitoring',
                    free: '✗',
                    enterprise: '✓'
                  },
                  {
                    feature: 'Data Leak Prevention',
                    free: '✗',
                    enterprise: '✓'
                  },
                  {
                    feature: 'Cost per Month',
                    free: '$0',
                    enterprise: '$200-500'
                  },
                  {
                    feature: 'Risk of €20M Fine',
                    free: 'High',
                    enterprise: 'Minimal'
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-dark/5">
                    <td className="py-4 px-4 font-medium text-dark">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-lg">
                      {row.free === '✗' ? (
                        <span className="text-primary">✗</span>
                      ) : row.free === '✓' ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-dark/70">{row.free}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-lg">
                      {row.enterprise === '✗' ? (
                        <span className="text-primary">✗</span>
                      ) : row.enterprise === '✓' ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-dark/70">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-dark/70">
              <strong className="text-dark">Bottom line:</strong> Spending $200-500/month on proper tools
              and governance is cheaper than one day of dealing with a data breach.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
