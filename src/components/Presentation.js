import React, { Component, Fragment } from 'react';

class Presentation extends Component {

    render() {
        return (
            <Fragment>
                <div className='anchor' id="presentation" />
                <div className="presentationText">
                    <p className='paragraphTitle'>Quién soy.</p>
                    <p className="fontText">Profesional con con sólida base en desarrollo front-end y diseño UX/UI. Disfruto trabajando de manera organizada, con atención al detalle, aportando soluciones creativas que generen impacto.
                    </p>
                    <p className="fontText">
                    Valoro el trabajo en equipo, la comunicación efectiva y la responsabilidad profesional, y creo en el aprendizaje continuo y en mantener una mentalidad abierta, crítica y orientada a la mejora constante.
                    </p>
                    <p className="fontText"> Busco seguir creciendo en equipos multidisciplinares donde diseño y tecnología se integren para crear experiencias innovadoras.</p>
                    <p className='paragraphTitle'>¿Qué puedo aportar a tu proyecto?</p>
                </div>
            </Fragment>
        );
    };
};

export default Presentation;

