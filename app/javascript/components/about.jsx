import React from 'react'
import MyImage from 'images/thumbnail.png'

class About extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div id="aboutx" className="about">
                <h3>
                    <img className="faceThumbnail" src={MyImage} />
                </h3>
            </div>
            );
    }
}

export default About;