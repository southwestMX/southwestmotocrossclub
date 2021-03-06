import React, { Component } from "react";
import SpeedHiveLink from "../components/speedHiveLink";

class ResponsiveTable extends Component {
  render() {
    function buildTableHeaders(headers) {
      return headers.map((header, i) => {
        return <th key={i}>{header}</th>;
      });
    }

    function buildTableDataRow(details) {
      return details.map((detail, i) => {
        return <tr key={i}>{buildTableData(detail)}</tr>;
      });
    }

    function buildTableData(detail) {
      return Object.keys(detail).map(function(keyName, keyIndex) {
        var data = detail[keyName];
        return (
          <td
            key={keyIndex}
            className={
              keyName.startsWith("speedHiveLink") ? "vertical-align" : ""
            }
          >
            {buildTableDataCellContent(keyName, data)}
          </td>
        );
      });
    }

    function buildTableDataCellContent(keyName, data) {
      if (keyName === "speedHiveLinks") {
        return data.map((speedHiveLink, i) => {
          return (
            <SpeedHiveLink
              key={i}
              eventId={speedHiveLink.eventId}
              displayText={speedHiveLink.displayText}
              className="s-margin-bottom-4"
            />
          );
        });
      } else if (keyName === "speedHiveLink") {
        return <SpeedHiveLink eventId={data.eventId} />;
      } else {
        return data;
      }
    }

    return (
      <div className="table-responsive">
        <table
          id={this.props.id}
          className="table table-md table-striped table-bordered"
        >
          <thead className="thead-dark">
            <tr>{buildTableHeaders(this.props.headers)}</tr>
          </thead>
          <tbody>{buildTableDataRow(this.props.details)}</tbody>
        </table>
      </div>
    );
  }
}

export default ResponsiveTable;
