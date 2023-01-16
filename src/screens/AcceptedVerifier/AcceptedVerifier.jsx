import React from "react";
import Search from "../Search";
import ListCard from "../ListCard";

function AcceptedVerifier() {
  return (
    <div>
      <h1>
        <strong>Accepted Verifier</strong>
      </h1>
      <br />

      <Search />
      <br />

      <ListCard buttonName="Remove" />
      <br />
    </div>
  );
}

export default AcceptedVerifier;
