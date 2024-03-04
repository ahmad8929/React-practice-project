import React from 'react'

const Navbar = () => {
    return (
        <nav className='container'>
            <img className='logo' src="download.png" alt="LOGO" />

            <ul>
                <li href="# ">Home</li>
                <li href="# ">Location</li>
                <li href="# ">About</li>
                <li href="# ">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    )
}

export default Navbar