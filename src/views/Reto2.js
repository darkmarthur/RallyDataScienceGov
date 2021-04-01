import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

function Reto2() {
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
                <h1>Problemática alrededor del cumplimiento de los ODS</h1>
                <h2>Acciones del PEF 2021 - Agenda 2030</h2>
                <p>
                  Cumplimiento de los objetivos de la Agenda 2030 en materia de
                  Biodiversidad y Acciones por el Clima
                </p>
                <p>
                  En DataOpossum identificamos que una de las problemáticas para
                  el cumplimiento de los Objetivos de Desarrollo Sostenible
                  (ODS) es el posible conflicto entre metas para cumplir con
                  distintos objetivos. Debería de fomentarse el análisis global
                  de la relación entre ODS, su relación con el presupuesto, así
                  como fomentarse el trabajo interdisciplinario y entre
                  distintos sectores de la población para evitar la
                  fragmentación en el cumplimiento de los objetivos. Solucionar
                  una por una las distintas problemáticas puede ser fácil de
                  lograr, pero conlleva un costo, al perseguir distintos
                  objetivos que puede poner en conflicto las metas para
                  distintos sectores. Al mejorar la comunicación entre sectores,
                  así como la evaluación y el fácil acceso a los datos de
                  distintas instituciones puede incrementar el alcance y reducir
                  la complejidad de las metas a alcanzar.
                </p>

                <p>
                  Ha pasado un año desde que el presidente de Francia, Emmanuel
                  Macron calificó los esfuerzos para mantener la biodiversidad y
                  frenar el cambio climático como “la batalla del siglo”. Nos
                  encontramos a comienzos del 2021 y estamos ya a menos de una
                  década para cumplir con la agenda 2030. En la práctica, y en
                  la percepción general, las acciones y decisiones para avanzar
                  en la Agenda 2030 se abordan desde un enfoque aislado con
                  grupos de ODS reducidos. A su vez, los programas enfocados a
                  cumplir con las metas de los ODS son desarrollados y llevados
                  a cabo a por diferentes sectores e instituciones (Moure,
                  2021). Por ejemplo, los programas públicos con un enfoque en
                  la reducción de la pobreza han sido el objetivo del desarrollo
                  sostenible mientras que otros aspectos de la sostenibilidad
                  han jugado un rol menos predominante (Moure, 2021). Hay un
                  desbalance en la política pública de Latinoamérica, ésta se ha
                  inclinado a favor del bloque económico del desarrollo
                  sostenible y se han descuidado los bloques social y ambiental,
                  esto perpetua la externalización de los costos sociales y
                  ambientales (Surasky, 2017).
                </p>
                <p>
                  También existe tensión entre objetivos, el desarrollo (i.e.
                  Crecimiento industrial) y el ambiente (i.e. Preservación de
                  especies y ecosistemas) representan un caso. Generalmente en
                  la competencia entre crecimiento industrial y la preservación
                  de especies y ecosistemas el crecimiento lleva las de ganar.
                  Podemos tener ejemplos claros de cómo la construcción de un
                  nuevo aeropuerto que implicaba la desecación del remanente de
                  un lago y la visión de pérdida de este humedal difícilmente
                  retrasó el comienzo de su construcción a pesar de los intentos
                  de protección. Pocas veces se cuantifican y se toman en cuenta
                  los beneficios que aportan a la población los servicios
                  ecosistémicos de estos lugares.
                </p>
                <p>
                  La disparidad presente con la exigencia en metas a naciones
                  pobres con respecto al cumplimiento de estándares ambientales
                  como las de las naciones más ricas da una percepción de
                  retraso y alienta una carrera por el desarrollo. En este
                  sentido es que debemos lograr cambios significativos en cómo
                  estamos tomando estas decisiones económicas. El gobierno ha
                  creado y modificado leyes, impulsado políticas y establecido
                  lineamientos para la inclusión de objetivos como los de la
                  agenda 2030. La Ley de Planeación se reformó en el 2018 para
                  considerar alcanzar los 17 Objetivos de Desarrollo Sostenible
                  (ODS) planteados en La Agenda 2030 para el Desarrollo
                  Sostenible (DOF, 2018). También se creó el Consejo Nacional de
                  la Agenda 2030 para el Desarrollo Sostenible De México (SRE,
                  2017) para conseguir cooperación entre sectores.
                </p>
                <hr />

                <h3>Fuentes</h3>
                <p>
                  Descarga aquí{" "}
                  <a
                    href="https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/04/17-00011_LazyPersonGuide_flyer_Spanish_final.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    La Guía de los vagos para salvar el mundo
                  </a>{" "}
                  por parte de Las Naciones Unidas.
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
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/1-1.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/1-2.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/1-3.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/1-4.jpg").default}
                    />
                  </div>
                </div>
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
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/2-1.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/2-2.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/2-3.jpg").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/2-4.jpg").default}
                    />
                  </div>
                </div>
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
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/3-1.png").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/3-2.png").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/3-3.png").default}
                    />
                  </div>
                  <div className="col-sm-1 col-md-6 col-lg-3">
                    <img
                      alt="..."
                      className=""
                      src={require("assets/img/posts/3-4.png").default}
                    />
                  </div>
                </div>
                <hr />
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

export default Reto2;
