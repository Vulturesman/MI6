import React, { useEffect, useState } from "react";

export default function PersonDetail({ person_id }) {
    const [person, setPerson] = useState(null);

    const loadData = async () => {
        try {
            const response = await fetch(
                `http://www.mi6.test/api/people/${person_id}`
            );
            const data = await response.json();
            console.log(data);
            setPerson(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h1>test</h1>
        </>
    );
}
