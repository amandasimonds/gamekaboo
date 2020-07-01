import React from "react";
import "../styles/main.scss"
import {NavLink} from "react-router-dom"

const navigation = (props) => (
    <div className="nav">
        <ul className="nav__links">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/">Shop</NavLink>
            <NavLink className="navlink" to="/">Community</NavLink>
            <NavLink className="navlink" to="/">Log In</NavLink>
            <NavLink className="navlink" to="/">Log Out</NavLink>
        </ul>
    </div>
)

export default navigation