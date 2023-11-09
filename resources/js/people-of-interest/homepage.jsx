import React from "react";
import { Link } from "react-router-dom";
import PersonDetail from "../people/PersonDetail";
// import '../../css/homepage.scss'

export default function Homepage() {
    return (
        <main>
            <div className="page-container">
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

                <div className="main-container">
                    <h1>Welcome to MI6</h1>
                </div>
            </div>
            <PersonDetail />
        </main>
    );
}
