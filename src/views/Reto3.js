import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import testNetworkData from "../data/2021_Dcontribution_inPEF.json";//"../data/VINC_PEF_2021.json";
import graphStyle from "../data/ODS_style.json";

import Plot from "react-plotly.js";
import Cytoscape from "cytoscape";
// import BubbleSets from 'cytoscape-bubblesets';
// import COSEBilkent from "cytoscape-cose-bilkent";
// import cola from "cytoscape-cola";
import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";

Cytoscape.use(edgehandles);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function Reto3() {
  const layout = { name: "preset", avoidOverlap: true, directed: true, padding: 10};
  const [networkData, setNetwork] = useState({});
  const images = importAll(require.context('../data/ODS_images', false, /\.(png|jpe?g|svg)$/));
  const [value, setValue] = React.useState("R2-D2");
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: "Loading ...", value: "" },
  ]);

  // useEffect(() => {
  //   async function getCharacters() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const body = await response.json();
  //     setItems(body.results.map(({ name }) => ({ label: name, value: name })));
  //     setLoading(false);
  //   }
  //   getCharacters();
  // }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                {/* <h5 className="card-category">Black Table Heading</h5> */}
                <CardTitle tag="h2">En Construcción</CardTitle>
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
                {/* <select disabled={loading}>
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select> */}
                {/* 15161A */}
                <div style={{ backgroundColor: "#fff", margin: 40 }}>
                  {testNetworkData != null ? (
                    <CytoscapeComponent
                      cy={(cy) => {
                        cy = cy.center();
                      }}
                      elements={CytoscapeComponent.normalizeElements({
                        nodes: testNetworkData.elements.nodes,
                        edges: testNetworkData.elements.edges,
                      })}
                      stylesheet={graphStyle.style}
                      layout={layout}
                      // autounselectify={true}
                      style={{ width: "100%", height: "1000px" }}
                      // stylesheet={graphStyle.style}
                      // style={graphStyle}
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
