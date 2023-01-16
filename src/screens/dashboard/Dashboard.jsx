import React, { useEffect, useState } from "react";
import styles from "./Dashboard.styles.css";

import ListCard from "../ListCard";
import CardDetails from "../cardDetails/CardDetails";
import SignupCard from "../SignupCard";
import Search from "../Search";
// #####################################################################

function Dashboard() {
  //##########################################################

  return (
    <div className="" bg="dark" variant="dark" id={styles.bodycontainer}>
      <br />

      <h1>
        <strong>DASHBOARD</strong>
      </h1>
      <br />

      {/* <hr className="my-4" /> */}

      <CardDetails />
      <br />

      <SignupCard />
      <br />

      <ListCard buttonName="See more" />
      <br />

      <Search />
      <br />

      <ListCard buttonName="See more" />
      <br />
    </div>
  );
}
// #####################################################################

export default Dashboard;
// #####################################################################
