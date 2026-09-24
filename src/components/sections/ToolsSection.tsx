"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";

const tools = [
  "n8n",
  "Make",
  "Zapier",
  "OpenAI",
  "Claude",
  "Google Sheets",
  "APIs",
  "Webhooks",
  "Python",
  "JavaScript",
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-900 to-bg-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tools & Technologies"
          title="I Work With"
          description="I continuously expand my automation toolkit. Here's what I'm currently using and learning."
          align="center"
        />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((tool) => (
            <div
              key={tool}
              className="group flex flex-col items-center rounded-2xl border border-bg-600 bg-bg-800 p-6 transition-all duration-300 hover:border-gold-500/30 hover:bg-bg-700 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-bg-700 group-hover:bg-gold-500/10">
                <span className="text-lg font-semibold text-foreground group-hover:text-gold-400">
                  {tool.split("")[0]}
                </span>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm font-medium text-foreground/80 group-hover:text-gold-300">
                  {tool}
                </div>
                <div className="mt-1 text-xs text-foreground/40">
                  Working with it
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
