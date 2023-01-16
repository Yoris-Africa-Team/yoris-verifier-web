import React from "react";

function Footer(params) {
  let today = new Date();
  return (
    <div>
      <footer className="border-top footer bg-default">
        <div className="container text-center ">
          <br />
          <h5>&copy; Yoris- {today.getFullYear()}</h5>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
