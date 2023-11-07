import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MissionEditForm({ missionId, setMissionId }) {
    const [missionDetails, setMissionDetails] = useState("");

    const loadMission = async () => {
        try {
            const response = await axios.get(`api/missions/${missionId}`);
            const data = response.data;
            console.log(data);
            setMissionDetails(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadMission();
    }, [missionId]);
    return (
        <>
            <h1>Edit mission{missionDetails.name}</h1>
        </>
    );
}
