import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import VINC2021 from "../data/2021_PP_inVinc.json";
import VINC2020 from "../data/2020_PP_inVinc.json";
import VINC2019 from "../data/2019_PP_inVinc.json";
import VINC2018 from "../data/2018_PP_inVinc.json";

import PEF2021 from "../data/2021_PP_inPEF.json";
import PEF2020 from "../data/2020_PP_inPEF.json";
import PEF2019 from "../data/2019_PP_inPEF.json";
import PEF2018 from "../data/2018_PP_inPEF.json";

import CORE2021 from "../data/2021_Core_PP.json";
import CORE2020 from "../data/2020_Core_PP.json";
import CORE2019 from "../data/2019_Core_PP.json";
import CORE2018 from "../data/2018_Core_PP.json";

import ACCESORY2021 from "../data/2021_Accessory_PP.json";
import ACCESORY2020 from "../data/2020_Accessory_PP.json";
import ACCESORY2019 from "../data/2019_Accessory_PP.json";
import ACCESORY2018 from "../data/2018_Accessory_PP.json";

import graphStyle from "../data/ODS_style/ODS_style.json";

// import ODS_1 from '../data/ODS_images/1.jpg'
// import Plot from "react-plotly.js";
import Cytoscape from "cytoscape";
// import BubbleSets from 'cytoscape-bubblesets';
// import COSEBilkent from "cytoscape-cose-bilkent";
// import cola from "cytoscape-cola";
import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";

Cytoscape.use(edgehandles);

function ExploraODS() {
  const layout = {
    name: "preset",
    avoidOverlap: true,
    directed: true,
    padding: 10,
  };

  const CACHE_VINC2018 = JSON.parse(JSON.stringify(VINC2018));
  const CACHE_VINC2019 = JSON.parse(JSON.stringify(VINC2019));
  const CACHE_VINC2020 = JSON.parse(JSON.stringify(VINC2020));
  const CACHE_VINC2021 = JSON.parse(JSON.stringify(VINC2021));

  const CACHE_PEF2021 = JSON.parse(JSON.stringify(PEF2021));
  const CACHE_PEF2020 = JSON.parse(JSON.stringify(PEF2020));
  const CACHE_PEF2019 = JSON.parse(JSON.stringify(PEF2019));
  const CACHE_PEF2018 = JSON.parse(JSON.stringify(PEF2018));

  const CACHE_CORE2021 = JSON.parse(JSON.stringify(CORE2021));
  const CACHE_CORE2020 = JSON.parse(JSON.stringify(CORE2020));
  const CACHE_CORE2019 = JSON.parse(JSON.stringify(CORE2019));
  const CACHE_CORE2018 = JSON.parse(JSON.stringify(CORE2018));
  
  const CACHE_ACCESORY2021 = JSON.parse(JSON.stringify(ACCESORY2021));
  const CACHE_ACCESORY2020 = JSON.parse(JSON.stringify(ACCESORY2020));
  const CACHE_ACCESORY2019 = JSON.parse(JSON.stringify(ACCESORY2019));
  const CACHE_ACCESORY2018 = JSON.parse(JSON.stringify(ACCESORY2018));

  const [selectedNetworkData, setNetworkData] = useState({
    DATA: JSON.parse(JSON.stringify(CACHE_VINC2021)),
  });

  const [selectedODS, setODSValue] = useState(0);
  const [selectedYear, setYear] = useState(2021);
  const [selectedType, setType] = useState(0);
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

  const [yearsList, setYears] = useState([
    {
      label: "2018",
      value: 2018,
    },
    {
      label: "2019",
      value: 2019,
    },
    {
      label: "2020",
      value: 2020,
    },
    {
      label: "2021",
      value: 2021,
    },
  ]);

  const [typeList, setTypes] = useState([
    {
      label: "Vinculacion",
      value: 0,
    },
    {
      label: "PEF",
      value: 1,
    },
    {
      label: "Core_PP",
      value: 2,
    },
    {
      label: "Accessory_PP",
      value: 3,
    },
  ]);

 // const [listODS, setODS] = useState([
  // ]);

  async function filterODS() {
    let filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2021)); // DEFAULT
    switch (selectedYear) {
      case 2021:
        filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2021));
        console.log("selectedYear", selectedYear);
        break;
      case 2020:
        filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2020));
        console.log("selectedYear", selectedYear);
        break;
      case 2019:
        filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2019));
        console.log("selectedYear", selectedYear);
        break;
      case 2018:
        filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2018));
        console.log("selectedYear", selectedYear);
        break;
      default:
        break;
    }

    if (selectedODS !== 0) {
      console.log("filteredNetwork", filteredNetwork);
      let findNodes = new Array(0);

      let getNodeID = [...filteredNetwork.elements.nodes].find(
        (x) => Number(x.data["name"]) === selectedODS
      );

      let filteredEdges = [...filteredNetwork.elements.edges].filter(
        (x) =>
          x.data["target"] === getNodeID.data["id"] ||
          x.data["id"] === getNodeID.data["id"]
      );

      filteredEdges.forEach((x) => findNodes.push(x.data["source"]));
      let filteredNodes = [...filteredNetwork.elements.nodes].filter(
        (x) =>
          findNodes.includes(x.data["id"]) ||
          x.data["id"] === getNodeID.data["id"]
      );

      filteredNetwork.elements.nodes = filteredNodes;
      filteredNetwork.elements.edges = filteredEdges;
    }

    const setData = { DATA: filteredNetwork };
    setNetworkData(setData);
    setLoading(false);
  }

  useEffect(() => {
    filterODS();
  }, [selectedODS]);

  useEffect(() => {
    console.log("selected type", selectedType);
    
  }, [selectedType]);

  useEffect(() => {
    console.log("selected year", selectedYear);
    filterODS();
  }, [selectedYear]);

  useEffect(() => {
    console.log("network updated", selectedNetworkData.DATA);
  }, [selectedNetworkData]);

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
                <h5 className="card-category">
                  Explora ODS y Programas Presupuestarios
                </h5>
                <CardTitle tag="h2"></CardTitle>
              </CardHeader>
              <CardBody>
                <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                <Row>
                  <Col md="4">
                    <b style={{ color: "#fff" }}>Seleccionar Tipo: </b>
                    <div class="select-dropdown">
                      <select
                        value={selectedType}
                        disabled={loading}
                        onChange={(e) => setType(Number(e.currentTarget.value))}
                      >
                        {typeList.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                  </Col>
                  <Col md="4">
                    <b style={{ color: "#fff" }}> Seleccionar Año: </b>
                    <div class="select-dropdown">
                      <select
                        value={selectedYear}
                        disabled={loading}
                        onChange={(e) => setYear(Number(e.currentTarget.value))}
                      >
                        {yearsList.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                  </Col>
                  <Col md="4">
                    <b style={{ color: "#fff" }}> Seleccionar ODS: </b>
                    <div class="select-dropdown">
                      <select
                        disabled={loading}
                        onChange={(e) =>
                          setODSValue(Number(e.currentTarget.value))
                        }
                      >
                        {items.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                  </Col>
                </Row>
                <div
                  style={{
                    backgroundColor: "#fff",
                    marginTop: 10,
                    borderRadius: 30,
                  }}
                >
                  {selectedNetworkData.DATA != null
                    ? cytosGraph(selectedNetworkData.DATA)
                    : null}
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

/* <div style={{ backgroundColor: "#fff", margin: 40 }}>
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
</div>  */
