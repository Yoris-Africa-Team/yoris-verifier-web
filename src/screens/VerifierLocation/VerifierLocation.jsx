import React from "react";
import Search from "../Search";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function VerifierLocation() {
  return (
    <div>
      <Card style={{ margin: 20, padding: 10 }}>
        <Card.Body>
          <h1>
            <strong>Verifiers Location</strong>
          </h1>
          <br />

          <Search />
          <br />

          <Form style={{ marginTop: 20 }}>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              style={{ alignItems: "start" }}
            >
              <Form.Check type="checkbox" label="Nigeria" />
              <Form.Check type="checkbox" label="Ghana" />
              <Form.Check type="checkbox" label="South Africa" />
              <Form.Check type="checkbox" label="China" />
              <Form.Check type="checkbox" label="Japan" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}

export default VerifierLocation;
