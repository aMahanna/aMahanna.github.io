import React from 'react';
import '../styles/project.scss'

export default function School(props) {
    return (
        <div className="item" style={{paddingBottom:"25px"}}>
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
                <a className="header" href={props.schoolUrl}>{props.school}</a>
                <div className="meta">
                    <span>{props.program}</span>
                </div>
                <div className="meta">
                </div>
                <div className="description">
                    <p dangerouslySetInnerHTML={{__html: props.description}}></p>
                </div>
            </div>
        </div>
    )
}