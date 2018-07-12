import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = props => {
  const cells = [];
  const y = props.y;
  let columnWidthStyle = "";
  for (let x = 0; x < props.x; x += 1) {
    columnWidthStyle += "minmax(60px, 1fr) ";
    cells.push(
      <Cell
        key={`${x}-${y}`}
        y={y}
        x={x}
        onChangedValue={props.handleChangedCell}
        value={props.rowData[x] || ""}
        headers={props.headers}
      />
    );
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columnWidthStyle,
        wordBreak: "break-all"
      }}
    >
      {cells}
    </div>
  );
};

Row.propTypes = {
  handleChangedCell: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  rowData: PropTypes.shape({
    string: PropTypes.string
  }).isRequired,
  headers: PropTypes.array
};

export default Row;
