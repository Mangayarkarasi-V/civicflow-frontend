export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">CivicFlow Dashboard</h1>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card title="Active Projects" value="3" />
        <Card title="Open RFIs" value="7" />
        <Card title="Pending Approvals" value="4" />
        <Card title="Risk Alerts" value="2" />
      </section>

      {/* Recent Events */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Project Events</h2>
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500 border-b">
            <tr>
              <th className="py-2">Project</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <EventRow project="P-001" type="RFI" status="Open" date="01 Feb 2026" />
            <EventRow project="P-001" type="Progress Update" status="Completed" date="31 Jan 2026" />
            <EventRow project="P-002" type="Funding Request" status="Pending" date="30 Jan 2026" />
            <EventRow project="P-003" type="Inspection" status="Failed" date="29 Jan 2026" />
          </tbody>
        </table>
      </section>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-bold text-slate-800">{value}</p>
    </div>
  );
}

function EventRow({ project, type, status, date }: { project: string; type: string; status: string; date: string }) {
  return (
    <tr>
      <td className="py-3">{project}</td>
      <td>{type}</td>
      <td>
        <span className="px-2 py-1 rounded text-xs bg-slate-100">{status}</span>
      </td>
      <td>{date}</td>
    </tr>
  );
}