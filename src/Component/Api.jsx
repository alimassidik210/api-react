import { useEffect, useState } from "react";
import { callApi, callApi2 } from "../api/callApi";
import {
  Container,
  Row,
  Card,
  Button,
  Col,
  InputGroup,
  Form,
  ListGroup,
  Accordion,
} from "react-bootstrap";

const Api = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSearch = async () => {
    setData1(await callApi2(userInput));
  };

  useEffect(() => {
    callApi().then((data) => setData(data));
    callApi2().then((data1) => setData1(data1));
  }, []);

  return (
    <Container className="border border-top-0 mt-3">
      <Row className="d-flex ">
        <Col className="my-2 col-lg-8 d-flex flex-wrap  align-self-start col-12 mb-3 ">
          {data
            .map((m) => (
              <Card className="w-100 d-flex align-self-start my-2 ">
                <Card.Img variant="top" src={m.urlToImage} />
                <Card.Body>
                  <Card.Title>
                    <a href={m.url} style={{ textDecoration: "none" }}>
                      {m.title}
                    </a>{" "}
                  </Card.Title>
                  <Card.Text> {m.publishedAt}</Card.Text>
                </Card.Body>
              </Card>
            ))
            .splice(1, 2)}
          <div className="w-100">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Bagaimana Cara Memasang Iklan di Web ini ?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Bagaimana rincian biaya iklan di web ini?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>

        <Col className="col-lg-4">
          <h4>Breaking News</h4>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search News"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
          <ListGroup as="ul">
            {data1.map((m) => (
              <ListGroup.Item as="li" className="w-100 mb-3">
                <img
                  src={m.urlToImage}
                  alt="berita1"
                  style={{ width: "100%" }}
                  className="mb-2"
                />
                <p>
                  <b>{m.title}</b>
                  <a href={m.url}> Read More</a>
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Api;
