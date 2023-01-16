import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ListCard({ buttonName }) {
  return (
    <div className="m-5">
      <Card>
        <Card.Body>
          <h5>ACCEPTED VERIFIER</h5>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Verifier Id</th>
                <th>Verifier Name</th>
                <th>Location</th>
                <th>Verifier Address</th>
                <th>Verifier Phone</th>
                <th>Verifier NIN</th>
                <th>Verifier BVN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ID56788</td>
                <td>Mark</td>
                <td>Ikeja</td>
                <td>St thomas Avenue</td>
                <td>+23488950655</td>
                <td>999786789095</td>
                <td>999786789095</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ID56788</td>
                <td>Jacob</td>
                <td>Lekki</td>
                <td>St thomas Avenue</td>
                <td>+23488950655</td>
                <td>999786789095</td>
                <td>999786789095</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <br />
      <Button type="submit">{buttonName}</Button>
    </div>
  );
}

export default ListCard;
