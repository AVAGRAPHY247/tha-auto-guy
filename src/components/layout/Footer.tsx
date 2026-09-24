import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "X", href: "#", icon: Twitter },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Email", href: "mailto:hello@thaautoguy.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-bg-600/70 bg-bg-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link href="#home" className="text-xl font-bold tracking-tight text-foreground">
              Tha <span className="text-gold-500">Auto</span> Guy
            </Link>
            <p className="mt-2 text-sm text-foreground/60">
              AI Automation • AI Agents • Business Systems
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-bg-600 text-foreground/60 transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-bg-600/50 pt-8 text-center text-sm text-foreground/40">
          <p>&copy; {new Date().getFullYear()} Tha Auto Guy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
