"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-bg-800">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-bg-800/50 to-bg-900/50 p-12 backdrop-blur-sm">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Ready to Stop Doing Everything
              <span className="text-gold-500"> Manually</span>?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-foreground/60 md:text-xl">
              Let's build an automation system that gives you back your time and transforms your business operations.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-4 font-medium text-bg-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(212,175,55,0.4)] active:bg-gold-600"
            >
              Let's Talk
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
