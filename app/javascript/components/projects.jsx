import React from 'react'
import ProjectOne from 'images/project1.png'
import meetUpDrf from 'images/meetupdrf.png'
import Travinary from 'images/travinary.png'
import ElasticLogo from 'images/elastic2.png'
import goldFishTrainerds from 'images/goldfishtrainerds.png'
import DjangoLogo from 'images/django.png'
import SQLite3Logo from 'images/sqlite3.png'
import Rails from 'images/rails.png'
import Postgres from 'images/postgres.png'
import ReactIcon from 'images/react.png'
import GithubPages from 'images/githubpages.png'
import HerokuLogo from 'images/heroku.png'

class Projects extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div id="projectsx" className="projects">
                <h3 className="portFol">Project Portfolios</h3>
                <div className="projects-holder">
                    <figure>
                        <img src={ProjectOne} alt="Portfolio Item" />
                        <figcaption>
                        <p className="projectHeader">Mini Dungeon Game</p>
                        <a href='https://hweemeng.github.io/project-1/' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>    
                        </svg>
                        </a>
                        <a href='https://github.com/HweeMeng/project-1' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                        </a>
                        <br/>
                        <span>
                            <p>This is a dungeon RPG game created on Javascript and DOM Manipulation. It is hosted in Githib Pages</p>
                            <img className="logos" src={GithubPages}/>
                        </span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={goldFishTrainerds} alt="Portfolio Item" />
                        <figcaption>
                        <p className="projectHeader">Goldfish Trainerds</p>
                        <a href='https://goldfish-trainerds.herokuapp.com/' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>    
                        </svg>
                        </a>
                        <a href='https://github.com/kwansing14/Goldfish-Training-Project' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                        </a>
                        <br/>
                        <span>
                            <p>This is a Group Project. It is built on Ruby on Rails, with Postgres SQL as Database and hosted on Heroku. This is a Social media application for goldifsh lovers</p>
                            <img className="logos" src={Rails}/>&nbsp;
                            <img className="logos" src={Postgres}/>&nbsp;
                            <img className="logos" src={HerokuLogo}/>
                        </span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={Travinary} alt="Portfolio Item" />
                        <figcaption>
                        <p className="projectHeader">Travinary</p>
                        <a href='https://travinary.herokuapp.com/' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>    
                        </svg>
                        </a>
                        <a href='https://github.com/HweeMeng/project-4' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                        </a>
                        <br/>
                        <span>
                            <p>This is a Itinery Planning app for users to enter the country and location which they would like to visit.</p>
                            <img className="logos" src={Rails}/>&nbsp;
                            <img className="logos" src={Postgres}/>&nbsp;
                            <img className="logos" src={ReactIcon}/>&nbsp;
                            <img className="logos" src={HerokuLogo}/>
                        </span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={meetUpDrf} alt="Portfolio Item" />
                        <figcaption>
                        <p className="projectHeader">Meetup DRF</p>
                        <a href='http://meetup-env.eba-ynfrzqwv.ap-southeast-1.elasticbeanstalk.com/api/meetups/' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>    
                        </svg>
                        </a>
                        <a href='https://github.com/HweeMeng/meetups' className='goToAndGit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                        </a>
                        <br/>
                        <span>
                            <p>This is a backend API project. It is built on Python with Django on SQLite3 Database. It is meant to serve a React Front end</p>
                            <img className="logos" src={ElasticLogo}/>&nbsp;
                            <img className="logos" src={DjangoLogo}/>&nbsp;
                            <img className="logos" src={SQLite3Logo}/>
                        </span> 
                        </figcaption>
                    </figure>
                </div>
                <div className="mobile-projects">
                    <div className="mobile-projects-indv">
                        <img src={ProjectOne} alt="Portfolio Item" className="mobile-portfolio-image"/>
                        <div className="mobile-projects-wordblock">
                            <p className="mobile-wording-title">Mini Dungeon Game</p>
                            <a href='https://hweemeng.github.io/project-1/' className='goToAndGit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in">
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                <polyline points="10 17 15 12 10 7"></polyline>
                                <line x1="15" y1="12" x2="3" y2="12"></line>    
                            </svg>
                            </a>
                            <a href='https://github.com/HweeMeng/project-1' className='goToAndGit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                            </a>
                            <p className="mobile-wording">This is a dungeon RPG game created on Javascript and DOM Manipulation. It is hosted in Githib Pages</p>
                            <img className="logos" src={GithubPages}/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Projects;