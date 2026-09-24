import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Workflow,
  MessageCircle,
  Mail,
} from "lucide-react";

const screenshots = [
  {
    src: "/projects/order - mangement/01-whatsapp-order-request.png",
    title: "WhatsApp Order Request",
    description:
      "The customer begins the ordering process through a WhatsApp order request.",
  },
  {
    src: "/projects/order - mangement/02-order-form-contact-details.png",
    title: "Order Form — Contact Details",
    description:
      "Customer contact information is captured through the connected order form.",
  },
  {
    src: "/projects/order - mangement/03-order-form-room-type-items.png",
    title: "Order Form — Room Type & Items",
    description:
      "The form captures the room type and requested items needed to process the order.",
  },
  {
    src: "/projects/order - mangement/04-order-form-quantity-payment-total.png",
    title: "Order Form — Quantity, Payment & Total",
    description:
      "Quantity, payment information, and the order total are collected as part of the submission.",
  },
  {
    src: "/projects/order - mangement/05-form-responses-sheet.png",
    title: "Form Responses Sheet",
    description:
      "Submitted order information is automatically recorded in the Google Sheets response sheet.",
  },
  {
    src: "/projects/order - mangement/06-workflow-overview.png",
    title: "n8n Workflow Overview",
    description:
      "The complete automation workflow connects order intake, validation, processing, notifications, and storage.",
  },
  {
    src: "/projects/order - mangement/07-validation-if-node.png",
    title: "Order Validation — IF Node",
    description:
      "The IF node validates the incoming order information before the workflow continues.",
  },
  {
    src: "/projects/order - mangement/08-total-amount-number-node.png",
    title: "Total Amount — Number Node",
    description:
      "The workflow converts and prepares the total order amount for the following automation logic.",
  },
  {
    src: "/projects/order - mangement/09-amount-filter-priority-50000.png",
    title: "Amount Filter — Priority ₦50,000",
    description:
      "Orders are evaluated against the ₦50,000 threshold to determine the appropriate processing path.",
  },
  {
    src: "/projects/order - mangement/10-email-kitchen-high-priority.png",
    title: "Kitchen Email — High Priority",
    description:
      "High-priority orders trigger an automated email notification for the kitchen team.",
  },
  {
    src: "/projects/order - mangement/11-whatsapp-order-confirmation.png",
    title: "WhatsApp Order Confirmation",
    description:
      "The customer receives an automated WhatsApp confirmation after the order is processed.",
  },
  {
    src: "/projects/order - mangement/12-append-row-mapping-top.png",
    title: "Append Row Mapping — Part 1",
    description:
      "Order information is mapped into the operational Google Sheet.",
  },
  {
    src: "/projects/order - mangement/13-append-row-mapping-bottom.png",
    title: "Append Row Mapping — Part 2",
    description:
      "Additional order fields are mapped to complete the operational record.",
  },
  {
    src: "/projects/order - mangement/14-orders-operational-sheet.png",
    title: "Orders Operational Sheet",
    description:
      "The completed order record is stored in the operational sheet for tracking and management.",
  },
];

export default function OrderManagementPage() {
  return (
    <main className="min-h-screen bg-bg-900 text-foreground">
      {/* Header */}
      <section className="border-b border-gold-500/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gold-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 text-sm text-gold-400">
            <Workflow className="h-4 w-4" />
            AI Automation Project
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Order Management Automation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            An automated order management system designed to capture customer
            orders, validate submissions, process order information, route
            high-priority orders, send notifications, and maintain organized
            operational records.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8">
            <div className="mb-5 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-semibold">Project Overview</h2>
            </div>

            <p className="leading-7 text-gray-400">
              This automation creates a structured process for receiving and
              managing customer orders. Order details are collected, validated,
              evaluated based on total value, and automatically routed to the
              appropriate notification and tracking steps.
            </p>
          </div>

          <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8">
            <h2 className="mb-5 text-2xl font-semibold">Tools Used</h2>

            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
                n8n
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
                Google Forms
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
                Google Sheets
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
                Gmail
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-500" />
                WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-semibold">The Problem</h2>

          <p className="leading-8 text-gray-400">
            Manually receiving customer orders, checking order information,
            determining priority, notifying the kitchen, confirming orders,
            and updating operational records can create unnecessary delays and
            increase the chance of missed information.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-semibold">The Solution</h2>

          <p className="leading-8 text-gray-400">
            I built an n8n workflow that connects order intake with automated
            validation, amount-based routing, notifications, customer
            confirmation, and Google Sheets record keeping.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Customer order data capture",
              "Order information validation",
              "Total amount processing",
              "₦50,000 priority filtering",
              "Automated kitchen notifications",
              "WhatsApp order confirmation",
              "Operational Google Sheets tracking",
              "Automated order record creation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gold-500/10 bg-bg-900 p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Architecture */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <Workflow className="h-6 w-6 text-gold-500" />
            <h2 className="text-3xl font-semibold">Workflow Architecture</h2>
          </div>

          <p className="leading-8 text-gray-400">
            The workflow connects the customer-facing order process with
            validation, business logic, notifications, and operational
            storage.
          </p>
        </div>

        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8">
          <div className="grid gap-4 md:grid-cols-5">
            {[
              "Order Intake",
              "Validation",
              "Amount Processing",
              "Priority Routing",
              "Notifications & Storage",
            ].map((step, index) => (
              <div
                key={step}
                className="relative rounded-xl border border-gold-500/10 bg-bg-900 p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-bg-900">
                  {index + 1}
                </div>

                <p className="text-sm font-medium text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-semibold">Order Processing</h2>

          <div className="space-y-5 text-gray-400">
            <p>
              The customer order begins with the order request and connected
              form. Customer details, room information, requested items,
              quantities, payment information, and total amount are captured.
            </p>

            <p>
              The submitted information is then passed through the n8n
              workflow, where validation and amount-processing logic prepares
              the order for the next stage.
            </p>

            <p>
              Orders are evaluated using a ₦50,000 threshold. This allows the
              workflow to identify high-priority orders and trigger the
              appropriate notification path.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gold-500">
            Evidence
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Screenshots & Workflow Evidence
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            These screenshots document the order intake process, n8n workflow
            configuration, routing logic, notifications, data mapping, and
            final operational record.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <article
              key={screenshot.src}
              className="overflow-hidden rounded-2xl border border-gold-500/10 bg-bg-800"
            >
              <div className="relative aspect-[16/9] w-full bg-bg-900">
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {screenshot.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {screenshot.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Automated Notifications */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8">
            <div className="mb-5 flex items-center gap-3">
              <Mail className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-semibold">
                Automated Notifications
              </h2>
            </div>

            <p className="leading-7 text-gray-400">
              High-priority orders can automatically trigger an email
              notification to the kitchen team, helping the team identify
              orders that require attention.
            </p>
          </div>

          <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8">
            <div className="mb-5 flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-semibold">
                Customer Confirmation
              </h2>
            </div>

            <p className="leading-7 text-gray-400">
              After processing, the customer receives an automated WhatsApp
              confirmation so the order status can be communicated without
              requiring manual follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Tracking */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-semibold">
            Operational Order Tracking
          </h2>

          <p className="leading-8 text-gray-400">
            The workflow maps the processed order data into an operational
            Google Sheet. This creates a structured record that can be used to
            track and manage incoming orders after the automation has completed
            its processing steps.
          </p>
        </div>
      </section>

      {/* What I Learned */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-gold-500/10 bg-bg-800 p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-semibold">What I Learned</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Building structured order intake workflows",
              "Using conditional logic for business rules",
              "Processing and routing order amounts",
              "Connecting multiple services through n8n",
              "Automating customer and internal notifications",
              "Mapping workflow data into operational records",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gold-500/10 bg-bg-900 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-gold-500/20 bg-bg-800 p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need an Automation Like This?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            I build practical automation systems that reduce repetitive work,
            connect business tools, and help teams manage their operations
            more efficiently.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold-500 px-8 py-3 font-medium text-bg-900 transition-all duration-300 hover:bg-gold-400"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}