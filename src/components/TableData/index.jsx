import React from "react";
import { TABLE_HEADER } from "../../constants/table";

const TableData = ({ dataSource }) => {
  const renderRow = (dataField, i) => {
    return (
      <tr key={i}>
        {Object.keys(dataField).map((data, j) => {
          return <td key={j}>{dataField[data]}</td>;
        })}
      </tr>
    );
  };

  return (
    <div className="table-reponsive box">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {TABLE_HEADER?.map((headerName, i) => {
              return <th key={i}>{headerName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource && (
            <>
              {dataSource?.slice(0, 10)?.map((dataField, i) => {
                return renderRow(dataField, i);
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
