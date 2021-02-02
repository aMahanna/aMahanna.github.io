import React from 'react';
import '../styles/project.scss'

export default function Contribution(props) {
    var contributionStyle = {
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className={props.index < 4?"project card":"project card not-mobile"} style={contributionStyle}> 
            <div onClick={() => window.location.href=props.link} className="hover-span">{props.title}
            </div>
        </div>
    )
}

