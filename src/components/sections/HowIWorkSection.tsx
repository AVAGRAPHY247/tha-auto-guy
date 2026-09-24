"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "1",
    title: "Understand",
    description:
      "I take time to understand your business challenges, existing workflows, and automation goals.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "I create detailed automation designs and architecture that align with your objectives and technical requirements.",
  },
  {
    number: "3",
    title: "Automate",
    description:
      "I build and implement the automation systems, ensuring they're reliable, scalable, and maintainable.",
  },
  {
    number: "4",
    title: "Improve",
    description:
      "I continuously monitor, optimize, and enhance the automation to deliver better results over time.",
  },
];

export default function HowIWorkSection() {
  return (
    <section className="py-24 bg-bg-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="My Process"
          title="How I Work"
          description="My proven 4-step process ensures successful automation implementation from start to finish."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="group relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-500/30 bg-bg-800 text-2xl font-bold text-gold-400 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                {step.number}
                <div className="absolute -inset-1 rounded-full bg-gold-500/20 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
