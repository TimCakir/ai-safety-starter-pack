import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import type { LeadFormData } from '@/types'

const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email'),
  companyName: z.string().min(2, 'Company name is required'),
  jobRole: z.string().min(1, 'Please select your role'),
  companySize: z.enum(['50-99', '100-499', '500-999', '1000-4999', '5000+'], {
    errorMap: () => ({ message: 'Company must have 50+ employees' })
  }),
  phone: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms'
  })
})

interface LeadFormProps {
  onClose: () => void
  onSuccess: () => void
}

export default function LeadForm({ onClose, onSuccess }: LeadFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: 'onChange'
  })

  const totalSteps = 3

  const nextStep = async () => {
    let fieldsToValidate: (keyof LeadFormData)[] = []

    if (step === 1) {
      fieldsToValidate = ['fullName', 'email']
    } else if (step === 2) {
      fieldsToValidate = ['companyName', 'jobRole', 'companySize']
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid && step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const { data: leadData, error: leadError } = await supabase
        .from('leads')
        .insert({
          full_name: data.fullName,
          email: data.email,
          company_name: data.companyName,
          job_role: data.jobRole,
          company_size: data.companySize,
          phone: data.phone || null,
          consent_given: data.consentGiven
        })
        .select()
        .single()

      if (leadError) throw leadError

      if (leadData) {
        await supabase.from('downloads').insert({
          lead_id: leadData.id
        })
      }

      onSuccess()
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8"
      >
        <div className="p-5 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark">
              Get Your Free Starter Pack
            </h2>
            <button
              onClick={onClose}
              className="text-dark/50 hover:text-dark transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-dark/70">
                Step {step} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-dark/70">
                {Math.round((step / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-dark/10 rounded-full h-2">
              <motion.div
                className="bg-gradient-brand h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                    {errors.fullName && (
                      <p className="text-primary text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Work Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-primary text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Company Name *
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Acme Corporation"
                    />
                    {errors.companyName && (
                      <p className="text-primary text-sm mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Job Role *
                    </label>
                    <select
                      {...register('jobRole')}
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select your role</option>
                      <option value="C-Level Executive">C-Level Executive</option>
                      <option value="VP/Director">VP/Director</option>
                      <option value="Manager">Manager</option>
                      <option value="IT/Security">IT/Security</option>
                      <option value="Legal/Compliance">Legal/Compliance</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.jobRole && (
                      <p className="text-primary text-sm mt-1">{errors.jobRole.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Company Size * (minimum 50 employees)
                    </label>
                    <select
                      {...register('companySize')}
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select company size</option>
                      <option value="50-99">50-99 employees</option>
                      <option value="100-499">100-499 employees</option>
                      <option value="500-999">500-999 employees</option>
                      <option value="1000-4999">1000-4999 employees</option>
                      <option value="5000+">5000+ employees</option>
                    </select>
                    {errors.companySize && (
                      <p className="text-primary text-sm mt-1">{errors.companySize.message}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-dark/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <p className="text-sm text-dark/70 mb-3">
                      By downloading, you'll receive:
                    </p>
                    <ul className="space-y-2 text-sm text-dark/70">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Instant access to all 8 documents
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Email with download link and resources
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        Optional free audit call with Tim Cakir
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-start">
                    <input
                      {...register('consentGiven')}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-primary focus:ring-primary border-dark/20 rounded"
                    />
                    <label className="ml-3 text-sm text-dark/70">
                      I agree to receive the AI Safety Starter Pack and occasional updates from AI Operator.
                      You can unsubscribe anytime. *
                    </label>
                  </div>
                  {errors.consentGiven && (
                    <p className="text-primary text-sm">{errors.consentGiven.message}</p>
                  )}

                  {error && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-primary text-sm">
                      {error}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark/10">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 text-dark/70 hover:text-dark font-semibold transition-colors"
                >
                  Back
                </button>
              )}
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Get Starter Pack'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
