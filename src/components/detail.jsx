export default function Detail({ emp, onBack }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
      >
        ◀ Back to tiles
      </button>

      <div className="mt-4 overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white">
          <div className="text-xl font-semibold">{emp.name}</div>
          <div className="mt-1 text-sm text-white/90">
            Employee ID: {emp.id}
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="text-xs text-gray-500">Age</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {emp.age}
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="text-xs text-gray-500">Class</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {emp.class ?? "-"}
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <div className="text-xs text-gray-500">Attendance</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {emp.attendance?.length ?? 0}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-gray-900">Subjects</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {emp.subjects.map((s) => (
                <span
                  key={s}
                  className="rounded-full border bg-white px-3 py-1 text-sm text-gray-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-gray-900">
              Attendance History
            </div>
            <div className="mt-2 overflow-hidden rounded-2xl border">
              <div className="grid grid-cols-3 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500">
                <div>ID</div>
                <div>Date</div>
                <div>Status</div>
              </div>
              {(emp.attendance ?? []).map((a) => (
                <div key={a.id} className="grid grid-cols-3 px-4 py-2 text-sm">
                  <div className="text-gray-700">{a.id}</div>
                  <div className="text-gray-700">{a.date}</div>
                  <div className="font-medium text-gray-900">{a.status}</div>
                </div>
              ))}
              {(!emp.attendance || emp.attendance.length === 0) && (
                <div className="px-4 py-3 text-sm text-gray-500">
                  No attendance records.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
