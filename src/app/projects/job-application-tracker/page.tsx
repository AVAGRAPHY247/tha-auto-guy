export default function JobApplicationTrackerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-yellow-400">
          Automation Case Study
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Job Application Tracker
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          An automated recruitment workflow built with n8n, Google Forms,
          Google Sheets, and Gmail that captures job applications, notifies HR,
          confirms applications, and routes candidates based on years of
          experience.
        </p>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">The Problem</h2>

            <p className="mt-4 leading-7 text-gray-300">
              Managing job applications manually can make it easy for new
              applications to be missed. HR may need to repeatedly check
              incoming applications, notify applicants, and decide how to
              handle candidates based on their experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">The Solution</h2>

            <p className="mt-4 leading-7 text-gray-300">
              I built an n8n recruitment automation that captures new
              applications from Google Sheets, sends confirmation emails to
              applicants, notifies HR, and automatically routes candidates
              based on their years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold">How It Works</h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-300">
          When a new application is added to the recruitment spreadsheet,
          n8n processes the application, sends the required notifications,
          and routes the candidate according to their experience level.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold">
            Google Form → Google Sheets → n8n → Applicant Confirmation →
            HR Notification → Experience Routing
          </p>
        </div>
      </section>

      {/* Complete Workflow */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Complete Automation Workflow
        </h2>

        <p className="mt-3 text-gray-400">
          The complete n8n workflow connecting the application trigger,
          notifications, experience routing, and candidate responses.
        </p>

        <img
          src="/projects/Images/job-application-tracker-workflow.png"
          alt="Complete Job Application Tracker workflow in n8n"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Applicant Confirmation */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Applicant Confirmation
        </h2>

        <p className="mt-3 text-gray-400">
          After an application is received, the applicant automatically
          receives a confirmation email acknowledging their submission.
        </p>

        <img
          src="/projects/Images/job-application-tracker-applicant-confirmation.png"
          alt="Applicant confirmation email"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* HR Notification */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          HR Notification
        </h2>

        <p className="mt-3 text-gray-400">
          HR is automatically notified when a new application is received,
          allowing the recruitment team to review incoming candidates without
          manually monitoring the application sheet.
        </p>

        <img
          src="/projects/Images/job-application-tracker-hr-notification.png"
          alt="HR notification email for a new job application"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Experience Routing */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Experience-Based Candidate Routing
        </h2>

        <p className="mt-3 text-gray-400">
          The Switch node evaluates the applicant's years of experience and
          sends the application through the appropriate branch.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6">
          <p className="text-lg font-semibold">
            0–2 Years → Keep Details on File
          </p>

          <p className="mt-2 text-gray-400">
            3–5 Years → Interview Invitation
          </p>

          <p className="mt-2 text-gray-400">
            6+ Years → Interview Invitation
          </p>
        </div>

        <img
          src="/projects/Images/job-application-tracker-routing.png"
          alt="Job Application Tracker experience routing in n8n"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Interview Result */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Interview Invitation
        </h2>

        <p className="mt-3 text-gray-400">
          Applicants with 3–5 years or 6+ years of experience are automatically
          sent an interview invitation.
        </p>

        <img
          src="/projects/Images/job-application-tracker-interview.png"
          alt="Automated interview invitation email"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Keep on File */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Keep Details on File
        </h2>

        <p className="mt-3 text-gray-400">
          Applicants with 0–2 years of experience receive an automated message
          explaining that their details will be kept on file for future
          opportunities.
        </p>

        <img
          src="/projects/Images/job-application-tracker-keep-on-file.png"
          alt="Keep details on file email"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Application Results */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">
          Application Results
        </h2>

        <p className="mt-3 text-gray-400">
          Applicant information and processing results are recorded in Google
          Sheets, providing a readable record of submitted applications.
        </p>

        <img
          src="/projects/Images/job-application-tracker-results.png"
          alt="Job application results recorded in Google Sheets"
          className="mt-8 w-full rounded-2xl border border-white/10"
        />
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Tools Used</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "n8n",
            "Google Forms",
            "Google Sheets",
            "Gmail",
            "Switch / Conditional Logic",
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
            The automation turns a new job application into a structured
            recruitment process without requiring HR to manually send
            confirmations, monitor every new application, or route candidates
            individually.
          </p>

          <div className="mt-6 text-lg font-semibold">
            Application → Confirmation → HR Notification → Experience Routing →
            Candidate Response
          </div>
        </div>
      </section>
    </main>
  );
}