import React from 'react';
import Logo from "../img/CGEC.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" width="120" />
                </div>
                <div className="links">
                    <Link className='link' to="/courses">Cursos</Link>
                    <Link className='link' to="/">Blog</Link>
                    <span>Nanni</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar