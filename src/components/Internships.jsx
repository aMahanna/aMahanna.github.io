import React from "react";
import Company from './Company';

import '../styles/Internships.scss'

import internships from '../data/internships.json';

export default class Internships extends React.Component {
    render() {
        return (
            <div className="ui items container">
                {
                    internships.map(x => {
                        return (<Company key={x.company} {...x} darkMode={this.props.darkMode} />)
                    })
                }
            </div>
        );
    }
}