import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    render() {
        const { webRef, photoSrc, description } = this.props;
        return (
            <a className="imageProject" href={webRef} target="_blank">
                <img className="imageWeb" src={photoSrc} alt={description} />
                <span className="projectsSpan">
                    <p className="webDescription">{description}</p>
                </span>
            </a>
        );
    }
}

ProjectItem.propTypes = {
    webRef: PropTypes.string,
    photoSrc: PropTypes.string,
    description: PropTypes.string,
};

export default ProjectItem;