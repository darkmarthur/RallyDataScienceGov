import testNetworkData from "../data/VINC_PEF_2021.json";
import testData from "../data/test.json";
import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import Plot from "react-plotly.js";
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import React, { useEffect, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
Cytoscape.use(COSEBilkent);




// reactstrap components

function Reto3() {
  const [networkData, setNetwork] = useState({});

  // useEffect(() => {
  //   let mounted = true;
  //   // let testNetworkData = require("../data/test.json");
  //   setNetwork(testNetworkData);
  //   // fetch()
  //   //   .then(items => {
  //   //     if(mounted) {
  //   //       setList(items)
  //   //     }
  //   //   })
  //   // return () => mounted = false;
  console.log("json", testNetworkData);
  console.log("json", testNetworkData.elements.edges);
  console.log("json", testNetworkData.elements.nodes);
  // }, []);
  const layout = { name: 'cose-bilkent' };

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
                  {testNetworkData != null ? (
                    <CytoscapeComponent
                      cy={(cy) => {
                        cy = cy.center();
                      }}
                      // zoomingEnabled={false}
                      // elements={testData}
                      // elements={testNetworkDataCy.elements}
                      elements={CytoscapeComponent.normalizeElements({
                        nodes: testNetworkData.elements.nodes,
                        edges: testNetworkData.elements.edges
                      })}
                      layout={layout}
                      style={{ width: "100%", height: "1000px" }}
                    />
                  ) : null}
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
