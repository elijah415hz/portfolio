import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="navbar-brand">
                <span>Elijah Blaisdell - </span>
                <a href="https://github.com/elijah415hz/" target="_blank" rel="noreferrer" >
                    <span className="git-link" style={{ position: "relative", bottom: "3px" }}>
                        <i className="fa fa-github" style={{ position: "relative", top: "3px" }}></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/elijahblaisdell/" target="_blank" rel="noreferrer">
                    <span className="git-link" style={{ position: "relative", bottom: "3px" }}>
                        <i className="fa fa-linkedin" style={{ position: "relative", top: "3px" }}></i>
                    </span>
                </a>
                <a href="mailto:elijahblaisdell@gmail.com" target="_blank" rel="noreferrer">
                    <span className="git-link" style={{ position: "relative", bottom: "3px" }}>
                        <i className="fa fa-envelope" style={{ position: "relative", top: "3px" }}></i>
                    </span>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/resume"
                        className={location.pathname === "/resume"
                            ? "nav-link active"
                            : "nav-link"}>
                        Resume
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
