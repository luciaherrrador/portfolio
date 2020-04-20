import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemSkills extends Component {
    render() {
        const { skill } = this.props;
        return (
            <li className="skill">
                <span className="checkbox">
                    <i className="fas fa-check"></i>
                </span>{skill}
            </li>
        );
    };
};

ItemSkills.propTypes = {
    skill: PropTypes.string,
};

export default ItemSkills;