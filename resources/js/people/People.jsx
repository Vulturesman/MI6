import React, { useState, useEffect } from "react";

export default function People() {
    const [people, setPeople] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch("http://www.mi6.test/api/people");
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
        <>
            <h2 className="title">People</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate animi amet nostrum perferendis, odit reiciendis
                reprehenderit impedit! Eum ad sint perferendis. Et facilis
                aliquam facere consequuntur quam sunt sed praesentium.
            </p>
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
        </>
    );
}
