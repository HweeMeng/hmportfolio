import React from 'react'


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
                    <p>Hi, My Name is</p>
                    <p className="bigCaption1">Lek Hwee Meng</p>
                    <p className="bigCaption2">I build applications for the web.</p>
                    <p className="slightlyBigger">I am a Full-stack Web Developer based in Singapore. <br/> I specialize in building web applications with Rails and Django on React.</p>
                    <p className="slightlyBigger-mobile">I am a Full-stack Web Developer based in Singapore. I specialize in building web applications with Rails and Django on React.</p>
                    <a className="ctaButton" href="mailto: lek.hweemeng@live.com">Contact Me</a>
                </div>
            </div>
            );
    }
}

export default Landing;