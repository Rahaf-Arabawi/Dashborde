import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaSearch } from "react-icons/fa";
import "./nav.css"

function FormExample() {
  const [searchQuery, setSearchQuery] = useState("");
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   console.log("Searching for:", searchQuery);
  // };
  return (
    <Navbar className="nav9 justify-content-center">
      {/* <Form inline onSubmit={handleSearch}>
        <Row>
          <Col xs="auto">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
              />
              <Button variant="outline-secondary" type="submit">
                <FaSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Form> */}
    </Navbar>
  );
}
export default FormExample;