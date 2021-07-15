import React from "react";

import "../styles/nav.scss";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-white navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <img src={`./img/icons/${this.props.darkMode ? 'dark' : 'light'}/menu.png`} style={{ height: '20px' }} />
                            </button>
                            <a className="navbar-brand font-grey" href="#">~</a>
                            <a className="navbar-brand darkmode" onClick={this.props.toggleDarkMode}>
                                <img alt="Brand" src={`./img/icons/${this.props.darkMode ? 'dark' : 'light'}/mode.png`} style={{height: "100%" }} />
                            </a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="#Education" className="font-grey">Education</a></li>
                                <li><a href="#Internships" className="font-grey">Internships</a></li>
                                <li><a href="#Projects" className="font-grey">Projects</a></li>
                                <li><a href="#Contributions" className="font-grey">Contributions</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}