import React from "react";
import Search from "../Search";
import ListCard from "../ListCard";

function PendingVerifier() {
  return (
    <div>
      <h1>
        <strong>Pending Verifier</strong>
      </h1>
      <br />

      <Search />
      <br />

      <ListCard buttonName="See more" />
      <br />
    </div>
  );
}

export default PendingVerifier;
