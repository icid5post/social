import React from 'react';
import './App.scss';
import logo from './images/logo/logo.png';

function App() {

    console.log(logo)

    return (
        <div className="App">
            <header className="app-header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </header>
            <nav className="app-nav">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#">Profile</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#">Message</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
