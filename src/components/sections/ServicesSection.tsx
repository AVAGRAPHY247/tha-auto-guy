"use client";

import {
  Bot,
  MessageSquare,
  MessageCircle,
  GitBranch,
  Layout,
  Share2,
  Mic,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Building intelligent automation systems that learn from data and adapt to changing business needs.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Agents",
    description:
      "Creating conversational AI that handles customer inquiries, provides support, and engages users naturally.",
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "Building AI-powered voice agents that can answer questions, capture details, qualify leads, and route conversations to a human when needed.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Automating WhatsApp communications for marketing, support, and customer engagement.",
  },
  {
    icon: GitBranch,
    title: "Business Workflow Automation",
    description:
      "Mapping and automating complex business processes for maximum efficiency and consistency.",
  },
  {
    icon: Layout,
    title: "CRM & Lead Automation",
    description:
      "Automating lead capture, qualification, and nurturing processes to boost conversion rates.",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description:
      "Scheduling and automating social media posts, responses, and engagement across platforms.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-bg-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What I Offer"
          title="Automation Services"
          description="Comprehensive automation solutions tailored to your business needs, from simple script automation to complex AI-powered systems."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}