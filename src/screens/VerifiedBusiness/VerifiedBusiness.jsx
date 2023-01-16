import React from "react";
import Search from "../Search";
import ListCard from "../ListCard";

function VerifiedBusiness() {
  return (
    <div>
      <h1>
        <strong>Verified Business</strong>
      </h1>
      <br />

      <Search />
      <br />

      <ListCard buttonName="See more" />
      <br />
    </div>
  );
}

export default VerifiedBusiness;
