"use client";

import React from "react";
import Link from "next/link";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-bg-900 via-bg-800 to-bg-900"
    >
      {/* Shader background */}
      <ShaderBackground className="absolute inset-0 h-full w-full" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-bg-900/70" />

      {/* Existing background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.06),transparent_50%)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-32 sm:px-6 lg:px-8 lg:pt-24 lg:pb-40">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 inline-block animate-[fadeIn_1.2s_ease-out_forwards] rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-400">
            Tha Auto Guy - AI Automation Specialist
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl animate-[slideUp_1.2s_ease-out_forwards]">
            <span className="block">Turning Repetitive Work</span>
            <span className="block text-gold-500">
              Into Automated Systems.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg animate-[fadeIn_1.6s_ease-out_forwards] lg:text-xl">
            I help businesses save time, reduce manual work, and improve
            customer experiences using AI and automation.
          </p>

          <div className="mb-16 flex w-full flex-col justify-center gap-4 sm:flex-row lg:mb-0 animate-[fadeIn_2.0s_ease-out_forwards] lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-10 py-4 text-lg font-medium text-bg-900 shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]"
            >
              Work With Me
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-500/40 px-10 py-4 text-lg font-medium text-gold-400 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/10"
            >
              View My Projects
            </Link>
          </div>
        </div>

       {/* Hero image */}
<div className="relative mt-20 hidden w-full max-w-2xl lg:ml-auto lg:mt-0 lg:block">
  <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-bg-800/50 backdrop-blur-sm">
    <img
     src="/projects/Images/human-ai-automation-black-gold.png"
      alt="Human and AI automation"
      className="h-auto w-full object-contain"
    />
  </div>

  <div className="absolute -bottom-4 -right-4 rounded-2xl border border-gold-500/30 bg-bg-800/80 p-4 backdrop-blur-sm">
    <div className="text-sm font-medium text-gold-500">
      24/7 Operation
    </div>
    <div className="text-xs text-foreground/60">
      Always Running
    </div>
  </div>
</div>
      </div>
    </section>
  );
}