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

// *** Handling the form *** 

    // const [values, setValues] = useState({
    //     name: '',
    //     year: '',
    //     outcome: '',
    // });

    const handleChange = (event) => {
    setMissionDetails(previous_values => {
        return ({...previous_values, 
            [event.target.name]: event.target.value
        });
    });
}

// *** END of Handling the form *** 

    return (
        <>
            <h1>Edit mission{missionDetails.id}</h1>
    {           
        missionDetails &&
            <div className="mission_form">
                <form action='' onSubmit={handleChange}>

                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={missionDetails.name} onChange={handleChange}  />

                    <label htmlFor="year">Year:</label>
                    <input type="text" name="year" id="year" value={missionDetails.year} onChange={handleChange} />

                    <label htmlFor="outcome">Outcome:</label>
                    <select name="outcome" id="outcome" value={missionDetails.outcome} onChange={handleChange}  >
                        <option value={true} >Succesfull</option>
                        <option value={false} >Failed</option>
                        <option value={null} >Ongoing</option>
                    </select>

                    <button type="submit">Update</button>
                </form>
            </div>
    }
        <button onClick={ () => setMissionId(null) }>&times;</button>
        </>
    );
}
