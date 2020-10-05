import React from 'react'

class Header extends React.Component {
    constructor(){
        super();

        this.state ={
        }
    }

    render(){
        return (
            <div id="myNavBar">
                <nav id="myNavBarCore" className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#">Hwee Meng</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#landingx">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutx">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projectsx">Projects</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
            );
    }
}

export default Header;