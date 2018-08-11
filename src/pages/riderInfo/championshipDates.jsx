import React from "react";
import SpeedHiveLink from "../../components/speedHiveLink";

export const ChampionshipDates = () => (
  <div>
    <h3>Championship Dates</h3>

    <table className="table table-sm table-striped table-auto-width table-centre-align">
      <thead className="thead-dark">
        <tr>
          <th>Round</th>
          <th>Event Date</th>
          <th>Track</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 &amp; 2</td>
          <td>28th / 29th April</td>
          <td>Littlehempston</td>
          <td>
            <SpeedHiveLink displayText="Day 1 Results" eventId={1517757} />
            <SpeedHiveLink displayText="Day 2 Results" eventId={1517783} />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>27th May</td>
          <td>Matt Jones Memorial @ Landrake Moto Parc</td>
          <td>
            <SpeedHiveLink displayText="Day 2 Results" eventId={1534198} />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>17th June</td>
          <td>Tincleton</td>
          <td>
            <SpeedHiveLink displayText="Day 2 Results" eventId={1546457} />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>15th July</td>
          <td>Fraddon</td>
          <td>
            <SpeedHiveLink displayText="Day 2 Results" eventId={1561096} />
          </td>
        </tr>
        <tr>
          <td>MCF Team Event</td>
          <td>18th / 19th August</td>
          <td>Sherwood Park MX</td>
          <td />
        </tr>
        <tr>
          <td>6</td>
          <td>26th August</td>
          <td>Whiteway Barton</td>
          <td />
        </tr>
        <tr>
          <td>7 &amp; 8</td>
          <td>9th / 10th September</td>
          <td>Little Silver Moto Parc</td>
          <td />
        </tr>
        <tr>
          <td>9</td>
          <td>23rd September</td>
          <td>Crediton</td>
          <td />
        </tr>
        <tr>
          <td>10</td>
          <td>7th October</td>
          <td>Yarley</td>
          <td />
        </tr>
      </tbody>
    </table>

    <h5>Tracks and dates are subject to change</h5>
    <h5>
      Club members must compete in at least six rounds in order to qualify for
      awards.
    </h5>
    <h5>A riders worst 6 races will be dropped.</h5>
  </div>
);
