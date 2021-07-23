import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/air-garage-logo.png'


function Nav() {
    return (
        <nav>
            <Link to="/"> <img className="w-64 px-9 py-5 mx-auto sm:m-0" src={logo} alt="logo" /> </Link>
        </nav>
    )
}

export default Nav
