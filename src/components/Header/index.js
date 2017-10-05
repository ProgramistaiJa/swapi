import React from 'react'
import './header.css'
import logo from '../../img/Star_Wars_Logo.svg';

class Header extends React.Component {
    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Star Wars API</h1>
            </header>
        )
    }
}
export default Header