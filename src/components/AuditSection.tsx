import { motion } from 'framer-motion'

interface AuditSectionProps {
  onAuditClick: () => void
}

export default function AuditSection({ onAuditClick }: AuditSectionProps) {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-light"
          >
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6">
              Free 30-Minute Consultation
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get Your Free AI Operations Safety Audit
            </h2>
            <p className="text-xl text-light/80 mb-8 leading-relaxed">
              Talk directly with Tim Cakir, Founder of AI Operator. Get a personalized assessment
              of your organization's AI risk exposure and compliance gaps.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: '🔍',
                  title: 'Shadow AI Assessment',
                  description: 'Identify which AI tools are being used in your organization and where your data is going'
                },
                {
                  icon: '⚠️',
                  title: 'Risk Evaluation',
                  description: 'Understand your specific compliance risks and potential fine exposure'
                },
                {
                  icon: '📋',
                  title: 'Gap Analysis',
                  description: 'Get a clear picture of what you need to implement for full compliance'
                },
                {
                  icon: '🎯',
                  title: 'Action Plan',
                  description: 'Walk away with specific next steps prioritized by impact and urgency'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-light/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={onAuditClick}
              className="group relative px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 inline-flex items-center"
            >
              <span className="relative z-10">Book Your Free Audit Call</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <p className="text-sm text-light/60 mt-4">
              Limited slots available - Qualified for companies with 50+ employees
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-start space-x-4 mb-8 pb-8 border-b border-dark/10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-brand rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                TC
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark mb-2">Tim Cakir</h3>
                <p className="text-dark/70 font-semibold mb-2">Founder, AI Operator</p>
                <a
                  href="https://www.linkedin.com/in/timcakir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  View LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-dark mb-4">Expertise & Background</h4>
              <div className="space-y-3 text-dark/70">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    500+ enterprise AI implementations audited across Fortune 500 and mid-market companies
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    Specialized in GDPR, EU AI Act, and enterprise AI governance frameworks
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    Helped organizations prevent millions in potential fines through proactive compliance
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    Regular speaker on AI risk management and enterprise governance strategies
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-dark/10">
              <p className="text-sm text-dark/60 italic">
                "Most companies don't realize how exposed they are until it's too late.
                This free audit gives you visibility before regulators do."
              </p>
              <p className="text-sm text-dark font-semibold mt-2">- Tim Cakir</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
