import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, MapPin } from "lucide-react"
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"

const EFFECTIVE_DATE = "30 June 2026"

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "who-we-are", title: "2. Who We Are" },
  { id: "information-we-collect", title: "3. Information We Collect" },
  { id: "how-we-use", title: "4. How We Use Your Information" },
  { id: "lawful-basis", title: "5. Lawful Basis for Processing" },
  { id: "energy-data", title: "6. Energy & Site Data" },
  { id: "sharing", title: "7. How We Share Information" },
  { id: "retention", title: "8. How Long We Keep Your Data" },
  { id: "security", title: "9. How We Protect Your Data" },
  { id: "your-rights", title: "10. Your Rights" },
  { id: "cookies", title: "11. Cookies & Similar Technologies" },
  { id: "international", title: "12. International Data Transfers" },
  { id: "children", title: "13. Children's Privacy" },
  { id: "third-party", title: "14. Third-Party Links & Services" },
  { id: "changes", title: "15. Changes to this Policy" },
  { id: "contact", title: "16. Contact Us" },
]

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've tried to write this in plain language. It explains what
              information we collect when you use Wyre, why we collect it, and
              the choices you have.
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
            <ul className="space-y-2.5 border-gray-200 pl-4">
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
          <article className="lg:border-l lg:border-gray-200 lg:pl-12 prose-policy">
            {/* Quick summary */}
            <div className="bg-brandColor/5 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-heading mb-2">
                The short version
              </p>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-5">
                <li>
                  We collect only what we need to deliver our energy management
                  services and improve them.
                </li>
                <li>
                  We <strong>do not sell</strong> your personal information to
                  anyone.
                </li>
                <li>
                  Energy data from your site belongs to you. We process it to
                  power your dashboard, reports and AI insights.
                </li>
                <li>
                  You can ask us at any time to access, correct or delete your
                  personal data.
                </li>
              </ul>
            </div>

            <Section id="introduction" title="1. Introduction">
              <p>
                This Privacy Policy describes how Wyre Energy Limited ("Wyre",
                "we", "us" or "our") collects, uses, stores, shares and protects
                information
                about you when you visit our website at{" "}
                <a
                  href="https://wyreng.com"
                  className="text-brandColor hover:underline"
                >
                  wyreng.com
                </a>
                , use our client and branch dashboards, install or interact with
                our hardware on a customer site, or otherwise engage with us
                (collectively, the "Services").
              </p>
              <p>
                By using our Services, you agree to the practices described in
                this Policy. If you do not agree, please do not use the
                Services. This Policy should be read together with our{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-brandColor hover:underline"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </Section>

            <Section id="who-we-are" title="2. Who We Are">
              <p>
                Wyre Energy Limited (trading as "Wyre") is a company
                incorporated in the Federal Republic of Nigeria, with its
                registered office at 10A Merret Road, Yaba, Lagos. We help
                organisations across Africa monitor, manage and optimise their
                energy consumption and production. Our Services include our
                Energy Management System (EMS), solar design and installation,
                smart-grid metering and billing, hardware deployment, and an
                AI-powered cloud platform.
              </p>
              <p>
                For the purposes of the Nigeria Data Protection Act, 2023
                ("NDPA") and other applicable data-protection laws, Wyre acts
                as a <strong>data controller</strong> for personal data we
                collect directly from you (for example, when you fill out a
                contact form or create an account), and as a{" "}
                <strong>data processor</strong> when we process data on behalf
                of an enterprise customer (for example, energy data from sites
                or sub-meters that belong to that customer's facility).
              </p>
            </Section>

            <Section id="information-we-collect" title="3. Information We Collect">
              <p>We collect the following categories of information:</p>

              <h4>a. Information you provide to us</h4>
              <ul>
                <li>
                  <strong>Contact &amp; identification data</strong>: your name,
                  email address, phone number, company name, role and country
                  when you submit a contact form, request a quote, sign up to
                  our newsletter or create an account.
                </li>
                <li>
                  <strong>Account credentials</strong>: usernames, hashed
                  passwords, and security/authentication details for our client
                  and branch dashboards.
                </li>
                <li>
                  <strong>Billing &amp; commercial information</strong>:
                  invoicing details, business registration information, billing
                  addresses, purchase-order references, and payment records
                  (Wyre currently bills enterprise customers by bank transfer
                  and invoicing; we do not store full card numbers).
                </li>
                <li>
                  <strong>Correspondence</strong>: emails, support tickets, chat
                  transcripts, call notes and any other communications you send
                  to us or our team.
                </li>
              </ul>

              <h4>b. Information we collect automatically</h4>
              <ul>
                <li>
                  <strong>Device &amp; usage data</strong>: IP address, browser
                  type and version, device identifiers, operating system,
                  pages viewed, links clicked, referring URL and the date and
                  time of your visit.
                </li>
                <li>
                  <strong>Cookies and similar technologies</strong> - see
                  section 11 below.
                </li>
              </ul>

              <h4>c. Information from operational hardware &amp; sites</h4>
              <ul>
                <li>
                  <strong>Energy &amp; operational data</strong>: real-time and
                  historical readings from meters, sensors, inverters,
                  generators and other equipment installed at customer sites
                  (e.g. kWh, voltage, current, fuel usage, run hours, power
                  quality data, alarms and faults).
                </li>
                <li>
                  <strong>Site metadata</strong>: site location, asset tags,
                  equipment make/model, installation date, and
                  configuration parameters used to commission the system.
                </li>
              </ul>

              <h4>d. Information from third parties</h4>
              <ul>
                <li>
                  We may receive limited information from public sources or
                  partners (e.g. business directories, our resellers or
                  referral partners) to verify your identity or eligibility for
                  certain services.
                </li>
              </ul>
            </Section>

            <Section id="how-we-use" title="4. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate and maintain the Services;</li>
                <li>
                  Create and manage your account and the accounts of users at
                  your organisation;
                </li>
                <li>
                  Process your transactions, raise invoices and reconcile
                  payments;
                </li>
                <li>
                  Deliver dashboards, analytics, reports and AI-generated
                  recommendations on energy use, efficiency and cost;
                </li>
                <li>
                  Send service-related notifications (such as alerts, alarms,
                  outage notices and scheduled maintenance);
                </li>
                <li>
                  Provide customer support, troubleshoot issues and respond to
                  your enquiries;
                </li>
                <li>
                  Improve our Services, develop new features and conduct
                  internal research and analytics;
                </li>
                <li>
                  Detect, investigate and prevent fraud, abuse or other harmful
                  activities, and ensure the security of our platform;
                </li>
                <li>
                  Send you marketing communications, newsletters, product
                  updates and event invitations (you can opt out at any time);
                </li>
                <li>
                  Comply with legal obligations, including tax, accounting and
                  regulatory requirements applicable in Nigeria and other
                  jurisdictions where we operate.
                </li>
              </ul>
            </Section>

            <Section id="lawful-basis" title="5. Lawful Basis for Processing">
              <p>
                We process personal data only where we have a valid lawful basis
                under the NDPA and other applicable laws. Depending on the
                activity, our lawful basis may be:
              </p>
              <ul>
                <li>
                  <strong>Performance of a contract</strong> - to deliver the
                  Services you or your organisation have signed up for;
                </li>
                <li>
                  <strong>Legitimate interests</strong> - to run, improve and
                  secure our business, provided this is not overridden by your
                  rights and freedoms;
                </li>
                <li>
                  <strong>Consent</strong> - where you have explicitly opted in
                  (for example, certain marketing communications or cookies);
                </li>
                <li>
                  <strong>Legal obligation</strong> - to comply with applicable
                  laws and regulations.
                </li>
              </ul>
              <p>
                Where we rely on consent, you can withdraw it at any time
                without affecting the lawfulness of processing already carried
                out.
              </p>
            </Section>

            <Section id="energy-data" title="6. Energy & Site Data">
              <p>
                Where Wyre installs equipment or integrates with equipment at a
                customer site, we collect operational and energy data needed to
                power the Services (for example, meter readings, generator run
                hours, solar inverter output, alarms and power-quality logs).
              </p>
              <p>
                <strong>Ownership.</strong> The underlying operational data
                generated by your site belongs to you (the customer). Wyre
                processes that data on your behalf, under your instructions and
                under our agreement with you.
              </p>
              <p>
                <strong>Aggregated &amp; anonymised insights.</strong> We may
                create anonymised, aggregated statistics from this data (for
                example, average energy savings across an industry segment)
                that do not identify you or your site. We may use these
                anonymised insights for benchmarking, research, product
                improvement and publication. Aggregated and anonymised data is
                not personal data.
              </p>
            </Section>

            <Section id="sharing" title="7. How We Share Information">
              <p>
                <strong>We do not sell your personal data.</strong> We share
                information only in the limited circumstances below:
              </p>
              <ul>
                <li>
                  <strong>Within your organisation</strong>: with administrators
                  and authorised users from your company who have access to
                  your Wyre dashboard;
                </li>
                <li>
                  <strong>Service providers</strong>: with vetted third parties
                  who help us operate the Services, such as cloud hosting,
                  email delivery, customer support tooling, analytics
                  providers, accounting and professional advisers. These
                  providers are bound by contractual obligations to keep
                  information confidential and to use it only for the purposes
                  we instruct;
                </li>
                <li>
                  <strong>Resellers, installers and partners</strong>:
                  certified Wyre partners involved in deploying or supporting
                  the Services at your site, on a need-to-know basis;
                </li>
                <li>
                  <strong>Legal and regulatory authorities</strong>: where we
                  are required to do so by law, court order, or to respond to a
                  lawful request from public authorities (including for
                  national security or law enforcement);
                </li>
                <li>
                  <strong>Corporate transactions</strong>: in connection with a
                  merger, acquisition, financing, reorganisation or sale of
                  assets. We will notify you of any such change and your data
                  will continue to be protected in line with this Policy;
                </li>
                <li>
                  <strong>With your consent</strong>: for any other purpose
                  disclosed to you at the time we collect the information.
                </li>
              </ul>
            </Section>

            <Section id="retention" title="8. How Long We Keep Your Data">
              <p>
                We keep personal data only for as long as is necessary for the
                purposes set out in this Policy or as required by law:
              </p>
              <ul>
                <li>
                  <strong>Account data</strong>: for as long as your account is
                  active, and a reasonable period afterwards in case it is
                  reactivated or required for record keeping.
                </li>
                <li>
                  <strong>Energy and operational data</strong>: up to{" "}
                  <strong>5 years</strong> of historical data is available on
                  the Wyre platform by default, in line with our Service tiers.
                  Customers can request earlier deletion subject to their
                  obligations and the terms of their contract.
                </li>
                <li>
                  <strong>Billing and tax records</strong>: retained for the
                  minimum period required by Nigerian tax and corporate law
                  (typically six years).
                </li>
                <li>
                  <strong>Marketing data</strong>: until you unsubscribe or ask
                  us to delete it.
                </li>
              </ul>
              <p>
                Where personal data is no longer needed, we will securely delete
                or anonymise it.
              </p>
            </Section>

            <Section id="security" title="9. How We Protect Your Data">
              <p>
                We take the security of your information seriously. We apply
                appropriate technical and organisational measures, including:
              </p>
              <ul>
                <li>Encryption of data in transit using TLS;</li>
                <li>
                  Access controls, authentication, and role-based permissions
                  for our staff and dashboards;
                </li>
                <li>Regular backups and disaster-recovery procedures;</li>
                <li>
                  Logging and monitoring of system access and activity for
                  abuse detection;
                </li>
                <li>
                  Periodic security reviews and updates of our infrastructure
                  and applications.
                </li>
              </ul>
              <p>
                While we work hard to protect your data, no system can be 100%
                secure. If we become aware of a personal data breach that is
                likely to affect your rights, we will notify you and the
                relevant authorities in line with the NDPA.
              </p>
            </Section>

            <Section id="your-rights" title="10. Your Rights">
              <p>
                Subject to the NDPA and other applicable laws, you have the
                following rights in relation to your personal data:
              </p>
              <ul>
                <li>
                  <strong>Right of access</strong> - ask us for a copy of the
                  personal data we hold about you;
                </li>
                <li>
                  <strong>Right to rectification</strong> - ask us to correct
                  inaccurate or incomplete information;
                </li>
                <li>
                  <strong>Right to erasure</strong> - ask us to delete your
                  personal data, subject to legal exceptions;
                </li>
                <li>
                  <strong>Right to restriction of processing</strong> - ask us
                  to limit how we process your data;
                </li>
                <li>
                  <strong>Right to object</strong> - object to processing based
                  on our legitimate interests, including direct marketing;
                </li>
                <li>
                  <strong>Right to data portability</strong> - receive a copy of
                  your data in a structured, commonly used format;
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> - where processing
                  is based on consent;
                </li>
                <li>
                  <strong>Right to lodge a complaint</strong> - with the
                  Nigeria Data Protection Commission (NDPC) or any other
                  applicable supervisory authority.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                details in section 16. We may need to verify your identity
                before responding. We will respond within the timeframes set by
                applicable law.
              </p>
            </Section>

            <Section id="cookies" title="11. Cookies & Similar Technologies">
              <p>
                Our website uses cookies and similar technologies (such as
                local storage and pixels) to make the site work, to remember
                your preferences and to understand how visitors use our
                content. We use:
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary cookies</strong> - required for
                  core site functionality, security and authentication;
                </li>
                <li>
                  <strong>Preference cookies</strong> - remember settings such
                  as the page you came from and form pre-fills;
                </li>
                <li>
                  <strong>Analytics cookies</strong> - help us understand which
                  pages are popular and how the site is performing so we can
                  improve it.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings.
                Disabling some cookies may affect the functionality of the
                site.
              </p>
            </Section>

            <Section id="international" title="12. International Data Transfers">
              <p>
                Wyre primarily operates from Nigeria and serves clients across
                Africa. Some of our service providers (for example, cloud
                hosting and email delivery) may process data outside Nigeria.
                Where we transfer personal data internationally, we ensure
                appropriate safeguards are in place in line with the NDPA, such
                as contractual data-protection commitments with the receiving
                party.
              </p>
            </Section>

            <Section id="children" title="13. Children's Privacy">
              <p>
                Our Services are designed for businesses and are not directed
                to children under the age of 18. We do not knowingly collect
                personal information from children. If we learn that we have
                inadvertently collected information from a child, we will
                promptly delete it.
              </p>
            </Section>

            <Section id="third-party" title="14. Third-Party Links & Services">
              <p>
                Our website and dashboards may contain links to third-party
                websites or integrations (for example, social media platforms
                or partner tools). We are not responsible for the privacy
                practices of these third parties. We encourage you to read
                their privacy policies before sharing personal information
                with them.
              </p>
            </Section>

            <Section id="changes" title="15. Changes to this Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements or
                other operational reasons. When we make material changes, we
                will revise the "Effective date" at the top of this page and,
                where appropriate, notify you by email or through the Services.
                Continued use of the Services after changes take effect
                constitutes your acceptance of the updated Policy.
              </p>
            </Section>

            <Section id="contact" title="16. Contact Us">
              <p>
                If you have any questions, concerns or requests in relation to
                this Privacy Policy or your personal data, please contact us:
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

export default PrivacyPolicy
