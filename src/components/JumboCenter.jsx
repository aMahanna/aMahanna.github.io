import React from "react";

import "../styles/JumboCenter.scss";
import { IconBar } from "./IconBar";

export default class JumboCenter extends React.Component {
    render() {
        return (
            <div id="JumboCenter" className="text-center container">
                <h1>Anthony Mahanna</h1>
                <IconBar darkMode={this.props.darkMode} />
            </div>
        );
    }
}