import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdGpsFixed } from 'react-icons/md'
import { Button } from './Button'
import "./Navbar.css"
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener("resize", showButton)

    const handleClick = () => setClick(!click);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdGpsFixed className="navbar-icon" />
                        ANEESH
                    </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/inspire01" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/footer" className="btn-link" onClick={closeMobileMenu}>
                                        <Button bottonStyle="btn--outline">SIGN UP</Button>
                                    </Link>
                                ) : (
                                        <Link to="/footer" className="btn-link">
                                            <Button bottonStyle="btn--outline" buttonSize="btn--mobile">SIGN-UP</Button>
                                        </Link>
                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
