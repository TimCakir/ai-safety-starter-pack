# The ChatGPT DPA Guide
## How to Handle Data When Using OpenAI Tools

> **Critical Fact**: Free ChatGPT does NOT include a Data Processing Agreement (DPA). Without a valid DPA, processing personal data through ChatGPT violates GDPR.

---

## Executive Summary

On December 20, 2024, Italy's data protection authority fined OpenAI **€15 million**—the first major GDPR penalty against a generative AI company. (**Note**: OpenAI is appealing this fine as of October 2025; no resolution yet.) One of the four violations: **processing user data to train ChatGPT without adequate legal basis**.

If your organization uses ChatGPT (or any OpenAI tool) and processes personal data, **you need a Data Processing Agreement**. Not having one isn't just risky—it's illegal under GDPR, CCPA, and most privacy regulations.

This guide tells you:
- What a DPA is and why it matters
- Which OpenAI plans include DPAs (spoiler: not the free ones)
- How to implement a DPA properly
- How to assess your current coverage
- What to do if you don't have DPA coverage

**Time to implement:** 1-2 hours for assessment, 1-2 weeks for procurement and deployment.

---

## Table of Contents

1. [What Is a Data Processing Agreement?](#what-is-a-dpa)
2. [Why DPAs Matter for GDPR Compliance](#why-dpas-matter)
3. [OpenAI Plans: DPA Coverage Matrix](#openai-dpa-coverage)
4. [Step-by-Step DPA Implementation](#implementation-guide)
5. [DPA Coverage Assessment](#coverage-assessment)
6. [Contract Templates & Key Clauses](#contract-templates)
7. [Common DPA Mistakes](#common-mistakes)
8. [What If You Don't Have DPA Coverage?](#no-dpa-coverage)
9. [DPA Verification Checklist](#verification-checklist)
10. [Resources & Next Steps](#resources)

---

## What Is a DPA?

### Definition

A **Data Processing Agreement (DPA)** is a legally binding contract between:
- **Data Controller** (your organization)
- **Data Processor** (OpenAI, in this case)

The DPA defines:
- What personal data the processor can access
- How they can process it
- How long they can retain it
- Security measures they must implement
- What happens to data when the contract ends
- Liability and indemnification
- Compliance with privacy regulations (GDPR, CCPA, etc.)

### Legal Basis

**GDPR Article 28** requires a contract (DPA) whenever you engage a processor to handle personal data on your behalf.

**Key requirement**: *"Processing by a processor shall be governed by a contract...that is binding on the processor with regard to the controller."*

**If you don't have a DPA**: Processing personal data through ChatGPT is **unlawful**.

---

## Why DPAs Matter

### 1. Legal Compliance

**GDPR Article 28** mandates DPAs for all processor relationships. Without one:
- You're violating GDPR
- Each data subject whose data you process is a separate violation
- Potential fines: **€20 million or 4% of global revenue**, whichever is higher

**Italy's OpenAI fine** (€15M, December 2024, under appeal) included this exact violation.

### 2. Data Training Protection

Without a DPA specifying otherwise, OpenAI's default terms allow:
- Using your inputs to train future models
- Sharing your data with third parties
- Retaining data indefinitely

**With a proper DPA** (Enterprise/Team plans):
- Your data is NOT used for training
- Data retention is limited
- You control deletion

### 3. Breach Notification

If OpenAI suffers a data breach, a DPA requires them to:
- Notify you within a specified timeframe (typically 24-72 hours)
- Provide details about what data was exposed
- Cooperate with your breach response

**Without a DPA**: No notification obligation. You might never know your data was compromised.

### 4. Liability Protection

A properly structured DPA:
- Defines who's liable for what
- Includes indemnification provisions
- Specifies insurance requirements
- Establishes audit rights

### 5. Data Subject Rights

Under GDPR, data subjects have rights:
- Right to access their data
- Right to correction
- Right to deletion ("right to be forgotten")
- Right to data portability

**A DPA obligates OpenAI** to cooperate when your users exercise these rights.

---

## OpenAI DPA Coverage Matrix

| Plan | DPA Included? | Data Used for Training? | Data Retention | GDPR Compliant? | Monthly Cost |
|------|---------------|-------------------------|----------------|-----------------|--------------|
| **Free** | ❌ NO | ✅ YES | Indefinite | ❌ NO | $0 |
| **Plus** | ❌ NO | ✅ YES* | Indefinite | ❌ NO | $20/user |
| **Team** | ✅ YES | ❌ NO | 30 days default | ✅ YES** | $25-30/user |
| **Enterprise** | ✅ YES | ❌ NO | Custom (admin controlled) | ✅ YES** | Custom pricing |

*Plus plan: Training opt-out available in settings, but no contractual guarantee
**Assuming proper configuration and BAA if needed for HIPAA

### Critical Differences

#### Free ChatGPT
- **No DPA available**
- **Data used for training** unless user opts out (opt-out not contractually binding)
- **No data retention controls**
- **No SOC 2 compliance**
- **No admin controls**
- ⚠️ **Cannot be used legally for personal data under GDPR**

#### Plus ($20/user/month)
- **No DPA available**
- Training opt-out exists but isn't contractually enforceable
- Same as Free from a compliance perspective
- ⚠️ **Still cannot be used legally for personal data under GDPR**

#### Team ($25-30/user/month, 2+ users)
- ✅ **DPA available** (must be signed separately)
- ✅ **Data NOT used for training** (contractually guaranteed)
- ✅ **Data encrypted at rest** (AES-256)
- ✅ **Admin console** with usage controls
- ✅ **Data retention controls** (30-day default, configurable)
- ✅ **SOC 2 Type II certified**
- ✅ **GDPR-compliant** when properly configured

#### Enterprise (Custom pricing)
- ✅ **Everything in Team**, plus:
- ✅ **Custom data retention** policies
- ✅ **SAML SSO** (Single Sign-On)
- ✅ **Domain verification** (control who can join)
- ✅ **Audit logs** (track all usage)
- ✅ **Advanced admin controls**
- ✅ **Dedicated support** and onboarding
- ✅ **Unlimited usage** (no message caps)
- ✅ **BAA available** (for HIPAA compliance)

### Pricing Context

**If you're processing personal data**:
- Free/Plus: $0-20/month but **illegal** under GDPR
- Team: $300-600/month (10-20 users) and **legal**
- Enterprise: $500-2,000+/month and **fully compliant**

**The "savings" from Free/Plus could cost you €20 million in fines.**

---

## Step-by-Step DPA Implementation

### Phase 1: Assessment (1-2 Hours)

#### Step 1: Determine If You Need a DPA

**You need a DPA if:**
- ✅ You process **personal data** through ChatGPT
- ✅ Your organization is subject to GDPR, CCPA, or similar privacy laws
- ✅ Employees use ChatGPT for work involving customer data, employee data, or any identifiable information

**Personal data includes:**
- Names, email addresses, phone numbers
- IP addresses, device IDs
- Employee performance reviews
- Customer support conversations
- Any data that could identify an individual

#### Step 2: Audit Current ChatGPT Usage

**Questions to answer:**
1. How many employees use ChatGPT? (Check browser extensions, network logs, shadow AI discovery tools)
2. Which departments use it most? (Engineering, marketing, support, HR, sales, legal?)
3. What are they using it for? (Code review, content creation, customer support, data analysis?)
4. Are they using personal accounts or company accounts?
5. Are they pasting personal data into ChatGPT?

**Discovery methods:**
- Employee survey (anonymous to get honest answers)
- Network monitoring (look for chat.openai.com traffic)
- Browser extension inventory
- Shadow AI discovery tools (Portal26, Harmonic, Obsidian)

**Expected finding from 500+ audits**: 50% of employees use AI tools without authorization, 38% share confidential data.

#### Step 3: Calculate Required Licenses

**Team Plan Minimum**: 2 licenses
**Recommendation**: Start with 10-20% of your workforce (power users), expand based on usage

**Example**:
- 100-person company
- Estimated 50 employees using ChatGPT (50% shadow AI rate)
- Deploy 15 Team licenses initially
- Cost: 15 × $30 = $450/month

### Phase 2: Procurement (3-7 Days)

#### Step 4: Choose Your Plan

**Choose Team if:**
- 2-999 users
- Standard data retention needs (30 days minimum)
- Don't need HIPAA compliance
- Want quick deployment

**Choose Enterprise if:**
- 100+ users (negotiate better pricing)
- Need custom data retention (e.g., 0 days, immediate deletion)
- Require HIPAA BAA
- Need SAML SSO
- Want dedicated support

#### Step 5: Sign the DPA

**Team Plan:**
1. Subscribe at [platform.openai.com](https://platform.openai.com/signup)
2. Go to Settings → Workspace → Legal
3. Download OpenAI's standard DPA
4. Review with legal counsel (recommended)
5. Sign and return

**Enterprise Plan:**
1. Contact OpenAI sales: [openai.com/enterprise](https://openai.com/enterprise)
2. Negotiate terms (pricing, retention, support)
3. **Negotiate DPA terms** (standard DPA is usually acceptable, but you can request modifications)
4. Legal review (mandatory for Enterprise contracts)
5. Sign master agreement + DPA

**DPA Review Checklist** (see Contract Templates section below for specifics):
- [ ] Data retention period specified
- [ ] Training on data explicitly prohibited
- [ ] Subprocessor list provided
- [ ] Breach notification timeframe defined (24-72 hours)
- [ ] Data deletion provisions clear
- [ ] Liability and indemnification acceptable
- [ ] Governing law acceptable
- [ ] Audit rights included

#### Step 6: Configure Admin Settings

**Team/Enterprise Admin Console** ([chat.openai.com/admin](https://chat.openai.com/admin)):

1. **Data Retention**
   - Set retention period (30 days minimum for Team, custom for Enterprise)
   - Enable automatic deletion

2. **Data Controls**
   - Disable "Improve model for everyone" (ensure data isn't used for training)
   - Disable "Chat history" for sensitive use cases (optional, but recommended for high-risk data)

3. **User Management**
   - Add approved users
   - Set up SSO if available (Enterprise)
   - Configure domain verification (Enterprise)

4. **Workspace Settings**
   - Set workspace name and policies
   - Define usage guidelines
   - Enable audit logs (Enterprise)

### Phase 3: Deployment (1-2 Weeks)

#### Step 7: Migrate Users

**Communication Plan**:
1. Announce new ChatGPT Team/Enterprise availability
2. Explain why (data protection, compliance, not a restriction)
3. Provide signup instructions
4. Set deadline for migration (2 weeks recommended)

**Migration Process**:
- Send personalized invites via admin console
- Users click invite link → auto-added to workspace
- Verify they're using workspace account (look for workspace name in top-left)
- **Block chat.openai.com at network level for non-workspace accounts** (enforcement)

#### Step 8: Block Unapproved Access

**Option 1: Network-Level Block** (recommended)
- Block chat.openai.com for personal accounts
- Allow only authenticated workspace users
- Use Cloudflare, Zscaler, or similar CASB

**Option 2: Browser Extension Block**
- Deploy browser policy to disable personal ChatGPT accounts
- Works for Chrome/Edge via Group Policy

**Option 3: Data Loss Prevention (DLP)**
- Deploy DLP rules to block sensitive data pasting into non-workspace ChatGPT
- Tools: Forcepoint, Symantec, McAfee, Microsoft Purview

#### Step 9: Monitor & Enforce

**Monitoring Dashboard** (Team/Enterprise admin console):
- Track active users
- Review usage patterns
- Identify anomalies
- Generate reports for leadership

**Quarterly Review**:
- Verify DPA is still active
- Check for OpenAI policy changes
- Audit user compliance
- Review data retention settings

---

## DPA Coverage Assessment

### Self-Assessment Questionnaire

**Answer YES/NO for each question:**

| # | Question | Your Answer | Risk Level |
|---|----------|-------------|------------|
| 1 | Do employees use ChatGPT for work? | ☐ Yes ☐ No | - |
| 2 | Is personal data (names, emails, customer info) ever pasted into ChatGPT? | ☐ Yes ☐ No | HIGH |
| 3 | Do you have a signed DPA with OpenAI? | ☐ Yes ☐ No | CRITICAL |
| 4 | Are employees using Team/Enterprise ChatGPT (not Free/Plus)? | ☐ Yes ☐ No | CRITICAL |
| 5 | Have you configured data retention settings in the admin console? | ☐ Yes ☐ No | HIGH |
| 6 | Have you disabled "Improve model for everyone" in workspace settings? | ☐ Yes ☐ No | CRITICAL |
| 7 | Do you have a process to block personal ChatGPT accounts? | ☐ Yes ☐ No | HIGH |
| 8 | Do you monitor ChatGPT usage (who, what, when)? | ☐ Yes ☐ No | MEDIUM |
| 9 | Have employees been trained on what data is safe to share with ChatGPT? | ☐ Yes ☐ No | HIGH |
| 10 | Do you have a BAA with OpenAI (if HIPAA applies)? | ☐ Yes ☐ No | CRITICAL (if health data) |

### Scoring

**Count your YES answers:**

- **9-10 YES**: ✅ **Excellent DPA Coverage** — You're compliant. Maintain with quarterly reviews.
- **7-8 YES**: ⚠️ **Good Coverage with Gaps** — Address missing items within 30 days.
- **4-6 YES**: 🟠 **Moderate Risk** — Significant compliance gaps. Implement DPA within 2 weeks.
- **0-3 YES**: 🔴 **Critical Risk** — You're likely violating GDPR. Implement immediately (48 hours).

---

## Contract Templates & Key Clauses

### What to Look for in OpenAI's DPA

OpenAI provides a standard DPA for Team/Enterprise customers. Here are the **critical clauses** you must verify:

#### 1. Data Processing Scope

**What you want:**
```
"OpenAI will process Customer Data only to provide the Services and only in accordance
with Customer's documented instructions. OpenAI will not use Customer Data for any
other purpose, including to train or improve OpenAI's models."
```

**Red flag**: Any language suggesting data may be used for training, even "anonymized" or "aggregated."

#### 2. Data Retention and Deletion

**What you want:**
```
"Customer may configure data retention periods via the Admin Console. Upon termination
or expiration of this Agreement, OpenAI will delete all Customer Data within 30 days,
unless legally required to retain it."
```

**What to negotiate**:
- Shorter deletion timeline (7-14 days for Enterprise)
- On-demand deletion capability
- Verification of deletion (certification upon request)

#### 3. Subprocessors

**What you want:**
```
"OpenAI may engage subprocessors to assist in providing the Services. OpenAI will:
(a) provide a list of current subprocessors, (b) notify Customer of new subprocessors,
(c) allow Customer to object to new subprocessors."
```

**Current OpenAI subprocessors** (as of October 2025):
- Microsoft Azure (hosting)
- Google Cloud Platform (hosting)
- Stripe (payment processing)
- Additional third parties listed at [openai.com/policies/subprocessors](https://openai.com/policies/subprocessors)

**Action**: Review subprocessor list, verify they're GDPR-compliant.

#### 4. Breach Notification

**What you want:**
```
"OpenAI will notify Customer without undue delay (and in any event within 24 hours)
upon becoming aware of a Personal Data Breach affecting Customer Data."
```

**Why it matters**: GDPR requires you to notify authorities within 72 hours. You need time to investigate and report.

**What to negotiate**:
- 24-hour notification (vs. OpenAI's standard "without undue delay")
- Detailed breach information (what, when, how many records, remediation)
- OpenAI's cooperation with your breach response

#### 5. Data Subject Rights

**What you want:**
```
"OpenAI will, to the extent legally permitted, promptly notify Customer if OpenAI
receives a request from a Data Subject to exercise their rights under Data Protection Laws.
OpenAI will provide reasonable assistance to Customer in responding to such requests."
```

**Data subject rights include**:
- Right of access (SAR - Subject Access Request)
- Right to rectification
- Right to erasure ("right to be forgotten")
- Right to data portability

#### 6. Security Measures

**What you want:**
```
"OpenAI will implement and maintain appropriate technical and organizational measures
to protect Customer Data against unauthorized or unlawful processing and against
accidental loss, destruction, or damage."
```

**Specific measures to verify**:
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.2+)
- Access controls (role-based access, MFA)
- Regular security audits (SOC 2 Type II)
- Incident response plan
- Employee training on data protection

#### 7. Audit Rights

**What you want:**
```
"Customer may audit OpenAI's compliance with this DPA up to once per year, upon
reasonable notice. OpenAI will provide Customer with copies of relevant audit reports
(e.g., SOC 2) as an alternative to on-site audits."
```

**Practical approach**: Request SOC 2 reports instead of on-site audits (easier, faster, cheaper).

#### 8. Liability and Indemnification

**What you want:**
```
"OpenAI will indemnify Customer against any claims arising from OpenAI's breach of
this DPA or failure to comply with Data Protection Laws."
```

**What to negotiate**:
- Uncapped liability for data breaches (vs. standard contract caps)
- Indemnification for regulatory fines
- Insurance requirements (cyber liability insurance)

#### 9. Governing Law and Jurisdiction

**What you want:**
```
"This DPA shall be governed by the laws of [your jurisdiction], and any disputes
shall be resolved in the courts of [your jurisdiction]."
```

**OpenAI default**: California law, California courts

**Why it matters**: If you're EU-based, EU law is more favorable for GDPR claims.

**What to negotiate**: EU Standard Contractual Clauses (SCCs) for international data transfers.

### Sample DPA Language (Template)

```markdown
DATA PROCESSING AGREEMENT

This Data Processing Agreement ("DPA") is entered into between:

DATA CONTROLLER: [Your Organization Name]
Address: [Your Address]
("Customer")

DATA PROCESSOR: OpenAI, L.L.C.
Address: 3180 18th Street, San Francisco, CA 94110
("OpenAI")

Effective Date: [Date]

RECITALS

WHEREAS, Customer uses OpenAI's services (the "Services") and, in connection with such use,
may disclose Personal Data to OpenAI;

WHEREAS, the parties wish to ensure that Personal Data is processed in compliance with
applicable Data Protection Laws, including the General Data Protection Regulation (GDPR);

NOW, THEREFORE, the parties agree as follows:

1. DEFINITIONS
   "Personal Data" means any information relating to an identified or identifiable natural person.
   "Data Protection Laws" means all applicable laws relating to data protection and privacy,
   including GDPR, CCPA, and similar laws.

2. SCOPE OF PROCESSING
   2.1 OpenAI will process Personal Data only to provide the Services and only in accordance
   with Customer's documented instructions.
   2.2 OpenAI will NOT use Personal Data to train or improve OpenAI's models without Customer's
   explicit written consent.

3. DATA RETENTION
   3.1 Customer may configure data retention periods via the Admin Console (minimum 30 days).
   3.2 Upon termination, OpenAI will delete all Personal Data within 30 days unless legally
   required to retain it.
   3.3 OpenAI will provide written certification of deletion upon Customer's request.

4. SUBPROCESSORS
   4.1 Customer consents to OpenAI engaging subprocessors listed at [URL].
   4.2 OpenAI will notify Customer at least 30 days before engaging new subprocessors.
   4.3 Customer may object to new subprocessors by notifying OpenAI within 30 days.

5. SECURITY MEASURES
   OpenAI will implement appropriate technical and organizational measures, including:
   - Encryption at rest (AES-256) and in transit (TLS 1.2+)
   - Access controls with multi-factor authentication
   - Regular security audits (SOC 2 Type II certification maintained)
   - Employee training on data protection

6. BREACH NOTIFICATION
   6.1 OpenAI will notify Customer within 24 hours of becoming aware of a Personal Data Breach.
   6.2 Notification will include: nature of breach, affected data categories, approximate number
   of affected data subjects, likely consequences, and measures taken to address the breach.

7. DATA SUBJECT RIGHTS
   OpenAI will provide reasonable assistance to Customer in responding to data subject requests,
   including access, rectification, erasure, and portability requests.

8. AUDITS
   8.1 Customer may request copies of OpenAI's SOC 2 reports annually.
   8.2 Customer may conduct on-site audits upon 60 days' notice (max once per year).

9. LIABILITY
   9.1 OpenAI will indemnify Customer against claims arising from OpenAI's breach of this DPA.
   9.2 Liability for data breaches is not subject to the limitation of liability in the
   Master Agreement.

10. INTERNATIONAL DATA TRANSFERS
    OpenAI will process Personal Data in accordance with EU Standard Contractual Clauses (SCCs)
    for international transfers.

11. TERM AND TERMINATION
    This DPA is effective as of the Effective Date and will terminate upon termination of the
    Master Agreement.

[Signature blocks]
```

**Note**: This is a sample template. Always have legal counsel review before signing.

---

## Common DPA Mistakes

### Mistake #1: Assuming Free/Plus Includes a DPA

**The error**: "We're using ChatGPT Plus ($20/month), so we're covered, right?"

**The reality**: Plus does NOT include a DPA. You're paying for faster response times and priority access, **not** data protection.

**The fix**: Upgrade to Team (minimum $50/month for 2 users) or Enterprise.

### Mistake #2: Not Configuring Data Retention

**The error**: Signing up for Team/Enterprise but never accessing the admin console to configure data retention settings.

**The reality**: Default settings may not match your compliance requirements. Some settings (like "Improve model for everyone") may be enabled by default.

**The fix**:
1. Log into [chat.openai.com/admin](https://chat.openai.com/admin)
2. Go to Settings → Data Controls
3. Disable "Improve model for everyone"
4. Set data retention to your required period

### Mistake #3: Ignoring Shadow AI

**The error**: Deploying ChatGPT Team for approved users but not blocking personal accounts.

**The reality**: Employees continue using free ChatGPT on personal accounts, which has no DPA protection. Your data is still at risk.

**The fix**:
- Network-level block of chat.openai.com for non-workspace accounts
- DLP rules to prevent data pasting into non-approved AI tools
- Employee training on approved tools

**Stat from our audits**: 68% of enterprise employees access GenAI through personal accounts even after company tools are available.

### Mistake #4: Not Reading the DPA

**The error**: Clicking "I agree" without reading OpenAI's DPA terms.

**The reality**: The DPA may have limitations you're not aware of (e.g., subprocessors, liability caps, audit restrictions).

**The fix**: Have legal counsel review the DPA before signing. Negotiate terms if needed (especially for Enterprise).

### Mistake #5: Forgetting About Other OpenAI Products

**The error**: Signing a DPA for ChatGPT but forgetting employees also use:
- OpenAI API (for developers)
- DALL-E (image generation)
- GPT-4 via third-party apps
- OpenAI Playground

**The reality**: Each OpenAI product may require separate DPA coverage depending on how it's accessed.

**The fix**: Audit all OpenAI product usage across your organization. Ensure DPA coverage for each.

### Mistake #6: Not Monitoring Compliance

**The error**: Deploying ChatGPT Team/Enterprise and assuming you're done.

**The reality**: Compliance is ongoing. Settings change, employees leave, new subprocessors are added, policies update.

**The fix**: Quarterly compliance review:
- Verify data retention settings still match requirements
- Review OpenAI's subprocessor list for changes
- Audit user access (remove ex-employees)
- Check for policy updates from OpenAI
- Review usage logs for anomalies

### Mistake #7: No Employee Training

**The error**: Deploying approved ChatGPT but not training employees on what data is safe to share.

**The reality**: Even with a DPA, employees may paste data that shouldn't be shared (trade secrets, attorney-client privileged info, etc.).

**The fix**:
- Data classification training (Public, Internal, Confidential, Restricted)
- Clear guidelines on what's safe for AI tools
- Examples of violations
- Reporting mechanism for incidents

---

## What If You Don't Have DPA Coverage?

### Immediate Actions (Within 48 Hours)

#### Option 1: Emergency Policy (If You Can't Deploy Team/Enterprise Immediately)

**Temporary policy while you procure Team/Enterprise**:

1. **Ban Personal Data Entry**
   - Email all employees: "Effective immediately, do NOT paste any personal data (names, emails, customer info, employee data) into ChatGPT."
   - Define what counts as personal data (provide examples)
   - Violation = disciplinary action

2. **Deploy DLP Rules**
   - Block common personal data patterns (emails, SSNs, credit cards)
   - Alert security team when violations detected
   - Tools: Microsoft Purview, Symantec DLP, Forcepoint

3. **Network Monitoring**
   - Monitor chat.openai.com traffic
   - Log who's accessing it and when
   - Prepare for full deployment

**This is NOT a long-term solution**—it's a stopgap while you procure proper coverage.

#### Option 2: Procurement on Expedited Timeline

**Fast-track ChatGPT Team/Enterprise**:

- **Day 1-2**: Get budget approval (use Italy fine as justification: €15M, first GenAI GDPR penalty)
- **Day 3-5**: Sign up for Team (self-serve) or contact Enterprise sales
- **Day 5-7**: Legal review of DPA (parallel with procurement)
- **Week 2**: Deploy to initial user group (20% of workforce)
- **Week 3-4**: Full deployment + block personal accounts

### Long-Term Actions (30-90 Days)

#### Step 1: Comprehensive AI Tool Audit

**Questions to answer**:
1. What AI tools are employees using? (ChatGPT, Claude, Gemini, Copilot, others?)
2. Which tools have DPAs available?
3. Which tools are used with personal data?
4. What's our total exposure?

**Discovery methods**:
- Shadow AI discovery tools (Portal26, Harmonic Security, Obsidian)
- Employee survey (anonymous)
- Network traffic analysis
- Browser extension inventory

#### Step 2: Centralized AI Governance Policy

**Create policy covering**:
- Approved AI tools (with DPAs)
- Prohibited AI tools (without DPAs)
- Data classification rules (what can/can't be shared)
- Procurement process for new tools
- Violation consequences

**See**: [Governance Blueprint](./03-Governance-Blueprint.md) in this AI Safety Starter Pack.

#### Step 3: Procurement Strategy

**Negotiate better pricing**:
- Bundle ChatGPT Enterprise with other tools
- Multi-year commitment for discount
- Volume pricing (100+ users)

**Budget planning**:
- ChatGPT Team: $25-30/user/month
- ChatGPT Enterprise: $50-80/user/month (negotiable)
- Security tools (DLP, monitoring): $15K-50K/year
- Training: 2-4 hours per employee

#### Step 4: Ongoing Compliance Program

**Quarterly tasks**:
- [ ] Review OpenAI DPA for changes
- [ ] Audit data retention settings
- [ ] Check subprocessor list
- [ ] Review usage logs
- [ ] Remove ex-employee access
- [ ] Update employee training

**Annual tasks**:
- [ ] Request SOC 2 report from OpenAI
- [ ] Full compliance audit
- [ ] Policy review and updates
- [ ] Budget renewal

---

## DPA Verification Checklist

Use this checklist to verify your DPA implementation is complete:

### Procurement
- [ ] ChatGPT Team or Enterprise subscription active
- [ ] Signed DPA received and filed
- [ ] Legal counsel reviewed DPA
- [ ] Budget approved for ongoing costs

### Configuration
- [ ] Admin console access confirmed
- [ ] Data retention period configured (30+ days)
- [ ] "Improve model for everyone" disabled
- [ ] Chat history settings configured per policy
- [ ] Domain verification enabled (Enterprise only)
- [ ] SSO configured (Enterprise only)

### User Management
- [ ] Approved users added to workspace
- [ ] User onboarding completed
- [ ] Personal ChatGPT accounts blocked (network or DLP)
- [ ] Usage monitoring active

### Documentation
- [ ] DPA filed in legal repository
- [ ] Policy updated to reference ChatGPT Team/Enterprise
- [ ] Employee training materials updated
- [ ] Compliance documentation prepared for audits

### Ongoing Compliance
- [ ] Quarterly review scheduled
- [ ] Monitoring dashboard configured
- [ ] Incident response plan includes AI tools
- [ ] Data subject request process includes OpenAI

---

## Resources & Next Steps

### Official OpenAI Resources

- **OpenAI Business Terms**: [openai.com/policies/business-terms](https://openai.com/policies/business-terms)
- **OpenAI DPA**: Available in admin console after Team/Enterprise signup
- **OpenAI Subprocessors**: [openai.com/policies/subprocessors](https://openai.com/policies/subprocessors)
- **OpenAI Trust & Safety**: [openai.com/trust-and-safety](https://openai.com/trust-and-safety)
- **OpenAI SOC 2 Report**: Request via Enterprise sales or admin console

### Regulatory Resources

- **GDPR Article 28**: [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)
- **EU Standard Contractual Clauses (SCCs)**: [ec.europa.eu/sccs](https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)
- **Italy OpenAI Fine Details**: [gpdp.it](https://www.gpdp.it/) (Italian Data Protection Authority)
- **CCPA Guidance**: [oag.ca.gov/privacy/ccpa](https://oag.ca.gov/privacy/ccpa)

### Related Guides in This Starter Pack

- **[The Safe AI Stack](./01-The-Safe-AI-Stack.md)**: Compare OpenAI to Claude, Gemini, Copilot
- **[Governance Blueprint](./03-Governance-Blueprint.md)**: Create your AI usage policy
- **[Compliance Quick-Check](./04-Compliance-Quick-Check.md)**: 50-point GDPR/compliance assessment
- **[30-Day Rollout Plan](./06-30-Day-Rollout-Plan.md)**: Deploy ChatGPT Team/Enterprise properly
- **[Communication Templates](./07-Communication-Templates.md)**: Announce DPA deployment to employees

### Next Steps

1. **Assess Current State** (30 minutes)
   - Complete the DPA Coverage Assessment above
   - Identify gaps

2. **Procure Team/Enterprise** (1 week)
   - Get budget approval
   - Sign up for Team (self-serve) or Enterprise (sales)
   - Review and sign DPA

3. **Configure Properly** (2-4 hours)
   - Set up admin console
   - Configure data retention
   - Disable training settings

4. **Deploy to Users** (2-4 weeks)
   - Migrate approved users
   - Block personal accounts
   - Train employees

5. **Maintain Compliance** (quarterly)
   - Review settings
   - Audit usage
   - Update policy

---

## Conclusion

**The bottom line**: If you're using ChatGPT with personal data, you need a Data Processing Agreement. Free and Plus plans don't include DPAs. Team and Enterprise plans do.

**The Italy fine** (€15M, December 2024, under appeal) proves regulators are serious about enforcing GDPR against AI companies—and will hold **you** accountable if you use non-compliant tools.

**Action today**:
1. Take the DPA Coverage Assessment (10 minutes)
2. If you score <7, start procurement for Team/Enterprise (this week)
3. Configure admin settings properly (before deployment)
4. Monitor and maintain compliance (quarterly)

**Don't be the next €15 million headline.**

---

**Document Version**: 1.0
**Last Updated**: October 2025
**Author**: Tim Cakir, AI Operator
**Based on**: 500+ enterprise AI implementations
