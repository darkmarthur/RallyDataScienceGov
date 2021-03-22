import React from "react";
import Plot from "react-plotly.js";
import ReactDOM from "react-dom";
import CytoscapeComponent from "react-cytoscapejs";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Reto3() {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                {/* <h5 className="card-category">Black Table Heading</h5> */}
                <CardTitle tag="h3">En Progreso</CardTitle>
              </CardHeader>
              <CardBody>
                <h1>Convocatoria</h1>
                <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                <div style={{ backgroundColor: "#fff", margin: 40 }}>
                <Plot
                  style={{ width: "100%" }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
                  ]}
                  layout={{
                    title: "A Fancy Plot",
                  }}
                />
                </div>
                <div style={{ backgroundColor: "#fff", margin: 40 }}>
                  <CytoscapeComponent
                    cy={(cy) => {
                      cy = cy.center();
                    }}
                    zoomingEnabled={false}
                    elements={elements}
                    style={{ width: "100%", height: "1000px" }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Reto3;
