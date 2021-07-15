import React from "react";
import Contribution from '../components/Contribution';

import '../styles/Projects.scss'

import contribution_data from '../data/contributions.json';

export default class Contributions extends React.Component {
    render() {
        return (
            <div className="projects">
                {
                    contribution_data.map((contribution,i)=> {
                        return (<Contribution key={i} index={i} {...contribution} darkMode={this.props.darkMode} />)
                    })
                }
            </div>
        );
    }
}