export default function LeadQualificationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-yellow-400">
          Automation Case Study
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Lead Qualification Automation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          An automated lead qualification system built with n8n, Google Sheets,
          and Gmail that evaluates incoming leads based on their budget, sends
          the appropriate response, and records the qualification result.
        </p>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">The Problem</h2>

            <p className="mt-4 leading-7 text-gray-300">
              Manually reviewing incoming leads, checking their budgets,
              deciding how to respond, and recording their information can
              become repetitive and time-consuming.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">The Solution</h2>

            <p className="mt-4 leading-7 text-gray-300">
              I built an n8n automation that automatically evaluates each new
              lead, determines its qualification status, sends the appropriate
              email response, and records the result in a separate Google
              Sheet.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold">How It Works</h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-300">
          When a new lead is added to Google Sheets, the workflow checks the
          customer's budget and automatically sends the lead down the
          appropriate path.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold">
            Google Sheets → Budget Check → Qualified/Potential → Gmail → Lead
            Database
          </p>
        </div>
      </section>

      {/* Screenshot 1 */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Complete Automation Workflow
        </h2>

        <p className="mt-3 text-gray-400">
          The complete n8n workflow connecting the lead trigger, qualification
          logic, email responses, and lead database.
        </p>

        <img
          src="/projects/lead-qualification/workflow.png"
          alt="Complete Lead Qualification Automation workflow in n8n"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Qualification Logic */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Qualification Logic
        </h2>

        <p className="mt-3 text-gray-400">
          The IF node evaluates the customer's budget to determine which path
          the lead should follow.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-xl font-semibold">
            Budget ≥ ₦100,000 → Qualified
          </p>

          <p className="mt-2 text-gray-400">
            Budget &lt; ₦100,000 → Potential
          </p>
        </div>

        <img
          src="/projects/lead-qualification/if-node.png"
          alt="Lead qualification IF node checking customer budget"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Qualified */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Qualified Lead Path
        </h2>

        <p className="mt-3 text-gray-400">
          Leads that meet the budget requirement are automatically processed
          through the qualified path and recorded with a Qualified status.
        </p>

        <img
          src="/projects/lead-qualification/qualified.png"
          alt="Qualified lead path in n8n"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Potential */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Potential Lead Path
        </h2>

        <p className="mt-3 text-gray-400">
          Leads below the budget threshold are automatically processed through
          the potential path and recorded with a Potential status.
        </p>

        <img
          src="/projects/lead-qualification/potential.png"
          alt="Potential lead path in n8n"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Lead Database */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Customer Lead Database
        </h2>

        <p className="mt-3 text-gray-400">
          After processing the lead, the automation records the customer's
          information and qualification status in a separate Google Sheet.
        </p>

        <img
          src="/projects/lead-qualification/customer-leads.png"
          alt="Customer Lead Google Sheet containing qualification results"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Tools Used</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "n8n",
            "Google Sheets",
            "Gmail",
            "IF / Conditional Logic",
            "Expressions",
            "Data Mapping",
          ].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-8 md:p-10">
          <h2 className="text-2xl font-bold">Outcome</h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-300">
            The automation turns a new customer lead into a processed,
            categorized, and recorded lead without requiring someone to
            manually perform each step.
          </p>

          <div className="mt-6 text-lg font-semibold">
            New Lead → Qualification → Email Response → Lead Database
          </div>
        </div>
      </section>
    </main>
  );
}