import React from "react";
import SpeedHiveLink from "../../components/speedHiveLink";

export const WinterWarmups = () => (
  <div>
    <h2 className="margin-top-25">Winter Warm Ups</h2>
    <table className="table table-sm table-striped table-auto-width table-centre-align">
      <thead>
        <tr>
          <th>Event Date</th>
          <th>Track</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14th January</td>
          <td>Little Silver Moto Parc</td>
          <td>
            <SpeedHiveLink eventId={1489377} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
