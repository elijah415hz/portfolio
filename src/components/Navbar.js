import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="navbar-brand">
            <span>Elijah Blaisdell - </span>
            <span className="git-link">
                <a href="https://github.com/elijah415hz/" target="_blank" rel="noreferrer">
                     <i className="fa fa-github"></i>
                </a>
            </span>
            <span className="git-link">
                <a href="https://www.linkedin.com/in/elijahblaisdell/" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a href="Developer_Resume.pdf" className="nav-link">Resume</a>
                <Link to="/contact"
                    className={location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"}>
                        Contact
                    </Link>
                <Link to="/my-portfolio"
                    className={location.pathname === "/my-portfolio"
                    ? "nav-link active"
                    : "nav-link"}>
                        Portfolio
                    </Link>
                <Link to="/" className={location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"}>About</Link>
            </div>
        </div>
    </nav>
    )
}
