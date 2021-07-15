import React from 'react';

import '../styles/iconbar.scss'

export function IconBar(props) {
    const colorPath = props.darkMode ? 'dark' : 'light';
    return (
        <div className='social-bar'>
            <a href="https://www.linkedin.com/in/amahanna/"><img src={`./img/icons/linkedin.svg`} /></a>
            <a href="https://github.com/amahanna"><img src={`./img/icons/github.svg`} /></a>
            <a href="mailto:amaha100@uottawa.ca"><img src={`./img/icons/mail.svg`} /></a>
            <a href="https://stackshare.io/amahanna"><img src={`./img/icons/stackshare.svg`} /></a>
        </div>
    );
}