import React from "react";
import School from '../components/School';

import '../styles/Education.scss'

import education from '../data/education.json';

export default class Education extends React.Component {
    render() {
        return (
            <div className="ui items container">
                {
                    education.map(x => {
                        return (<School key={x.school} {...x} darkMode={this.props.darkMode} />)
                    })
                }
            </div>
        );
    }
}