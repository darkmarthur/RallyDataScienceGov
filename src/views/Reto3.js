import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

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
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
              <>
              <h1>Los Objetivos de Desarrollo Sostenible como una red de
                    programas presupuestarios para la vigilancia ciudadana del
                    presupuesto</h1>
                
                  <p className="title" style={{ textAlign: "justify" }}>
                  Rally de Datos: Explorando Datos para el Desarrollo Sostenible
                  </p>
                  
                  <p style={{textAlign: 'justify'}}>Este marco de trabajo facilita el análisis y seguimiento del presupuesto así como la identificación de patrones para su asignación
                   en el cumplimiento de los ODS y hacia el cumplimiento de la Agenda 2030.</p>
                  <p>&nbsp;</p>
                  <h2>Introducción</h2>
                  <p style={{textAlign: 'justify'}}>La base del desarrollo sostenible se encuentra en el presupuesto gubernamental. Sin importar el ODS en el que estemos interesados,
                   no hay un impacto real sobre este objetivo si no se han destinado suficientes recursos públicos para asegurar su implementación. Si queremos reforzar el compromiso 
                   entre el gobierno y los ciudadanos debemos no solo garantizar y facilitar el acceso de la población a la información presupuestaria sino proveer herramientas para 
                   facilitar su participación dentro del proceso presupuestal. </p>
                  <p style={{textAlign: 'justify'}}>&nbsp;</p>
                  <p style={{textAlign: 'justify'}}><span>Para acercar a los ciudadanos al proceso presupuestal nuestra propuesta de
                     política pública es establecer un </span><span style={{fontWeight: 700}}>Observatorio Ciudadano del destino presupuestal enfocado 
                     al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) </span>que permita fortalecer la habilidad ciudadana para analizar 
                     el presupuesto, dar seguimiento e involucrarse en el debate en torno al presupuesto para participar en la toma de decisiones. Con el
                      fomento de una sociedad mås participativa esperamos incentivar al gobierno a mejorar la planeación, el gasto y su reporte para el cumplimiento de los ODS.</p>
                  <p style={{textAlign: 'justify'}}>Para avanzar en lograr este fin proporcionamos una base de datos curada y la visualización de un mo
                  delo de red bipartita representando la relación entre los ODS con los Programas Presupuestarios (PPs) del Presupuesto de Egresos de la Federación (PEF). </p>
                  <p style={{textAlign: 'justify'}}>&nbsp;</p>
                  <p style={{textAlign: 'justify'}}>La importancia de nuestra propuesta radica en utilizar técnicas tomadas de la Ciencia de Redes para
                   analizar los documentos presupuestarios.</p>
                  <p>&nbsp;</p>
                  <p>Hasta el momento proporcionamos:</p>
                  <ul><li>Una base de datos con información curada del 2018 al 2021 de:</li>
                  
                  <ul><li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible</li>
                    <li>Presupuesto de Egresos de la Federación</li></ul>
                  </ul>
                  <ul><li>Modelos de redes para cada año presupuestal (4) (formato JSON)</li>
                  
                  <ul><li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible (Vinculación)</li>
                    <li>Vinculación de Programas Presupuestarios del PEF a los Objetivos de Desarrollo Sostenible con presupuesto asignado (PEF)</li>
                    <li>Programas Presupuestarios compartidos entre años con presupuesto asignado (Core)</li>
                    <li>Programas Presupuestarios no incluidos en el Core (Accesorios)</li>
                    </ul>
                  </ul>
                  <ul><li>Cálculo de métricas locales y globales embebidos en las redes</li>
                    <li>Un módulo de Python (en proceso de documentación) para limpieza de datos y replicar el análisis de las bases de datos así como el manejo de las redes proporcionadas</li>
                    <li>Visualización de las redes en el sitio para observar la relación de PPs y ODS de interés</li>
                  </ul>
                </>

                <hr />
                <SRLWrapper>
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
                        className="poninterImg"
                        src={require("assets/img/posts/3.1.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/3.2.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/3.3.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/3.4.png").default}
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
                        className="poninterImg"
                        src={require("assets/img/posts/2.1.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/2.2.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/2.3.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/posts/2.4.png").default}
                      />
                    </div>
                  </div>
                  
                </SRLWrapper>
                <hr />
                <h2>Medidas implementadas</h2>
                <p>
                <ul>
                <li>Radio de Atención</li>
                <li>Coeficiente de Metamorfósis</li>
                <li>Coeficiente de Agrupamiento</li>
                <li>Densidad</li>
                <li>Coeficiente de Redundancia</li>

                </ul>
                </p>
                <h3>Radio de Atención</h3>
                <p style={{textAlign: 'justify'}}>
                Los ODS contemplan 169 metas, que a nivel nacional pueden abarcar distintos ámbitos de atención, es por esto que la SHCP en conjunto con el PNUD 
                implementó un catálogo de submetas, en las que se dividen 102 de las 169 metas. De tal manera que, si una meta incluye distintos ámbitos de atención, 
                esta es desagregada en de 1 a 6 submetas. Ya que los programas presupuestarios pueden estar relacionados con uno o varios ámbitos de atención, y tomando 
                en cuenta que no todas las metas se dividen en la misma cantidad de submetas, establecimos el Radio de Atención (RA) como una medida que nos 
                permite comparar la cobertura de ámbitos entre PPs dentro de una escala de 0 a 1.
                <hr />
                Definimos el Radio de atención como:
                <hr />
                <img
                  alt="..."
                  className="squaredImg"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    width: "20%",
                  }}
                  src={require("assets/img/RA_Formula.png").default}
                />
                <hr />
                Donde:
                sm_Mmax máximo número de submetas de la meta de los ODS.
                smpp = submetas por Programa Presupuestario (PP)
                <hr />
                Una vez que establecimos el cálculo del RA elegimos representar esta medida para cada meta de los ODS 1 al 16. Cada columna corresponde a un ODS y 
                cada fila representa la meta respectiva al ODS. Dado que no todos los ODS tienen el mismo número de metas, hay recuadros que no se llenan. El tamaño 
                del círculo representa la cantidad de PPs mientras la escala de color es el promedio del Radio de Atención entre los PPs que contribuyen a esa meta.
                Al comparar los PPs que cuentan con presupuesto aprobado en el PEF desde el 2018 al 2021 identificamos que el enfoque hacia algunas metas ha sido 
                principalmente el aumento de la cantidad de PPs, en algunos casos el RA se ha mantenido, en otros incluso ha disminuido. Por ejemplo, en las submetas 
                2.2, 2.3, 8.5 y 16.3 se ha incrementado el número de PPs. Sin embargo, este aumento no se ve reflejado también en un aumento de su Radio de Atención 
                del cumplimiento de las metas a los cuales fueron asignados. Es decir, está aumentando el número de PPs sin que esto se refleje en un incremento hacia 
                el cumplimiento total de la meta. Por otro lado, entre los PPs del archivo de vinculación y los que tienen presupuesto aprobado para el 2021 en las metas 
                9.3, 2.5, 2.6, y 11.6 observamos una disminución de la cantidad de PPs y a su vez un aumento en su RA. Por ello es necesario tener en cuenta que el número 
                de PPs, por sí mismo, no significa que se esté poniendo mayor o menor atención en el cumplimiento de metas, de igual manera una mayor selección de PPs que 
                nos den un alto RA.  Basta con una pequeña cantidad de PPs de alto espectro para tener los objetivos cubiertos de una meta (alto RA). Cada caso debe 
                revisarse de manera individual, en un análisis más profundo que podría llevarnos a evaluar si está habiendo una mejor selección de PPs, optando por 
                PPs de un mayor RA o se están dejando atrás áreas de atención. Esta es una manera de evidenciar qué metas es necesario revisar y poner especial 
                atención, para evitar que se deje sin presupuesto a PPs con alto RA, como en los destinados las metas 7.4, 12.7, 14.4, 15.10; pues se estarían dejando 
                sin recursos a PPs de amplio espectro que ayudan al cumplimiento total de la meta en cuestión.
                <hr />
                Al implementar este análisis, podríamos tener un ahorro y uso más eficiente del presupuesto al replantear objetivos de los PPs presentes inicialmente 
                para aumentar el espectro de atención, en lugar de aumentar la cantidad de PPs que podrían tener características redundantes. Es por ello que proponemos 
                que si es necesario el aumento de PPs, estos PPs deben ser diseñados para tener un alto espectro de atención así como mantener una diversidad de enfoques.


                </p>
                <p style={{textAlign: 'justify'}}>

                  
                </p>
                <p style={{textAlign: 'justify'}}>

                  
                </p>
                <hr />

                <hr />
                <h3>Resultados</h3>
                <SRLWrapper>
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
                        alt="Radio de Atención para los Programas Presupuestales de contribución directa con presupuesto en el PEF"
                        className="poninterImg"
                        src={require("assets/img/Results/RA/PP_1_inPEF.gif").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="Radio de Atención para los Programas Presupuestales de contribución directa con presupuesto en el PEF"
                        className="poninterImg"
                        src={require("assets/img/Results/RA/PP_2_inPEF.gif").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/Results/RA/PP_1_vinc.gif").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/Results/RA/PP_2_vinc.gif").default}
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
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2.5.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/Core.gif").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2.6.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="..."
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/LosRedundancy.png").default}
                      />
                    </div>
                  </div>

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
                        alt="2018 Red Accesoria"
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2018_Accessory_PP_radial.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="2019 Red Accesoria"
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2019_Accessory_PP_radial.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="2020 Red Accesoria"
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2020_Accessory_PP_radial.png").default}
                      />
                    </div>
                    <div className="col-sm-1 col-md-6 col-lg-3">
                      <img
                        alt="2021 Red Accesoria"
                        className="poninterImg"
                        src={require("assets/img/Results/Core_Accesory/2021_Accessory_PP_radial.png").default}
                      />
                    </div>
                  </div>
                  
                </SRLWrapper>


                <h3>Fuentes</h3>
                <p>
                <ul>
                <li>
                  <span>Anexo 2 de los lineamientos para el proceso de programación y presupuestación 2021. </span>(2021). Retrieved 24 March 2021, from <a href="https://www.google.com/url?q=https://www.gob.mx/cms/uploads/attachment/file/556730/ANEXO_2_Vinculacion_del_Presupuesto_a_los_Objetivos_del__Desarrollo_Sostenible.pdf&sa=D&source=editors&ust=1618263648623000&usg=AOvVaw1hwSVygT6ngaCc_wqMFnAa" target="_blank">https://www.gob.mx/cms/uploads/attachment/file/556730/ANEXO_2_Vinculacion_del_Presupuesto_a_los_Objetivos_del__Desarrollo_Sostenible.pdf</a></li>
                  <li>DOF. Reforma a la Ley de Planeación (2018) Cámara de Diputados del H. Congreso de la Unión, Mexico (2018) Decreto por el que se crea el Consejo Nacional de la Agenda 2030 para el Desarrollo Sostenible D. Of. la Fed. (2017), 10.22201/iij.24487872e.2016.16.10409</li>
                  <li>Dorantes, J. (2021). Transparencia Presupuestaria | Inicio. Retrieved 24 March 2021, from <a href="https://www.google.com/url?q=https://www.transparenciapresupuestaria.gob.mx&sa=D&source=editors&ust=1618263648624000&usg=AOvVaw1qnOz7EkZ1AyAYfjzQLjol" target="_blank">https://www.transparenciapresupuestaria.gob.mx</a></li>
                  <li>Gamez, M. (2021). Objetivos y metas de desarrollo sostenible. Retrieved 24 March 2021, from <a href="https://www.google.com/url?q=https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/&sa=D&source=editors&ust=1618263648624000&usg=AOvVaw2HnBWFunAG2YhD5vZWI_pJ" target="_blank">https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/</a></li>
                  <li>Hege, E., Brimont, L (2018). Integrating SDGs into national budgetary processes. <span style={{fontStyle: 'italic'}}>Studies </span>N°05/18, IDDRI, Paris, France, 20 p.</li>
                  <li><span>Independent Group of Scientists appointed by the Secretary-General (2019) Global Sustainable Development Report 2019: The future is now—science for achieving sustainable development. United Nations, New York </span>Retrieved 24 March 2021, from https://sustainabledevelopment.un.org/content/documents/24797GSDR_report_2019.pdf</li>
                  <li>J. Surasky Romper &nbsp;(2017) Compartimentos estancos como camino hacia el desarrollo sostenible. Breaking watertight compartments as a path to sustainable development Rev. Int. Coop. y Desarrollo., 4 (2017), pp. 62-80</li>
                  <li>&nbsp;Kroll et al., 2019 C. Kroll, A. Warchold, P. Pradhan (2019). Sustainable Development Goals (SDGs): Are we successful in turning trade-offs into synergies? Palgrave Commun., 1–11, 10.1057/s41599-019-0335-5</li>
                  <li>Moure, M., Sandholz, S., Wannewitz, M., &amp; Garschagen, M. (2021). No easy fixes: Government workers perception of policy (in) coherence in the implementation of the Post-2015 Agenda in Mexico. Climate Risk Management, 100270.</li>
                  <li>Scharlemann, J. P., Brock, R. C., Balfour, N., Brown, C., Burgess, N. D., Guth, M. K., ... &amp; Kapos, V. (2020). Towards understanding interactions between Sustainable Development Goals: the role of environment–human linkages. Sustainability Science, 15(6), 1573-1584. doi: 10.1007/s11625-020-00799-6</li>
                  <li>ONU México » Objetivos de Desarrollo Sostenible. (2021). Retrieved 24 March 2021, from https://www.onu.org.mx/agenda-2030/objetivos-del-desarrollo-sostenible/</li>
                  <li>SDG Country Profiles. Mexico. (2021). Retrieved 24 March 2021, from https://country-profiles.unstatshub.org/mex#goal-1</li>
                  <li>SHCP, 2017. Vinculación del Presupuesto a los Objetivos del desarrollo sostenible. Anexo 2 de los lineamientos para el proceso de programación y presupuestación para el ejercicio fiscal 2018. </li>
                  <li>The United Nations must get its new biodiversity targets right. (2020). <span style={{fontStyle: 'italic'}}>Nature</span>, <span style={{fontStyle: 'italic'}}>578</span>(7795), 337-338. doi: 10.1038/d41586-020-00450-5</li>
                  <li>Unión, Mexico (2018) Decreto por el que se crea el Consejo Nacional de la Agenda 2030 para el Desarrollo Sostenible D. Of. la Fed. (2017), 10.22201/iij.24487872e.2016.16.10409</li>
                </ul>
                </p>
                <h3>Material Adicional</h3>





                <hr />
                <p>
                  Con el objetivo de promover el uso de los datos abiertos,
                  <a
                    href="https://www.gob.mx/hacienda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    La Secretaría de Hacienda y Crédito Público{" "}
                  </a>
                  con su portal de
                  <a
                    href="https://www.transparenciapresupuestaria.gob.mx/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <a
                    href="https://opendataday.org/es_es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Día de los Datos Abiertos
                  </a>
                </p>

                <p>
                  El rally se divide en 3 retos y podrás acceder a nuestros
                  resultados correspondientes en el menú lateral del sitio
                </p>
                <NavLink
                  to={"/reto2"}
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => {}}
                >
                  <a href="#">LINK</a>
                </NavLink>
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
