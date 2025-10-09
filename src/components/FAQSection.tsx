import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-dark/10 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark/5 transition-colors"
      >
        <span className="font-semibold text-dark pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 text-dark/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FAQSectionProps {
  onDownloadClick: () => void
}

export default function FAQSection({ onDownloadClick }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it really take to implement this?",
      answer: "Our 30-Day Rollout Plan breaks everything into manageable weekly sprints. Week 1 is assessment and quick wins (5-10 hours). Week 2-3 is policy development and tool setup (10-15 hours). Week 4 is rollout and training (8-12 hours). Most organizations can achieve basic compliance in 30 days with 1-2 dedicated people. Full maturity takes 3-6 months, but you'll be significantly safer within the first month."
    },
    {
      question: "Can't we just ban AI tools and avoid all this?",
      answer: "We've audited 500+ organizations and here's what we've learned: blanket bans don't work. 68% of employees hide their AI use, and 50% would refuse to stop even if asked. Banning AI drives it underground, making it MORE dangerous. The only effective approach is governance - give people safe, approved tools and clear guidelines. This actually increases productivity while reducing risk."
    },
    {
      question: "Our company has fewer than 50 employees. Can we still use this?",
      answer: "The framework is designed for organizations with 50+ employees where compliance risks are significant. Smaller companies face different challenges and may find this overly comprehensive. However, if you're in a heavily regulated industry or handling sensitive data, these principles still apply - you'll just implement a lighter version."
    },
    {
      question: "What if we've already had a data leak?",
      answer: "If you've had an incident, implementing governance NOW is critical. The starter pack includes incident response protocols and damage control strategies. The free audit call with Tim can help you assess the scope and create an immediate action plan. Remember: regulators look favorably on organizations that respond with systematic improvements, not just band-aid fixes."
    },
    {
      question: "How do I convince leadership this is worth the investment?",
      answer: "Use the Leadership Checklist from the starter pack - it's designed exactly for this. Key talking points: 1) Average GDPR fine is €20M, average data breach costs $4.45M. 2) Your cyber insurance probably doesn't cover AI incidents. 3) 36% positive ROI in year one through prevented incidents and productivity gains. 4) Regulators are actively enforcing - Italy issued €15M in AI fines. Frame it as risk mitigation, not cost."
    },
    {
      question: "Do we need expensive enterprise AI tools?",
      answer: "Not necessarily. The Safe AI Stack document categorizes tools by risk and shows you how to use some tools safely with proper DPAs and configuration. For example, ChatGPT Team ($25/user/month) with a proper DPA can work for many use cases. The key isn't always using the most expensive tools - it's using ANY tools correctly with proper agreements and monitoring."
    },
    {
      question: "What's included in the free audit call?",
      answer: "Tim Cakir will spend 30 minutes with you covering: 1) Shadow AI assessment - what tools are being used, 2) Compliance gap analysis for your industry, 3) Risk prioritization based on your data sensitivity, 4) Specific next steps with timeline and resource needs. You'll walk away with a clear action plan. This is genuinely free with no pressure - Tim believes in helping organizations get this right."
    },
    {
      question: "Is this only for tech companies?",
      answer: "Absolutely not. We've worked with healthcare, financial services, legal, manufacturing, and professional services firms. Every industry using AI faces the same core challenges: employee shadow usage, compliance risks, and data protection requirements. The starter pack includes industry-specific risk scenarios and can be adapted to any sector."
    },
    {
      question: "What if our legal team wants to review everything first?",
      answer: "Perfect - that's exactly what should happen. The starter pack includes DPA templates, policy frameworks, and compliance documentation specifically designed for legal review. Many organizations have their legal team review the materials, then use them as a starting point for their own customized policies. This saves your legal team from starting from scratch."
    },
    {
      question: "How is this different from generic AI policy templates?",
      answer: "Generic templates are usually created by consultants who haven't implemented them. Our framework is based on 500+ real implementations - we know what actually works in practice. We've seen the mistakes, edge cases, and rollout challenges. This isn't theory - it's a battle-tested system that's been refined through actual use in diverse organizations."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dark/70">
            Everything you need to know before getting started
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-dark/5">
            <h3 className="text-2xl font-bold text-dark mb-4">Still have questions?</h3>
            <p className="text-dark/70 mb-6">
              Download the starter pack for detailed documentation, or book a free audit call
              to discuss your specific situation with Tim Cakir.
            </p>
            <button
              onClick={onDownloadClick}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              Get the Starter Pack
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
