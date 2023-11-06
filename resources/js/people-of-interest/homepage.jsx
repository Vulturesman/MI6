import React from "react"
// import '../../css/homepage.scss'
export default function Homepage(){

    return(
    <main>
        <div className="page-container">
          <div className="left-panel-container">
            <img className="logo" src="/mi6-seal.png" alt="logo MI6" />
            <div className="nav">
              <a href="#home">Home</a>
              <a href="#people-of-interest">People of interest</a>
            </div>
            <span className="sidenav__arrow"></span>
          </div>
    ​
          <div className="main-container">
            <h1>Welcome to MI6</h1>
          </div>
        </div>
    </main>

    )
}