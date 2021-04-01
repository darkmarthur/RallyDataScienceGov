import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import testNetworkData from "../data/2021_Dcontribution_inPEF.json"; //"../data/VINC_PEF_2021.json";
import graphStyle from "../data/ODS_style.json";

// import ODS_1 from '../data/ODS_images/1.jpg'

// import Plot from "react-plotly.js";
import Cytoscape from "cytoscape";
// import BubbleSets from 'cytoscape-bubblesets';
// import COSEBilkent from "cytoscape-cose-bilkent";
// import cola from "cytoscape-cola";
import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";

Cytoscape.use(edgehandles);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function Reto3() {
  const images = importAll(
    require.context("../data/ODS_images", false, /\.(png|jpe?g|svg)$/)
  );
  const layout = {
    name: "preset",
    avoidOverlap: true,
    directed: true,
    padding: 10,
  };
  const [networkData, setNetwork] = useState({});
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    { label: "ODS 1", value: 1 },
    { label: "ODS 2", value: 2 },
    { label: "ODS 3", value: 3 },
    { label: "ODS 4", value: 4 },
    { label: "ODS 5", value: 5 },
    { label: "ODS 6", value: 6 },
    { label: "ODS 7", value: 7 },
    { label: "ODS 8", value: 8 },
    { label: "ODS 9", value: 9 },
    { label: "ODS 10", value: 10 },
    { label: "ODS 11", value: 11 },
    { label: "ODS 12", value: 12 },
    { label: "ODS 13", value: 13 },
    { label: "ODS 14", value: 14 },
    { label: "ODS 15", value: 15 },
    { label: "ODS 16", value: 16 },
    { label: "ODS 17", value: 17 },
  ]);

  useEffect(() => {
    async function filterODS() {
      console.log(value);
      // const response = await fetch("https://jsonplaceholder.typicode.com/users");
      // const body = await response.json();
      // setItems(body.results.map(({ name }) => ({ label: name, value: name })));
      setLoading(false);
    }
    filterODS();
    console.log(value);
  }, [value]);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                {/* <h5 className="card-category">Black Table Heading</h5> */}
                <CardTitle tag="h2"></CardTitle>
              </CardHeader>
              <CardBody>
                <h1>En Construcción...</h1>
                <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                {/* <div style={{ backgroundColor: "#fff", margin: 40 }}>
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
                </div> */}
                <select disabled={loading}>
                  {items.map(({ label, value }) => (
                    <option
                      key={value}
                      value={value}
                      onChange={(e) => console.log('here')}
                      // onChange={(e) => setValue(e.currentTarget.value)}
                    >
                      {label}
                    </option>
                  ))}
                </select>
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
