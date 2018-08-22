import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import ResponsiveTable from "../components/responsiveTable";

const committeeHeaders = [
  "President",
  "Chairman",
  "Vice-Chairman",
  "Treasurer",
  "Secretary"
];
const committeeDetails = [
  {
    president: "Paul Jenkins",
    chairman: "Russell Watts",
    viceChairman: "Paul Jenkins",
    tresurer: "Sally Ford",
    secretary: "Sally Ford"
  },
  {
    president: "",
    chairman: "",
    viceChairman: "",
    tresurer: "Russell Watts",
    secretary: ""
  }
];

const racedayCommitteeHeaders = [
  "Race Day Treasurer",
  "Race Day Secretary",
  "Points",
  "Child Protection Officers",
  "Chief Marshall",
  "Chief Starter"
];

const racedayCommitteeDetails = [
  {
    racedayTresurer: "Caroline Parry",
    racedaySecretary: "Sally Ford",
    points: "Tracy Watts",
    childProtectionOfficer1: "Carmen Jenkins",
    chiefMarshal: "Russell Watts",
    chiefStarter: "Gary Down"
  },
  {
    racedayTresurer: "",
    racedaySecretary2: "Simeon Loxley",
    points: "",
    childProtectionOfficer2: "Russell Watts",
    chiefMarshal: "",
    chiefStarter: ""
  }
];

class Committee extends Component {
  render() {
    return (
      <DocumentTitle title="Committee 2018 | SWMX">
        <div className="margin-bottom-20">
          <h1 className="my-md-4">Committee 2018</h1>
          <ResponsiveTable
            headers={committeeHeaders}
            details={committeeDetails}
          />

          <div className="table-responsive">
            <table className="table table-md table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th colSpan="4">General Committee Members</th>
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
          </div>
          <h1 className="my-md-4">Race Day Committee 2018</h1>

          <ResponsiveTable
            headers={racedayCommitteeHeaders}
            details={racedayCommitteeDetails}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Committee;
