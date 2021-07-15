import React from "react";

import JumboCenter from './components/JumboCenter'
import Nav from './components/Nav'
import Education from "./components/Education";
import Internships from "./components/Internships";
import Projects from './components/Projects'
import Contributions from './components/Contributions'

import "./styles/home.scss";
import "./styles/HomeSection.scss";
import "./styles/DarkMode.scss";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false
        }
    }
    
    toggleDarkMode = () => {
        this.setState({
            darkMode: !this.state.darkMode
        })
    }

    render() {
        return (
            <div className={this.state.darkMode?"dark-mode":"light-mode"}>
                <div id="HomeSection">
                    <Nav toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode} />
                    <JumboCenter darkMode={this.state.darkMode} />
                </div>
                <div className="page" id="Education">
                    <Education darkMode={this.state.darkMode} />
                </div>
                <div className="page" id="Internships">
                    <Internships darkMode={this.state.darkMode} />
                </div>
                <div className="page" id="Projects">
                    <Projects darkMode={this.state.darkMode} />
                </div>       
                <div className="page" id="Contributions">
                    <Contributions darkMode={this.state.darkMode} />
                </div>          
            </div>
        );
    }
}
