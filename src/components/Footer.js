import React, { Component } from 'react';

const buttonsData = [
    {
        url: "https://twitter.com/LuciaHerr7",
        icon: "iconNW fab fa-twitter",
    },
    {
        url: "https://www.linkedin.com/in/luc%C3%ADa-herrador-carrasco-bb178097/",
        icon: "iconNW fab fa-linkedin"
    },
    {
        url: "https://github.com/luciaherrrador",
        icon: "iconNW fab fa-github-alt"
    },
    {
        url: "mailto:luciaherradorcarrasco@gmail.com",
        icon: "iconNW fas fa-envelope"
    },
]

const linksData = [
    {
        href: "#top",
        innerHtml: "Home",
    },
    {
        href: "#presentation",
        innerHtml: "Sobre mí",
    },
    {
        href: "#projects",
        innerHtml: "Proyectos",
    },
    {
        href: "#contact",
        innerHtml: "Contacto",
    },

]

class Footer extends Component {
    render() { 
        return ( 
            <footer className="containerFooter">
                <ul className="containerNetworks">
                {
                    buttonsData.map((item, index) => {
                        return (
                            <li key={index} className='iconContainerNW'>
                                <a href={item.url} target='_blank'>
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        );
                    }
                    )
                }
                </ul>
                <ul className="containerLinks">
                {
                    linksData.map((item, index) => {
                        return (
                            <li className="itemLink" >
                                <a className='linkWeb footerLink' href={item.href}>{item.innerHtml}
                                </a>
                            </li>
                        );
                    }
                    )
                }
                </ul>
            </footer>    
         );
    };
};
 
export default Footer;