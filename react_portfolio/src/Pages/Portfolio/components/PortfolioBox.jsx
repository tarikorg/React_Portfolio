import React from 'react'
import './PortfolioBox.scss'
import { Container } from 'react-bootstrap'

//project pictures
import ecommerce from '../../../assets/portfolio/ecommerce-backend.png'
import teamBuilder from '../../../assets/portfolio/LeagueTeamBuilder.png'
import pwaEditor from '../../../assets/portfolio/pwaEditor.png'
import techblog from '../../../assets/portfolio/techblog.png'
import employeeTracker from '../../../assets/portfolio/employee-tracker.png'
import readinnook from '../../../assets/portfolio/readinnook.png'


//ALL OF THE tech logos 
import html from '../../../assets/logos/html.png'
import css from '../../../assets/logos/css.png'
import git from '../../../assets/logos/git.png'
import js from '../../../assets/logos/js.png'
import node from '../../../assets/logos/nodejs.png'
import react from '../../../assets/logos/react.png'
import postgres from '../../../assets/logos/postgres.png'
import mongodb from '../../../assets/logos/mongodb.png'
import sass from '../../../assets/logos/sass.png'


function PortfolioBox() {
    return (
        <>
            <div className='projects-container'>
                <div className="project-box">
                    <img src={readinnook} alt="Reading Nook" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>Reading Nook</p>
                    <div className='project-description text-light'>This application is your cozy corner on the internet, designed to provide users with a platform to explore, and favorite books.</div>
                    <div className='tech-logos'>
                        {/* img className tech-logo*/}
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>
                    <div className="buttons-container">
                        <a href="https://github.com/tarikorg/Reading_Nook" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>
                        <a href='https://guarded-river-34918-8aebb7f6bceb.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Site</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={teamBuilder} alt="League Team Builder" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>League Team Builder</p>
                    <div className='project-description text-light'>This application is designed to help users build a team for the popular game League of Legends.</div>
                    <div className='tech-logos'>
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>
                    <div className="buttons-container">
                        <a href="https://github.com/ThStranick15/league_team_builder" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>
                        <a href='https://thstranick15.github.io/league_team_builder/' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Site</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={techblog} alt="Tech Blog" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>Tech Blog</p>
                    <div className='project-description text-light'>This application is a blog site for tech enthusiasts to share their thoughts and ideas.</div>
                    <div className='tech-logos'>
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>
                    <div className="buttons-container">
                        <a href="https://github.com/tarikorg/mvc_tech_blog" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>
                        <a href='https://boiling-caverns-39590-648518cd9cec.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Site</a>
                    </div>
                </div>


                <div className="project-box">
                    <img src={employeeTracker} alt="Employee Tracker" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>Employee Tracker</p>
                    <div className='project-description text-light'>This application is designed to help users manage their employees.</div>
                    <div className='tech-logos'>
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>
                    <div className="buttons-container">
                        <a href="https://github.com/tarikorg/SQL_employee_tracker" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={pwaEditor} alt="PWA Editor" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>PWA Editor</p>
                    <div className='project-description text-light'>This application is a simple PWA text editor.</div>
                    <div className='tech-logos'>
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>
                    <div className="buttons-container">
                        <a href="https://github.com/tarikorg/pwa_text_editor" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={ecommerce} alt="Ecommerce Backend" className='project-image' />
                    <p className='project-title text-warning' style={{ fontWeight: 'bold' }}>Ecommerce Backend</p>
                    <div className='project-description text-light'>This application is a backend for an e-commerce site.</div>
                    <div className='tech-logos'>
                        <img src={html} alt='html' className='tech-logo' />
                        <img src={css} alt='css' className='tech-logo' />
                        <img src={js} alt='js' className='tech-logo' />
                        <img src={node} alt='node' className='tech-logo' />
                        <img src={git} alt='git' className='tech-logo' />
                    </div>

                    <div className="buttons-container">
                        <a href="https://github.com/tarikorg/ecommerce_back_end" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Github Repo</a>

                    </div>
                </div>


            </div>
        </>
    )
}

export default PortfolioBox