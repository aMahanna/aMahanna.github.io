import React from 'react';
import '../styles/project.scss'

export default function Company(props) {
    return (
        <div className="item" style={{paddingBottom:"30px"}}>
            <div className="image">
                {
                    props.darkMode &&
                    <img src={props.imageDark} />
                }
                {
                    !props.darkMode &&
                    <img src={props.image} />
                }
            </div>
            <div className="content">
                <a className="header" href={props.companyUrl}>{props.company}</a>
                <div className="meta">
                    <span>{props.role}</span>
                </div>
            </div>
        </div>
    )
}