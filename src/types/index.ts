export interface LeadFormData {
  fullName: string
  email: string
  companyName: string
  jobRole: string
  companySize: string
  phone?: string
  consentGiven: boolean
}

export interface Lead {
  id: string
  full_name: string
  email: string
  company_name: string
  job_role: string
  company_size: string
  phone?: string
  consent_given: boolean
  created_at: string
}

export interface Download {
  id: string
  lead_id: string
  downloaded_at: string
}

export interface AuditBooking {
  id: string
  lead_id?: string
  full_name: string
  email: string
  company_name: string
  created_at: string
}
