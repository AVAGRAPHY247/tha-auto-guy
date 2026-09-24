"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    automation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://thaautoguy1.app.n8n.cloud/webhook/6d2f034b-2320-4492-9c10-8f1a15b1f636",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setFormData({
      name: "",
      email: "",
      company: "",
      automation: "",
    });

    alert("Thank you for your interest! I'll be in touch soon.");
  } catch (error) {
    console.error("Contact form error:", error);
    alert("Something went wrong. Please try again.");
  }
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Get In <span className="text-gold-500">Touch</span>
            </h2>
            <p className="text-lg text-foreground/60">
              Ready to start automating? Send me a message and let's discuss how I can help.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-gold-500/20 bg-bg-800/50 p-8 backdrop-blur-sm md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-bg-600 bg-bg-700 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-bg-600 bg-bg-700 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-foreground/80"
              >
                Business / Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-bg-600 bg-bg-700 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                placeholder="Your Company Name"
              />
            </div>

            <div>
              <label
                htmlFor="automation"
                className="mb-2 block text-sm font-medium text-foreground/80"
              >
                What do you want to automate?
              </label>
              <textarea
                id="automation"
                name="automation"
                rows={4}
                value={formData.automation}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-bg-600 bg-bg-700 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                placeholder="Describe the automation challenges you want to solve..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gold-500 py-4 px-6 font-medium text-bg-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_24px_rgba(212,175,55,0.25)] active:bg-gold-600 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>

            <p className="text-center text-sm text-foreground/40">
              I'll get back to you as soon as possible.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
