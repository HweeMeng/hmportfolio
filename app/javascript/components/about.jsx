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
                    {/* <img className="faceThumbnail" src={MyImage} /> */}
                    About Me
                </h3>
                <div className="aboutPara">
                    <p>Hi I'm Hwee Meng, I'm a Software Engineer that is based in Singapore.</p>
                    <p>As more and more time humans spend on the internet, the more important and integral the internet is to each of our lives.</p>
                    <p>This is the reason why, I am intersted and excited about building web applications, to simplify and make our lives more efficient.</p>
                    <br />
                    <p>I've graduated from the Software Engineering Immersive from General Assembly in Singapore.</p>
                    <p>Here are some techonologies I am recently working with:</p>
                    <div>
                        <li>Python on Django</li>
                        <li>Django Rest Framework</li>
                        <li>Ruby on Rails</li>
                    </div>
                    <div>
                        <li>React</li>
                        <li>SQlite3</li>
                        <li>PostgresSQL</li>
                    </div>
                </div>
            </div>
            );
    }
}

export default About;