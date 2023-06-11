import React from 'react'
import { Link } from 'react-router-dom';
import AuthOptions from './AuthOptions';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
                <Link className="logo" to="/">
                    Paperback
                </Link>
                <AuthOptions />
        </div>
    )
}

export default Navbar
