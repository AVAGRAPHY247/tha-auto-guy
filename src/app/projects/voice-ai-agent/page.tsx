export default function VoiceAiAgentPage() {
  const recordings = [
    {
      title: "Room Service — Live Call",
      description:
        "A live test call where Alex handles a room-service request and sends the request into the hotel automation workflow.",
      file: "/projects/Audio/01a0c8a4-60c7-7bbe-8e85-6dc485ae0b97-1790072838319-b5b403fc-169d-4eba-ba9f-3f3494b21c53-mono.wav",
    },
    {
      title: "Complaint — Live Call",
      description:
        "A live test call where Alex handles a guest complaint and sends the complaint into the hotel automation workflow.",
      file: "/projects/Audio/01a0cd96-4e36-7aa0-b08c-5c91604ef546-1790155672354-5cde3c0e-7a54-43f0-af3c-777b781259d6-mono.wav",
    },
    {
      title: "Room Reservation — Live Call",
      description:
        "A live test call where Alex collects reservation details and triggers the room-reservation workflow.",
      file: "/projects/Audio/01a0cdfc-5e83-7ee9-96cf-994d9b6d728e-1790162399765-e1043f42-1da9-4ff0-bde6-5bc76cee93ef-mono.wav",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
          Automation Case Study
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Voice AI Agent
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
          A voice-powered hotel assistant built with Vapi and n8n that
          allows guests to interact with Palm Court Hotel through natural
          voice conversations for room service, complaints, and room
          reservations.
        </p>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          Alex is a voice AI assistant created for Palm Court Hotel. The
          assistant can communicate with guests, understand their requests,
          collect the required information, and connect those requests to
          automated backend workflows.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Room Service",
            "Guest Complaints",
            "Room Reservations",
          ].map((item) => (
            <div
              key={item}
              className="border border-yellow-400/20 rounded-xl p-5 bg-zinc-950"
            >
              <p className="text-yellow-400 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">The Problem</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          Hotel guests may need assistance with different requests such as
          ordering room service, reporting a problem, or making a reservation.
          Handling these requests manually can require staff to receive the
          information, record it, and then notify the appropriate team.
        </p>
      </section>

      {/* Solution */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">The Solution</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          I built a voice AI workflow where Vapi powers the conversation and
          n8n handles the backend automation. Alex can identify the type of
          request and use the appropriate API tool to send structured data
          into the corresponding workflow.
        </p>

        <div className="border border-yellow-400/20 rounded-2xl p-6 bg-zinc-950">
          <p className="text-yellow-400 font-semibold mb-3">
            End-to-End Flow
          </p>

          <p className="text-gray-300">
            Guest → Voice Conversation → Alex → API Tool → n8n → Hotel
            System
          </p>
        </div>
      </section>

      {/* How Alex Works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">How Alex Works</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          Alex is configured as a Vapi voice assistant with speech
          transcription, an OpenAI language model, and a voice synthesis
          system. The assistant is connected to three API tools that handle
          the main hotel request types.
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/vapi-alex-assistant-overview.png"
              alt="Vapi Alex assistant configuration"
              className="w-full"
            />
          </div>

          <p className="text-gray-400 text-sm">
            Vapi assistant “Alex” configured with STT RT v5, GPT-4.1, and
            Emma v2 voice.
          </p>

          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/vapi-alex-tools-create-order-complaint-reservation.png"
              alt="Vapi Alex API tools"
              className="w-full"
            />
          </div>

          <p className="text-gray-400 text-sm">
            Three API tools wired for Room Service, Complaints, and Room
            Reservation.
          </p>
        </div>
      </section>

      {/* Live Voice Agent */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Live Voice Agent</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-10">
          The assistant was tested through live voice conversations covering
          the three main hotel request types.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {recordings.map((recording) => (
            <div
              key={recording.title}
              className="border border-yellow-400/20 rounded-2xl p-6 bg-zinc-950"
            >
              <h3 className="text-xl font-semibold mb-3">
                {recording.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {recording.description}
              </p>

              <audio controls className="w-full">
                <source src={recording.file} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Automation Architecture
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          The backend is separated into dedicated n8n workflows for room
          service, complaints, and room reservations. Each workflow receives
          structured information from Alex and processes the request
          independently.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/n8n-multi-workflow-overview.png"
            alt="n8n multi workflow architecture"
            className="w-full"
          />
        </div>

        <p className="text-gray-400 text-sm mt-4">
          n8n architecture: separate flows for orders, reservations, and
          complaints.
        </p>
      </section>

      {/* Room Service */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Room Service Automation
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          Room-service requests are sent through Alex's create_order API
          tool and processed by the corresponding n8n workflow. Structured
          order information is then recorded in the operational Google Sheet.
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/n8n-multi-workflow-overview.png"
              alt="Room service n8n workflow"
              className="w-full"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/orders-operational-sheet.png"
              alt="Hotel room service orders Google Sheet"
              className="w-full"
            />
          </div>

          <p className="text-gray-400 text-sm">
            Orders recorded with order ID and structured order information.
          </p>
        </div>
      </section>

      {/* Complaints */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Complaint Handling
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          Guests can report complaints through the voice assistant. Alex
          collects the required information and sends the complaint to the
          complaint automation workflow for processing and dashboard
          visibility.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/hotel-management-dashboard.png"
            alt="Palm Court Hotel management dashboard"
            className="w-full"
          />
        </div>

        <p className="text-gray-400 text-sm mt-4">
          The management dashboard provides a central view of hotel requests,
          including complaints.
        </p>
      </section>

      {/* Reservation */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Room Reservation Automation
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          Alex collects the guest's name, room type, number of days, and
          payment method. After confirmation, the reservation is sent to the
          n8n reservation workflow, which generates a reservation ID and
          records the reservation.
        </p>

        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/n8n-multi-workflow-overview.png"
              alt="Room reservation n8n workflow"
              className="w-full"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
            <img
              src="/projects/Images/reservations-sheet.png"
              alt="Palm Court Hotel reservations Google Sheet"
              className="w-full"
            />
          </div>

          <p className="text-gray-400 text-sm">
            Reservation stored with Reservation ID, Date of Booking, and
            Status.
          </p>
        </div>
      </section>

      {/* Notifications */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Automated Notifications
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          After a reservation is successfully processed, the workflow sends
          an automated notification email containing the reservation details.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/manager-reservation-email.png"
            alt="Palm Court Hotel reservation notification email"
            className="w-full"
          />
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Automated manager email for a confirmed reservation.
        </p>
      </section>

      {/* Dashboard */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Hotel Management Dashboard
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          The automation is connected to a hotel management dashboard that
          provides a centralized view of incoming room-service requests,
          complaints, and room reservations.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/hotel-management-dashboard.png"
            alt="Palm Court Hotel Management Dashboard"
            className="w-full"
          />
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Single command center for Room Service, Complaints, and
          Reservations.
        </p>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Vapi",
            "GPT-4.1",
            "Soniox STT",
            "Emma v2 Voice",
            "n8n",
            "Google Sheets",
            "Gmail",
            "HTTP APIs",
            "Floot",
          ].map((tool) => (
            <div
              key={tool}
              className="border border-yellow-400/20 rounded-xl p-4 bg-zinc-950 text-gray-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-3xl font-bold mb-6">
          Results / Outcome
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          The completed system demonstrates an end-to-end voice automation
          workflow for a hotel environment. Guests can communicate with Alex
          by voice while structured requests are routed into dedicated
          backend workflows and surfaced through operational systems.
        </p>

        <div className="border border-yellow-400/20 rounded-2xl p-6 bg-zinc-950">
          <p className="text-yellow-400 font-semibold mb-3">
            End-to-End Flow
          </p>

          <p className="text-gray-300">
            Guest → Alex → API Tool → n8n Workflow → Google Sheets /
            Notification / Dashboard
          </p>
        </div>
      </section>
    </main>
  );
}