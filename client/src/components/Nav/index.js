import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


export function Nav(props) {
    return <div className="nav">{props.children}</div>
}

export function LogName(props){
    return <div id="name">{props.children}</div>
}

export function Login() {
    return <Link to="/login" id="login">LOG IN</Link>
}

export function Register() {
    return <Link to="/register" id="register">SIGN UP</Link>
}

export function LogOut(props) {
    return <button style={{borderRadius: "40px", border: "solid red 1px", background: "black", color: "red", marginLeft: "5px" }} id="logout" {...props}>X</button>
}