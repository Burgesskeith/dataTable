import React from "react";
import DataTable from "react-data-table-component";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineCheckSquare } from "react-icons/ai";

const sortIcon = <FaCaretDown />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

function DataTableBase(props) {
  return (
    <DataTable
      direction="auto"
      fixedHeaderScrollHeight="300px"
      pagination
      responsive
      subHeaderAlign="right"
      subHeaderWrap
      selectableRowsComponent={AiOutlineCheckSquare}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
}

export default DataTableBase;
