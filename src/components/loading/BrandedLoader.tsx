"use client";


interface BrandedLoaderProps {
  progress?: number;
}

export default function BrandedLoader({
  progress = 0,
}: BrandedLoaderProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070707] text-foreground">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      {/* Loader rings */}
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
        {/* Outer ring */}
        <div className="absolute inset-0 animate-[spin_2.4s_linear_infinite] rounded-full border border-gold-500/20 border-t-gold-400 border-r-gold-300/80" />

        {/* Middle ring */}
        <div className="absolute inset-5 animate-[spin_1.8s_linear_infinite_reverse] rounded-full border border-gold-400/20 border-b-gold-400 border-l-gold-300" />

        {/* Inner ring */}
        <div className="absolute inset-10 animate-[spin_1.4s_linear_infinite] rounded-full border border-gold-500/20 border-t-gold-300" />

        {/* Logo glow */}
        <div className="absolute h-28 w-28 rounded-full bg-gold-400/10 blur-2xl" />

        {/* Existing Tha Auto Guy logo */}
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-gold-400/30 bg-[#0b0b0b] shadow-[0_0_45px_rgba(212,175,55,0.18)] sm:h-28 sm:w-28">
          <img
  src="/projects/Images/tha-auto-guy-logo.png"
  alt="Tha Auto Guy"
  width={76}
  height={76}
  className="object-contain"
/>
        </div>
      </div>

      {/* Brand name */}
      <div className="mt-10 text-center">
        <h1 className="text-sm font-semibold uppercase tracking-[0.45em] text-foreground sm:text-base">
          THA AUTO GUY
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.28em] text-foreground/40">
          Initializing automation systems...
        </p>
      </div>

      {/* Progress area */}
      <div className="mt-8 w-[78vw] max-w-2xl">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          <span>Loading</span>
          <span>{Math.round(clampedProgress)}%</span>
        </div>

        <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 transition-[width] duration-300 ease-out"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}