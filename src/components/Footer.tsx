interface FooterProps {
  onDownloadClick: () => void
  onAuditClick: () => void
}

export default function Footer({ onDownloadClick, onAuditClick }: FooterProps) {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <img
              src="/AIO_hor_light_color.svg"
              alt="AI Operator"
              className="h-10 w-auto mb-6"
            />
            <p className="text-light/70 leading-relaxed mb-6">
              AI Operator helps organizations turn unregulated AI use into safe, compliant systems.
              Based on insights from 500+ enterprise implementations.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/timcakir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-light/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#problem" className="text-light/70 hover:text-primary transition-colors">
                  The Risk
                </a>
              </li>
              <li>
                <a href="#solution" className="text-light/70 hover:text-primary transition-colors">
                  The Solution
                </a>
              </li>
              <li>
                <a href="#roi" className="text-light/70 hover:text-primary transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={onDownloadClick}
                  className="text-light/70 hover:text-primary transition-colors text-left"
                >
                  Download Starter Pack
                </button>
              </li>
              <li>
                <button
                  onClick={onAuditClick}
                  className="text-light/70 hover:text-primary transition-colors text-left"
                >
                  Book Free Audit
                </button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/timcakir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 pt-8">
          <div className="bg-light/5 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-lg mb-4">About Tim Cakir</h4>
            <p className="text-light/70 leading-relaxed mb-4">
              Tim Cakir is the founder of AI Operator and a recognized expert in enterprise AI governance.
              With experience auditing 500+ AI implementations across Fortune 500 and mid-market companies,
              Tim specializes in helping organizations navigate GDPR, EU AI Act compliance, and enterprise
              AI risk management.
            </p>
            <p className="text-light/70 leading-relaxed">
              His practical, data-driven approach focuses on real-world implementation rather than
              theoretical frameworks. Tim regularly speaks on AI governance and has helped organizations
              prevent millions in potential regulatory fines through proactive compliance strategies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-light/60">
            <p>
              © {new Date().getFullYear()} AI Operator. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span>Last updated: October 2025</span>
            </div>
          </div>

          <div className="mt-6 text-xs text-light/50 leading-relaxed">
            <p className="mb-2">
              <strong>Usage License:</strong> The AI Safety Starter Pack is provided free for internal
              organizational use. You may not resell, redistribute, or claim authorship of these materials.
            </p>
            <p>
              <strong>Disclaimer:</strong> This starter pack provides guidance based on common enterprise
              practices and regulatory frameworks. It is not legal advice. Organizations should consult
              with qualified legal counsel for compliance matters specific to their jurisdiction and industry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
