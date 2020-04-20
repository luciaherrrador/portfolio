import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconSkills extends Component {
    render() {
        const { icon } = this.props;
        return (
            <div className="iconContainer">
                <i className={`${icon} icon`}></i>
            </div>
        );
    };
};

IconSkills.propTypes = {
    icon: PropTypes.string,
  };

export default IconSkills;