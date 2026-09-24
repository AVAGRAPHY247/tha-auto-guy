
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bg-600/70 bg-bg-900/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo + Brand Name */}
        <Link
          href="#home"
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <Image
              src="/projects/Images/tha-auto-guy-logo.png"
              alt="Tha Auto Guy logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>

          <span>
            Tha <span className="text-gold-500">Auto</span> Guy
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-gold-400"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-sm font-medium text-bg-900 shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-bg-700 hover:text-gold-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-bg-600/70 bg-bg-800 lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-bg-700 hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-sm font-medium text-bg-900 shadow-[0_0_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

