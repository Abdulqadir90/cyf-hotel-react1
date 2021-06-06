import React, { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const [idSearchInput, setIdSearchInput] = useState("");

  const idSearchHandler = event => setSearchInput(event.target.value);
  const submitIdSearchInput = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  const handleSearchInput = e => setSearchInput(e.target.value);
  const submitSearchInput = e => {
    e.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={submitSearchInput} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
