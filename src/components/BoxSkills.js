import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconSkills from './IconSkills';
import ItemSkills from './ItemSkills';

class BoxSkills extends Component {
    render() {
        const { title, icon, id } = this.props.boxData;
        const [skill1, skill2, skill3, skill4, skill5] = this.props.boxData.skills;
        return (
            <div id={id}>
                <li className="itemListGeneralSkills">
                    <IconSkills icon={icon} />
                    <h3 className="titleGeneralSkill fontTitleSkill">{title}
                    </h3>
                    <ul className="skillsList fontListSkills">
                        <ItemSkills skill={skill1} />
                        <ItemSkills skill={skill2} />
                        <ItemSkills skill={skill3} />
                        <ItemSkills skill={skill4} />
                        <ItemSkills skill={skill5} />
                    </ul>
                </li>
            </div>
        );
    };
};

BoxSkills.propTypes = {
    boxData: PropTypes.object,
};

export default BoxSkills;