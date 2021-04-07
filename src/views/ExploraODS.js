import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function ExploraODS() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                {/* <h5 className="card-category">Black Table Heading</h5> */}
                <CardTitle tag="h3">
                  Rally de Datos: Explorando Datos para el Desarrollo Sostenible
                </CardTitle>
              </CardHeader>
              <CardBody>
                <h1>Convocatoria</h1>
                <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021" target="_blank" rel="noreferrer">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                <p>
                  Con el objetivo de promover el uso de los datos abiertos,
                  <a href="https://www.gob.mx/hacienda" target="_blank" rel="noreferrer">
                    {" "}
                    La Secretaría de Hacienda y Crédito Público{" "}
                  </a>
                  con su portal de
                  <a href="https://www.transparenciapresupuestaria.gob.mx/" target="_blank" rel="noreferrer">
                    {" "}
                    Transparencia Presupuestaria{" "}
                  </a>
                  y el
                  <a href="https://ciep.mx/" target="_blank" rel="noreferrer">
                    {" "}
                    Centro de Investigación Económica y Presupuestaria, A.C.{" "}
                  </a>
                  , convocaron a la sexta edición del Rally de Datos: Explorando
                  datos para el Desarrollo Sostenible, en el marco del{" "}
                  <a href="https://opendataday.org/es_es/" target="_blank" rel="noreferrer">
                    Día de los Datos Abiertos
                  </a>
                </p>

                <p>
                  El rally se divide en 3 retos y podrás acceder a nuestros
                  resultados correspondientes en el menú lateral del sitio
                </p>
                <hr />

                <div
                  className="row"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="col-sm-4">
                    <img
                      alt="..."
                      className="squaredImg"
                      src={require("assets/img/logo-transparencia.png").default}
                    />
                    <hr />
                  </div>
                  <div className="col-sm-4">
                    <img
                      alt="..."
                      className="squaredImg"
                      src={require("assets/img/logo-ods.png").default}
                    />
                    <hr />
                  </div>
                  <div className="col-sm-4">
                    <img
                      alt="..."
                      className="squaredImg"
                      src={require("assets/img/logo-hacienda.png").default}
                    />
                    <hr />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ExploraODS;
