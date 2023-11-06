import React, { useState, useEffect } from "react";
import PersonDetail from "./PersonDetail";
import { Link } from "react-router-dom";

export default function People() {
    const [people, setPeople] = useState([]);
    const [person_id, setPerson_id] = useState(null);

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
                    {person_id == null ? (
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
                                        <td
                                            onClick={() => {
                                                setPerson_id(person.id);
                                                console.log(person_id);
                                            }}
                                        >
                                            {person.name}
                                        </td>
                                        <td>{person.nationality}</td>
                                        <td>{person.occupation}</td>
                                        <td>{person.status_text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <h1>Hello</h1>
                            <PersonDetail person_id={person_id} />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
