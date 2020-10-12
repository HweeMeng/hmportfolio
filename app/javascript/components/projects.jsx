import React from 'react'

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
                    <a className="projects-indv" href="http://www.google.com">
                        <figure>
                            <img src="http://lorempixel.com/192/96/sports/1" alt="Portfolio Item" />
                            <figcaption>
                                <h3>Title</h3>
                                <p>Description.</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="http://www.google.com">
                        <figure>
                            <img src="http://lorempixel.com/192/96/sports/1" alt="Portfolio Item" />
                            <figcaption>
                                <h3>Title</h3>
                                <p>Description.</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="http://www.google.com">
                        <figure>
                            <img src="http://lorempixel.com/192/96/sports/1" alt="Portfolio Item" />
                            <figcaption>
                                <h3>Title</h3>
                                <p>Description.</p>
                            </figcaption>
                        </figure>
                    </a>
                    <a className="projects-indv"href="http://www.google.com">
                        <figure>
                            <img src="http://lorempixel.com/192/96/sports/1" alt="Portfolio Item" />
                            <figcaption>
                                <h3>Title</h3>
                                <p>Description.</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
            );
    }
}

export default Projects;