import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MissionEditForm({ missionId, setMissionId }) {
    
    const [missionDetails, setMissionDetails] = useState("");
    const [message, setMessage] = useState(null)

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

    const handleChange = (event) => {
    setMissionDetails(previous_values => {
        return ({...previous_values, 
            [event.target.name]: event.target.value
        });
    });
    }

    const sendData = async (e) => {
        e.preventDefault();

        // with axios:
        try {
            const response = await axios.post(`missions/${missionId}/store`, missionDetails);
            setMessage(response.data['message'])
        } catch (error) {
            console.log(error)
        }
    }

        // with fetch - probably doesnt work here - editional adjustment needed
        // try {
        //     const response = await fetch(`missions/${missionId}/store`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //             'Accept': 'application/json',
        //             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //         },
        //         body: JSON.stringify(mission)
        //     });
        //     const data = await response.json();
        //     setMessage(data['message'])
        // } catch (error) {
        //     console.log(error)
        // }
        // }

// *** END of Handling the form *** 

    return (
        <>
            <h1>Edit mission number: {missionDetails.id}</h1>
            {           
                missionDetails &&
                    <div className="mission_form">
                        {
                            message ? 
                                <span>{message}</span>
                            : ''
                        }
                        <form action='' onSubmit={sendData}>

                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" value={missionDetails.name} onChange={handleChange}  />

                            <label htmlFor="year">Year:</label>
                            <input type="text" name="year" id="year" value={missionDetails.year} onChange={handleChange} />

                            <label htmlFor="outcome">Outcome:</label>
                            <select name="outcome" id="outcome" value={missionDetails.outcome || ''} onChange={handleChange}  >
                                <option value={true} >Succesfull</option>
                                <option value={false} >Failed</option>
                                <option value={'ongoing'} >Ongoing</option>
                            </select>

                            <button type="submit">Update</button>
                        </form>
                    </div>
            }
            <button onClick={ () => setMissionId(null) }>&times;</button>
        </>
    );
}
