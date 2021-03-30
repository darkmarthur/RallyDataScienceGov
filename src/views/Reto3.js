import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import testNetworkData from "../data/VINC_PEF_2021.json";
import graphStyle from "../data/ODS_style.js";

import Plot from "react-plotly.js";
import Cytoscape from "cytoscape";
// import BubbleSets from 'cytoscape-bubblesets';

// import COSEBilkent from "cytoscape-cose-bilkent";
// import cola from "cytoscape-cola";
import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";

Cytoscape.use(edgehandles);

function Reto3() {
  const layout = { name: "preset", avoidOverlap: true };
  const [networkData, setNetwork] = useState({});

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
                {/* <select disabled={loading}>
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select> */}
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
                      layout={layout}
                      // autounselectify={true}
                      style={{ width: "100%", height: "1000px" }}
                      // stylesheet={graphStyle.style}
                      stylesheet={[
                        {
                          selector: "node",
                          css: {
                            "border-width": 2.0,
                            "border-color": "rgb(204,204,204)",
                            color: "rgb(102,102,102)",
                            "text-valign": "bottom",
                            "text-halign": "right",
                            width: 10.0,
                            "background-opacity": 1.0,
                            "font-family": "SansSerif.plain",
                            "font-weight": "normal",
                            "font-size": 10,
                            "background-color": "rgb(254,196,79)",
                            "text-opacity": 1.0,
                            "border-opacity": 1.0,
                            content: "",
                            height: 10.0,
                            shape: "ellipse",
                          },
                        },
                        {
                          selector: "node:selected",
                          css: {
                            "background-color": "rgb(255,255,0)",
                          },
                        },
                        {
                          selector: "edge",
                          css: {
                            "source-arrow-shape": "none",
                            width: 0.5,
                            color: "rgb(0,0,0)",
                            "source-arrow-color": "rgb(204,204,204)",
                            "target-arrow-shape": "triangle",
                            "line-color": "rgb(204,204,204)",
                            "text-opacity": 1.0,
                            "target-arrow-color": "rgb(204,204,204)",
                            "line-style": "solid",
                            opacity: 1.0,
                            "font-family": "SansSerif.plain",
                            "font-weight": "normal",
                            content: "",
                            "font-size": 10,
                          },
                        },
                        {
                          selector: "edge[ id = '2594' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2564' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2533' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2534' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2598' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2441' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2445' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2578' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2547' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2516' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2580' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2517' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2456' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2488' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2489' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2553' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2617' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2586' ]",
                          css: {},
                        },
                        {
                          selector: "edge[ id = '2526' ]",
                          css: {},
                        },
                        {
                          selector: "edge:selected",
                          css: {
                            "line-color": "rgb(255,0,0)",
                          },
                        },
                      ]}
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
