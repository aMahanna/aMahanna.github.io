import React from 'react';

import Linkedin from '../img/icon-light/icons8-linkedin-50.png'
import Github from '../img/icon-light/icons8-octocat-50.png'
import Stackshare from '../img/icon-light/icons8-stackshare-50.png'

import LinkedinDark from '../img/icon-dark/icons8-linkedin-50.png'
import GithubDark from '../img/icon-dark/icons8-octocat-50.png'
import StackshareDark from '../img/icon-dark/icons8-stackshare-50.png'


import '../styles/iconbar.scss'

export function IconBar(props) {
    if (!props.darkMode) {
        return (
            <div className='social-bar'>
                <a href="https://www.linkedin.com/in/amahanna/"><img src={Linkedin} /></a>
                <a href="https://github.com/amahanna"><img src={Github} /></a>
                <a href="https://stackshare.io/amahanna"><img src={Stackshare} /></a>
            </div>
        );
    } else {
        return (
            <div className='social-bar'>
                <a href="https://www.linkedin.com/in/amahanna/"><img src={LinkedinDark} /></a>
                <a href="https://github.com/amahanna"><img src={GithubDark} /></a>
                <a href="https://stackshare.io/amahanna"><img src={StackshareDark} /></a>
            </div>
        );
    }
}