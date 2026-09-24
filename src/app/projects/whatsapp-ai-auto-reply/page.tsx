import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Workflow,
  Users,
  Mail,
} from "lucide-react";

export default function WhatsAppAutoReplyPage() {
  return (
    <main className="min-h-screen bg-bg-900 text-foreground">
      {/* Header */}
      <section className="border-b border-gold-500/10 bg-bg-900">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-gold-400"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="mb-5 inline-flex rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-400">
            AI Automation Project
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            NAIJA CART — Multi-Agent WhatsApp Support Automation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/60 md:text-xl">
            NAIJA CART is an n8n automation workflow that receives incoming
            messages via a webhook, prepares message data with an Edit Fields
            step, and uses a main AI Agent connected to an OpenAI Chat Model and
            Simple Memory. The agent connects to specialist agents for Order,
            Sales, Support, and HR Team tasks. The workflow also uses Google
            Sheets for data retrieval and an email notification path for human
            escalation. An HTTP Request sends the final output to the UltraMsg
            API.
          </p>
        </div>
      </section>

      {/* Project Overview + Tools Used */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold">Project Overview</h2>

              <p className="mb-5 leading-relaxed text-foreground/60">
                This case study shows a practical WhatsApp support automation
                pattern: receive a message, structure the input, generate an AI
                response using an agent system, and send the output back through
                an API integration—while keeping an email-based path for human
                notification/escalation when needed.
              </p>

              <p className="leading-relaxed text-foreground/60">
                The workflow is built in n8n and uses a main AI Agent connected
                to an OpenAI Chat Model and Simple Memory. The main agent is
                connected to specialist agents (Order, Sales, Support, HR Team),
                with Google Sheets lookups and a Gmail/email notification node
                visible in the workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-6">
              <h3 className="mb-5 text-lg font-semibold text-gold-400">
                Tools Used / Integrations
              </h3>

              <div className="space-y-3">
                {[
                  "n8n",
                  "OpenAI (Chat Model)",
                  "AI Agent + Simple Memory",
                  "UltraMsg API (via HTTP Request)",
                  "Google Sheets (Get row(s))",
                  "Gmail / Email (send_email)",
                  "Webhooks",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-foreground/70"
                  >
                    <CheckCircle2 size={18} className="text-gold-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-bg-800 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <MessageCircle className="text-gold-500" size={28} />
            <h2 className="text-3xl font-bold">The Problem</h2>
          </div>

          <p className="max-w-3xl leading-relaxed text-foreground/60">
            WhatsApp customer conversations often include repeated requests—order
            questions, sales inquiries, and support issues. Manually handling
            every message can make it harder to stay consistent and to route
            conversations to the right internal function, especially when some
            responses require looking up information stored elsewhere (like a
            spreadsheet).
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <Workflow className="text-gold-500" size={28} />
            <h2 className="text-3xl font-bold">The Solution</h2>
          </div>

          <p className="mb-10 max-w-3xl leading-relaxed text-foreground/60">
            I built NAIJA CART as a multi-agent workflow in n8n. It starts with
            a webhook and an Edit Fields step, then uses a main AI Agent (with an
            OpenAI Chat Model and Simple Memory connected) to coordinate responses.
            The main agent is connected to specialist agents and tools, and the
            final output is sent via an HTTP Request to the UltraMsg API.
          </p>
        </div>
      </section>

      {/* Workflow Architecture */}
      <section className="bg-bg-800 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold">Workflow Architecture</h2>

          <p className="mb-10 max-w-3xl leading-relaxed text-foreground/60">
            Verified high-level flow (as shown in the workflow screenshot):
          </p>

          <div className="rounded-2xl border border-gold-500/20 bg-bg-900 p-8">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-gold-400">
              High-Level Flow
            </p>

            <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row">
              <div className="rounded-xl border border-gold-500/20 bg-bg-800 px-6 py-4">
                Webhook
              </div>

              <div className="text-gold-500">↓</div>

              <div className="rounded-xl border border-gold-500/20 bg-bg-800 px-6 py-4">
                Edit Fields
              </div>

              <div className="text-gold-500">↓</div>

              <div className="rounded-xl border border-gold-500/20 bg-bg-800 px-6 py-4">
                Main AI Agent
              </div>

              <div className="text-gold-500">↓</div>

              <div className="rounded-xl border border-gold-500/20 bg-bg-800 px-6 py-4">
                HTTP Request → UltraMsg API
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gold-500/20 bg-bg-900 p-8">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-gold-400">
              Connected to the Main AI Agent
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "OpenAI Chat Model",
                "Simple Memory",
                "ORDER AGENT",
                "SALES AGENT",
                "SUPPORT AGENT",
                "HR TEAM",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gold-500/20 bg-bg-800 px-5 py-4 text-foreground/70"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-3xl leading-relaxed text-foreground/60">
              The screenshot shows these components connected to the main agent.
              This page does not assume the exact routing rules or conditions
              used to select between specialist agents.
            </p>
          </div>
        </div>
      </section>

      {/* Specialist Agents */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <Users className="text-gold-500" size={28} />
            <h2 className="text-3xl font-bold">Specialist Agents</h2>
          </div>

          <p className="mb-10 max-w-3xl leading-relaxed text-foreground/60">
            The workflow screenshot shows four specialist agents connected to
            the main AI Agent. Based on what is visible, these agents support
            modular handling of different request areas and tool access.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-6">
              <h3 className="text-lg font-semibold text-gold-400">
                ORDER AGENT
              </h3>
              <p className="mt-3 text-foreground/60">
                Visible specialist agent connected to a Google Sheets{" "}
                <span className="text-foreground/70">“Get row(s)”</span> node,
                supporting spreadsheet-based lookups for order-related context.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-6">
              <h3 className="text-lg font-semibold text-gold-400">
                SALES AGENT
              </h3>
              <p className="mt-3 text-foreground/60">
                Visible specialist agent connected to the main AI Agent. The
                screenshot does not clearly show a specific external tool node
                attached to Sales, so no additional tool claim is made here.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-6">
              <h3 className="text-lg font-semibold text-gold-400">
                SUPPORT AGENT
              </h3>
              <p className="mt-3 text-foreground/60">
                Visible specialist agent connected to a Google Sheets{" "}
                <span className="text-foreground/70">“Get row(s)”</span> node,
                supporting spreadsheet-based lookups for support information.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-6">
              <h3 className="text-lg font-semibold text-gold-400">
                HR TEAM
              </h3>
              <p className="mt-3 text-foreground/60">
                Visible specialist agent connected to Google Sheets and a{" "}
                <span className="text-foreground/70">send_email</span>{" "}
                Gmail/email node, supporting an email-based
                notification/escalation path to a human representative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
<section className="bg-bg-800 py-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <h2 className="mb-4 text-3xl font-bold">NAIJA CART — Workflow & Results</h2>

    <p className="mb-12 max-w-4xl text-foreground/60">
      A closer look at the workflow architecture, AI Agent configuration,
      WhatsApp response, and UltraMsg API integration used in the NAIJA CART
      automation.
    </p>

    {/* Workflow Screenshot */}
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">
        n8n Workflow Architecture
      </h3>

      <p className="mb-6 text-foreground/60">
        The complete n8n workflow showing the Webhook, Edit Fields, Main AI
        Agent, specialist agents, Google Sheets tools, email notification path,
        and HTTP Request to UltraMsg.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/naija-cart-n8n-workflow.png"
          alt="NAIJA CART n8n workflow"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
        />
      </div>
    </div>

    {/* AI Agent Screenshot */}
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">
        AI Agent Configuration
      </h3>

      <p className="mb-6 text-foreground/60">
        The AI Agent receives the customer message from the structured input
        using the expression{" "}
        <span className="text-foreground/80">
          {"{{ $json['Message'] }}"}
        </span>{" "}
        and generates the response shown in the execution output.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/ai-agent-node.png"
          alt="NAIJA CART AI Agent node configuration in n8n"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>
    </div>

    {/* WhatsApp Chat Result */}
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">
        Example WhatsApp Reply
      </h3>

      <p className="mb-6 text-foreground/60">
        An example customer-facing WhatsApp response generated during an
        escalation request. The response acknowledges the request and asks for
        follow-up information.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/whatsapp-chat-result.jpeg"
          alt="Example NAIJA CART WhatsApp escalation response"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>
    </div>

    {/* UltraMsg Screenshot */}
    <div>
      <h3 className="mb-3 text-2xl font-semibold">
        UltraMsg API Integration
      </h3>

      <p className="mb-6 text-foreground/60">
        UltraMsg is used as the WhatsApp API integration. The instance shown
        here is authenticated and configured for API communication, with
        sensitive credentials redacted.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/ultramsg-settings.png"
          alt="UltraMsg authenticated instance settings"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>
    </div>
  </div>
</section>

      {/* Human Escalation */}
<section className="py-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="mb-6 flex items-center gap-3">
      <Mail className="text-gold-500" size={28} />
      <h2 className="text-3xl font-bold">
        Human Escalation (HR Team → Email Notification)
      </h2>
    </div>

    <p className="mb-12 max-w-3xl leading-relaxed text-foreground/60">
      NAIJA CART includes an email-based human escalation path for requests
      that require human support. The HR TEAM agent prepares the escalation
      details, followed by an email notification containing the relevant
      conversation context.
    </p>

    {/* HR Team Agent */}
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">
        HR TEAM Agent
      </h3>

      <p className="mb-6 max-w-3xl leading-relaxed text-foreground/60">
        The HR TEAM agent receives escalation-related information and prepares
        the content needed for a human support notification. In this example,
        the input includes the customer's escalation request, urgency, issue
        category, and missing order/contact details.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/hr-team-agent.png"
          alt="NAIJA CART HR Team agent handling a human escalation request"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>

      <p className="mt-4 text-sm text-foreground/50">
        HR TEAM Agent Node (n8n): Escalation Summary and Email Draft Trigger
      </p>
    </div>

    {/* Gmail Notification */}
    <div>
      <h3 className="mb-3 text-2xl font-semibold">
        Gmail Escalation Notification
      </h3>

      <p className="mb-6 max-w-3xl leading-relaxed text-foreground/60">
        The resulting email notification contains the escalation context,
        including urgency, issue category, the original customer message, and
        a summary of the request for human support.
      </p>

      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-500/20 bg-bg-900">
        <Image
          src="/projects/whatsapp-ai-auto-reply/gmail-escalation.png"
          alt="NAIJA CART Gmail human escalation notification"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
        />
      </div>

      <p className="mt-4 text-sm text-foreground/50">
        Gmail Escalation Notification (Example Email Received)
      </p>
    </div>
  </div>
</section>

      {/* What I Learned */}
      <section className="bg-bg-800 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold">What I Learned</h2>

          <div className="max-w-4xl space-y-3 text-foreground/60">
            {[
              "n8n workflow design and node-based automation",
              "AI Agent architecture using an OpenAI Chat Model and Simple Memory",
              "Multi-agent systems (main agent connected to specialist agents)",
              "Google Sheets tool integration (Get row(s) lookups)",
              "HTTP APIs and webhook-driven automation",
              "Email escalation/notification paths via Gmail/email nodes",
              "Connecting multiple services into one cohesive automation workflow",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-2 h-1 w-1 rounded-full bg-gold-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold-500/10 bg-bg-800 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Want to automate a WhatsApp support workflow?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Let’s discuss how AI agents and automation can help structure
            customer conversations, look up information, and route requests to
            the right place.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold-500 px-8 py-3 font-medium text-bg-900 transition-all duration-300 hover:bg-gold-400"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}