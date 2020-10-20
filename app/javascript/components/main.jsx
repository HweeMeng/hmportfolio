import React from 'react';
import Header from '../components/header.jsx';
import About from '../components/about.jsx';
import Projects from '../components/projects.jsx';
import Landing from '../components/landing.jsx';
import Contact from '../components/contact.jsx';
Contact

class Main extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div className="container">
                <Header />
                <Landing />
                <About />
                <Projects />
                <Contact />
            </div>
            );
    }
}

export default Main;