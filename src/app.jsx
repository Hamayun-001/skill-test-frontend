import { gql, useQuery } from "@apollo/client";
import Navbar from "./components/navbar";
import GridView from "./components/grid";
import TileView from "./components/tile";
import TileDetail from "./components/detail";
import { useState } from "react";
import { tileIcon, gridIcon } from "./assets/icons";

const GET_EMPLOYEES = gql`
  query {
    employees(page: 1, limit: 20) {
      data {
        id
        name
        age
        class
        subjects
        attendance {
          id
          status
          date
        }
      }
    }
  }
`;

export default function App() {
  const { data, loading } = useQuery(GET_EMPLOYEES);
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xl font-semibold text-gray-900">Employees</div>
            <div className="text-sm text-gray-500">
              Switch between Grid and Tile view.
            </div>
          </div>

          <div className="inline-flex rounded-2xl border bg-white p-1 shadow-sm">
            <button
              aria-label="Grid view"
              onClick={() => setView("grid")}
              className={`flex items-center justify-center rounded-xl px-4 py-2 transition ${
                view === "grid"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tileIcon}
            </button>

            <button
              aria-label="Tile view"
              onClick={() => setView("tile")}
              className={`flex items-center justify-center rounded-xl px-4 py-2 transition ${
                view === "tile"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {gridIcon}
            </button>
          </div>
        </div>
      </div>
      {selected && (
        <TileDetail emp={selected} onBack={() => setSelected(null)} />
      )}
      {!selected && view === "grid" && <GridView data={data.employees.data} />}
      {!selected && view === "tile" && (
        <TileView data={data.employees.data} onSelect={setSelected} />
      )}
    </>
  );
}
