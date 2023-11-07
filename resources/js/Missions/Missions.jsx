import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Missions() {
    const [missions, setMissions] = useState([]);

    const loadMissions = async () => {
        const response = await axios.get("/api/missions");
        const data = response.data;
        console.log(data);
        setMissions(data);
    };

    useEffect(() => {
        loadMissions();
    }, []);

    return (
        <main>
            <div className="page-container">
                <div className="left-panel-container">
                    <img className="logo" src="/mi6-seal.png" alt="logo MI6" />
                    <div className="nav">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/people"}>People of interest</Link>
                        <Link to={"/missions"}>Missions</Link>
                    </div>
                    <span className="sidenav__arrow"></span>
                </div>

                <div className="main-container">
                    <h1>Your Missions</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Year</th>
                                <th>People</th>
                            </tr>
                        </thead>
                        <tbody>
                            {missions.map((mission) => (
                                <tr key={mission.id}>
                                    <td>{mission.name}</td>
                                    <td>{mission.year}</td>
                                    <td>
                                        <ul>
                                            {mission.people.map((person) => (
                                                <li key={person.id}>
                                                    {" "}
                                                    {person.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
