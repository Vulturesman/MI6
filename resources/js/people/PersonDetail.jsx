import React, { useEffect, useState } from "react";

export default function PersonDetail({ person_id }) {
    const [person, setPerson] = useState(null);

    const loadData = async () => {
        try {
            const response = await fetch(
                `http://www.mi6.test/api/people/${person_id}`
            );
            const data = await response.json();
            setPerson(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (person_id) {
            loadData();
        }
    }, [person_id]);

    return (
        <>
            <h2>Detail of Interest</h2>
            {person ? (
                <div className="suspect">
                    <h2>This is {person.name}</h2>
                    <p>This suspect has {person.hair_color} hair.</p>
                </div>
            ) : (
                <p>Decrypting...</p>
            )}
        </>
    );
}
