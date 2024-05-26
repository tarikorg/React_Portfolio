import React from 'react'
// import { Image } from 'react-bootstrap'
import html from '../../../assets/logos/html.png'
import css from '../../../assets/logos/css.png'
import git from '../../../assets/logos/git.png'
import js from '../../../assets/logos/js.png'
import node from '../../../assets/logos/nodejs.png'
import react from '../../../assets/logos/react.png'
import postgres from '../../../assets/logos/postgres.png'
import mongodb from '../../../assets/logos/mongodb.png'
import sass from '../../../assets/logos/sass.png'

const TechStack = () => {
    return (
        <div className='tech-stack-container'>
            <div className='tech-box' >
                <img src={html} alt='html' />
            </div>

            <div className='tech-box'>
                <img src={css} alt='css' />
            </div>

            <div className='tech-box'>
                <img src={js} alt='js' />
            </div>

            <div className='tech-box'>
                <img src={react} alt='react' />
            </div>

            <div className='tech-box'>
                <img src={node} alt='node' />
            </div>

            <div className='tech-box'>
                <img src={git} alt='git' />
            </div>

            <div className='tech-box'>
                <img src={postgres} alt='postgres' />
            </div>

            <div className='tech-box'>
                <img src={mongodb} alt='mongodb' />
            </div>

            <div className='tech-box'>
                <img src={sass} alt='sass' />
            </div>


        </div>
    )
}

export default TechStack