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
                <figure>
                    <img src="http://lorempixel.com/192/96/sports/1" alt="Portfolio Item" />
                    <figcaption>
                        <h3>Title</h3>
                        <p>Description.</p>
                    </figcaption>
                </figure>
            </div>
            );
    }
}

export default Projects;