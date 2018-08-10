import React from "react";

export const Committee = () => (
  <div className="container">
    <h1>2018 Committee</h1>

    <div>
      <table className="table table-sm table-striped table-auto-width table-centre-align">
        <thead>
          <tr>
            <th>President</th>
            <th>Chairman</th>
            <th>Vice Chairman</th>
            <th>Treasurer</th>
            <th>Secretary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paul Jenkins</td>
            <td>Russell Watts</td>
            <td>Paul Jenkins</td>
            <td>Sally Ford</td>
            <td>Sally Ford</td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>Russell Watts</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>

    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th colspan="4">General Committee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kirsty Crawthorne</td>
          <td>Shaun Miller</td>
          <td>Carmen Jenkins</td>
          <td>Lorna Hopkins</td>
        </tr>

        <tr>
          <td>Robert Sprake</td>
          <td>Simon Ellett</td>
          <td>Richard Birch</td>
          <td>Angie Hill</td>
        </tr>
        <tr>
          <td>Trevor Bennett</td>
          <td>Tracey Watts</td>
          <td>Richard Hopkins</td>
          <td />
        </tr>
      </tbody>
    </table>

    <h1>2018 Race Day Committee</h1>

    <table class="table table-sm table-striped">
      <thead>
        <tr>
          <th>Race Day Treasurer</th>
          <th>Race Day Secretary</th>
          <th>Points</th>
          <th>Child Protection Officers</th>
          <th>Chief Marshall</th>
          <th>Chief Starter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Caroline Parry</td>
          <td>Sally Ford</td>
          <td>Tracy Watts</td>
          <td>Carmen Jenkins</td>
          <td>Russell Watts</td>
          <td>Gary Down</td>
        </tr>
        <tr>
          <td />
          <td>Simeon Loxley</td>
          <td />
          <td>Russell Watts</td>
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </div>
);
