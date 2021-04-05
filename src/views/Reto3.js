import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import networkDataFile from "../data/2021_Dcontribution_inPEF.json"; //"../data/VINC_PEF_2021.json";
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

function Reto3() {
  const data = JSON.parse(JSON.stringify(networkDataFile));
  const [networkData, setNetworkData] = useState(data);
  const [selectedODS, setODSValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    { label: "Todos", value: 0 },
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

  const layout = {
    name: "preset",
    avoidOverlap: true,
    directed: true,
    padding: 10,
  };

  useEffect(() => {
    console.log("Selected ODS", selectedODS);
    if (selectedODS !== 0) {
      let filteredNetwork = JSON.parse(JSON.stringify(networkDataFile));
      let filteredNodes = [...filteredNetwork.elements.nodes].filter(
        (x) => x.data["Outdegree"] === selectedODS
      );
      filteredNetwork.elements.nodes = filteredNodes;
      setNetworkData(filteredNetwork);
    } else {
      setNetworkData(networkDataFile);
    }
    setLoading(false);
  }, [selectedODS]);

  useEffect(() => {
    console.log("new", networkData);
  }, [networkData]);


  function cytosGraph(network) {
    return (
      <CytoscapeComponent
        cy={(cy) => {
          cy = cy.center();
        }}
        elements={CytoscapeComponent.normalizeElements({
          nodes: network.elements.nodes,
          edges: network.elements.edges,
        })}
        stylesheet={graphStyle.style}
        layout={layout}
        style={{ width: "100%", height: "1000px" }}
      />
    );
  }

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
                <div>Seleccionar ODS: </div>
                <select
                  disabled={loading}
                  onChange={(e) => setODSValue(Number(e.currentTarget.value))}
                >
                  {items.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <div style={{ backgroundColor: "#fff", margin: 40 }}>
                  {networkData != null ? cytosGraph(networkData) : null}
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
