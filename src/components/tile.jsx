import { useState } from "react";

function Menu({ onEdit, onFlag, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white shadow-sm hover:bg-gray-50"
        onClick={() => setOpen((v) => !v)}
        aria-label="More"
      >
        ⋯
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border bg-white shadow-lg">
          <button
            onClick={onEdit}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={onFlag}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
          >
            Flag
          </button>
          <button
            onClick={onDelete}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function Tile({ data, onSelect }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((emp) => (
          <div
            key={emp.id}
            onClick={() => onSelect(emp)}
            className="group cursor-pointer rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {emp.name}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Employee ID: {emp.id}
                </div>
              </div>

              <Menu
                onEdit={() => alert("Edit (wire to update mutation)")}
                onFlag={() => alert("Flag (client-side demo)")}
                onDelete={() => alert("Delete (demo)")}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-gray-50 p-3">
                <div className="text-[11px] text-gray-500">Class</div>
                <div className="text-sm font-medium text-gray-900">
                  {emp.class ?? "-"}
                </div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-3">
                <div className="text-[11px] text-gray-500">Age</div>
                <div className="text-sm font-medium text-gray-900">
                  {emp.age}
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {emp.subjects?.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="rounded-full border bg-white px-3 py-1 text-xs text-gray-600"
                >
                  {s}
                </span>
              ))}
              {emp.subjects?.length > 3 && (
                <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-500">
                  +{emp.subjects.length - 3} more
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Attendance</span>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-gray-700">
                {emp.attendance?.length ?? 0}
              </span>
            </div>

            <div className="mt-4 text-xs font-medium text-blue-600 opacity-0 transition group-hover:opacity-100">
              Click to view details →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
