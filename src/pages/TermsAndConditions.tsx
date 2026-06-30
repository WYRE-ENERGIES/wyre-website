import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, MapPin } from "lucide-react"
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"

const EFFECTIVE_DATE = "30 June 2026"

const sections = [
  { id: "acceptance", title: "1. Acceptance of these Terms" },
  { id: "definitions", title: "2. Definitions" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "accounts", title: "4. Accounts & Access" },
  { id: "services", title: "5. Our Services" },
  { id: "hardware", title: "6. Hardware & Installation" },
  { id: "solar", title: "7. Solar Solutions" },
  { id: "data-analytics", title: "8. Customer Data, Analytics & AI Insights" },
  { id: "fees", title: "9. Fees, Invoicing & Payment" },
  { id: "term-termination", title: "10. Term & Termination" },
  { id: "acceptable-use", title: "11. Acceptable Use" },
  { id: "ip", title: "12. Intellectual Property" },
  { id: "confidentiality", title: "13. Confidentiality" },
  { id: "warranties", title: "14. Warranties & Disclaimers" },
  { id: "savings", title: "15. Energy Savings & Performance" },
  { id: "liability", title: "16. Limitation of Liability" },
  { id: "indemnity", title: "17. Indemnification" },
  { id: "force-majeure", title: "18. Force Majeure" },
  { id: "third-party", title: "19. Third-Party Services & Links" },
  { id: "changes-service", title: "20. Changes to the Services" },
  { id: "changes-terms", title: "21. Changes to these Terms" },
  { id: "governing-law", title: "22. Governing Law & Dispute Resolution" },
  { id: "general", title: "23. General Provisions" },
  { id: "contact", title: "24. Contact Us" },
]

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the terms that govern your use of Wyre's website,
              dashboards, hardware and energy services. Please read them
              carefully, they form a binding agreement between you and Wyre.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective date: <span className="font-medium">{EFFECTIVE_DATE}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content layout */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-24 self-start hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-heading mb-4">
              On this page
            </p>
            <ul className="space-y-2.5 max-h-[75vh] overflow-y-auto pr-1 border-gray-200 pl-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-muted-foreground hover:text-brandColor transition-colors block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main content */}
          <article className="lg:border-l lg:border-gray-200 lg:pl-12">
            {/* Quick summary */}
            <div className="bg-brandColor/5 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-heading mb-2">
                The short version
              </p>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-5">
                <li>
                  Use Wyre's Services lawfully and don't try to break or abuse
                  the platform.
                </li>
                <li>
                  Your energy data belongs to you. Our recommendations are
                  designed to help you save energy and cost, but they are
                  advisory.
                </li>
                <li>
                  Fees are billed by invoice / bank transfer per your
                  agreement. Late payments may pause your Service.
                </li>
                <li>
                  These terms are governed by Nigerian law, with disputes
                  resolved in Lagos.
                </li>
              </ul>
            </div>

            <Section id="acceptance" title="1. Acceptance of these Terms">
              <p>
                These Terms &amp; Conditions ("Terms") form a legally binding
                agreement between you ("you", "Customer" or "User") and Wyre
                Energy Limited, a company incorporated in the Federal Republic
                of Nigeria with its registered office at 10A Merret Road, Yaba,
                Lagos ("Wyre", "we", "us" or "our"). They govern your access to
                and use of our website at{" "}
                <a
                  href="https://wyreng.com"
                  className="text-brandColor hover:underline"
                >
                  wyreng.com
                </a>
                , our client and branch dashboards, our hardware, software, and
                all related products and services we offer (collectively, the
                "Services").
              </p>
              <p>
                By accessing or using the Services, creating an account, signing
                an order form, or otherwise indicating your acceptance, you
                agree to be bound by these Terms and by our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-brandColor hover:underline"
                >
                  Privacy Policy
                </Link>
                . If you do not agree, you must not use the Services.
              </p>
              <p>
                If you are using the Services on behalf of an organisation, you
                represent that you have authority to bind that organisation to
                these Terms, and "you" will include that organisation.
              </p>
            </Section>

            <Section id="definitions" title="2. Definitions">
              <ul>
                <li>
                  <strong>"EMS"</strong> means Wyre's Energy Management System,
                  including the cloud platform, dashboards, analytics and
                  monitoring services.
                </li>
                <li>
                  <strong>"Hardware"</strong> means the meters, sensors,
                  gateways, controllers and other physical equipment supplied
                  or installed by Wyre or its partners.
                </li>
                <li>
                  <strong>"Platform"</strong> means our software, including any
                  mobile or web applications, dashboards and APIs.
                </li>
                <li>
                  <strong>"Site"</strong> means each customer facility, branch
                  or location where Wyre Services are deployed.
                </li>
                <li>
                  <strong>"Order Form"</strong> means any written or electronic
                  document signed by you and Wyre setting out the specific
                  Services, fees, sites and term.
                </li>
                <li>
                  <strong>"Customer Data"</strong> means any data submitted by
                  you to the Services or generated by your Sites or equipment
                  in connection with the Services.
                </li>
              </ul>
            </Section>

            <Section id="eligibility" title="3. Eligibility">
              <p>
                You must be at least 18 years old and legally capable of
                entering into a binding contract to use the Services. Our
                Services are intended for use by businesses, government
                agencies, institutions and other organisations. If you are
                using the Services on behalf of an organisation, you confirm
                that you are duly authorised to do so.
              </p>
            </Section>

            <Section id="accounts" title="4. Accounts & Access">
              <p>
                Certain features of the Services require you to register an
                account on{" "}
                <a
                  href="https://dashboard.wyreng.com"
                  className="text-brandColor hover:underline"
                >
                  dashboard.wyreng.com
                </a>{" "}
                or{" "}
                <a
                  href="https://clientadmin.wyreng.com"
                  className="text-brandColor hover:underline"
                >
                  clientadmin.wyreng.com
                </a>
                . You agree to:
              </p>
              <ul>
                <li>
                  Provide accurate, current and complete information when
                  registering and to keep that information up to date;
                </li>
                <li>
                  Keep your login credentials confidential and not share them
                  with anyone outside your organisation;
                </li>
                <li>
                  Be responsible for all activity that occurs under your
                  account;
                </li>
                <li>
                  Notify us promptly at{" "}
                  <a
                    href="mailto:info@wyreng.com"
                    className="text-brandColor hover:underline"
                  >
                    info@wyreng.com
                  </a>{" "}
                  of any unauthorised access or security breach.
                </li>
              </ul>
              <p>
                We may suspend or terminate accounts that we reasonably believe
                are being used in breach of these Terms or applicable law.
              </p>
            </Section>

            <Section id="services" title="5. Our Services">
              <p>Wyre provides, among others, the following Services:</p>
              <ul>
                <li>
                  <strong>Energy Management as a Service (EMS)</strong> -
                  monitoring, analytics, billing verification, alerts and
                  AI-powered insights for utility, gas, diesel and solar
                  energy use.
                </li>
                <li>
                  <strong>Solar Solutions</strong> - design, supply,
                  installation, commissioning, monitoring and maintenance of
                  solar PV and energy-storage systems.
                </li>
                <li>
                  <strong>Smart Grid &amp; Metering</strong> - smart metering,
                  remote billing and revenue assurance for independent power
                  producers and similar operators.
                </li>
                <li>
                  <strong>Hardware Installation &amp; Commissioning</strong> -
                  deployment of meters, sensors and related equipment at your
                  Sites.
                </li>
                <li>
                  <strong>Reports &amp; Notifications</strong> - periodic
                  reports, dashboards, email and in-app notifications.
                </li>
              </ul>
              <p>
                The specific Services, sites, deliverables, fees and timelines
                applicable to you are set out in your Order Form, statement of
                work, proposal or similar agreement signed with Wyre. In the
                event of conflict, the Order Form will prevail over these
                Terms for that specific matter.
              </p>
            </Section>

            <Section id="hardware" title="6. Hardware & Installation">
              <p>
                Where Wyre supplies or installs Hardware at your Site, the
                following applies:
              </p>
              <ul>
                <li>
                  <strong>Site readiness.</strong> You are responsible for
                  ensuring your Site is safe, accessible and ready for
                  installation (including power, mounting locations, network
                  access and any required permissions).
                </li>
                <li>
                  <strong>Ownership.</strong> Title to purchased Hardware
                  passes to you on full payment, unless your Order Form
                  expressly states that the Hardware is leased, financed or
                  supplied as part of a service package, in which case Wyre
                  retains ownership in line with that arrangement.
                </li>
                <li>
                  <strong>Warranty.</strong> Hardware supplied by Wyre is
                  covered by the manufacturer's warranty and the warranty
                  period stated in your Order Form. Damage caused by misuse,
                  tampering, unauthorised modification, vandalism, power
                  surges, lightning, flooding, fire or events outside Wyre's
                  reasonable control is not covered.
                </li>
                <li>
                  <strong>Maintenance.</strong> Where you subscribe to a
                  Wyre maintenance plan, we will provide the maintenance and
                  support described in your Order Form. Outside of an active
                  maintenance plan, repairs and replacements may be billed on
                  a time-and-materials basis.
                </li>
                <li>
                  <strong>Tampering.</strong> You must not modify, open,
                  bypass, disable or relocate Wyre Hardware without our written
                  consent. Doing so may void warranties and may pause or
                  terminate your Services.
                </li>
              </ul>
            </Section>

            <Section id="solar" title="7. Solar Solutions">
              <p>
                When Wyre provides solar design, supply, installation,
                commissioning or maintenance services:
              </p>
              <ul>
                <li>
                  Designs, proposed system sizing and energy yield estimates
                  are based on assumptions about your Site, load profile,
                  irradiation data and equipment specifications. Actual
                  performance may vary due to factors outside our control
                  (weather, shading, load changes, grid conditions, fuel
                  availability, etc.).
                </li>
                <li>
                  Solar panels, inverters, batteries and balance-of-system
                  components are covered by their respective manufacturer
                  warranties. Wyre will assist with valid warranty claims
                  during the support period set out in your Order Form.
                </li>
                <li>
                  Where the Service includes battery storage, you acknowledge
                  that battery performance degrades over time and may be
                  affected by usage patterns, temperature and depth of
                  discharge.
                </li>
                <li>
                  You are responsible for obtaining any permits or approvals
                  required for the installation at your Site, unless your
                  Order Form expressly assigns this responsibility to Wyre.
                </li>
              </ul>
            </Section>

            <Section id="data-analytics" title="8. Customer Data, Analytics & AI Insights">
              <ul>
                <li>
                  <strong>Ownership of Customer Data.</strong> As between you
                  and Wyre, you own your Customer Data. You grant Wyre a
                  worldwide, non-exclusive, royalty-free licence to host,
                  process, analyse, display and transmit Customer Data solely
                  as needed to provide and improve the Services and to comply
                  with law.
                </li>
                <li>
                  <strong>Accuracy of your data.</strong> You are responsible
                  for the accuracy, legality and quality of Customer Data and
                  any inputs you provide.
                </li>
                <li>
                  <strong>AI &amp; recommendations.</strong> Some of our
                  Services use machine-learning models to produce baselines,
                  forecasts and recommendations. These outputs are provided for
                  informational purposes only and are not a substitute for
                  professional engineering, financial or operational judgement.
                  You remain responsible for any decisions you make based on
                  them.
                </li>
                <li>
                  <strong>Aggregated &amp; anonymised data.</strong> Wyre may
                  generate aggregated and anonymised data from Customer Data
                  that does not identify you, your personnel or your Sites,
                  and may use such data for benchmarking, research, product
                  improvement and other lawful business purposes.
                </li>
                <li>
                  <strong>Backup.</strong> While we apply reasonable safeguards
                  and backups, you are encouraged to maintain your own copies
                  of any critical reports or data you download from the
                  Platform.
                </li>
              </ul>
            </Section>

            <Section id="fees" title="9. Fees, Invoicing & Payment">
              <ul>
                <li>
                  Fees for the Services are set out in your Order Form. Unless
                  agreed otherwise in writing, Wyre invoices Customers by
                  email and accepts payment by bank transfer to the account
                  details on the invoice.
                </li>
                <li>
                  Subscription Services may be billed monthly, annually or on a
                  multi-year basis. Subscription fees are non-refundable except
                  where required by law or expressly stated in your Order Form.
                </li>
                <li>
                  Unless stated otherwise, all fees are exclusive of
                  applicable taxes, duties and levies (such as VAT and
                  withholding tax), which are payable by you at the prevailing
                  rate.
                </li>
                <li>
                  Invoices are payable within the period stated on the
                  invoice (or 30 days from the invoice date if no period is
                  specified).
                </li>
                <li>
                  Late payments may attract interest at the rate of 1.5% per
                  month (or the maximum amount permitted by law, whichever is
                  lower) and may result in suspension of the Services after a
                  written notice to you.
                </li>
                <li>
                  Wyre may adjust standard pricing from time to time on at
                  least 30 days' notice for the next renewal period.
                </li>
              </ul>
            </Section>

            <Section id="term-termination" title="10. Term & Termination">
              <ul>
                <li>
                  These Terms apply for as long as you use the Services or
                  hold an active subscription with Wyre, plus any obligations
                  that are intended to survive (such as confidentiality and
                  limitation of liability).
                </li>
                <li>
                  Either party may terminate an Order Form for material breach
                  by the other party if that breach is not cured within 30
                  days of written notice.
                </li>
                <li>
                  Wyre may suspend or terminate your access immediately if
                  (i) we reasonably believe your use of the Services is
                  fraudulent, abusive, unlawful or poses a security risk;
                  (ii) you fail to pay undisputed invoices; or (iii) we are
                  required to do so by law.
                </li>
                <li>
                  On termination, you must stop using the Services and pay any
                  outstanding fees. Where applicable, we will provide a
                  reasonable opportunity to export your Customer Data before
                  it is deleted in line with our retention practices.
                </li>
              </ul>
            </Section>

            <Section id="acceptable-use" title="11. Acceptable Use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the Services for any unlawful or fraudulent purpose;</li>
                <li>
                  Attempt to gain unauthorised access to the Platform, other
                  customers' data, or any underlying infrastructure;
                </li>
                <li>
                  Reverse engineer, decompile, disassemble or otherwise attempt
                  to derive the source code of the Platform, except to the
                  extent permitted by law;
                </li>
                <li>
                  Introduce viruses, worms, malware or other harmful code, or
                  attempt to disrupt or overload the Services;
                </li>
                <li>
                  Resell, sub-license, lease or otherwise make the Services
                  available to any third party without our written consent;
                </li>
                <li>
                  Use the Services in any way that infringes the rights of any
                  third party or violates any applicable law or regulation.
                </li>
              </ul>
            </Section>

            <Section id="ip" title="12. Intellectual Property">
              <ul>
                <li>
                  Wyre and its licensors own all right, title and interest in
                  and to the Platform, Hardware designs, documentation,
                  branding, trademarks and any improvements, updates or
                  derivative works thereof.
                </li>
                <li>
                  Subject to your compliance with these Terms, Wyre grants you
                  a limited, non-exclusive, non-transferable, revocable licence
                  to access and use the Platform during your subscription
                  period solely for your internal business operations.
                </li>
                <li>
                  Any feedback, suggestions or ideas you provide about the
                  Services may be used by Wyre without restriction or
                  obligation to you.
                </li>
                <li>
                  Nothing in these Terms transfers ownership of any
                  intellectual property rights from Wyre to you.
                </li>
              </ul>
            </Section>

            <Section id="confidentiality" title="13. Confidentiality">
              <p>
                Each party may receive confidential information from the
                other in connection with the Services (such as pricing,
                technical information, business plans and Customer Data).
                Each party agrees to (i) use confidential information only to
                perform under these Terms; (ii) protect it with at least the
                same degree of care it uses for its own confidential
                information (and not less than a reasonable standard of care);
                and (iii) not disclose it to third parties except to its
                personnel, advisers or subcontractors with a need to know who
                are bound by similar confidentiality obligations.
                Confidentiality obligations do not apply to information that is
                publicly available, was already known without obligation of
                confidence, is independently developed, or is required to be
                disclosed by law.
              </p>
            </Section>

            <Section id="warranties" title="14. Warranties & Disclaimers">
              <p>
                Wyre warrants that it will perform the Services with reasonable
                skill and care, in line with prevailing industry practice in
                the energy management sector.
              </p>
              <p>
                Except as expressly stated in these Terms or in a signed Order
                Form, the Services and Hardware are provided{" "}
                <strong>"as is"</strong> and{" "}
                <strong>"as available"</strong>, and Wyre disclaims, to the
                fullest extent permitted by law, all other warranties, whether
                express, implied or statutory, including any implied
                warranties of merchantability, fitness for a particular
                purpose, non-infringement, and any warranty arising out of any
                course of dealing or trade usage.
              </p>
              <p>
                Wyre does not warrant that the Services will be uninterrupted,
                error-free or completely secure, or that any defects will be
                corrected. The Services may be temporarily unavailable for
                scheduled maintenance, urgent fixes, third-party network
                outages or other reasons outside our reasonable control.
              </p>
            </Section>

            <Section id="savings" title="15. Energy Savings & Performance">
              <p>
                Wyre's Services are designed to help you reduce energy waste
                and operating costs. Any savings figures, percentages, payback
                periods or performance projections referenced on our website,
                marketing materials or proposals (for example, "save up to 30%
                on energy expenses") are <strong>illustrative estimates</strong>{" "}
                based on past customer outcomes and assumed conditions. They
                are not guarantees.
              </p>
              <p>
                Actual results depend on many factors including, without
                limitation, your existing energy infrastructure, equipment
                condition, operational behaviour, tariffs, fuel prices, grid
                reliability, weather and your implementation of our
                recommendations.
              </p>
            </Section>

            <Section id="liability" title="16. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law:
              </p>
              <ul>
                <li>
                  Neither party will be liable to the other for any indirect,
                  incidental, special, consequential, exemplary or punitive
                  damages, including loss of profits, loss of revenue, loss of
                  business, loss of goodwill, loss of data, business
                  interruption or cost of substitute services, even if the
                  party has been advised of the possibility of such damages.
                </li>
                <li>
                  Wyre's total aggregate liability arising out of or in
                  connection with these Terms or the Services, whether in
                  contract, tort (including negligence), statute or otherwise,
                  is limited to the total fees actually paid by you to Wyre
                  under the relevant Order Form in the twelve (12) months
                  immediately preceding the event giving rise to the claim.
                </li>
                <li>
                  Nothing in these Terms excludes or limits any liability that
                  cannot be excluded or limited by applicable law (for example,
                  liability for fraud, gross negligence, wilful misconduct or
                  death or personal injury caused by negligence).
                </li>
              </ul>
            </Section>

            <Section id="indemnity" title="17. Indemnification">
              <p>
                You agree to defend, indemnify and hold harmless Wyre, its
                affiliates, directors, officers, employees and agents from and
                against any third-party claims, damages, liabilities, losses
                and expenses (including reasonable legal fees) arising out of
                or related to:
              </p>
              <ul>
                <li>Your breach of these Terms or any Order Form;</li>
                <li>
                  Your violation of applicable law or any third-party right;
                </li>
                <li>
                  Customer Data or content you submit to the Services;
                </li>
                <li>
                  Your use of the Services in a manner not authorised by these
                  Terms.
                </li>
              </ul>
            </Section>

            <Section id="force-majeure" title="18. Force Majeure">
              <p>
                Neither party will be liable for any failure or delay in
                performance (other than payment obligations) caused by events
                beyond its reasonable control, including but not limited to:
                acts of God, war, civil unrest, government action, fire, flood,
                lightning, earthquake, pandemic, epidemic, labour disputes,
                fuel shortages, internet or telecommunications outages, grid
                failure, vandalism, theft, or third-party service-provider
                failures. The affected party will use reasonable efforts to
                resume performance as soon as practicable.
              </p>
            </Section>

            <Section id="third-party" title="19. Third-Party Services & Links">
              <p>
                The Services may interoperate with, or contain links to,
                third-party products, websites or services. Wyre is not
                responsible for the availability, accuracy, content or
                practices of any third party. Your use of any third-party
                service is governed by that third party's own terms and
                policies.
              </p>
            </Section>

            <Section id="changes-service" title="20. Changes to the Services">
              <p>
                We are constantly improving our Services. We may add, modify or
                discontinue features at our discretion. Where a change is
                likely to have a material adverse effect on you, we will use
                reasonable efforts to notify you in advance through the
                Platform or by email.
              </p>
            </Section>

            <Section id="changes-terms" title="21. Changes to these Terms">
              <p>
                We may update these Terms from time to time. When we make
                material changes, we will revise the "Effective date" at the
                top of this page and, where appropriate, notify you by email
                or through the Services. Your continued use of the Services
                after the revised Terms take effect constitutes your acceptance
                of the updated Terms. If you do not agree to the changes, you
                must stop using the Services.
              </p>
            </Section>

            <Section id="governing-law" title="22. Governing Law & Dispute Resolution">
              <p>
                These Terms and any dispute or claim arising out of or in
                connection with them are governed by the laws of the Federal
                Republic of Nigeria.
              </p>
              <p>
                The parties agree to first attempt to resolve any dispute
                amicably through good-faith negotiations between authorised
                representatives. If the dispute is not resolved within thirty
                (30) days of written notice, the parties may, by mutual
                agreement, refer the dispute to mediation or arbitration.
                Failing that, the courts of Lagos State, Nigeria shall have
                exclusive jurisdiction to settle the dispute, save that Wyre
                may bring proceedings to protect its intellectual property or
                seek injunctive relief in any competent court.
              </p>
            </Section>

            <Section id="general" title="23. General Provisions">
              <ul>
                <li>
                  <strong>Entire agreement.</strong> These Terms, together with
                  the Privacy Policy and any Order Form, constitute the
                  entire agreement between you and Wyre on this subject and
                  supersede any prior agreements or understandings.
                </li>
                <li>
                  <strong>Severability.</strong> If any provision is found to
                  be unenforceable, the remaining provisions will continue in
                  full force and effect.
                </li>
                <li>
                  <strong>No waiver.</strong> Our failure to enforce any right
                  is not a waiver of that right.
                </li>
                <li>
                  <strong>Assignment.</strong> You may not assign or transfer
                  these Terms without our prior written consent. Wyre may
                  assign these Terms to an affiliate or in connection with a
                  merger, acquisition or sale of assets.
                </li>
                <li>
                  <strong>Notices.</strong> Notices to Wyre must be sent to{" "}
                  <a
                    href="mailto:info@wyreng.com"
                    className="text-brandColor hover:underline"
                  >
                    info@wyreng.com
                  </a>{" "}
                  or to our office address below.
                </li>
                <li>
                  <strong>Independent contractors.</strong> The parties are
                  independent contractors. Nothing in these Terms creates a
                  partnership, joint venture, agency or employment
                  relationship.
                </li>
              </ul>
            </Section>

            <Section id="contact" title="24. Contact Us">
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="not-prose mt-4 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                  <Mail className="h-5 w-5 text-brandColor mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-heading">Email</p>
                    <a
                      href="mailto:info@wyreng.com"
                      className="text-sm text-muted-foreground hover:text-brandColor"
                    >
                      info@wyreng.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                  <MapPin className="h-5 w-5 text-brandColor mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      Office
                    </p>
                    <p className="text-sm text-muted-foreground">
                      10A Merret Road, Yaba, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24 mb-10">
    <h2 className="text-xl md:text-2xl font-bold text-heading mb-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3 [&_h4]:text-heading [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:leading-relaxed [&_a]:text-brandColor [&_a:hover]:underline">
      {children}
    </div>
  </section>
)

export default TermsAndConditions
