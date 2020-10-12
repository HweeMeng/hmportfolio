import React from 'react'
import MyImage from 'images/thumbnail.png'

class Landing extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div id ="landingx"className="landing">
                <div className="centering">
                    <img className="faceThumbnail" src={MyImage} />
                    <h2>Hi, I'm Hwee Meng</h2>
                    <h3>I'm a Singapore based Software Engineer</h3>
                </div>
            </div>
            );
    }
}

export default Landing;