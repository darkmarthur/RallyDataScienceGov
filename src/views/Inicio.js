import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Inicio() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                {/* <h5 className="card-category">Black Table Heading</h5> */}
                <CardTitle tag="h3">
                  Observatorio Ciudadano del destino presupuestal enfocado al cumplimiento de los Objetivos del Desarrollo Sostenible
                </CardTitle>
              </CardHeader>
              <CardBody>
              <p>
                  Este sitio ha sido creado para proveer los datos recopilados y
                  calculados por el equipo <b>DataOpossum</b> para el{" "}
                  <a href="https://www.transparenciapresupuestaria.gob.mx/es/PTP/Convocatoria_rally_2021" target="_blank" rel="noreferrer">
                    Rally de Datos: Explorando Datos para el Desarrollo
                    Sostenible
                  </a>
                </p>
                <p>&nbsp;</p>
                  <p>
                    <span>
                      Nuestra propuesta de política pública es establecer un{" "}
                    </span>
                    <span style={{ fontWeight: 700 }}>
                      Observatorio Ciudadano del destino presupuestal enfocado
                      al cumplimiento de los ODS
                    </span>
                    &nbsp;que permita dar seguimiento y asistir en la toma de
                    decisiones.{" "}
                  </p>
                  <p>
                    Para este fin proporcionamos datos curados y visualización
                    de la relación entre los ODS y los PPs.{" "}
                  </p>
                  <p>Hasta el momento proporcionamos:</p>
                  <ul>
                    <li>
                      Una base de datos con información curada del 2018 al 2021
                      de:
                    </li>
                    <ul>
                      <li>
                        Vinculación de Programas Presupuestarios del PEF a los
                        Objetivos de Desarrollo Sostenible
                      </li>
                      <li>Presupuesto de Egresos de la Federación</li>
                    </ul>
                  </ul>

                  <ul>
                    <li>
                      Modelos de redes para cada año presupuestal (4) (formato
                      JSON)
                    </li>
                    <ul>
                      <li>
                        Vinculación de Programas Presupuestarios del PEF a los
                        Objetivos de Desarrollo Sostenible (Vinculación)
                      </li>
                      <li>
                        Vinculación de Programas Presupuestarios del PEF a los
                        Objetivos de Desarrollo Sostenible con presupuesto
                        asignado (PEF)
                      </li>
                      <li>
                        Programas Presupuestarios compartidos entre años con
                        presupuesto asignado (Core)
                      </li>
                      <li>
                        Programas Presupuestarios no incluidos en el Core
                        (Accesorios)
                      </li>
                    </ul>
                  </ul>

                  <ul>
                    <li>
                      Cálculo de métricas locales y globales embebidos en las
                      redes
                    </li>
                    <li>
                      Un módulo de Python (en proceso de documentación) para
                      limpieza de datos y replicar el análisis de las bases de
                      datos así como el manejo de las redes proporcionadas
                    </li>
                    <li>
                      Visualización de las redes en el sitio para observar la
                      relación de PPs y ODS de interés
                    </li>
                  </ul>
                  <hr />
              <p>
                  El rally se divide en 3 retos y podrás acceder a nuestros
                  resultados correspondientes en el menú lateral del sitio
                </p>
                <hr />
                <h1>Publicaciones del reto 3</h1>
                <div
                  className="row"
                  style={{
                    textAlign: "center",
                    //display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="col-sm-4">
                  <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falientometal%2Fposts%2F10158722643700804&width=500&show_text=true&appId=1485452328231316&height=750" 
                  width={500}
                  height={750} 
                  style={{ border: "none", overflow: "hidden", backgroundColor: "#fff" }}
                  scrolling="no" 
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />

                    <hr />
                  </div>
                  <div className="col-sm-4">
                  <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falientometal%2Fposts%2F10158722642245804&width=500&show_text=true&appId=1485452328231316&height=750" 
                  width={500}
                  height={750}
                  style={{ border: "none", overflow: "hidden", backgroundColor: "#fff" }}
                  scrolling="no" 
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />

                    <hr />
                  </div>
                  <div className="col-sm-4">
                  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falientometal%2Fposts%2F10158722641775804&width=500&show_text=true&appId=1485452328231316&height=750" 
                  width={500} 
                  height={750} 
                  style={{ border: "none", overflow: "hidden", backgroundColor: "#fff" }}
                  scrolling="no" 
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />

                    <hr />
                  </div>
                </div>
                
                <hr />

                <hr />
                <h3>Convocatoria</h3>
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

export default Inicio;
