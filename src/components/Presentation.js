import React, { Component, Fragment } from 'react';

class Presentation extends Component {

    render() {
        return (
            <Fragment>
                <div className='anchor' id="presentation" />
                <div className="presentationText">
                    <p className='paragraphTitle'>Quién soy.</p>
                    <p className="fontText">Profesional comprometida y dinámica con competencias desarrolladas en los sectores biotecnológico, educativo y comercial.
                    </p>
                    <p className="fontText">
                    Mi sentido práctico y versatilidad cognitiva me llevaron a formarme en Adalab Digital (Madrid) como desarrolladora web.
                    </p>
                    <p className="fontText"> Soy una persona inquieta y curiosa. La orientación de servicio y visión de conjunto son mis mayores cualidades.</p>
                    <p className='paragraphTitle'>¿Qué puedo aportar a tu proyecto?</p>
                </div>
            </Fragment>
        );
    };
};

export default Presentation;

