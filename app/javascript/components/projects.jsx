import React from 'react'
import ProjectOne from 'images/project1.png'
import meetUpDrf from 'images/meetupdrf.png'
import Travinary from 'images/travinary.png'
import goldFishTrainerds from 'images/goldfishtrainerds.png'

class Projects extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div id="projectsx" className="projects">
                <div className="projects-holder">
                    <h3 className="centering">Project Portfolios</h3>
                    <a className="projects-indv" href="https://hweemeng.github.io/project-1/">
                        <figure>
                            <img src={ProjectOne} alt="Portfolio Item" />
                            <figcaption>
                                <p className="projectHeader">Hwee Meng's Dungeon Game</p>
                                <p>This is a dungeon RPG game created on Javascript and DOM Manipulation. It is hosted in Githib Pages</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="https://goldfish-trainerds.herokuapp.com/">
                        <figure>
                            <img src={goldFishTrainerds} alt="Portfolio Item" />
                            <figcaption>
                                <p className="projectHeader">Goldfish Trainerds</p>
                                <p>This is a Group Project. It is built on Ruby on Rails, with Postgres SQL as Database and hosted on Heroku. This is a Social media application for goldifsh lovers</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="https://travinary.herokuapp.com/">
                        <figure>
                            <img src={Travinary} alt="Portfolio Item" />
                            <figcaption>
                                <p className="projectHeader">Travinary</p>
                                <p>This is a Itinery Planning app for users to enter the country and location which they would like to visit. It is built on Ruby on Rails with a React front-end. Postgres SQL as Database.</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="http://meetup-env.eba-ynfrzqwv.ap-southeast-1.elasticbeanstalk.com/api/meetups/">
                        <figure>
                            <img src={meetUpDrf} alt="Portfolio Item" />
                            <figcaption>
                                <p>Meetup DRF</p>
                                <p>This is a backend API project. It is built on Python with Django on SQLite3 Database. It is meant to serve a React Front end</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
            );
    }
}

export default Projects;