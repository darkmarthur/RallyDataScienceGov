import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

function Reto1() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              {/* <CardHeader className="mb-5">
                <CardTitle tag="h3">
                  Rally de Datos: Explorando Datos para el Desarrollo Sostenible
                </CardTitle>
              </CardHeader> */}
              <CardBody>
                <h1>Biodiversidad y Acciones por el Clima</h1>
                <h2>Acciones del PEF 2021 - Agenda 2030</h2>
                <p>
                  Acciones del PEF 2021 rumbo al cumplimiento de los objetivos
                  de la Agenda 2030 en materia de Biodiversidad y Acciones por
                  el Clima
                </p>
                <p>
                  En el 2016 en México entró en vigor la Agenda 2030 para el
                  Desarrollo Sostenible. Compuesto por 17 Objetivos de
                  Desarrollo Sostenible (ODS), el documento titulado
                  “Transformar Nuestro Mundo: la Agenda 2030 para el Desarrollo
                  Sostenible” traza una hoja de ruta clara para un mejor futuro.
                  Desde la eliminación de la pobreza hasta el combate al cambio
                  climático, la educación, la igualdad de la mujer, la defensa
                  del medio ambiente o el diseño de nuestras ciudades los ODS
                  representan un plan de acción compuesto de tareas pendientes
                  para la humanidad.
                </p>

                <p>
                  El Presupuesto de Egresos de la Federación (PEF) 2021 es
                  elaborado por medio de la Secretaría de Hacienda y Crédito
                  Público y establece la cantidad, la forma de distribución y el
                  destino de los recursos públicos.
                </p>
                <hr />
                <img
                  alt="..."
                  className="squaredImg"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    width: "100%",
                  }}
                  src={require("assets/img/graph1.png").default}
                />
                <hr />
                <p>
                  Dentro de la temática de Biodiversidad y Acciones por el clima
                  el PEF 2021 aprobó al ramo de Medio Ambiente y Recursos
                  Naturales (R-16) un presupuesto total de $2,148,543,796 MN
                  distribuido en 5 programas públicos:
                </p>
                <img
                  alt="..."
                  className="squaredImg"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    width: "100%",
                  }}
                  src={require("assets/img/graph2.png").default}
                />

                <hr />
                <p>
                  Los ODS a través de sus 17 objetivos proponen 169 metas a
                  cumplir para el 2030. La temática de Biodiversidad y Acciones
                  por el clima, con 111 Programas Presupuestarios puntualiza 232
                  objetivos dentro de estas metas y a su vez estos PP se
                  encuentran distribuidos en 19 Ramos dentro de la estructura
                  programática del PEF 2021.
                </p>
                <img
                  alt="..."
                  className="squaredImg"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    width: "100%",
                  }}
                  src={require("assets/img/graph3.png").default}
                />
                <hr />
                <iframe
                  title="Facebook Post"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falientometal%2Fposts%2F10158660692545804&width=500&show_text=true&appId=1485452328231316&height=666"
                  width={500}
                  height={666}
                  style={{ border: "none", overflow: "hidden", backgroundColor: "#fff" }}
                  scrolling="no"
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Reto1;
