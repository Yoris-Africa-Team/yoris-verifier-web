import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.styles.css";
import { useNavigate } from "react-router-dom";
import { BsToggleOn } from "react-icons/bs";
import { DarkModeContext } from "../../context/darkmode/DarkModeContext";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header(params) {
  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(true);

  //using darkmode context
  const { theme, toggleTheme } = useContext(DarkModeContext);

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  //#######################################################################
  //logout

  const handleLogOut = () => {
    //redirecting to home
    navigate("/home");
  };

  //#######################################################################
  return (
    <div className="p-5">
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link
              className=""
              to="home"
              id={styles.header}
              style={{ textDecoration: "none" }}
            >
              <strong>HOME</strong>
            </Link>
          </Nav.Link>
        </Nav.Item>
        {userInfo ? (
          <NavDropdown
            title="VERIFIERS"
            className={styles.NavDropdown}
            id="nav-dropdown"
            style={{ fontWeight: "bold" }}
          >
            <NavDropdown.Item>
              <Link className="nav-link " to="dashboard" id={styles.header}>
                <h6>
                  <strong>VERIFIER MANAGMENT</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="nav-link "
                to="PendingVerifier"
                id={styles.header}
              >
                <h6>
                  <strong>PENDING VERIFIER</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="nav-link "
                to="AcceptOrRejectVerifier"
                id={styles.header}
              >
                <h6>
                  <strong>ACCEPT/REJECT VERIFIER</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="nav-link "
                to="AcceptedVerifier"
                id={styles.header}
              >
                <h6>
                  <strong>ACCEPTED VERIFIER</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="nav-link "
                to="VerifiedBusiness"
                id={styles.header}
              >
                <h6>
                  <strong>VERIFIED BUSINESS</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="nav-link "
                to="VerifierLocation"
                id={styles.header}
              >
                <h6>
                  <strong>VERIFIERS LOCATION</strong>
                </h6>
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link className="nav-link " to="" id={styles.header}>
                <h6>
                  <strong>CLOSE</strong>
                </h6>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          ""
        )}

        <Nav.Item>
          <BsToggleOn size={30} onClick={toggleTheme} />
        </Nav.Item>
      </Nav>
      <hr />

      {/* <Navbar variant="dark" bg="dark" expand="xl">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default Header;
