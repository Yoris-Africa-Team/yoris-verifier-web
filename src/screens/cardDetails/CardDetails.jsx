import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCaretUpFill, BsFillCaretDownFill, BsPlus } from "react-icons/bs";
import styles from "./CardDetails.style.css";

function CardDetails() {
  return (
    <div className="m-5 flex-container ">
      <Container
      // style={{
      //   alignContent: "center",
      //   alignItems: "center",
      //   alignSelf: "center",
      // }}
      >
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "10rem", marginBottom: 5 }}>
              <Card.Body>
                <Card.Title>Total Revenue</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle> */}
                <Card.Text>
                  <h2>500,000</h2>
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                  <Card.Text>
                    <BsFillCaretUpFill color="green" size={20} />
                    +50%
                  </Card.Text>
                  <Card.Text>
                    <BsPlus size={17} />
                    15k Monthly
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "10rem", marginBottom: 5 }}>
              <Card.Body>
                <Card.Title>Total No:Registered Verifers</Card.Title>

                <Card.Text>30</Card.Text>
                <Card.Text>
                  <BsFillCaretDownFill color="red" size={20} />
                  -2%
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "10rem", marginBottom: 5 }}>
              <Card.Body>
                <Card.Title>Active Verifers</Card.Title>

                <Card.Text>10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "10rem", marginBottom: 5 }}>
              <Card.Body>
                <Card.Title>Inactive Verifers</Card.Title>

                <Card.Text>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardDetails;
