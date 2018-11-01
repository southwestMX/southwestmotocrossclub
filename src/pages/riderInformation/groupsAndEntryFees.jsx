import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Group", "Entry Fee"];
const details = [
  { group: "Autos", entry: "£30" },
  { group: "65 \u0026 85 SW / BW", entry: "£35" },
  { group: "Rookies", entry: "£35" },
  { group: "Adult A (MX1 \u0026 MX2)", entry: "£40" },
  { group: "Adult B (Novice \u0026 Vets)", entry: "£40" }
];

export const GroupsAndEntryFees = () => (
  <div>
    <h2 className="margin-top-60">Groups / Entry Fees 2018</h2>

    <ResponsiveTable headers={headers} details={details} />
  </div>
);
