'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "What is Wyre and who is it for?",
      answer: (
        <>
          Wyre is an intelligent energy management and solar platform designed for businesses, facilities, and utility providers across Africa. We’re not just an EMS company—Wyre empowers users to monitor energy usage, manage billing, track carbon emissions, and leverage AI-driven tools for both general energy and advanced solar solutions.
          <br />
          <br />
          <span className="font-semibold">Beyond core energy management, Wyre delivers robust solar features:</span>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-left">
            <li>
              <b>Custom Solar System Design:</b> Tailored, site-specific solar solutions for commercial and industrial facilities, homes, and large properties.
            </li>
            <li>
              <b>Installation &amp; Commissioning:</b> End-to-end solar project delivery by certified experts, ensuring seamless integration and reliable performance.
            </li>
            <li>
              <b>Monitoring &amp; Solar Maintenance:</b> Real-time monitoring of solar production, energy storage, and equipment health, with proactive maintenance alerts.
            </li>
            <li>
              <b>Performance Optimization:</b> Advanced analytics and reporting to maximize your solar energy yield and operational savings.
            </li>
            <li>
              <b>Energy Storage Solutions:</b> Intelligent battery management to optimize backup and peak demand, driving cost-effective, stable power delivery.
            </li>
            <li>
              <b>Hybrid &amp; Off-Grid Solutions:</b> Flexible systems for any environment—whether you require grid-tied, hybrid, or fully off-grid installations.
            </li>
          </ul>
          <br />
          With Wyre, you get a complete view of your facilities’ energy and solar performance—enabling smarter decisions and greater sustainability, no matter your company’s sector or scale.
        </>
      ),
    },
    {
      id: "item-2",
      question: "How many sites can I monitor with Wyre?",
      answer:
        "Wyre supports scalable energy monitoring for up to 100,000 sites. Whether you're managing a few buildings or an entire portfolio, Wyre offers centralized control and detailed site-level insights.",
    },
    {
      id: "item-3",
      question: "How does the solar feasibility tool work?",
      answer:
        "Wyre’s AI simulation analyzes your energy usage, location, and site characteristics to determine solar potential. It recommends the optimal system size, deployment strategy, and payback timeline.",
    },
    {
      id: "item-4",
      question: "Does Wyre offer financing for solar installations?",
      answer:
        "Yes. Eligible users can access customized solar retrofit packages with payment plans spread over 3 to 5 years, making the transition to solar both practical and affordable.",
    },
    {
      id: "item-5",
      question: "Can I get alerts for energy faults or unusual usage?",
      answer:
        "Yes. Wyre allows you to set up real-time alerts and alarms for energy deviations, equipment faults, or threshold breaches—so you can take immediate action when needed.",
    },
    {
      id: "item-6",
      question: "What types of reports can I generate with Wyre?",
      answer:
        "Wyre supports on-demand and scheduled reports for energy usage, performance trends, carbon emissions, billing, and budget tracking—customized by site, region, or user role.",
    },
    {
      id: "item-7",
      question: "Can different teams or departments access Wyre separately?",
      answer:
        "Yes. Wyre includes role-based access control, allowing you to assign permissions and views based on organizational levels, departments, or user roles.",
    },
    {
      id: "item-8",
      question: "Is Wyre suitable for both large enterprises and SMEs?",
      answer:
        "Absolutely. Wyre is built to scale. Whether you manage a single facility or a multinational operation, the platform adapts to your size and goals.",
    },
    {
      id: "item-9",
      question: "Does Wyre work in areas with limited internet access?",
      answer:
        "Wyre is optimized for performance even in low-bandwidth environments, and certain features support offline data collection with periodic syncing when connectivity is restored.",
    },
    {
      id: "item-10",
      question: "How do I get started with Wyre?",
      answer:
        "You can request a demo or contact our team to discuss your needs. We’ll walk you through onboarding, data integration, and help you configure the platform for your specific use case.",
    },
  ];


  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-muted-foreground mt-4 text-balance">Discover quick answers to common questions about our platform, services, and features.</p>
        </div>

        <div className="mx-auto mt-12 container">
          <Accordion
            type="single"
            collapsible
            className="bg-[#F6F9FC] w-full rounded-2xl p-1">
            {faqItems.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index + 50}
                className="group"
                key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed border-border group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>
          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{' '}
            <a
              href="#"
              className="text-primary font-medium hover:underline">
              customer support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}