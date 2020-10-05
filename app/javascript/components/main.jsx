import React from 'react';
import Header from '../components/header.jsx';
import About from '../components/about.jsx';
import Projects from '../components/projects.jsx';
import Landing from '../components/landing.jsx';

class Main extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div className="abc">
                <Header />
                <br/>
                <br/>
                <Landing />
                <About />
                <Projects />
            </div>
            );
    }
}

export default Main;