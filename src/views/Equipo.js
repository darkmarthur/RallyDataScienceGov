import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
} from "reactstrap";

function Equipo() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/carlos.jpg").default}
                    />
                    <h5 className="title">Carlos Roberto Cruz Maldonado</h5>
                  </a>
                  <p className="description">Team Leader</p>
                </div>
                <div className="card-description">
                  Computational Biologist, Centro de Ciencias Genómicas, UNAM
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <a
                    className="btn-icon btn-round"
                    color="google"
                    href="https://www.linkedin.com/in/carlos-roberto-cruz-maldonado-a9662173/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/nicole.jpg").default}
                    />
                    <h5 className="title">Nicole Torres</h5>
                  </a>
                  <p className="description">Data Scientist</p>
                </div>
                <div className="card-description">
                  Data Scientist, Biochemist. Centro de Ciencias Genómicas, UNAM
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <a
                    className="btn-icon btn-round"
                    color="google"
                    href="https://www.linkedin.com/in/camila-nicole-torres-franco-879717b5/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/mario.jpg").default}
                    />
                    <h5 className="title">Mario D. Quiroz</h5>
                  </a>
                  <p className="description">Data Scientist</p>
                </div>
                <div className="card-description">
                  Software Analyst & Tech Lead Developer
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <a
                    className="btn-icon btn-round"
                    color="google"
                    href="https://www.linkedin.com/in/mariodquiroz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Equipo;
