import React from "react";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div>
      <div className="container">
        <form className="mx-auto">
          <div
            className="d-flex justify-content-center"
            style={{ height: "45px" }}
          >
            <input
              className="h-100 bg-light border-0 searchinput box-shadow p-lg-3"
              style={{ width: "700px" }}
              id=""
              name="search"
              placeholder="  What are you looking for... "
            />
            <Button variant="success">SEARCH</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
