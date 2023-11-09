import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="left-panel-container">
                <img className="logo" src="/mi6-seal.png" alt="logo MI6" />
                <div className="nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/people"}>People of interest</Link>
                    <Link to={"/missions"}>Missions</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
                <span className="sidenav__arrow"></span>
            </div>
        </>
    );
}
