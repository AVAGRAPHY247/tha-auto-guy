"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-bg-800">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-900 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-none lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-6">
              Who Is <span className="text-gold-500">Tha Auto Guy</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-foreground/70 md:text-lg">
              <p>
                I'm Tha Auto Guy — an AI Automation Specialist dedicated to helping businesses eliminate repetitive work and create smarter, more efficient operations.
              </p>
              <p>
                I focus on practical AI solutions that actually solve real problems. From automating customer service responses to streamlining business workflows, I build systems that save time and reduce manual effort.
              </p>
              <p>
                My approach combines technical expertise with an understanding of business needs. I believe automation should enhance human work, not replace it. The goal is always to create tools that make teams more productive and customers happier.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative rounded-2xl border border-gold-500/20 bg-bg-700/50 p-8 backdrop-blur-sm lg:-translate-x-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">My Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">AI Automation Systems</h4>
                    <p className="text-sm text-foreground/60">Building smart systems that learn and adapt.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Workflow Automation</h4>
                    <p className="text-sm text-foreground/60">Streamlining operations for maximum efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">AI Chatbots & Agents</h4>
                    <p className="text-sm text-foreground/60">Creating conversational interfaces that help users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
