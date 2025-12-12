export default function Grid({ data }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <div className="text-sm font-semibold text-gray-900">
              Employees Grid
            </div>
            <div className="text-xs text-gray-500">10-column sample view</div>
          </div>
          <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
            Total Rows: {data.length}
          </span>
        </div>

        <div className="overflow-auto">
          <table className="min-w-[1100px] w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                {[
                  "ID",
                  "Name",
                  "Age",
                  "Class",
                  "Subjects",
                  "Attendance",
                  "Col1",
                  "Col2",
                  "Col3",
                  "Col4",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{emp.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {emp.name}
                  </td>
                  <td className="px-4 py-3">{emp.age}</td>
                  <td className="px-4 py-3">{emp.class ?? "-"}</td>
                  <td className="px-4 py-3">{emp.subjects.join(", ")}</td>
                  <td className="px-4 py-3">{emp.attendance?.length ?? 0}</td>
                  <td className="px-4 py-3 text-gray-500">Col1</td>
                  <td className="px-4 py-3 text-gray-500">Col2</td>
                  <td className="px-4 py-3 text-gray-500">Col3</td>
                  <td className="px-4 py-3 text-gray-500">Col4</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
