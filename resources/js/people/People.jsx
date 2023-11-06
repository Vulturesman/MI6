import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function People() {
    const [people, setPeople] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch(`http://www.mi6.test/api/people`);
            const data = await response.json();
            console.log(data);
            setPeople(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <main>
            <div className="page-container">
                <div className="left-panel-container">
                    <img className="logo" src="/mi6-seal.png" alt="logo MI6" />
                    <div className="nav">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/people"}>People of interest</Link>
                    </div>
                </div>

                <div className="main-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Nationality</th>
                                <th>Occupation</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.name}</td>
                                    <td>{person.nationality}</td>
                                    <td>{person.occupation}</td>
                                    <td>{person.status_text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
