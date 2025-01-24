"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQ() {
  const faqs = {
    Membership: [
      {
        question: "Can I upgrade or downgrade my membership tier later?",
        answer:
          "Yes, you can adjust your membership tier at any time. Contact support to manage your subscription changes.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, if you follow Ithaca's strategies for a year and fail to achieve gains, you may be eligible for a full refund. Check the terms and conditions for details.",
      },
    ],
    "How It Works": [
      {
        question: "What happens if I miss a group call?",
        answer: "All group calls are recorded and shared with members, so you can review them at your convenience.",
      },
      {
        question: "Can I ask for custom trading advice?",
        answer:
          "Yes, personalized advice is available to Master Tier members, who can schedule one-on-one strategy calls for tailored guidance.",
      },
      {
        question: 'How long will the "beta mode" pricing be available?',
        answer:
          "The current pricing is introductory and subject to change. Early subscribers can lock in their rates before adjustments.",
      },
    ],
    General: [
      {
        question: "Can I suggest new features or tools for Ithaca?",
        answer:
          "Member feedback is highly valued, and suggestions for features or improvements are welcome via our support channels.",
      },
      {
        question: "Are there any long-term benefits to joining Ithaca early?",
        answer:
          "Early adopters lock in the beta pricing, gain access to exclusive opportunities, and help shape the future of the platform as it grows.",
      },
    ],
  }

  return (
    <section className="mb-24">
      <h2 className="text-2xl md:text-3xl font-mono mb-8 text-center flex items-center justify-center gap-2">
        <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
        <span>FAQs</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {Object.entries(faqs).map(([category, questions], categoryIndex) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg md:text-xl font-mono mb-4">{category}</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {questions.map((faq, index) => (
                <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border border-white/10 px-4">
                  <AccordionTrigger className="font-mono text-sm md:text-base hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 font-mono text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}

