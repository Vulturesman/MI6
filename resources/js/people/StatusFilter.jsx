import React, { useEffect, useState } from "react";

export default function StatusFilter({ selectedStatus, setSelectedStatus }) {
    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {
        try {
            const response = await fetch("http://www.mi6.test/api/statuses");
            const data = await response.json();
            // console.log(data);
            setStatuses(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <>
            <div className="status-filter">This is the status filter</div>
            {statuses.map((status) => (
                <button
                    onClick={() => setSelectedStatus(status.id)}
                    key={status.id}
                    className="status"
                >
                    {status.name}
                </button>
            ))}
        </>
    );
}
