import React from "react";

import MenuIconLight from "../img/icon-light/icons8-menu-vertical-50.png"
import MenuIconDark from "../img/icon-dark/icons8-menu-vertical-50.png"

import ModeDark from "../img/icon-dark/light-mode.png";
import ModeLight from "../img/icon-light/light-mode.png";

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
                                {
                                    !this.props.darkMode &&
                                    <img src={MenuIconLight} style={{ height: '20px' }} />
                                }
                                {
                                    this.props.darkMode &&
                                    <img src={MenuIconDark} style={{ height: '20px' }} />
                                }
                            </button>
                            <ul className="nav navbar-nav">
                                {
                                    this.props.darkMode &&
                                    <li>
                                        <a className="navbar-brand darkmode" onClick={this.props.toggleDarkMode}>
                                            <img alt="Brand" src={ModeDark} style={{height: "100%" }} />
                                        </a>
                                    </li>
                                }
                                {
                                    !this.props.darkMode &&
                                    <li>
                                        <a className="navbar-brand darkmode" onClick={this.props.toggleDarkMode}>
                                            <img alt="Brand" src={ModeLight} style={{height: "100%"}} />
                                        </a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="#Education" className="font-grey">Education</a></li>
                                <li><a href="#Internships" className="font-grey">Internships</a></li>
                                <li><a href="#Projects" className="font-grey">Projects</a></li>
                            </ul>
                        </div>
                        <div id="navbar" className="navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a className="navbar-brand font-greyx" href="#">~</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}