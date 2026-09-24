"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const projects = [
  {
    title: "NAIJA CART — Multi-Agent WhatsApp Support Automation",
    description:
      "A multi-agent WhatsApp support automation workflow that receives customer messages, uses AI to process requests, and routes conversations to specialist agents.",
    details: [
      "Built with n8n and WhatsApp API",
      "Multi-agent AI support system",
      "Google Sheets and email integrations",
    ],
    href: "/projects/whatsapp-ai-auto-reply",
  },
  {
    title: "Lead Qualification Automation",
    description:
      "A lead management workflow that captures customer information, evaluates leads based on their budget, and routes qualified leads appropriately.",
    details: [
      "Built with n8n and Google Sheets",
      "Automated lead qualification",
      "Email notifications and lead routing",
    ],
    href: "/projects/lead-qualification",
  },
  {
    title: "Job Application Tracker",
    description:
      "An automated recruitment workflow that collects applications, stores applicant information, and keeps the recruitment process organized.",
    details: [
      "Google Forms and Google Sheets",
      "Automated applicant confirmation emails",
      "HR notifications and experience categorization",
    ],
    href: "/projects/job-application-tracker",
  },
  {
    title: "Order Management Automation",
    description:
      "A simple order management system designed to help businesses capture customer orders, track payment and delivery status, and keep records organized.",
    details: [
      "Customer order data capture",
      "Google Sheets order tracking",
      "Gmail notifications and delivery updates",
    ],
href: "/projects/order-management",  },
  {
  title: "Voice AI Agent",
  description:
    "An AI voice agent designed to interact with users through natural voice conversations and assist with customer communication and automated support.",
  details: [
    "AI-powered voice conversations",
    "Voice input and response automation",
    "Automated customer support",
  ],
  href: "/projects/voice-ai-agent",
  comingSoon: false,
},
  {
    title: "RAG Knowledge Base",
    description:
      "A Retrieval-Augmented Generation workflow that allows an AI agent to retrieve information from documents and use that information when answering questions.",
    details: [
      "Document ingestion and processing",
      "Vector-based knowledge retrieval",
      "Context-aware AI responses",
    ],
    href: "/projects/rag-agent",
  },
  
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-bg-800 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="My Portfolio"
          title="Featured Projects"
          description="A selection of AI and automation projects I've built while developing practical solutions with automation tools, APIs, and AI."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="mb-4 text-foreground/60">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2">
                  {project.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-sm text-foreground/50"
                    >
                      <div className="h-1 w-1 rounded-full bg-gold-500" />
                      {detail}
                    </div>
                  ))}
                </div>

                {project.comingSoon ? (
  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground/40">
    Case Study Coming Soon
  </span>
) : (
  <Link
    href={project.href}
    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
  >
    View Case Study
    <ExternalLink size={16} />
  </Link>
)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}