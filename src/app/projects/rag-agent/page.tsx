export default function RagAgentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
          Automation Case Study
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          RAG Agent
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
          A Retrieval-Augmented Generation system built with n8n, OpenAI,
          Pinecone, and UltraMsg that allows an AI agent to retrieve relevant
          information from a knowledge base and respond to user questions
          through WhatsApp.
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">The Problem</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          Traditional AI assistants can struggle when they need to answer
          questions using information from a specific knowledge base. The
          system needs a way to retrieve relevant information before
          generating an answer instead of relying only on the model's
          general knowledge.
        </p>
      </section>

      {/* Solution */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">The Solution</h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl mb-8">
          I built a RAG pipeline that embeds documents into Pinecone using
          OpenAI embeddings. When a user sends a question, the AI Agent can
          retrieve relevant information from the Pinecone vector store,
          combine it with the conversation context, and generate a response.
        </p>

        <div className="border border-yellow-400/20 rounded-2xl p-6 bg-zinc-950">
          <p className="text-yellow-400 font-semibold mb-3">
            Workflow
          </p>

          <p className="text-gray-300">
            Document → Data Loader → OpenAI Embeddings → Pinecone → AI Agent
            → WhatsApp
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">RAG Architecture</h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          The automation is divided into two main processes: knowledge-base
          ingestion and question answering.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/rag-agent-workflow.png"
            alt="RAG Agent n8n workflow architecture"
            className="w-full"
          />
        </div>
      </section>

      {/* Knowledge Ingestion */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Knowledge Base Ingestion
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl">
          The ingestion workflow receives the document, processes it through
          the data loader, generates vector embeddings using OpenAI, and
          stores the embedded information in Pinecone.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/rag-agent-ingestion.png"
            alt="RAG Agent knowledge ingestion workflow"
            className="w-full"
          />
        </div>
      </section>

      {/* AI Agent */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          AI Agent & Retrieval
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl">
          The AI Agent uses an OpenAI Chat Model for response generation,
          Simple Memory for conversation context, and a Pinecone Vector Store
          as a retrieval tool. This allows the agent to search the knowledge
          base when answering user questions.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/rag-agent-ai-agent.png"
            alt="RAG Agent configuration"
            className="w-full"
          />
        </div>
      </section>

      {/* WhatsApp */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          WhatsApp Integration
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl">
          The agent is connected to a WhatsApp messaging workflow through
          UltraMsg. Incoming requests are received through a webhook and the
          agent can use the available tools to retrieve information and
          generate a response.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/rag-agent-whatsapp.png"
            alt="RAG Agent WhatsApp integration"
            className="w-full"
          />
        </div>
      </section>

      {/* Result */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          RAG Agent in Action
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8 max-w-4xl">
          The completed system can receive a user question through WhatsApp,
          retrieve relevant information from the Pinecone knowledge base, and
          return an AI-generated response.
        </p>

        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <img
            src="/projects/Images/rag-agent-result.png"
            alt="RAG Agent WhatsApp conversation"
            className="w-full"
          />
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "n8n",
            "OpenAI",
            "Pinecone",
            "UltraMsg",
            "Webhooks",
            "RAG",
            "Vector Embeddings",
            "AI Agents",
            "Simple Memory",
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
          Outcome
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          This project demonstrates how a RAG architecture can connect a
          private knowledge base to an AI Agent, allowing the agent to retrieve
          relevant information before responding to users through WhatsApp.
        </p>

        <div className="mt-8 border border-yellow-400/20 rounded-2xl p-6 bg-zinc-950">
          <p className="text-yellow-400 font-semibold mb-3">
            End-to-End Flow
          </p>

          <p className="text-gray-300">
            User Question → Webhook → AI Agent → Pinecone Retrieval →
            AI Response → WhatsApp
          </p>
        </div>
      </section>
    </main>
  );
}