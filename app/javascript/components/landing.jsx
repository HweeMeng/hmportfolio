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
                    <h1>Lek Hwee Meng</h1>
                    <h1>I build web applications.</h1>
                    <p>I am a Full-stack Web Developer based in Singapore. I specialize in building web applications with Rails and Django on React.</p>
                </div>
            </div>
            );
    }
}

export default Landing;