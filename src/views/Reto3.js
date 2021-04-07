import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Reto3() {
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

              <>
                  <p className="title" style={{textAlign: 'justify'}}>Los Objetivos de Desarrollo Sostenible como una red de programas presupuestarios para la vigilancia ciudadana del presupuesto</p>
                  <p>&nbsp;</p>
                  <p><span>Nuestra propuesta de política pública es establecer un </span><span style={{fontWeight: 700}}>Observatorio Ciudadano del destino presupuestal enfocado al cumplimiento de los ODS</span>&nbsp;que permita dar seguimiento y asistir en la toma de decisiones. </p>
                  <p>Para este fin proporcionamos datos curados y visualización de la relación entre los ODS y los PPs. </p>
                  <p>Hasta el momento proporcionamos:</p>
                  <ul><li>Una base de datos con información curada del 2018 al 2021 de:</li>
                  </ul>
                  <ul><li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible</li>
                    <li>Presupuesto de Egresos de la Federación</li>
                  </ul>
                  <ul><li>Modelos de redes para cada año presupuestal (4) (formato JSON)</li>
                  </ul>
                  <ul><li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible (Vinculación)</li>
                    <li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible con presupuesto asignado (PEF)</li>
                    <li>Programas Presupuestarios compartidos entre años con presupuesto asignado (Core)</li>
                    <li>Programas Presupuestarios no incluidos en el Core (Accesorios)</li>
                  </ul>
                  <ul><li>Cálculo de métricas locales y globales embebidos en las redes</li>
                    <li>Un módulo de Python (en proceso de documentación) para limpieza de datos y replicar el análisis de las bases de datos así como el manejo de las redes proporcionadas</li>
                    <li>Visualización de las redes en el sitio para observar la relación de PPs y ODS de interés</li>
                  </ul>
                </>
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

export default Reto3;

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
