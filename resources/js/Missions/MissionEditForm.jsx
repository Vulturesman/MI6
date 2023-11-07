import React, { useEffect, useState } from "react";
import axios from "axios";
// import { send } from "process";

export default function MissionEditForm({ missionId, setMissionId }) {
    const [missionDetails, setMissionDetails] = useState("");
    const [message, setMessage] = useState("");

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

    // *** Handling the form ***

    // const [values, setValues] = useState({
    //     name: '',
    //     year: '',
    //     outcome: '',
    // });

    const handleChange = (event) => {
        setMissionDetails((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    // **********SUUBMIT THE FORM***************

    const sendData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `api/missions/${missionId}/store`,
                missionDetails
            );
            setMessage(response.data["message"]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Edit mission{missionDetails.id}</h1>
            {missionDetails && (
                <div className="mission_form">
                    <form action="" onSubmit={sendData}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={missionDetails.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="year">Year:</label>
                        <input
                            type="text"
                            name="year"
                            id="year"
                            value={missionDetails.year}
                            onChange={handleChange}
                        />

                        <label htmlFor="outcome">Outcome:</label>
                        <select
                            name="outcome"
                            id="outcome"
                            value={missionDetails.outcome || ""}
                            onChange={handleChange}
                        >
                            <option value={true}>Succesfull</option>
                            <option value={false}>Failed</option>
                            <option value={null}>Ongoing</option>
                        </select>

                        <button type="submit">Update</button>
                    </form>
                </div>
            )}
            <button onClick={() => setMissionId(null)}>&times;</button>
        </>
    );
}
