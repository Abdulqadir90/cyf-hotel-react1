import React from "react";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.items.map(index => (
            <th className="tables" scope="col">
              {index}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default SearchResults;
