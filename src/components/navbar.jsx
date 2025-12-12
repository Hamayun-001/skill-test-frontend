import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm hover:bg-gray-50"
              aria-label="Open menu"
            >
              ☰
            </button>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">
                Skill Test
              </div>
              <div className="text-xs text-gray-500">Employees POC</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {["Dashboard", "Employees", "Reports", "Settings"].map((item) => (
              <button
                key={item}
                className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {open && (
        <button
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
      )}

      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-72 border-r bg-white shadow-xl transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold text-gray-900">Navigation</div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            <button className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100">
              Home
            </button>

            <div className="rounded-xl border bg-gray-50">
              <button className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium">
                Employees
              </button>
              <div className="space-y-1 px-2 pb-2">
                <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-white">
                  List
                </button>
                <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-white">
                  Stats
                </button>
              </div>
            </div>

            <button className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-gray-100">
              Settings
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-4 text-white">
            <div className="text-sm font-semibold">Tip</div>
            <div className="mt-1 text-xs text-white/90">
              Use **Tile View** to open details. Admin actions can be wired to
              mutations.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
