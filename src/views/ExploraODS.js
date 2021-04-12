import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
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
import popper from 'cytoscape-popper';
// import BubbleSets from 'cytoscape-bubblesets';
// import COSEBilkent from "cytoscape-cose-bilkent";
// import cola from "cytoscape-cola";
import CytoscapeComponent from "react-cytoscapejs";
import edgehandles from "cytoscape-edgehandles";

import { Button } from 'semantic-ui-react';

Cytoscape.use(popper);

const ReactButton = () => {
  return <Button type="button">React Button</Button>;
};

const createContentFromComponent = (component) => {
  const dummyDomEle = document.createElement('div');
  ReactDOM.render(component, dummyDomEle);
  document.body.appendChild(dummyDomEle);
  return dummyDomEle;
};

Cytoscape.use(edgehandles);

function ExploraODS() {
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

  const [loading, setLoading] = useState(true);
  const [countPP, setPPCount] = useState(0);
  const [selectedODS, setODSValue] = useState(0);
  const [selectedYear, setYear] = useState(2021);
  const [selectedType, setType] = useState("VINC");
  const [selectedLayout, setLayout] = useState("Red");
  const [selectedLayoutData, setLayoutData] = useState({
    name: "preset",
    avoidOverlap: true,
    directed: true,
    padding: 10,
  });
  const [selectedNetworkData, setNetworkData] = useState({
    DATA: JSON.parse(JSON.stringify(CACHE_VINC2021)),
  });
  const [items] = useState([
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
  const [yearsList] = useState([
    {
      label: "2018",
      value: 2018,
      CACHE_VINC: CACHE_VINC2018,
      CACHE_PEF: CACHE_PEF2018,
      CACHE_CORE: CACHE_CORE2018,
      CACHE_ACCESORY: CACHE_ACCESORY2018,
    },
    {
      label: "2019",
      value: 2019,
      CACHE_VINC: CACHE_VINC2019,
      CACHE_PEF: CACHE_PEF2019,
      CACHE_CORE: CACHE_CORE2019,
      CACHE_ACCESORY: CACHE_ACCESORY2019,
    },
    {
      label: "2020",
      value: 2020,
      CACHE_VINC: CACHE_VINC2020,
      CACHE_PEF: CACHE_PEF2020,
      CACHE_CORE: CACHE_CORE2020,
      CACHE_ACCESORY: CACHE_ACCESORY2020,
    },
    {
      label: "2021",
      value: 2021,
      CACHE_VINC: CACHE_VINC2021,
      CACHE_PEF: CACHE_PEF2021,
      CACHE_CORE: CACHE_CORE2021,
      CACHE_ACCESORY: CACHE_ACCESORY2021,
    },
  ]);
  const [typeList] = useState([
    {
      label: "Vinculacion",
      value: "VINC",
    },
    {
      label: "PEF",
      value: "PEF",
    },
    {
      label: "Core_PP",
      value: "CORE",
    },
    {
      label: "Accessory_PP",
      value: "ACCESORY",
    },
  ]);
  const [layoutList] = useState([
    {
      label: "Red",
      value: "Red",
      data: { name: "preset", avoidOverlap: true, directed: true, padding: 10 },
    },
    {
      label: "Grid",
      value: "Grid",
      data: { name: "grid", avoidOverlap: true, directed: true, padding: 10 },
    },
    {
      label: "Random",
      value: "Random",
      data: { name: "random", avoidOverlap: true, directed: true, padding: 10 },
    },
  ]);

  useEffect(() => {
    console.log("PP count", countPP);
  }, [countPP]);
  
  useEffect(() => {
    console.log("network updated", selectedNetworkData.DATA);
  }, [selectedNetworkData]);

  useEffect(() => {
    filterODS();
    console.log("selected ODS", selectedODS);
  }, [selectedODS]);

  useEffect(() => {
    console.log("selected type", selectedType);
    filterODS();
  }, [selectedType]);

  useEffect(() => {
    console.log("selected year", selectedYear);
    filterODS();
  }, [selectedYear]);

  useEffect(() => {
    console.log("selectedLayout", selectedLayout);
    setLoading(true)
    setLayoutData(layoutList.find((x) => x.value === selectedLayout).data);
    setLoading(false)
  }, [selectedLayout]);

  async function filterODS() {
    setLoading(true)
    let filteredNetwork = JSON.parse(JSON.stringify(CACHE_VINC2021)); // DEFAULT
    switch (selectedType) {
      case "VINC":
        filteredNetwork = JSON.parse(
          JSON.stringify(
            yearsList.find((x) => x.value === selectedYear).CACHE_VINC
          )
        );
        break;
      case "PEF":
        filteredNetwork = JSON.parse(
          JSON.stringify(
            yearsList.find((x) => x.value === selectedYear).CACHE_PEF
          )
        );
        break;
      case "CORE":
        filteredNetwork = JSON.parse(
          JSON.stringify(
            yearsList.find((x) => x.value === selectedYear).CACHE_CORE
          )
        );
        break;
      case "ACCESORY":
        filteredNetwork = JSON.parse(
          JSON.stringify(
            yearsList.find((x) => x.value === selectedYear).CACHE_ACCESORY
          )
        );
        break;
      default:
        break;
    }

    if (selectedODS !== 0) {
      let getNodeID = [...filteredNetwork.elements.nodes].find(
        (x) => Number(x.data["name"]) === selectedODS
      );

      let filteredEdges = [...filteredNetwork.elements.edges].filter(
        (x) =>
          x.data["target"] === getNodeID.data["id"] ||
          x.data["id"] === getNodeID.data["id"]
      );

      let findNodes = new Array(0);
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
    setPPCount(
      selectedODS !== 0
        ? filteredNetwork.elements.nodes.length - 1
        : filteredNetwork.elements.nodes.length - 17
    );
    setLoading(false);
  }

  const cyRef = useRef(null);
  const cyPopperRef = useRef(null);

  useEffect(() => {
    const cy = cyRef.current;

    cy.nodes().on('mouseover', (event) => {

      cyPopperRef.current = event.target.popper({
        content: () => {

          let div = document.createElement('div');
          // adding id for easier JavaScript control
          //div.id = tooltipId;

          // adding class for easier CSS control
          div.classList.add('target-popper');

          let table = document.createElement('table');
          div.append(table);
          let targetData = event.target.data();
          const propiedades = ["EdgeCount", "Monto", "PP_por_Monto", "Redundancy", "LatapyClustering", "Aplicabilidad"]
          for (let prop in targetData) {
            if (!targetData.hasOwnProperty(prop)) continue;
  
            let targetValue = targetData[prop];
            // no recursive or reduce support
            if (!propiedades.includes(prop)) continue;
            if (typeof targetValue === "object") continue;
  
            let tr = table.insertRow();
  
            let tdTitle = tr.insertCell();
            let tdValue = tr.insertCell();
  
            tdTitle.innerText = prop;
            tdValue.innerText = targetValue;
          }
      
          //div.innerHTML = "<br><b>&nbsp;Name: "+event.target.data("name")+"</b></br>" + 
          //"<br><b>&nbsp;Name: "+event.target.data("name")+"</b></br>";
      
          document.body.appendChild(div);
      
          return div;
        },//createContentFromComponent("<b>"+ele.id()+"</b>"), // (<ReactButton />),<Button type="button">"<b>"+ele.id()+"</b>"</Button>
        popper: {
          placement: 'right',
          removeOnDestroy: true,
        },
      });
    });

    cy.nodes().on('mouseout', () => {
      if (cyPopperRef) {
        cyPopperRef.current.destroy();
      }
    });
  }, []);

  //const elements = {
  //  ...
  //};

  function cytosGraph(network) {




    return (
      <CytoscapeComponent
        cy={(cy) => {
          //this.cy = cy
          cy.center();
          cy.$("node").on("grab", function (e) {
            var ele = e.target;
            ele.connectedEdges().style({ "line-color": "red" });
          });

          cy.$("node").on("select", function (e) {
            var ele = e.target;
            ele.connectedEdges().style({ "line-color": "#red" });
          });
          cyRef.current = cy;
        }}
        elements={CytoscapeComponent.normalizeElements({
          nodes: network.elements.nodes,
          edges: network.elements.edges,
        })}
        stylesheet={graphStyle.style}
        layout={selectedLayoutData}
        style={{ width: "100%", height: "1000px" }}
        X
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
              <h1>Observatorio de Programas Presupuestarios enfocados al cumplimiento de los ODS</h1>
                <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                <Row>
                  <Col md="3">
                    <b style={{ color: "#fff" }}>Seleccionar Tipo: </b>
                    <div className="select-dropdown">
                      <select
                        value={selectedType}
                        disabled={loading}
                        onChange={(e) => setType(e.currentTarget.value)}
                      >
                        {typeList.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                  </Col>
                  <Col md="3">
                    <b style={{ color: "#fff" }}> Seleccionar Año: </b>
                    <div className="select-dropdown">
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
                  <Col md="3">
                    <b style={{ color: "#fff" }}> Seleccionar ODS: </b>
                    <div className="select-dropdown">
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
                  <Col md="3">
                    <b style={{ color: "#fff" }}> Seleccionar Layout: </b>
                    <div className="select-dropdown">
                      <select
                        value={selectedLayout}
                        disabled={loading}
                        onChange={(e) => setLayout(e.currentTarget.value)}
                      >
                        {layoutList.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md="12">
                    <b style={{ color: "#fff" }}>
                      {" "}
                      Cantidad de Programas Presupuestarios:{" "}
                    </b>
                    <b style={{ color: "#fff" }}>{countPP}</b>
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
