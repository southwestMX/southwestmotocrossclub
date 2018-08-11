import React from "react";

export const GroupsAndEntryFees = () => (
  <div>
    <h3 className="margin-top-25">Groups / Entry Fees</h3>
    <p />
    <table className="table table-sm table-striped table-auto-width table-centre-align">
      <thead className="thead-dark">
        <tr>
          <th>Group</th>
          <th>Entry Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Autos</td>
          <td>£30</td>
        </tr>
        <tr>
          <td>65 &amp; 85sw &amp; 85bw</td>
          <td>£35</td>
        </tr>
        <tr>
          <td>Rookies</td>
          <td>£35</td>
        </tr>
        <tr>
          <td>Adult A (MX1 &amp; MX2)</td>
          <td>£40</td>
        </tr>
        <tr>
          <td>Adult B (Novice &amp; Vets)</td>
          <td>£40</td>
        </tr>
      </tbody>
    </table>
  </div>
);
