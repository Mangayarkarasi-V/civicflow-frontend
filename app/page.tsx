import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">CivicFlow</h1>

        <p className="text-slate-600 text-lg mb-6">
          Smart Incident Prevention & Auto-Response powered by
          <span className="font-semibold text-slate-800"> watsonx.ai</span>
        </p>

        <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="font-semibold text-slate-800 mb-3">What this system does</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
            <li>Orchestrates project lifecycle events using AI agents</li>
            <li>Detects risks, delays, and compliance gaps early</li>
            <li>Routes RFIs, progress updates, and funding requests automatically</li>
            <li>Ensures human-in-the-loop approvals with evidence</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Open Dashboard
          </Link>

          <Link
            href="/orchestrate"
            className="border border-slate-300 px-8 py-3 rounded-xl font-medium hover:bg-slate-50 transition"
          >
            Orchestration View
          </Link>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Hackathon demo • Multi-agent orchestration • Evidence-driven decisions
        </p>
      </div>
    </main>
  );
}