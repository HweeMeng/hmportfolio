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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="bouts">
                    <h3 className="">
                        About Me
                    </h3>
                </div>
                <br />
                <br />
                <div className="bothPicAndWords">
                    <img className="faceThumbnail" src={MyImage} id="profilePic"/>
                    <div className="aboutWording">
                    <p>
                        Hi I'm Hwee Meng, I'm a Software Engineer that is based in Singapore. 
                    </p>
                    <p>
                        I enjoy building websites and making them easy to use. I aim to create and build sites to that integrates into and simplify lives.
                    </p>
                    <p>I've graduated from the Software Engineering Immersive from General Assembly in Singapore. I have built projects with Ruby on Rails, with React and PostgresSQL</p>
                    <p>Here are some techonologies I am recently working with:</p>
                    <div className="technologies">
                        <div className="technologies">
                            <ul>
                                <li>Python on Django</li>
                                <li>Django Rest Framework</li>
                                <li>Ruby on Rails</li>
                            </ul>
                        </div>
                        <div className="technologies">
                            <ul>
                                <li>React</li>
                                <li>SQlite3</li>
                                <li>PostgresSQL</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <img className="faceThumbnail" src={MyImage} id="profilePic"/>
                <div className="technologies">

                </div> */}
            </div>
            );
    }
}

export default About;