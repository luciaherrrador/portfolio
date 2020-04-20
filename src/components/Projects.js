import React, { Component, Fragment } from "react";
import ProjectItem from "./ProjectItem";
import web0 from "../images/web0.png";
import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png";
import web7 from "../images/web7.png";

const projectsData = [
  {
    webRef: "https://luciaherrrador.github.io/my-coronavirus-map/",
    photoSrc: web6,
    description:
      "Mapa realizado con Gatsby y Leaflet"
  },
  {
    webRef: "https://luciaherrrador.github.io/Trivia/",
    photoSrc: web7,
    description:
      "Maqueta del juego de Tivial realizada con React y SASS"
  },
  {
    webRef: "https://luciaherrrador.github.io/Mis-recetas-italianas/#/",
    photoSrc: web0,
    description:
      "Buscador de recetas hecho con React"
  },
  {
    webRef: "http://beta.adalab.es/project-promo-h-module-3-team-1-afternoon/#/",
    photoSrc: web1,
    description: "Aplicación de generación de tarjetas ecológicas con React"
  },
  {
    webRef: "http://beta.adalab.es/modulo-3-evaluacion-final-luciaherrrador/#/",
    photoSrc: web2,
    description: "Buscador de personajes de Rick & Morty con React y SASS"
  },
  {
    webRef: "http://beta.adalab.es/modulo-2-evaluacion-final-luciaherrrador/",
    photoSrc: web3,
    description: "Buscador de series con JS Vainilla y SASS"
  },
  {
    webRef: "http://beta.adalab.es/project-promo-h-module-2-team-3-afternoon-jungle-wanderers/",
    photoSrc: web4,
    description: "Aplicación de generación de tarjetas con JS Vainilla y SASS"
  },
  {
    webRef: "http://beta.adalab.es/contact-us-skylabers/",
    photoSrc: web5,
    description:
      "Maquetación de web corporativa con HTML y SASS"
  }
];

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <div className="anchor" id="projects" />
        <div className="containerSectionProjects">
          <p className="paragraphTitle">Algunos de mis proyectos</p>
          <div className="containerProjects">
            {projectsData.map((web, index) => {
              return (
                <ProjectItem
                  key={index}
                  webRef={web.webRef}
                  photoSrc={web.photoSrc}
                  description={web.description}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
