import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Hidden Risk in Your Organization
          </h2>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            Shadow AI is spreading through your company right now. Every unmonitored conversation
            is a potential compliance violation or data breach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">😨</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">68% Hide Their AI Use</h3>
                  <p className="text-light/80 leading-relaxed">
                    Your employees know they're not supposed to use AI tools, so they hide it.
                    They're uploading sensitive data to ChatGPT, Claude, and dozens of other tools
                    you've never heard of.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🚫</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">50% Would Refuse to Stop</h3>
                  <p className="text-light/80 leading-relaxed">
                    Even if you ban AI tools, half your workforce will continue using them.
                    They've discovered productivity gains they won't give up. Banning doesn't work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💸</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">The Real Cost</h3>
                  <p className="text-light/80 leading-relaxed mb-3">
                    When the breach happens, you'll face:
                  </p>
                  <ul className="space-y-2 text-light/70">
                    <li>• €20M average GDPR fine for AI violations</li>
                    <li>• $4.45M average data breach cost</li>
                    <li>• 277 days to identify and contain the breach</li>
                    <li>• Permanent reputation damage</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-subtle rounded-2xl p-8 md:p-12 border border-primary/20"
          >
            <h3 className="text-3xl font-bold mb-8">You're Flying Blind</h3>

            <div className="space-y-6">
              <div className="bg-dark/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">AI Tool Visibility</span>
                  <span className="text-primary font-bold">19%</span>
                </div>
                <div className="w-full bg-dark/50 rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '19%' }}></div>
                </div>
                <p className="text-sm text-light/60 mt-2">
                  Average percentage of AI tools that leadership knows about
                </p>
              </div>

              <div className="bg-dark/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Data Protection Policies</span>
                  <span className="text-primary font-bold">0%</span>
                </div>
                <div className="w-full bg-dark/50 rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <p className="text-sm text-light/60 mt-2">
                  Organizations with AI-specific DPA agreements in place
                </p>
              </div>

              <div className="bg-dark/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Incident Response Plans</span>
                  <span className="text-primary font-bold">12%</span>
                </div>
                <div className="w-full bg-dark/50 rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '12%' }}></div>
                </div>
                <p className="text-sm text-light/60 mt-2">
                  Companies prepared to handle AI-related data breaches
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/20 rounded-xl border border-primary/30">
              <p className="text-lg font-semibold mb-2">Bottom Line:</p>
              <p className="text-light/90 leading-relaxed">
                You can't ban AI. You can't ignore it. You can only govern it. And the clock is ticking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
